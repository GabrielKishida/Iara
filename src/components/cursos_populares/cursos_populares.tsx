import { H3, H4, H5, Body } from "../typography";
import { VSeparator, HSeparator } from "../theme";
import {
  CursosContainer,
  StyledCard,
  Stripe,
  StyledLink,
  StyledCardBody,
} from "./cursos_populares.style";
import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const CursosPopulares: React.FC = (props) => {
  return (
    <CursosContainer>
      <H3>Cursos Populares</H3>

      <StyledLink to="/course" style={{ textDecoration: "none" }}>
        <StyledCard>
          <Stripe>
            <StyledCardBody>
              <H5 className="col">Curso de Ritmo II</H5>
            </StyledCardBody>
          </Stripe>
        </StyledCard>
      </StyledLink>

      <StyledLink to="/course" style={{ textDecoration: "none" }}>
        <StyledCard>
          <Stripe>
            <Card.Body>
              <H5 className="col">Curso de Harmonia IV</H5>
            </Card.Body>
          </Stripe>
        </StyledCard>
      </StyledLink>

      <Link to="/course" style={{ textDecoration: "none" }}>
        <StyledCard>
          <Stripe>
            <Card.Body>
              <H5 className="col">Curso de Partitura</H5>
            </Card.Body>
          </Stripe>
        </StyledCard>
      </Link>
    </CursosContainer>
  );
};
