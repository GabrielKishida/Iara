describe("Testes de navegação", () => {
  it("Testa o acesso à página de usuário", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Usuário").click();
    cy.url().should("include", "/user");
    cy.contains("Home").click();
    cy.contains("Bach");
  });

  it("Testa o acesso à página de cursos", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Cursos").click();
    cy.url().should("include", "/course");
    cy.contains("Home").click();
    cy.contains("Bach");
  });

  it("Testa o acesso à página de atividades", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Atividade").click();
    cy.url().should("include", "/activity");
    cy.contains("Home").click();
    cy.contains("Bach");
  });

  it("Testa o acesso à página de professores", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Professores").click();
    cy.url().should("include", "/teachers");
    cy.contains("Home").click();
    cy.contains("Bach");
  });

  it("Testa o acesso à página de pesquisa", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Pesquisa").click();
    cy.url().should("include", "/search");
    cy.contains("Home").click();
    cy.contains("Bach");
  });

  it("Testa o acesso à página de login", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Login").click();
    cy.url().should("include", "/login");
    cy.contains("Home").click();
    cy.contains("Bach");
  });

  it("Testa o acesso à página de signup", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Cadastro").click();
    cy.url().should("include", "/signup");
    cy.contains("Home").click();
    cy.contains("Bach");
  });
});
