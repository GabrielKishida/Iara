import { H3, H4, H5, Body } from "../typography";
import { StyledNav, StyledLink, StyledItem } from "./links.style";
import React from "react";
import { Link } from "react-router-dom";

export const Links: React.FC = (props) => {
  return (
    <StyledNav fill>
      <StyledItem>
        <StyledLink>
          <Link to="/">
            <Body white>Home</Body>
          </Link>
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink>
          <Link to="/user">
            <Body white>Usuário</Body>
          </Link>
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink>
          <Link to="/activity">
            <Body white>Atividade</Body>
          </Link>
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink>
          <Link to="/teachers">
            <Body white>Professores</Body>
          </Link>
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink>
          <Link to="/search">
            <Body white>Pesquisa</Body>
          </Link>
        </StyledLink>
      </StyledItem>
    </StyledNav>
  );
};
