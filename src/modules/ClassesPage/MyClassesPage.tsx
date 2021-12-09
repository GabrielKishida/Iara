import React from "react";
import { H2, VSeparator, HSeparator } from "../../components";
import { ClassCard } from "../../components/card/class_card";
import { Grid, Row, VBox } from "../../components/theme/grid";
import { Footer } from "../../components/footer";

const ROW_SIZE = 3;

export const MyClassesPage: React.FC = () => {
  const [classesArray, setClassesArray] = React.useState<Class[][]>([]);

  const prepareArray = React.useCallback((classes: Class[]) => {
    const preparedArray: Class[][] = [];
    const classesArray = classes;
    while (classesArray.length > 0) {
      preparedArray.push(classesArray.splice(0, ROW_SIZE));
    }
    return preparedArray;
  }, []);

  React.useEffect(() => {
    setClassesArray(prepareArray(MOCK_CLASSES));
  }, [setClassesArray, prepareArray]);

  return (
    <Grid>
      <VSeparator />
      <Row>
        <VBox>
          <H2>Meus Cursos</H2>
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

interface Class {
  name: string;
  progress: number;
  description: string;
}

const MOCK_CLASSES: Class[] = [
  {
    name: "Curso I",
    progress: 34,
    description:
      "Descrição genérica de uma curso, como os conteúdos abordados e tudo mais que tem em uma curso.",
  },
  {
    name: "Curso II",
    progress: 74,
    description:
      "Descrição genérica de uma curso, como os conteúdos abordados e tudo mais que tem em uma curso.",
  },
  {
    name: "Curso III",
    progress: 99,
    description:
      "Descrição genérica de uma curso, como os conteúdos abordados e tudo mais que tem em uma curso.",
  },
  {
    name: "Curso IV",
    progress: 15,
    description:
      "Descrição genérica de uma curso, como os conteúdos abordados e tudo mais que tem em uma curso.",
  },
  {
    name: "Curso V",
    progress: 5,
    description:
      "Descrição genérica de uma curso, como os conteúdos abordados e tudo mais que tem em uma curso.",
  },
  {
    name: "Curso VI",
    progress: 13,
    description:
      "Descrição genérica de uma curso, como os conteúdos abordados e tudo mais que tem em uma curso.",
  },
  {
    name: "Curso VII",
    progress: 34,
    description:
      "Descrição genérica de uma curso, como os conteúdos abordados e tudo mais que tem em uma curso.",
  },
  {
    name: "Curso VIII",
    progress: 74,
    description:
      "Descrição genérica de uma curso, como os conteúdos abordados e tudo mais que tem em uma curso.",
  },
];
