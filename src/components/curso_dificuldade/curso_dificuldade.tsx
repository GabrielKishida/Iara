import { H3, H4, H5, Body } from "../typography";
import { VSeparator, HSeparator } from "../theme";
import { DificuldadesContainer, StyledCard } from "./curso_dificuldade.style";
import React from "react";
import { Col, Row } from "../theme/grid";
import { useState } from "react";


export const CursoDificuldade: React.FC = (
  props
) => {

  return (
    <DificuldadesContainer>
      <Row>
        <H3>Explore nossos cursos</H3>
      </Row>
      <Row>
        <StyledCard>
          <StyledCard.Img variant="top" src="../assets/iamges/facil.png"/>
          <StyledCard.Body>
            <StyledCard.Text>
              <H5>Fácil</H5>
            </StyledCard.Text>
          </StyledCard.Body>
        </StyledCard>
      </Row>

    </DificuldadesContainer>
  );
};
