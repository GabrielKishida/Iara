import React from "react";
import {
  H1,
  H3,
  LinkText,
  ProfileCard,
  VSeparator,
  HSeparator,
} from "../../components";
import { LinkButton } from "../../components/button";
import { ClassCard, CreateClassCard } from "../../components/card/class_card";
import { Col, Grid, Row, VBox } from "../../components/theme/grid";
import { WhiteBox } from "../../components/white_box/white_box";

import { Link } from "react-router-dom";

export const UserPage: React.FC = () => {
  const [userRole, setUserRole] = React.useState("Aluno");
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
              <LinkButton>
                {userRole == "Professor"
                  ? "Deixar de ser professor"
                  : "Quero ser um professor"}
              </LinkButton>
              <VSeparator half />
            </Col>
          </Row>
        </WhiteBox>
      </Row>
      <VSeparator />
      <Row>
        <VBox>
          <Row justifyContent="space-between" alignItems="flex-end">
            <H3>Suas aulas</H3>
            <Link to="/classes/my-classes">
              <LinkText>Ver mais</LinkText>
            </Link>
          </Row>

          <Row justifyContent="flex-start">
            <CreateClassCard />
            <HSeparator />
            {MOCK_CLASSES.slice(0, 2).map((classData) => (
              <>
                <ClassCard
                  classType="teacher"
                  name={classData.name}
                  description={classData.description}
                />
                <HSeparator />
              </>
            ))}
          </Row>
          <VSeparator />

          <Row justifyContent="space-between" alignItems="flex-end">
            <H3>Aulas em progresso</H3>
            <Link to="/classes/in-progress">
              <LinkText>Ver mais</LinkText>
            </Link>
          </Row>

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

          <Row justifyContent="space-between" alignItems="flex-end">
            <H3>Aulas finalizadas</H3>
            <Link to="/classes/finished">
              <LinkText>Ver mais</LinkText>
            </Link>
          </Row>
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
