import { H3, H4, H5 } from "../typography";
import { HeaderLink, HeaderTitleLink } from "../button";
import { VSeparator, HSeparator } from "../theme";
import {
  HeaderContainer,
  LogoCircle,
  PerfilCircle,
  HeaderTextContainer,
} from "./header.style";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";

interface HeaderProps {
  role?: string;
  isLogged?: boolean;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const [isLogged, setLogged] = useState<boolean>(false);

  return (
    <HeaderContainer>
      <LogoCircle />
      <HSeparator />
      <HeaderTextContainer align="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <HeaderTitleLink>Iara</HeaderTitleLink>
        </Link>
      </HeaderTextContainer>
      <HSeparator />
      <HSeparator />

      {props.isLogged ? (
        <HeaderTextContainer>
          <Link to="/user" style={{ textDecoration: 'none' }}>
            <HeaderLink bold>Perfil</HeaderLink>
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <HeaderLink bold>Logout</HeaderLink>
          </Link>
        </HeaderTextContainer>
      ) : (
        <HeaderTextContainer>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <HeaderLink>Login</HeaderLink>
          </Link>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <HeaderLink bold>Cadastro</HeaderLink>
          </Link>
        </HeaderTextContainer>
      )}

      <HSeparator />
      <PerfilCircle />
    </HeaderContainer>
  );
};
