import React from "react";
import { H2, VSeparator, HSeparator } from "../../components";
import { ClassCard } from "../../components/card/class_card";
import { Grid, Row, VBox } from "../../components/theme/grid";
import { request } from "../../services/RequestService";
import { RouterProps, useParams } from "react-router";
import { Course } from "../../models/course";

const ROW_SIZE = 3;

export const InProgressClassesPage: React.FC<RouterProps> = (props) => {
  const [classesArray, setClassesArray] = React.useState<Course[][]>([]);
  const { userid } = useParams<{ userid: string }>();

  const prepareArray = React.useCallback((classes: Course[]) => {
    const preparedArray: Course[][] = [];
    const classesArray = classes;
    while (classesArray.length > 0) {
      preparedArray.push(classesArray.splice(0, ROW_SIZE));
    }
    return preparedArray;
  }, []);

  const handleClickCourse = (id: string) => {
    props.history.push("/course/" + id);
  };

  React.useEffect(() => {
    async function fetchUserCourses() {
      let response = await request("course/getUserCourses/userId=" + userid);
      setClassesArray(prepareArray(response));
    }
    fetchUserCourses();
  }, [setClassesArray, prepareArray, userid]);

  return (
    <Grid>
      <VSeparator />
      <Row>
        <VBox>
          <H2>Aulas em progresso</H2>
          <VSeparator />

          {classesArray.map((classRow, index) => (
            <React.Fragment key={index}>
              <Row justifyContent="flex-start">
                {classRow.map((classData, index) => (
                  <React.Fragment key={index}>
                    <ClassCard
                      classType="teacher"
                      name={classData.name}
                      description={classData.description}
                      onClick={() =>
                        handleClickCourse(classData.id_course.toString())
                      }
                    />
                    <HSeparator />
                  </React.Fragment>
                ))}
              </Row>
              <VSeparator />
            </React.Fragment>
          ))}

          <VSeparator />
        </VBox>
      </Row>
    </Grid>
  );
};
