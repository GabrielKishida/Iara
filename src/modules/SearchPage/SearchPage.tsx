import React, { useEffect, useState } from "react";
import {
  H3,
  H4,
  H5,
  Body,
  VSeparator,
  HSeparator,
  PrimaryButton,
} from "../../components";
import { Col, Grid, Row } from "../../components/theme/grid";
import {
  WhiteBox,
  RoundedWhiteBox,
} from "../../components/white_box/white_box";
import Form from "react-bootstrap/Form";
import { CardContainer } from "../../components/card/card.style";
import { COLORS } from "../../components/theme";
import { Link } from "react-router-dom";
import { postRequest } from "../../services/RequestService";
import { Course } from "../../models/course";
import { Footer } from "../../components/footer";

export const SearchPage: React.FC = () => {
  interface SearchObject {
    name: string;
    difficultyIsEasy: string;
    difficultyIsMedium: string;
    difficultyIsHard: string;
    durationIsShort: string;
    durationIsMedium: string;
    durationIsLong: string;
  }

  const [results, setResults] = useState<Course[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [form, setForm] = useState({
    filter_duration_short: "false",
    filter_duration_medium: "false",
    filter_duration_long: "false",
    filter_difficulty_easy: "false",
    filter_difficulty_medium: "false",
    filter_difficulty_hard: "false",
  });

  const setField = (field: string, value: any) => {
    setForm({
      ...form,
      [field]: value,
    });

    // if the search has already been submitted and the field changed is a filter,
    // submit again
    if (isSearching && field != "search") {
      handleSubmit(null);
    }
  };

  const handleSubmit = (e: any) => {
    if (e != null) {
      e.preventDefault();
      setIsSearching(true);
      const postObject: SearchObject = {
        name: e.target.elements.search.value,
        difficultyIsEasy: String(form.filter_difficulty_easy),
        difficultyIsMedium: String(form.filter_difficulty_medium),
        difficultyIsHard: String(form.filter_difficulty_hard),
        durationIsShort: String(form.filter_duration_short),
        durationIsMedium: String(form.filter_duration_medium),
        durationIsLong: String(form.filter_duration_long),
      };
      postRequest("course/search", postObject).then(setResults);
    }
  };

  return (
    <Grid>
      <Row>
        <WhiteBox>
          <Row>
            <Col>
              <H3>Pesquisa por curso</H3>
            </Col>
          </Row>
          <VSeparator />
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Form.Group controlId="search">
                    <Form.Control
                      onChange={(e) => setField("search", e.target.value)}
                      type="text"
                      placeholder="Pesquise aqui..."
                    />
                  </Form.Group>
                </Row>
                <VSeparator />
                <Row>
                  <PrimaryButton type="submit">Pesquisar</PrimaryButton>
                </Row>

                <VSeparator />
                <Row>
                  <Col>
                    <Row>
                      <Col>
                        <H5> Filtros </H5>
                      </Col>
                    </Row>
                    <VSeparator half />
                    <Row>
                      <Col size={1}>
                        <H5> Duração </H5>
                        <CardContainer color={COLORS.azulRio}>
                          <Row>
                            <Col>
                              <Row>
                                <Body white>
                                  <Form.Group controlId="filter_duration_short">
                                    <Form.Check
                                      onChange={(e) =>
                                        setField(
                                          "filter_duration_short",
                                          e.target.checked
                                        )
                                      }
                                      type={"checkbox"}
                                      id={"filter_duration_short"}
                                    />
                                  </Form.Group>
                                </Body>
                              </Row>
                              <Row>
                                <Body white>
                                  <Form.Group controlId="filter_duration_medium">
                                    <Form.Check
                                      onChange={(e) =>
                                        setField(
                                          "filter_duration_medium",
                                          e.target.checked
                                        )
                                      }
                                      type={"checkbox"}
                                      id={"filter_duration_medium"}
                                    />
                                  </Form.Group>
                                </Body>
                              </Row>
                              <Row>
                                <Body white>
                                  <Form.Group controlId="filter_duration_long">
                                    <Form.Check
                                      onChange={(e) =>
                                        setField(
                                          "filter_duration_long",
                                          e.target.checked
                                        )
                                      }
                                      type={"checkbox"}
                                      id={"filter_duration_long"}
                                    />
                                  </Form.Group>
                                </Body>
                              </Row>
                            </Col>
                            <Col>
                              <Row>
                                <HSeparator half />
                              </Row>
                              <Row>
                                <HSeparator half />
                              </Row>
                              <Row>
                                <HSeparator half />
                              </Row>
                            </Col>
                            <Col>
                              <Row>
                                <Body white>Curto</Body>
                              </Row>
                              <Row>
                                <Body white>Médio</Body>
                              </Row>
                              <Row>
                                <Body white>Longo</Body>
                              </Row>
                            </Col>
                          </Row>
                        </CardContainer>
                      </Col>
                      <HSeparator />
                      <Col size={1}>
                        <H5> Dificuldade </H5>
                        <CardContainer color={COLORS.azulRio}>
                          <Row>
                            <Col>
                              <Row>
                                <Body white>
                                  <Form.Group controlId="filter_difficulty_easy">
                                    <Form.Check
                                      onChange={(e) =>
                                        setField(
                                          "filter_difficulty_easy",
                                          e.target.checked
                                        )
                                      }
                                      type={"checkbox"}
                                      id={"filter_difficulty_easy"}
                                    />
                                  </Form.Group>
                                </Body>
                              </Row>
                              <Row>
                                <Body white>
                                  <Form.Group controlId="filter_difficulty_medium">
                                    <Form.Check
                                      onChange={(e) =>
                                        setField(
                                          "filter_difficulty_medium",
                                          e.target.checked
                                        )
                                      }
                                      type={"checkbox"}
                                      id={"filter_difficulty_medium"}
                                    />
                                  </Form.Group>
                                </Body>
                              </Row>
                              <Row>
                                <Body white>
                                  <Form.Group controlId="filter_difficulty_hard">
                                    <Form.Check
                                      onChange={(e) =>
                                        setField(
                                          "filter_difficulty_hard",
                                          e.target.checked
                                        )
                                      }
                                      type={"checkbox"}
                                      id={"filter_difficulty_hard"}
                                    />
                                  </Form.Group>
                                </Body>
                              </Row>
                            </Col>
                            <Col>
                              <Row>
                                <HSeparator half />
                              </Row>
                              <Row>
                                <HSeparator half />
                              </Row>
                              <Row>
                                <HSeparator half />
                              </Row>
                            </Col>
                            <Col>
                              <Row>
                                <Body white>Fácil</Body>
                              </Row>
                              <Row>
                                <Body white>Médio</Body>
                              </Row>
                              <Row>
                                <Body white>Difícil</Body>
                              </Row>
                            </Col>
                          </Row>
                        </CardContainer>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </WhiteBox>
      </Row>

      <VSeparator />

      {results.map((resultData) => (
        <React.Fragment key={resultData.id_course}>
          <Row id={String(resultData.id_course)}>
            <Col style={{ width: "100%" }}>
              <RoundedWhiteBox style={{ width: "30%" }}>
                <Row>
                  <Col>
                    <Link
                      to={"/course/" + resultData.id_course}
                      style={{ textDecoration: "none" }}
                    >
                      <H4> {resultData.name} </H4>
                    </Link>
                    <Body>
                      {" "}
                      Duração: {resultData.duration} - Dificuldade:{" "}
                      {resultData.difficulty}{" "}
                    </Body>
                    <VSeparator />
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
        </React.Fragment>
      ))}
    </Grid>
  );
};
