describe("service is available", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://norma.nomoreparties.space/api/ingredients", {
      fixture: "ingredients.json",
    }).as("getIngredients");
    cy.intercept("GET", "https://norma.nomoreparties.space/api/auth/user", {
      fixture: "user.json",
    });
    cy.intercept("POST", "https://norma.nomoreparties.space/api/orders", {
      fixture: "order.json",
    });
    cy.intercept("POST", "https://norma.nomoreparties.space/api/auth/login", {
      fixture: "login.json",
    });
    cy.viewport(1280, 1024);
    cy.visit("http://localhost:3000");
  });

  it("should be navigate list ingredients", () => {
    cy.wait("@getIngredients");
    cy.get('[data-test-id="ingredients-menu"] .tab').eq(1).click();
    cy.get('[data-test-id="ingredients-menu"] .tab')
      .eq(1)
      .should("have.class", "tab_type_current");
    cy.get('[data-test-id="ingredients-menu"] .tab').eq(2).click();
    cy.get('[data-test-id="ingredients-menu"] .tab')
      .eq(2)
      .should("have.class", "tab_type_current");
    cy.get('[data-test-id="ingredients-menu"] .tab').eq(0).click();
    cy.get('[data-test-id="ingredients-menu"] .tab')
      .eq(0)
      .should("have.class", "tab_type_current");
  });

  it("should open and close modal ingredient", () => {
    cy.wait("@getIngredients");
    cy.get('[data-test-id="ingredients"] li:first').click();
    cy.get("#root-modals").contains("Детали ингредиента");
    cy.get("#root-modals button").click();
  });

  it("should drag and drop ingredient", () => {
    cy.wait("@getIngredients");
    cy.get('[data-test-id="ingredients"] li').first().trigger("dragstart");
    cy.get('[data-test-id="constructor-bun"]').first().trigger("drop");

    cy.get('[data-test-id="constructor-bun"]')
      .first()
      .contains("Краторная булка N-200i");
    cy.get('[data-test-id="ingredients"] li').eq(1).trigger("dragstart");
    cy.get('[data-test-id="constructor-bun"]').first().trigger("drop");
    cy.get('[data-test-id="constructor-bun"]')
      .first()
      .contains("Флюоресцентная булка R2-D3");
    cy.get('[data-test-id="ingredients"] li')
      .eq(1)
      .find(".counter__num")
      .contains("2");

    cy.get('[data-test-id="ingredients"] li').eq(2).trigger("dragstart");
    cy.get('[data-test-id="constructor-items"]').trigger("drop");

    cy.get('[data-test-id="ingredients"] li').eq(2).trigger("dragstart");
    cy.get('[data-test-id="constructor-items"]').trigger("drop");

    cy.get('[data-test-id="ingredients"] li').eq(2).trigger("dragstart");
    cy.get('[data-test-id="constructor-items"]').trigger("drop");

    cy.get('[data-test-id="constructor-items"]')
      .children()
      .first()
      .contains("Соус Spicy-X");
    cy.get('[data-test-id="ingredients"] li')
      .eq(2)
      .find(".counter__num")
      .contains("3");

    cy.get('[data-test-id="ingredients"] li').eq(3).trigger("dragstart");
    cy.get('[data-test-id="constructor-items"]').trigger("drop");

    cy.get('[data-test-id="constructor-items"]')
      .get('[alt="move icon"]')
      .last()
      .trigger("dragstart");
    cy.get('[data-test-id="constructor-items"]')
      .get('[alt="move icon"]')
      .first()
      .trigger("drop");
    cy.get('[data-test-id="constructor-items"]')
      .children()
      .first()
      .contains("Соус фирменный Space Sauce");
    cy.get('[data-test-id="constructor-items"]')
      .children()
      .should("have.length", 4);

    cy.get('[data-test-id="constructor-items"]')
      .children()
      .first()
      .find(".constructor-element__action")
      .click();
    cy.get('[data-test-id="constructor-items"]')
      .children()
      .should("have.length", 3);
  });

  it("should create order", () => {
    cy.wait("@getIngredients");
    cy.get('[data-test-id="ingredients"] li').first().trigger("dragstart");
    cy.get('[data-test-id="constructor-bun"]').first().trigger("drop");
    cy.contains("Оформить заказ").click();
    cy.url().should("include", "/login");
    cy.get('input[type="email"]').type("test@test.ru");
    cy.get('input[type="password"]').type("12345678");
    cy.contains("Войти").click();
    cy.contains("Оформить заказ").click();
    cy.get("#root-modals span").contains("1000");
    cy.get("#root-modals button").click();
  });
});
