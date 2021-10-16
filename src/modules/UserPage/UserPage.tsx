import { H1, H2, ProfileCard, VSeparator, HSeparator } from "../../components";
import { LinkButton } from "../../components/button";
import { ClassCard } from "../../components/card/class_card";
import { Col, Grid, Row, VBox } from "../../components/theme/grid";
import { WhiteBox } from "../../components/white_box/white_box";

export const UserPage: React.FC = () => {
  return (
    <Grid>
      <Row>
        <WhiteBox>
          <Row justifyContent="flex-start">
            <H1>Olá, Joaquim</H1>
          </Row>
          <Row justifyContent="flex-start">
            <Col size={1}>
              <ProfileCard
                title="Joaquim"
                role="Aluno"
                subtitle="18 cursos completos"
                description="Descrição de perfil e muitas outras coisas relevantes tipo o alfabeto inteiro a b c d e f ..."
              />
            </Col>
            <Col size={3}>
              <LinkButton>Editar Perfil</LinkButton>
              <VSeparator half />
              <LinkButton delete>Apagar Perfil</LinkButton>
              <VSeparator half />
              <LinkButton>Quero ser um professor</LinkButton>
              <VSeparator half />
            </Col>
          </Row>
        </WhiteBox>
      </Row>
      <VSeparator />
      <Row>
        <VBox>
          <H2>Aulas em progresso</H2>
          <Row justifyContent="flex-start">
            {MOCK_CLASSES.map((classData) => (
              <>
                <ClassCard
                  classType="inProgress"
                  name={classData.name}
                  progress={classData.progress}
                  description={classData.description}
                />
                <HSeparator />
              </>
            ))}
          </Row>
          <VSeparator />

          <H2>Aulas finalizadas</H2>
          <Row justifyContent="flex-start">
            {MOCK_CLASSES.map((classData) => (
              <>
                <ClassCard
                  classType="finished"
                  name={classData.name}
                  progress={classData.progress}
                  description={classData.description}
                />
                <HSeparator />
              </>
            ))}
          </Row>
        </VBox>
      </Row>
    </Grid>
  );
};

const MOCK_CLASSES = [
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
];
