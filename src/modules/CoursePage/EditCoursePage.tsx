import React from "react";
import { H3, H4, Body, VSeparator, HSeparator } from "../../components";
import { Col, Grid, Row, VBox } from "../../components/theme/grid";
import { WhiteBox } from "../../components/white_box/white_box";

import { RouterProps, useParams } from "react-router-dom";
import { MockCircle, TopicsContainer } from "./components/course_topic";
import { MockSmallCircle } from "../../components/card/card.style";
import { PrimaryButton, DeleteButton } from "../../components/button";
import { CourseInfo } from "../../models/course";
import { request } from "../../services/RequestService";
import { Link } from "react-router-dom";

export const EditCoursePage: React.FC<RouterProps> = (props) => {
  const { courseid } = useParams<{ courseid: string }>();
  const [data, setData] = React.useState<CourseInfo>();

  React.useEffect(() => {
    async function fetchData() {
      const response = await request(
        "course/getCompleteCourseInfo/courseId=" + courseid
      );
      setData(response);
    }
    fetchData();
  }, [setData, courseid]);

  const handleDeleteClass = () => {
    alert("deletar aula");
  };

  const handleAddClass = () => {
    props.history.push("/create-class/" + data?.classes?.length.toString());
  };

  return (
    <Grid>
      <Row>
        <WhiteBox>
          <Row justifyContent="space-between" alignItems="center">
            <Col>
              <H3>{data?.courseInfo.name}</H3>
              <Body>{data?.courseInfo.description}</Body>
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
                {data?.classes?.map((topic, index) => (
                  <>
                    <Row justifyContent="flex-start">
                      <Col>
                        <MockSmallCircle />
                      </Col>
                      <HSeparator />
                      <Link
                        to={
                          "/class/" +
                          courseid +
                          "/" +
                          topic.id_class +
                          "&" +
                          localStorage.getItem("userId")
                        }
                      >
                        <Col>
                          <Row justifyContent="flex-start">
                            <H4>{topic.name}</H4>
                          </Row>
                          <Row justifyContent="flex-start">
                            <Body>Dificuldade: {topic.difficulty}</Body>
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
