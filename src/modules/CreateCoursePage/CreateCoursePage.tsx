import React from "react";
import {
  CourseGrid,
  Card,
  SubmitButton,
  PageTitle,
} from "./CreateCoursePage.style";
import { H3, H4 } from "../../components/typography";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { VSeparator } from "../../components";
import { VBox } from "../../components/theme/grid";
import { TextCard } from "../../components/TextCard/TextCard";

export const CreateCoursePage: React.FC = () => {
  const [textSegments, setTextSegments] = React.useState<TextBlock[]>([]);
  const [questionSegments, setQuestionSegments] = React.useState<
    QuestionBlock[]
  >([]);

  const alternatives = [];

  for (var i = 0; i < 6; i++) {
    alternatives.push(
      <Form.Group as={Col} controlId={"option" + (i + 1).toString()}>
        <Form.Label>Alternativa {i + 1}</Form.Label>
        <Form.Control />
      </Form.Group>
    );
  }

  interface TextBlock {
    title: string;
    text: string;
    index: number;
    image?: string;
  }

  interface QuestionBlock {
    title: string;
    options: string[];
    index: number;
    image?: string;
  }

  const handleSubmitText = (e: any) => {
    e.preventDefault();
    const textData: TextBlock = {
      title: e.target.elements.title.value,
      text: e.target.elements.classtext.value,
      index: textSegments.length + questionSegments.length,
      image: e.target.elements.image.value,
    };
    setTextSegments(textSegments.concat(textData));
  };

  const handleSubmitQuestion = (e: any) => {
    e.preventDefault();
    const questionData: QuestionBlock = {
      title: e.target.elements.title.value,
      image: e.target.elements.image.value,
      options: [
        e.target.elements.option1.value,
        e.target.elements.option2.value,
        e.target.elements.option3.value,
        e.target.elements.option4.value,
        e.target.elements.option5.value,
        e.target.elements.option6.value,
      ],
      index: textSegments.length + questionSegments.length,
    };
    setQuestionSegments(questionSegments.concat(questionData));
  };

  return (
    <CourseGrid>
      <PageTitle>
        <H3>Crie uma aula</H3>
      </PageTitle>
      <Card>
        <H4>Crie um Card de texto</H4>
        <Form onSubmit={handleSubmitText}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Título</Form.Label>
            <Form.Control type="text" placeholder="Título da aula" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Insira uma imagem</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="classtext">
            <Form.Label>Texto da aula</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>

          <VSeparator half />

          <SubmitButton variant="primary" type="submit">
            Adicionar texto
          </SubmitButton>
        </Form>
      </Card>

      <Card>
        <H4>Crie um Card de Questão</H4>
        <Form onSubmit={handleSubmitQuestion}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Título</Form.Label>
            <Form.Control type="text" placeholder="Título da questão" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Insira uma imagem</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Row className="mb-6">{alternatives}</Row>
          <VSeparator half />

          <SubmitButton variant="primary" type="submit">
            Adicionar Questão
          </SubmitButton>
        </Form>
      </Card>

      <VBox>
        {textSegments.map((textCardData) => (
          <TextCard {...textCardData} />
        ))}
      </VBox>

      <VSeparator />
    </CourseGrid>
  );
};
