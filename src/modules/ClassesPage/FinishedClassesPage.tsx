import React from "react";
import { H2, VSeparator, HSeparator } from "../../components";
import { ClassCard } from "../../components/card/class_card";
import { Grid, Row, VBox } from "../../components/theme/grid";

const ROW_SIZE = 3;

export const FinishedClassesPage: React.FC = () => {
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
          <H2>Aulas finalizadas</H2>
          <VSeparator />

          {classesArray.map((classRow, index) => (
            <React.Fragment key={index}>
              <Row justifyContent="flex-start">
                {classRow.map((classData, index) => (
                  <React.Fragment key={index}>
                    <ClassCard
                      classType="finished"
                      name={classData.name}
                      progress={classData.progress}
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
    name: "Aula I",
    progress: 34,
    description:
      "Descrição genérica de uma aula, como os conteúdos abordados e tudo mais que tem em uma aula.",
  },
  {
    name: "Aula II",
    progress: 74,
    description:
      "Descrição genérica de uma aula, como os conteúdos abordados e tudo mais que tem em uma aula.",
  },
  {
    name: "Aula III",
    progress: 99,
    description:
      "Descrição genérica de uma aula, como os conteúdos abordados e tudo mais que tem em uma aula.",
  },
  {
    name: "Aula IV",
    progress: 15,
    description:
      "Descrição genérica de uma aula, como os conteúdos abordados e tudo mais que tem em uma aula.",
  },
  {
    name: "Aula V",
    progress: 5,
    description:
      "Descrição genérica de uma aula, como os conteúdos abordados e tudo mais que tem em uma aula.",
  },
  {
    name: "Aula VI",
    progress: 13,
    description:
      "Descrição genérica de uma aula, como os conteúdos abordados e tudo mais que tem em uma aula.",
  },
  {
    name: "Aula VII",
    progress: 34,
    description:
      "Descrição genérica de uma aula, como os conteúdos abordados e tudo mais que tem em uma aula.",
  },
  {
    name: "Aula VIII",
    progress: 74,
    description:
      "Descrição genérica de uma aula, como os conteúdos abordados e tudo mais que tem em uma aula.",
  },
];
