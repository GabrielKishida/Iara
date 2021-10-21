import { Grid, Row, VBox } from "../../components/theme/grid";

import Form from "react-bootstrap/Form";
import { WhiteBox } from "../../components/white_box/white_box";
import { H3, VSeparator, Body, HSeparator } from "../../components";
import { PrimaryButton } from "../../components/button";
import { Link } from "react-router-dom";

export const SignupPage: React.FC = () => {
  return (
    <Grid>
      <Row>
        <WhiteBox>
          <VBox>
            <H3>Cadastro</H3>
            <VSeparator />
            <Form>
              <Form.Text className="text-muted">
                Não vamos compartilhar seus dados com ninguém.
              </Form.Text>
              <VSeparator />
              <Row justifyContent="flex-start">
                <Form.Group className="mb-3" controlId="firstName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="name" placeholder="Joaquim" />
                </Form.Group>
                <HSeparator />
                <Form.Group className="mb-3" controlId="lastName">
                  <Form.Label>Sobrenome</Form.Label>
                  <Form.Control type="name" placeholder="Soares" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Endereço de e-mail</Form.Label>
                <Form.Control type="email" placeholder="exemplo@email.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Insira sua senha" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Insira sua senha novamente</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Insira a mesma senha"
                />
              </Form.Group>
              <VSeparator />
              <PrimaryButton>Criar conta</PrimaryButton>
            </Form>
          </VBox>
        </WhiteBox>
      </Row>
    </Grid>
  );
};
