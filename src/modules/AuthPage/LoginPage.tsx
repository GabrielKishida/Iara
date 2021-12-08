import React from "react";
import { Grid, Row, VBox } from "../../components/theme/grid";

import Modal from "react-bootstrap/Modal";
import { RouterProps } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { WhiteBox } from "../../components/white_box/white_box";
import { H3, VSeparator, Body, HSeparator } from "../../components";
import { PrimaryButton } from "../../components/button";
import { Link } from "react-router-dom";
import { Login } from "../../models/login";
import { postRequest } from "../../services/RequestService";
import { UserValidation } from "../../models/user";
import { AnswerButton } from "../../components/QuestionCard/QuestionCard.style";
import { Footer } from "../../components/footer";

export const LoginPage: React.FC<RouterProps> = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  const handleSubmitLogin = React.useCallback(
    (e: any) => {
      e.preventDefault();
      const loginData: Login = {
        username: e.target.elements.username.value,
        password: e.target.elements.password.value,
      };
      postRequest("login", loginData).then((userData: UserValidation[]) => {
        if (!!userData[0]) {
          props.history.push("user/" + userData[0].user.id_user);
        } else {
          setShowModal(true);
        }
      });
    },
    [postRequest]
  );
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <Grid>
      <Row>
        <WhiteBox>
          <VBox>
            <H3>Login</H3>
            <VSeparator />
            <Form onSubmit={handleSubmitLogin}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Nome de usuário</Form.Label>
                <Form.Control type="name" placeholder="Nome de usuário" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Insira sua senha" />
              </Form.Group>
              <VSeparator />
              <Row justifyContent="space-between" alignItems="center">
                <PrimaryButton type="submit">Login</PrimaryButton>
                <HSeparator />
                <Link to="/signup">
                  <Body>Não tenho uma conta</Body>
                </Link>
              </Row>
            </Form>
          </VBox>
        </WhiteBox>
      </Row>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nenhum usuário foi encontrado</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <AnswerButton variant="secondary" onClick={handleClose}>
            Fechar
          </AnswerButton>
        </Modal.Footer>
      </Modal>
      <Row>
        <Footer />
      </Row>
    </Grid>
  );
};
