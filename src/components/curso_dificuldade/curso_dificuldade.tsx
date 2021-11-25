import { H3, H5 } from "../typography";
import {
  DificuldadesContainer,
  StyledCard,
  StyledCardGroup,
} from "./curso_dificuldade.style";
import React from "react";
import { Link } from "react-router-dom";
import * as url_facil from "../assets/images/facil.png";
import * as url_medio from "../assets/images/medio.png";
import * as url_dificil from "../assets/images/dificil.png";

export const CursoDificuldade: React.FC = (props) => {
  return (
    <DificuldadesContainer>
      <H3>Explore nossos cursos</H3>
      <StyledCardGroup>
        <StyledCard>
          <Link to="/course/1" style={{ textDecoration: "none" }}>
            <StyledCard.Img variant="top" src={url_facil.default} />
            <StyledCard.Body>
              <StyledCard.Text>
                <H5>Fácil</H5>
              </StyledCard.Text>
            </StyledCard.Body>
          </Link>
        </StyledCard>

        <StyledCard>
          <Link to="/course/2" style={{ textDecoration: "none" }}>
            <StyledCard.Img variant="top" src={url_medio.default} />
            <StyledCard.Body>
              <StyledCard.Text>
                <H5>Médio</H5>
              </StyledCard.Text>
            </StyledCard.Body>
          </Link>
        </StyledCard>

        <StyledCard>
          <Link to="/course/3" style={{ textDecoration: "none" }}>
            <StyledCard.Img variant="top" src={url_dificil.default} />
            <StyledCard.Body>
              <StyledCard.Text>
                <H5>Difícil</H5>
              </StyledCard.Text>
            </StyledCard.Body>
          </Link>
        </StyledCard>
      </StyledCardGroup>
    </DificuldadesContainer>
  );
};
