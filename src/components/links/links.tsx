import { H3, H4, H5, Body } from "../typography";
import { VSeparator, HSeparator } from "../theme";
import { StyledNav, StyledLink, StyledItem } from "./links.style";
import React from "react";

export const Links: React.FC = (props) => {
  return (
    <StyledNav fill>
      <StyledItem>
        <StyledLink>
          <Body>Home</Body>
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink>
          <Body>Cursos</Body>
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink>
          <Body>Trilhas</Body>
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink>
          <Body>Atividades</Body>
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink>
          <Body>Professores</Body>
        </StyledLink>
      </StyledItem>
    </StyledNav>
  );
};
