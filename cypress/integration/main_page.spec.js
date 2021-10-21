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

    it("Testa botão Curso 1", () => {
        cy.visit("http://localhost:3000/");

        cy.contains("Curso 1").click();
        cy.url().should("include", "/course");
    });

    it("Testa botão Curso 2", () => {
        cy.visit("http://localhost:3000/");

        cy.contains("Curso 2").click();
        cy.url().should("include", "/course");
    });

    it("Testa botão Curso 3", () => {
        cy.visit("http://localhost:3000/");

        cy.contains("Curso 3").click();
        cy.url().should("include", "/course");
    });

});