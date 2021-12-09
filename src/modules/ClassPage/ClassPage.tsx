import {
  Course,
  Chapter,
  ChapterCheckbox,
  CourseGrid,
} from "./ClassPage.style";
import { H3, H4, Body } from "../../components/typography";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ProgressBar } from "react-bootstrap";
import { useState } from "react";
import { PrimaryButton } from "../../components/button/button";
import { request } from "../../services/RequestService";
import { Class } from "../../models/Class";
import { TextCard } from "../../components/TextCard/TextCard";
import { QuestionCard } from "../../components/QuestionCard/QuestionCard";
import { RouterProps, useParams } from "react-router-dom";
import React from "react";
import { Footer } from "../../components/footer";
import { Row } from "../../components/theme/grid";

export const ClassPage: React.FC<RouterProps> = (props) => {
  const { courseid } = useParams<{ courseid: string }>();

  const { classid } = useParams<{ classid: string }>();

  const nextClass = () => props.history.push("/course/" + courseid);

  const [classContent, setClassContent] = React.useState<Class>();
  const [progress, setProgress] = useState(0);
  const [isChecked, setIsChecked] = useState<Boolean[]>();

  React.useEffect(() => {
    async function fetchClass() {
      let response = await request("class/getCompleteClass/" + classid);
      setClassContent(response);
    }
    fetchClass();
  }, [setClassContent, classid, request]);

  React.useEffect(() => {
    if (classContent?.texts?.length)
      setIsChecked(new Array(classContent.texts.length).fill(false));
  }, [setIsChecked, classContent]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnChange = (position: number) => {
    const updatedCheckedState = isChecked?.map((item, index) =>
      index === position ? !item : item
    );
    setIsChecked(updatedCheckedState);
    const totalProgress = updatedCheckedState?.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + 100 / updatedCheckedState?.length;
        }
        return sum;
      },
      0
    );

    setProgress(totalProgress ?? 0);
  };

  return (
    <CourseGrid>
      <div style={{ width: "60%" }}>
        <PrimaryButton
          variant="primary"
          onClick={handleShow}
          style={{ marginTop: "50px" }}
        >
          Capítulos
        </PrimaryButton>

        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Capítulos e Progresso</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <H4>Progresso</H4>
              <ProgressBar style={{ marginBottom: "50px" }} now={progress} />
            </div>
            <H4>Capítulos</H4>
            <div>
              {!!classContent &&
                classContent?.texts?.map((value, index) => {
                  return (
                    <Chapter
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Body>
                        {value.classEntity?.name && value.classEntity?.name}
                      </Body>
                      <ChapterCheckbox
                        type="checkbox"
                        checked={!!isChecked?.[index] ?? false}
                        onChange={() => handleOnChange(index)}
                      />
                    </Chapter>
                  );
                })}
            </div>
          </Offcanvas.Body>
        </Offcanvas>

        <Course>
          {classContent?.texts?.map((value) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <H3>{classContent.class?.name && classContent.class?.name}</H3>
                <div style={{ width: "100%", marginBottom: "100px" }}>
                  <TextCard
                    title={value.classEntity?.name}
                    image={value.image}
                    text={value.content}
                  ></TextCard>
                </div>
              </div>
            );
          })}
          {classContent?.questions?.map((value) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <div style={{ width: "100%", marginBottom: "100px" }}>
                  <QuestionCard
                    title={value.question.title}
                    image={value.question.image}
                    alternatives={value.alternatives}
                  ></QuestionCard>
                </div>
              </div>
            );
          })}
        </Course>
        <PrimaryButton
          variant="primary"
          style={{ float: "right" }}
          onClick={nextClass}
        >
          Voltar para o curso
        </PrimaryButton>
      </div>
      <Row style={{width:"100%"}}>
        <Footer />
      </Row>
    </CourseGrid>
  );
};
