import { HeaderLink, HeaderTitleLink } from "../button";
import { HSeparator } from "../theme";
import {
  HeaderContainer,
  LogoCircle,
  PerfilCircle,
  HeaderTextContainer,
} from "./header.style";
import { Link } from "react-router-dom";
import React from "react";
import { LoginContext } from "../../services/LoginService";

export const Header: React.FC = (props) => {
  return (
    <LoginContext.Consumer>
      {({ userId, handleLogout }) => (
        <HeaderContainer>
          <LogoCircle />
          <HSeparator />
          <HeaderTextContainer align="left">
            <Link to="/" style={{ textDecoration: "none" }}>
              <HeaderTitleLink>Iara</HeaderTitleLink>
            </Link>
          </HeaderTextContainer>
          <HSeparator />
          <HSeparator />

          {!!userId ? (
            <HeaderTextContainer>
              <Link to={"/user/" + userId} style={{ textDecoration: "none" }}>
                <HeaderLink bold>Perfil</HeaderLink>
              </Link>
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                onClick={handleLogout}
              >
                <HeaderLink bold>Logout</HeaderLink>
              </Link>
            </HeaderTextContainer>
          ) : (
            <HeaderTextContainer>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <HeaderLink>Login</HeaderLink>
              </Link>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <HeaderLink bold>Cadastro</HeaderLink>
              </Link>
            </HeaderTextContainer>
          )}

          <HSeparator />
          <PerfilCircle />
        </HeaderContainer>
      )}
    </LoginContext.Consumer>
  );
};
