import { H3, H4, H5, Body } from "../typography";
import { VSeparator, HSeparator } from "../theme";
import { StyledNav, StyledLink, StyledItem } from "./links.style";
import React from "react";

export const Links: React.FC = (props) => {
  return (
    <StyledNav fill>
      <StyledItem>
        <StyledLink>
          <Body white>Home</Body>
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink>
          <Body white>Cursos</Body>
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink>
          <Body white>Trilhas</Body>
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink>
          <Body white>Atividades</Body>
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink>
          <Body white>Professores</Body>
        </StyledLink>
      </StyledItem>
    </StyledNav>
  );
};
