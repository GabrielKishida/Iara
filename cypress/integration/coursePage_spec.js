describe("Testes da página de curso", () => {
    it("Testa o funcionamento da aparição do menu capítulo", () => {
      cy.visit("http://localhost:3000/course");
  
      cy.contains("Capítulos").click();
      cy.contains("Progresso")
      cy.contains("Capítulos")
    });
    it("Testa o funcionamento da barra de progresso", () => {
      cy.visit("http://localhost:3000/course");
  
      cy.contains("Capítulos").click();
      cy.get('input').click({multiple: true});
    });
    it("Testa o funcionamento dos botões do QuestionCard", () =>{
        cy.visit("http://localhost:3000/course");

        cy.get('button').contains('Am').click();

    });
});