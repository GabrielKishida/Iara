import React from "react";
import { CourseGrid, Card, PageTitle } from "./CreateCoursePage.style";
import { H2, H4 } from "../../components/typography";
import Form from "react-bootstrap/Form";
import { PrimaryButton, VSeparator } from "../../components";
import { RouterProps } from "react-router-dom";
import { postRequest } from "../../services/RequestService";

export const CreateCoursePage: React.FC<RouterProps> = (props) => {
  const handleClickCreate = (e: any) => {
    e.preventDefault();
    const courseData = {
      idAuthor: localStorage.getItem("userId"),
      name: e.target.elements.title.value,
      duration: e.target.elements.duration.value,
      difficulty: e.target.elements.difficulty.value,
      description: e.target.elements.description.value,
      icon: "",
    };
    console.log(courseData);
    postRequest("course/create", courseData).then((response) => {
      props.history.push("/edit-course/" + response.id_course);
    });
  };

  return (
    <CourseGrid>
      <PageTitle>
        <H2>Crie um Curso</H2>
      </PageTitle>
      <Card>
        <H4>Insira os dados do curso</H4>
        <Form onSubmit={handleClickCreate}>
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
              value="Fácil"
            />
            <Form.Check
              name="difficulty"
              type="radio"
              id="medium"
              label="Médio"
              value="Médio"
            />
            <Form.Check
              name="difficulty"
              type="radio"
              id="hard"
              label="Difícil"
              value="Difícil"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="duration">
            <Form.Label>Duration</Form.Label>

            <Form.Check
              name="duration"
              type="radio"
              id="short"
              label="Curto"
              value="Curto"
            />
            <Form.Check
              name="duration"
              type="radio"
              id="medium"
              label="Médio"
              value="Médio"
            />
            <Form.Check
              name="duration"
              type="radio"
              id="long"
              label="Longo"
              value="Longo"
            />
          </Form.Group>
          <VSeparator />
          <PrimaryButton type="submit">Submeter</PrimaryButton>
          <VSeparator />
        </Form>
        <VSeparator half />
      </Card>
    </CourseGrid>
  );
};
