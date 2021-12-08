import React from "react";
import { CourseGrid, Card, PageTitle } from "./CreateCoursePage.style";
import { H2, H4 } from "../../components/typography";
import Form from "react-bootstrap/Form";
import { PrimaryButton, VSeparator } from "../../components";
import { Footer } from "../../components/footer";
import { Row } from "../../components/theme/grid";
import { RouterProps } from "react-router-dom";

export const CreateCoursePage: React.FC<RouterProps> = (props) => {
  const handleClickCreate = () => {
    props.history.push("/edit-course/1");
  };

  return (
    <CourseGrid>
      <PageTitle>
        <H2>Crie um Curso</H2>
      </PageTitle>
      <Card>
        <H4>Insira os dados do curso</H4>
        <Form>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Título</Form.Label>
            <Form.Control type="text" placeholder="Título da aula" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Descrição</Form.Label>
            <Form.Control type="text" placeholder="Descrição da aula" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="difficulty">
            <Form.Label>Dificuldade</Form.Label>

            <Form.Check
              name="difficulty"
              type="radio"
              id="easy"
              label="Fácil"
            />
            <Form.Check
              name="difficulty"
              type="radio"
              id="medium"
              label="Médio"
            />
            <Form.Check
              name="difficulty"
              type="radio"
              id="hard"
              label="Difícil"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="duration">
            <Form.Label>Duration</Form.Label>

            <Form.Check name="duration" type="radio" id="short" label="Curto" />
            <Form.Check
              name="duration"
              type="radio"
              id="medium"
              label="Médio"
            />
            <Form.Check name="duration" type="radio" id="long" label="Longo" />
          </Form.Group>
        </Form>
        <VSeparator half />
      </Card>

      <VSeparator />
      <PrimaryButton onClick={handleClickCreate}>Submeter</PrimaryButton>
      <VSeparator />
      <Row>
        <Footer />
      </Row>
    </CourseGrid>
  );
};
