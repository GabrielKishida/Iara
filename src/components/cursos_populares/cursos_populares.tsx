import { H3, H4, H5, Body } from "../typography";
import { VSeparator, HSeparator } from "../theme";
import { CursosContainer, StyledCard, StyledCardGroup, Stripe, StyledLink} from "./cursos_populares.style";
import React from "react";
import { Col, Grid, Row } from "../theme/grid";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


export const CursosPopulares: React.FC = (
  props
) => {

  return (
    <CursosContainer>  
      <H3>Cursos Populares</H3>
  
      <StyledLink to="/course" style={{ textDecoration: 'none' }}>
      <StyledCard>
        <Stripe/>
        <Card.Body>
          <H5 className="col">Curso 1</H5>
        </Card.Body>
      </StyledCard>
      </StyledLink>

      <StyledLink to="/course" style={{ textDecoration: 'none'}}>
      <StyledCard>
        <Stripe/>
        <Card.Body>
          <H5 className="col">Curso 2</H5>
        </Card.Body>
      </StyledCard>
      </StyledLink>
      

      <Link to="/course" style={{ textDecoration: 'none' }}>
      <StyledCard>
        <Stripe/>
        <Card.Body>
          <H5 className="col">Curso 3</H5>
        </Card.Body>
      </StyledCard>
      </Link>

    </CursosContainer>
  );
};
