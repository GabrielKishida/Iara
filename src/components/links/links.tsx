import { Body } from "../typography";
import { StyledNav, StyledLink, StyledItem } from "./links.style";
import React from "react";

import { Link } from "react-router-dom";

export const Links: React.FC = (props) => {
  const getUserId = () => {
    return localStorage.getItem("userId");
  };

  return (
    <StyledNav fill>
      <StyledItem>
        <StyledLink>
          <Link to={"/user/" + getUserId()} style={{ textDecoration: "none" }}>
            <Body white>Usuário</Body>
          </Link>
        </StyledLink>
      </StyledItem>

      <StyledItem>
        <StyledLink>
          <Link to="/search" style={{ textDecoration: "none" }}>
            <Body white>Pesquisar Cursos</Body>
          </Link>
        </StyledLink>
      </StyledItem>
    </StyledNav>
  );
};
