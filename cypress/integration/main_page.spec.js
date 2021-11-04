// main_page.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe("Testes dos componentes da pagina principal", () => {
  it("Testa botão Comece Agora", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Comece agora").click();
    cy.url().should("include", "/signup");
  });

  it("Testa botão Fácil", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Fácil").click();
    cy.url().should("include", "/course");
  });

  it("Testa botão Médio", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Médio").click();
    cy.url().should("include", "/course");
  });

  it("Testa botão Difícil", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Difícil").click();
    cy.url().should("include", "/course");
  });

  it("Testa botão Curso de Ritmo", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Curso de Ritmo").click();
    cy.url().should("include", "/course");
  });

  it("Testa botão Curso de Harmonia", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Curso de Harmonia").click();
    cy.url().should("include", "/course");
  });

  it("Testa botão Curso de Partitura", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Curso de Partitura").click();
    cy.url().should("include", "/course");
  });
});
