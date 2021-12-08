import React from "react";
import { H3, H4, Body, VSeparator, HSeparator } from "../../components";
import { Col, Grid, Row, VBox } from "../../components/theme/grid";
import { WhiteBox } from "../../components/white_box/white_box";
import ProgressBar from "react-bootstrap/ProgressBar";

import { RouterProps, useParams } from "react-router-dom";
import { MockCircle, TopicsContainer } from "./components/course_topic";
import { MockSmallCircle } from "../../components/card/card.style";
import { PrimaryButton } from "../../components/button";
import { Link } from "react-router-dom";
import { CourseInfo } from "../../models/course";
import { request } from "../../services/RequestService";
import { SimpleClass } from "../../models/Class";
import { Footer } from "../../components/footer";

export const CoursePage: React.FC<RouterProps> = (props) => {
  const [data, setData] = React.useState<CourseInfo>();
  const { courseid } = useParams<{ courseid: string }>();

  React.useEffect(() => {
    async function fetchData() {
      const response = await request(
        "course/getCompleteCourseInfo/courseId=" + courseid
      );
      console.log(response);
      setData(response);
    }
    fetchData();
  }, [setData, courseid]);

  return (
    <Grid>
      <Row>
        <WhiteBox>
          <Row justifyContent="space-between" alignItems="center">
            <Col>
              <H3>{data?.courseInfo.name}</H3>
              <Body>{data?.courseInfo.description}</Body>
              <VSeparator half />

              <Body>Duração: {data?.courseInfo.duration}</Body>
              <Body>Dificuldade: {data?.courseInfo.difficulty}</Body>
            </Col>
            <HSeparator huge />
            <MockCircle />
          </Row>
          <VSeparator />

          <Row justifyContent="space-between">
            {false && (
              <Col>
                <H4>Progresso atual: {MOCK_CLASS.progress}%</H4>
                <ProgressBar now={MOCK_CLASS.progress} />
              </Col>
            )}
            <Col>
              <PrimaryButton>{"Começar aula"}</PrimaryButton>
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
                {data?.classes?.map((topic: SimpleClass, index: number) => (
                  <Col>
                    <Link to={"/class/" + courseid + "/" + index.toString()} style={{ textDecoration: 'none' }}>
                      <Row alignItems="flex-start" justifyContent="flex-start">
                        <Col>
                          <MockSmallCircle />
                        </Col>
                        <HSeparator />

                        <Col>
                          <Row justifyContent="flex-start">
                            <H4>{topic.name}</H4>
                          </Row>
                          <Row justifyContent="flex-start">
                            <Body>Dificuldade: {topic.difficulty}</Body>
                          </Row>
                        </Col>
                      </Row>
                      <VSeparator />
                    </Link>
                  </Col>
                ))}
              </VBox>
            </TopicsContainer>
          </Col>
        </Row>
      </VBox>
      <Row>
        <Footer />
      </Row>
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
