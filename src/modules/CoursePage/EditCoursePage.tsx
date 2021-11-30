import React from "react";
import { H3, H4, Body, VSeparator, HSeparator } from "../../components";
import { Col, Grid, Row, VBox } from "../../components/theme/grid";
import { WhiteBox } from "../../components/white_box/white_box";

import { RouterProps, useParams } from "react-router-dom";
import { MockCircle, TopicsContainer } from "./components/course_topic";
import { MockSmallCircle } from "../../components/card/card.style";
import { PrimaryButton, DeleteButton } from "../../components/button";
import { Link } from "react-router-dom";

export const EditCoursePage: React.FC<RouterProps> = (props) => {
  const { courseid } = useParams<{ courseid: string }>();

  const handleDeleteClass = () => {
    alert("deletar aula");
  };

  const handleAddClass = () => {
    props.history.push("/create-class/" + courseid);
  };
  return (
    <Grid>
      <Row>
        <WhiteBox>
          <Row justifyContent="space-between" alignItems="center">
            <Col>
              <H3>{MOCK_CLASS.title + " " + courseid}</H3>
              <Body>{MOCK_CLASS.description}</Body>
            </Col>
            <HSeparator huge />
            <MockCircle />
          </Row>
        </WhiteBox>
      </Row>
      <VSeparator />
      <VBox>
        <Row>
          <Col>
            <TopicsContainer>
              <VBox>
                <H3>Aulas</H3>
                <VSeparator />
                {MOCK_CLASS.topics.map((topic, index) => (
                  <>
                    <Row>
                      <Col>
                        <MockSmallCircle />
                      </Col>
                      <HSeparator />
                      <Link to={"/class/" + courseid + "/" + index.toString()}>
                        <Col>
                          <Row justifyContent="flex-start">
                            <H4>{topic.name}</H4>
                          </Row>
                          <Row justifyContent="flex-start">
                            <Body>{topic.description}</Body>
                          </Row>
                        </Col>
                      </Link>
                      <HSeparator />
                      <Col>
                        <VSeparator half />
                        <DeleteButton onClick={handleDeleteClass}>
                          Deletar
                        </DeleteButton>
                      </Col>
                    </Row>
                    <VSeparator />
                  </>
                ))}
                <VSeparator half />
                <PrimaryButton onClick={handleAddClass}>
                  Adicionar Aula
                </PrimaryButton>
              </VBox>
            </TopicsContainer>
          </Col>
        </Row>
      </VBox>
    </Grid>
  );
};

const MOCK_CLASS = {
  title: "Aula Genérica",
  progress: 34,
  description:
    "Descrição genérica de uma aula, como os conteúdos abordados e tudo mais que tem em uma aula.",
  topics: [
    {
      name: "Introdução",
      description: "Descrição do tópico de introdução, e o que ele contém.",
    },
    {
      name: "Desenvolvimento",
      description:
        "Descrição do tópico de desenvolvimento, e o que ele contém.",
    },
  ],
};
