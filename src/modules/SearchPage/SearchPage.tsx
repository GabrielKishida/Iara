import React, { useEffect, useState } from "react";
import { H3, H4, H5, Body, VSeparator, HSeparator } from "../../components";
import { Col, Grid, Row } from "../../components/theme/grid";
import { WhiteBox, RoundedWhiteBox } from "../../components/white_box/white_box";
import Form from "react-bootstrap/Form";
import { CardContainer } from "../../components/card/card.style";
import { COLORS } from "../../components/theme";
import MOCK_RESULTS from "./SearchResultsMock";

export const SearchPage: React.FC = () => {

  interface Result {
    id: number;
    name: string;
    duration: string;
    difficulty: string;
    description: string;
  }
  const [results, setResults] = useState<Result[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [form, setForm] = useState({});

  const setField = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value
    })

    // if the search has already been submitted and the field changed is a filter,
    // submit again
    if (isSearching && field != 'search') {
      handleSubmit(null);
    }
  }

  const handleSubmit = (e: any) => {
    if (e != null) {
      e.preventDefault();
      setIsSearching(true);
      console.log('Pesquisa submetida');
    } else {
      console.log('Filtro alterado');
    }

  }

  useEffect(() => {
    if (isSearching)
      setResults(MOCK_RESULTS);
    else
      setResults([]);
  }, [isSearching]);

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
                    <Form.Control onChange={e => setField('search', e.target.value)} type="text" placeholder="Pesquise aqui..." />
                  </Form.Group>
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
                                  <Form.Check
                                    onChange={e => setField('filter-duration-short', String(e.target.checked))}
                                    type={"checkbox"}
                                    id={"filter-duration-short"}
                                  />
                                </Body>
                              </Row>
                              <Row>
                                <Body white>
                                  <Form.Check
                                    onChange={e => setField('filter-duration-medium', String(e.target.checked))}
                                    type={"checkbox"}
                                    id={"filter-duration-medium"}
                                  />
                                </Body>
                              </Row>
                              <Row>
                                <Body white>
                                  <Form.Check
                                    onChange={e => setField('filter-duration-long', String(e.target.checked))}
                                    type={"checkbox"}
                                    id={"filter-duration-long"}
                                  />
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
                                <Body white>
                                  Curto
                                </Body>
                              </Row>
                              <Row>
                                <Body white>
                                  Médio
                                </Body>
                              </Row>
                              <Row>
                                <Body white>
                                  Longo
                                </Body>
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
                                  <Form.Check
                                    onChange={e => setField('filter-difficulty-easy', String(e.target.checked))}
                                    type={"checkbox"}
                                    id={"filter-difficulty-easy"}
                                  />
                                </Body>
                              </Row>
                              <Row>
                                <Body white>
                                  <Form.Check
                                    onChange={e => setField('filter-difficulty-medium', String(e.target.checked))}
                                    type={"checkbox"}
                                    id={"filter-difficulty-medium"}
                                  />
                                </Body>
                              </Row>
                              <Row>
                                <Body white>
                                  <Form.Check
                                    onChange={e => setField('filter-difficulty-hard', String(e.target.checked))}
                                    type={"checkbox"}
                                    id={"filter-difficulty-hard"}
                                  />
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
                                <Body white>
                                  Fácil
                                </Body>
                              </Row>
                              <Row>
                                <Body white>
                                  Médio
                                </Body>
                              </Row>
                              <Row>
                                <Body white>
                                  Difícil
                                </Body>
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
        <React.Fragment key={`result-course-${resultData.id}`}>
          <Row id={`result-course-${resultData.id}`}>
            <Col>
              <RoundedWhiteBox>
                <Row>
                  <Col>
                    <H4> {resultData.name} </H4>
                    <Body> Duração: {resultData.duration} - Dificuldade: {resultData.difficulty} </Body>
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
      ))
      }
    </Grid >
  );
}


