describe("Testes de navegação", () => {
  it("Testa a digitação na página de Login", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Login").click();
    cy.url().should("include", "/login");

    cy.get("form").within(() => {
      cy.get("input").get("[id^=email]").type("emailexemplo@gmail.com");
      cy.get("input").get("[id^=password]").type("senha123");
    });
  });

  it("Testa a digitação na página de Cadastro", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Cadastro").click();
    cy.url().should("include", "/signup");

    cy.get("form").get("input").get("[id^=firstName]").type("PrimeiroNome");

    cy.get("form").get("input").get("[id^=lastName]").type("Sobrenome");

    cy.get("form")
      .get("input")
      .get("[id^=email]")
      .type("emailexemplo@gmail.com");

    cy.get("form")
      .get("input")
      .get("[id^=password]")
      .each((element) => cy.get(element).type("senha123"));

    cy.contains("Criar conta").click();
  });
});
