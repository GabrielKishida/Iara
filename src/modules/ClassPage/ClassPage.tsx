import React from "react";
import { H3, H4, Body, VSeparator, HSeparator } from "../../components";
import { Col, Grid, Row, VBox } from "../../components/theme/grid";
import { WhiteBox } from "../../components/white_box/white_box";
import ProgressBar from "react-bootstrap/ProgressBar";

import { RouterProps, useParams } from "react-router-dom";
import { MockCircle, TopicsContainer } from "./components/class_topic";
import { MockSmallCircle } from "../../components/card/card.style";
import { PrimaryButton } from "../../components/button";

export const ClassPage: React.FC<RouterProps> = (props) => {
  const { classid } = useParams<{ classid: string }>();
  return (
    <Grid>
      <Row>
        <WhiteBox>
          <Row justifyContent="space-between" alignItems="center">
            <Col>
              <H3>{MOCK_CLASS.title + " " + classid}</H3>
              <Body>{MOCK_CLASS.description}</Body>
            </Col>
            <HSeparator huge />
            <MockCircle />
          </Row>
          <VSeparator />

          <VSeparator />

          <Row justifyContent="space-between">
            {MOCK_CLASS?.progress && (
              <Col>
                <H4>Progresso atual: {MOCK_CLASS.progress}%</H4>
                <ProgressBar now={MOCK_CLASS.progress} />
              </Col>
            )}
            <Col>
              <PrimaryButton>
                {MOCK_CLASS.progress ? "Continuar aula" : "Começar aula"}
              </PrimaryButton>
            </Col>
          </Row>
        </WhiteBox>
      </Row>
      <VSeparator />
      <VBox>
        <Row>
          <Col>
            <TopicsContainer>
              <VBox>
                <H3>Tópicos</H3>
                <VSeparator />
                {MOCK_CLASS.topics.map((topic) => (
                  <>
                    <Row>
                      <Col>
                        <MockSmallCircle />
                      </Col>
                      <HSeparator />

                      <Col>
                        <Row justifyContent="flex-start">
                          <H4>{topic.name}</H4>
                        </Row>
                        <Row justifyContent="flex-start">
                          <Body>{topic.description}</Body>
                        </Row>
                      </Col>
                    </Row>
                    <VSeparator />
                  </>
                ))}
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
    {
      name: "Conclusão",
      description: "Descrição do tópico de conclusão, e o que ele contém.",
    },
  ],
};
