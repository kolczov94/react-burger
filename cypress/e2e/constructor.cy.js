describe("service is available", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should drag and drop ingredient", () => {
    cy.get('[data-test-id="ingredients"] li').first().trigger("dragstart");
    cy.get('[data-test-id="constructor-bun"]').first().trigger("drop");

    cy.get('[data-test-id="constructor-bun"]')
      .eq(0)
      .contains("Краторная булка N-200i");
    cy.get('[data-test-id="ingredients"] li:first .counter__num').contains("2");
  });

  it("should be navigate list ingredients", () => {
    cy.get('[data-test-id="ingredients-menu"] .tab').eq(1).click();
    cy.get('[data-test-id="ingredients-menu"] .tab').eq(2).click();
    cy.get('[data-test-id="ingredients-menu"] .tab')
      .eq(2)
      .should("have.class", "tab_type_current");
  });

  it("should open and close modal ingredient", () => {
    cy.get('[data-test-id="ingredients"] li:first').click();
    cy.get("#root-modals").contains("Детали ингредиента");
    cy.get("#root-modals button").click();
  });
});
