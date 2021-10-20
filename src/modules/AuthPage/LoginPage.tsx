import { Grid, Row, VBox } from "../../components/theme/grid";

import Form from "react-bootstrap/Form";
import { WhiteBox } from "../../components/white_box/white_box";
import { H3, VSeparator, Body, HSeparator } from "../../components";
import { PrimaryButton } from "../../components/button";
import { Link } from "react-router-dom";

export const LoginPage: React.FC = () => {
  return (
    <Grid>
      <Row>
        <WhiteBox>
          <VBox>
            <H3>Login</H3>
            <VSeparator />
            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Endereço de e-mail</Form.Label>
                <Form.Control type="email" placeholder="exemplo@email.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Insira sua senha" />
              </Form.Group>
              <VSeparator />
              <Row justifyContent="space-between" alignItems="center">
                <PrimaryButton>Login</PrimaryButton>
                <HSeparator />
                <Link to="/signup">
                  <Body>Não tenho uma conta</Body>
                </Link>
              </Row>
            </Form>
          </VBox>
        </WhiteBox>
      </Row>
    </Grid>
  );
};
