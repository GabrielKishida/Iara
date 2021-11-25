import ClassPageMock from "./ClassPageMock";
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

export const ClassPage: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [progress, setProgress] = useState(0);
  const [isChecked, setIsChecked] = useState(
    new Array(ClassPageMock.content.length).fill(false)
  );

  const handleOnChange = (position: number) => {
    const updatedCheckedState = isChecked.map((item, index) =>
      index === position ? !item : item
    );

    setIsChecked(updatedCheckedState);

    const totalProgress = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + 100 / updatedCheckedState.length;
        }
        return sum;
      },
      0
    );

    setProgress(totalProgress);
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
              {ClassPageMock.content.map((value, index) => {
                return (
                  <Chapter
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Body>{value.title}</Body>
                    <ChapterCheckbox
                      type="checkbox"
                      checked={isChecked[index]}
                      onChange={() => handleOnChange(index)}
                    />
                  </Chapter>
                );
              })}
            </div>
          </Offcanvas.Body>
        </Offcanvas>

        <Course>
          {ClassPageMock.content.map((value) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <H3>{value.title}</H3>
                <div style={{ width: "100%", marginBottom: "100px" }}>
                  {value.content}
                </div>
              </div>
            );
          })}
        </Course>
      </div>
    </CourseGrid>
  );
};
