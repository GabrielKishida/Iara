import React from "react";
import { Col, Grid, Row, VBox } from "../../components/theme/grid";

import { RouterProps } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { WhiteBox } from "../../components/white_box/white_box";
import { H3, VSeparator, Body, HSeparator } from "../../components";
import { PrimaryButton } from "../../components/button";
import { SignUp } from "../../models/signup";
import { postRequest } from "../../services/RequestService";

export const SignupPage: React.FC<RouterProps> = (props) => {
  const handleSubmitSignup = React.useCallback(
    (e: any) => {
      e.preventDefault();
      const signupData: SignUp = {
        username: e.target.elements.username.value,
        name: e.target.elements.name.value,
        password: e.target.elements.password.value,
        role: e.target.elements.role.value,
        bio: e.target.elements.bio.value,
        logo: "",
      };
      postRequest("user/signup", signupData).then(() => {
        props.history.push("/");
      });
    },
    [postRequest]
  );

  return (
    <Grid>
      <Row>
        <WhiteBox>
          <VBox>
            <H3>Cadastro</H3>
            <VSeparator />
            <Form onSubmit={handleSubmitSignup}>
              <Form.Text className="text-muted">
                Não vamos compartilhar seus dados com ninguém.
              </Form.Text>
              <VSeparator />
              <Row justifyContent="flex-start">
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="name" placeholder="Joaquim" />
                </Form.Group>
                <HSeparator />
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Nome de Usuário</Form.Label>
                  <Form.Control type="name" placeholder="JocaMusiqueiro123" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="role">
                <Col>
                  <Form.Label>Você é um aluno ou um professor?</Form.Label>
                  <Row justifyContent="flex-start">
                    <Form.Check
                      inline
                      label="Aluno"
                      name="role"
                      type="radio"
                      id={`inline-radio-1`}
                    />
                    <HSeparator />
                    <Form.Check
                      inline
                      label="Professor"
                      name="role"
                      type="radio"
                      id={`inline-radio-2`}
                    />
                  </Row>
                </Col>
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Insira sua senha" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="bio">
                <Form.Label>Se quiser, nos conte sobre você</Form.Label>
                <Form.Control placeholder="Adoro música pois..." />
              </Form.Group>

              <VSeparator />
              <PrimaryButton type="submit">Criar conta</PrimaryButton>
            </Form>
          </VBox>
        </WhiteBox>
      </Row>
    </Grid>
  );
};
