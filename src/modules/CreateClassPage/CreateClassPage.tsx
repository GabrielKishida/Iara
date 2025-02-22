import React from "react";
import {
  CourseGrid,
  Card,
  SubmitButton,
  PageTitle,
} from "./CreateClassPage.style";
import { H3, H4 } from "../../components/typography";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { PrimaryButton, VSeparator } from "../../components";
import { Row, VBox } from "../../components/theme/grid";
import { TextCard } from "../../components/TextCard/TextCard";
import { QuestionCard } from "../../components/QuestionCard/QuestionCard";
import { postRequest } from "../../services/RequestService";
import { RouterProps, useParams } from "react-router";

export const CreateClassPage: React.FC<RouterProps> = (props) => {
  const [textSegments, setTextSegments] = React.useState<TextBlock[]>([]);
  const [questionSegments, setQuestionSegments] = React.useState<
    QuestionBlock[]
  >([]);

  const { courseid, classid } =
    useParams<{ courseid: string; classid: string }>();

  const alternatives = [];

  for (var i = 0; i < 6; i++) {
    if (i == 0) {
      alternatives.push(
        <Form.Group as={Col} controlId={"option" + (i + 1).toString()}>
          <Form.Label>Resposta</Form.Label>
          <Form.Control />
        </Form.Group>
      );
    } else {
      alternatives.push(
        <Form.Group as={Col} controlId={"option" + (i + 1).toString()}>
          <Form.Label>Alternativa {i + 1}</Form.Label>
          <Form.Control />
        </Form.Group>
      );
    }
  }

  interface TextBlock {
    title: string;
    text: string;
    index: number;
    image?: string;
  }

  interface QuestionBlock {
    title: string;
    alternatives: Array<{
      text: string;
      correct: boolean;
    }>;
    index: number;
    image?: string;
  }

  const handleSubmitText = React.useCallback(
    (e: any) => {
      e.preventDefault();
      const textData: TextBlock = {
        title: e.target.elements.title.value,
        text: e.target.elements.classtext.value,
        index: textSegments.length + questionSegments.length,
        image: e.target.elements.image.value,
      };
      setTextSegments(textSegments.concat(textData));
    },
    [setTextSegments, textSegments]
  );

  const handleSubmitQuestion = React.useCallback(
    (e: any) => {
      e.preventDefault();
      const questionData: QuestionBlock = {
        title: e.target.elements.title.value,
        image: e.target.elements.image.value,
        alternatives: [
          {
            text: e.target.elements.option1.value,
            correct: true,
          },
          { text: e.target.elements.option2.value, correct: false },
          { text: e.target.elements.option3.value, correct: false },
          { text: e.target.elements.option4.value, correct: false },
          { text: e.target.elements.option5.value, correct: false },
          { text: e.target.elements.option6.value, correct: false },
        ],
        index: textSegments.length + questionSegments.length,
      };
      setQuestionSegments(questionSegments.concat(questionData));
    },
    [setQuestionSegments, questionSegments]
  );

  const handleCreate = React.useCallback((e: any) => {
    e.preventDefault();
    const postObject = {
      name: e.target.elements.name.value,
      difficulty: e.target.elements.difficulty.value,
      index: classid,
      courseId: courseid,
      paragraphs: textSegments,
      questions: questionSegments,
    };
    postRequest("class/create", postObject)
      .then(() => {
        props.history.goBack();
      })
      .catch(() => {
        alert("Algo deu errado com a criação desta aula. Tente novamente.");
      });
  }, []);

  const handleDeleteTextSegment = React.useCallback(
    (textSegment: TextBlock) => {
      let textArray: TextBlock[] = [];
      var index = textSegments.indexOf(textSegment);
      if (index !== -1) {
        textSegments.splice(index, 1);
        textArray = textSegments.slice();
        setTextSegments(textArray);
      }
    },
    [setTextSegments, textSegments]
  );

  const handleDeleteQuestionSegment = React.useCallback(
    (questionSegment: QuestionBlock) => {
      let questionArray: QuestionBlock[] = [];
      var index = questionSegments.indexOf(questionSegment);
      if (index !== -1) {
        questionSegments.splice(index, 1);
        questionArray = questionSegments.slice();
        setQuestionSegments(questionArray);
      }
    },
    [setQuestionSegments, questionSegments]
  );

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
            <Form.Control type="text" placeholder="Título da aula" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Insira o endereço URL de uma imagem</Form.Label>
            <Form.Control type="link" />
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
            <Form.Control
              type="text"
              placeholder="Título da questão"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Insira o endereço URL de uma imagem</Form.Label>
            <Form.Control />
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
          <>
            <TextCard
              {...textCardData}
              creating
              onDelete={() => handleDeleteTextSegment(textCardData)}
            />
            <VSeparator />
          </>
        ))}

        {questionSegments.map((questionCardData) => (
          <>
            <QuestionCard
              {...questionCardData}
              creating
              onDelete={() => handleDeleteQuestionSegment(questionCardData)}
            />
            <VSeparator />
          </>
        ))}
      </VBox>

      <Card>
        <VBox>
          <H3>Dados da Aula</H3>
          <VSeparator />
          <Form onSubmit={handleCreate}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nome da aula</Form.Label>
              <Form.Control type="name" placeholder="Nome da aula" />
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

            <VSeparator />
            <Row justifyContent="space-between" alignItems="center">
              <PrimaryButton type="submit">Criar</PrimaryButton>
            </Row>
          </Form>
        </VBox>
      </Card>
      <VSeparator huge />
    </CourseGrid>
  );
};
