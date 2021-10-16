import { H1, ProfileCard, VSeparator, HSeparator } from "./components";
import { CursoDificuldade } from "./components/curso_dificuldade";
import { HeaderConstitution } from "./components/header";
import { Jumbotron } from "./components/jumbotron";
import { Links } from "./components/links";
import { Col, DivLine, Grid, Row } from "./components/theme/grid";
import { WhiteBox, RoundedWhiteBox } from "./components/white_box/white_box";
import { H3, H2, H4, H5, Body } from "./components/typography";
import { withFormik, Form, Field } from "formik";
import React from "react";

import SearchForm from "./components/SearchForm";


export const SearchPage: React.FC = () => {
  return (
    <Grid>
      <Row>
        <HeaderConstitution />
      </Row>
      <Row>
        <Links></Links>
      </Row>
      <Row>
        <WhiteBox>
            <Row>
              <Col>
                <H3>Pesquisa por curso</H3>
              </Col>
            </Row>
            <VSeparator />
            <SearchForm/>
        </WhiteBox>
      </Row>

      <VSeparator />

      {MOCK_RESULTS.map((resultData) => (
        <>
          <Row>
            <Col>
            <RoundedWhiteBox>
              <Row>
                <Col>
                  <H4> {resultData.name} </H4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Body> Duração: {resultData.duration} - Dificuldade: {resultData.difficulty} </Body>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Body> {resultData.description} </Body>
                </Col>
              </Row>
            </RoundedWhiteBox>
            </Col>
          </Row>
          <VSeparator />
        </>
      ))}
    </Grid>
  );
};

const MOCK_RESULTS = [
  {
    name: "Curso I",
    duration: "Curto",
    difficulty: "Fácil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium velit sit amet porta suscipit. Praesent sollicitudin libero fermentum tortor rhoncus, auctor commodo nisl dapibus. Duis risus leo, lobortis quis pretium eget, fringilla vel sapien. Aenean ut iaculis neque, et ullamcorper eros. Morbi posuere nulla vitae felis viverra mattis. Sed id libero nec nunc finibus aliquet vitae sit amet orci. Phasellus id felis justo. Maecenas id dapibus turpis, sit amet convallis purus.",
  },
  {
    name: "Curso II",
    duration: "Médio",
    difficulty: "Médio",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium velit sit amet porta suscipit. Praesent sollicitudin libero fermentum tortor rhoncus, auctor commodo nisl dapibus. Duis risus leo, lobortis quis pretium eget, fringilla vel sapien. Aenean ut iaculis neque, et ullamcorper eros. Morbi posuere nulla vitae felis viverra mattis. Sed id libero nec nunc finibus aliquet vitae sit amet orci. Phasellus id felis justo. Maecenas id dapibus turpis, sit amet convallis purus.",
  },
  {
    name: "Curso III",
    duration: "Longo",
    difficulty: "Difícil",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium velit sit amet porta suscipit. Praesent sollicitudin libero fermentum tortor rhoncus, auctor commodo nisl dapibus. Duis risus leo, lobortis quis pretium eget, fringilla vel sapien. Aenean ut iaculis neque, et ullamcorper eros. Morbi posuere nulla vitae felis viverra mattis. Sed id libero nec nunc finibus aliquet vitae sit amet orci. Phasellus id felis justo. Maecenas id dapibus turpis, sit amet convallis purus.",
  },
];

