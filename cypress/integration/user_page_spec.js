describe("Links páginas de usuário", () => {
  it("Testa a navegação da página de usuários", () => {
    cy.visit("http://localhost:3000/user");

    cy.get("a").filter(':contains("Ver mais")').eq(0).click();
    cy.url().should("include", "/classes/in-progress");
    cy.go("back");

    cy.get("a").filter(':contains("Ver mais")').eq(1).click();
    cy.url().should("include", "/classes/finished");
    cy.go("back");
  });
});
