import CoursePageMock from "./CoursePageMock";
import { Grid } from "../../components/theme/grid";
import { Course, Chapter, ChapterCheckbox } from "./CoursePage.style";
import { H3, H4, Body } from "../../components/typography";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ProgressBar } from "react-bootstrap";
import { useState } from "react";
import { PrimaryButton } from "../../components/button/button"


export const CoursePage: React.FC = () => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [progress, setProgress] = useState(0);
  const [isChecked, setIsChecked] = useState(
    new Array(CoursePageMock.content.length).fill(false)
  );

  const handleOnChange = (position: number) => {
    const updatedCheckedState = isChecked.map((item, index) =>
      index === position ? !item : item
    );

    setIsChecked(updatedCheckedState);

    const totalProgress = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + (100/updatedCheckedState.length);
        }
        return sum;
      },
      0
    );

    setProgress(totalProgress);
  }


  return (
    <Grid>
      <PrimaryButton variant="primary" onClick={handleShow}>
        Capítulos
      </PrimaryButton>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Capítulos e Progresso</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <H4>
              Progresso
            </H4>
            <ProgressBar style={{marginBottom: "50px"}} now={progress} />
          </div>
            <H4>
              Capítulos
            </H4>
          <div>
            {CoursePageMock.content.map((value, index) => {
              return (
                <Chapter style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Body>
                    {value.title}
                  </Body>
                  <ChapterCheckbox type="checkbox" checked={isChecked[index]} onChange={() => handleOnChange(index)} />
                </Chapter>
              );
            })}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Course>
        {CoursePageMock.content.map((value) => {
          return (
            <>
              <H3 style={{ display: "flex", justifyContent: "flex-start" }}>
                {value.title}
              </H3>
              <div style={{ width: "40%", marginBottom: "100px" }}>
                {value.content}
              </div>
            </>
          );
        })}
      </Course>
    </Grid>
  );
};