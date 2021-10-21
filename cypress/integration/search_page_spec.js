describe("Testes de existência dos componentes", () => {
    it("Procura título da página", () => {
        cy.visit("http://localhost:3000/search");
        cy.contains("Pesquisa por curso");
    });
    it("Procura componentes do formulário", () => {
        cy.visit("http://localhost:3000/search");
        cy.get('[id^=filter-duration-]').should('have.length', 3);
        cy.get('[id^=filter-difficulty-]').should('have.length', 3);
        cy.get('#search').should('exist');
    });
});

describe("Testes do formulário de pesquisa", () => {
    it("Verifica se não há resultados de curso antes de ter realizado a pesquisa", () => {
        cy.visit("http://localhost:3000/search");
        cy.get('[id^=result-course-]').should('not.exist');

        cy.get("#search").type("Teste de pesquisa");
        cy.get('[id^=result-course-]').should('not.exist');

        cy.get('[id^=filter-duration-]').eq(0).click();
        cy.get('[id^=result-course-]').should('not.exist');
        cy.get('[id^=filter-duration-]').eq(1).click();
        cy.get('[id^=result-course-]').should('not.exist');
        cy.get('[id^=filter-duration-]').eq(2).click();
        cy.get('[id^=result-course-]').should('not.exist');

        cy.get('[id^=filter-difficulty-]').eq(0).click();
        cy.get('[id^=result-course-]').should('not.exist');
        cy.get('[id^=filter-difficulty-]').eq(1).click();
        cy.get('[id^=result-course-]').should('not.exist');
        cy.get('[id^=filter-difficulty-]').eq(2).click();
        cy.get('[id^=result-course-]').should('not.exist');
    });

    it("Verifica se os resultados mockados aparecem ao submeter a pesquisa", () => {
        cy.visit("http://localhost:3000/search");
        cy.get("#search").type("Teste de pesquisa");
        cy.get("#search").type('{enter}');
        cy.get('[id^=result-course-]').should('have.length', 3);
    });

    it("Verifica se os resultados mockados tem todos os dados pressupostos", () => {
        cy.visit("http://localhost:3000/search");
        cy.get("#search").type("Teste de pesquisa");
        cy.get("#search").type('{enter}');
        cy.get('[id^=result-course-]').should('have.length', 3);

        cy.get('#result-course-1').contains("Curso I");
        cy.get('#result-course-1').contains("Duração: Curto");
        cy.get('#result-course-1').contains("Dificuldade: Fácil");

        cy.get('#result-course-2').contains("Curso II");
        cy.get('#result-course-2').contains("Duração: Médio");
        cy.get('#result-course-2').contains("Dificuldade: Médio");

        cy.get('#result-course-3').contains("Curso III");
        cy.get('#result-course-3').contains("Duração: Longo");
        cy.get('#result-course-3').contains("Dificuldade: Difícil");
    });
});
