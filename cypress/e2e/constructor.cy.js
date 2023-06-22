describe("service is available", () => {
  const ingredientListLi = '[data-test-id="ingredients"] li';
  const menuTabs = '[data-test-id="ingredients-menu"] .tab';
  const constructorBuns = '[data-test-id="constructor-bun"]';
  const constructorList = '[data-test-id="constructor-items"]';
  const responseUrl = "https://norma.nomoreparties.space";

  beforeEach(() => {
    cy.intercept("GET", `${responseUrl}/api/ingredients`, {
      fixture: "ingredients.json",
    }).as("getIngredients");
    cy.intercept("GET", `${responseUrl}/api/auth/user`, {
      fixture: "user.json",
    });
    cy.intercept("POST", `${responseUrl}/api/orders`, {
      fixture: "order.json",
    });
    cy.intercept("POST", `${responseUrl}/api/auth/login`, {
      fixture: "login.json",
    });
    cy.viewport(1280, 1024);
    cy.visit("http://localhost:3000");
  });

  it("should be navigate list ingredients", () => {
    cy.wait("@getIngredients");
    cy.get(ingredientListLi).should("not.be.empty");
    cy.get(menuTabs).eq(1).click();
    cy.get(menuTabs).eq(1).click();
    cy.get(menuTabs).eq(1).should("have.class", "tab_type_current");
    cy.get(menuTabs).eq(2).click();
    cy.get(menuTabs).eq(2).click();
    cy.get(menuTabs).eq(2).should("have.class", "tab_type_current");
    cy.get(menuTabs).eq(0).click();
    cy.get(menuTabs).eq(0).click();
    cy.get(menuTabs).eq(0).should("have.class", "tab_type_current");
  });

  it("should open and close modal ingredient", () => {
    cy.wait("@getIngredients");
    cy.get(ingredientListLi).first().click();
    cy.get("#root-modals").contains("Детали ингредиента");
    cy.get("#root-modals button").click();
  });

  it("should drag and drop ingredient", () => {
    cy.wait("@getIngredients");
    cy.get(ingredientListLi).first().trigger("dragstart");
    cy.get(constructorBuns).first().trigger("drop");

    cy.get(constructorBuns).first().contains("Краторная булка N-200i");
    cy.get(ingredientListLi).eq(1).trigger("dragstart");
    cy.get(constructorBuns).first().trigger("drop");
    cy.get(constructorBuns).first().contains("Флюоресцентная булка R2-D3");
    cy.get(ingredientListLi).eq(1).find(".counter__num").contains("2");

    cy.get(ingredientListLi).eq(2).trigger("dragstart");
    cy.get(constructorList).trigger("drop");

    cy.get(ingredientListLi).eq(2).trigger("dragstart");
    cy.get(constructorList).trigger("drop");

    cy.get(ingredientListLi).eq(2).trigger("dragstart");
    cy.get(constructorList).trigger("drop");

    cy.get(constructorList).children().first().contains("Соус Spicy-X");
    cy.get(ingredientListLi).eq(2).find(".counter__num").contains("3");

    cy.get(ingredientListLi).eq(3).trigger("dragstart");
    cy.get(constructorList).trigger("drop");

    cy.get(constructorList)
      .get('[alt="move icon"]')
      .last()
      .trigger("dragstart");
    cy.get(constructorList).get('[alt="move icon"]').first().trigger("drop");
    cy.get(constructorList)
      .children()
      .first()
      .contains("Соус фирменный Space Sauce");
    cy.get(constructorList).children().should("have.length", 4);

    cy.get(constructorList)
      .children()
      .first()
      .find(".constructor-element__action")
      .click();
    cy.get(constructorList).children().should("have.length", 3);
  });

  it("should create order", () => {
    cy.wait("@getIngredients");
    cy.get(ingredientListLi).first().trigger("dragstart");
    cy.get(constructorBuns).first().trigger("drop");
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
