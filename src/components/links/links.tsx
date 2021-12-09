import { Body } from "../typography";
import { StyledNav, StyledLink, StyledItem } from "./links.style";
import React from "react";

import { Link } from "react-router-dom";
import { LoginContext } from "../../services/LoginService";

export const Links: React.FC = (props) => {
  const { userId } = React.useContext(LoginContext);

  const handleClickUser = React.useCallback(() => {
    if (!!userId) {
      return "/user/" + userId;
    } else {
      return "/login";
    }
  }, [userId]);

  return (
    <StyledNav fill>
      <StyledItem>
        <StyledLink>
          <Link to={handleClickUser()} style={{ textDecoration: "none" }}>
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
