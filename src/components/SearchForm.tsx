import { withFormik, Form, Field } from "formik";
import { H1, ProfileCard, VSeparator, HSeparator } from "./";
import { CursoDificuldade } from "./curso_dificuldade";
import { HeaderConstitution } from "./header";
import { Jumbotron } from "./jumbotron";
import { Links } from "./links";
import { Col, DivLine, Grid, Row } from "./theme/grid";
import { WhiteBox, RoundedWhiteBox } from "./white_box/white_box";
import { H3, H2, H4, H5, Body } from "./typography";
import React from "react";
import { CardContainer } from "./card/card.style";
import { COLORS } from "./theme";

const SearchForm = withFormik({
  mapPropsToValues: () => ({
    searching: '',
    
  }),
  handleSubmit: values => {
    handleSubmit(values);
  }
})

const handleSubmit = (values: any)  => {
  console.log(values);
}

const SearchFormStructure = () => (
  <Row>
    <Col>
      <Form>
        <Row >
          <Field type="searching" name="searching" />
        </Row>
        <VSeparator />
        <Row>
          <Col>
            <Row>
              <Col>
              <H5> Filtros </H5>
              </Col>
            </Row>
            <VSeparator />
            <Row>
              <Col size={1}>
                <H5> Duração </H5>
                <CardContainer color={COLORS.azulRio}>
                  <Row>
                    <Col>
                      <Row>
                        <Body white>
                          <Field type="checkbox" name="duration" value="curto" />
                        </Body>
                      </Row>
                      <Row>
                        <Body white>
                          <Field type="checkbox" name="duration" value="medio" />
                        </Body>
                      </Row>
                      <Row>
                        <Body white>
                          <Field type="checkbox" name="duration" value="longo" />
                        </Body>
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
              <HSeparator/>
              <Col size={1}>
                <H5> Dificuldade </H5>
                <CardContainer color={COLORS.azulRio}>
                  <Row>
                    <Col>
                      <Row>
                        <Body white>
                          <Field type="checkbox" name="difficulty" value="facil" />
                        </Body>
                      </Row>
                      <Row>
                        <Body white>
                          <Field type="checkbox" name="difficulty" value="medio" />
                        </Body>
                      </Row>
                      <Row>
                        <Body white>
                          <Field type="checkbox" name="difficulty" value="dificil" />
                        </Body>
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
);

export default SearchForm(SearchFormStructure);