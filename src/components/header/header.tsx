import { H3, H4, H5 } from "../typography";
import { HeaderLink, HeaderTitleLink } from "../button";
import { VSeparator, HSeparator } from "../theme";
import {
  HeaderContainer,
  LogoCircle,
  PerfilCircle,
  HeaderTextContainer,
} from "./header.style";
import React from "react";
import { useState } from "react";

interface HeaderConstitutionProps {
  role?: string;
  isLogged?: boolean;
}

/**export const Header: React.FC: = (props) => {
  return <HeaderContainer>{props.children}</HeaderContainer>;
};**/

export const HeaderConstitution: React.FC<HeaderConstitutionProps> = (
  props
) => {
  const [isLogged, setLogged] = useState<boolean>(false);

  return (
    <HeaderContainer>
      <LogoCircle />
      <HSeparator />
      <HeaderTextContainer align="left">
        <HeaderTitleLink>Iara</HeaderTitleLink>
      </HeaderTextContainer>
      <HSeparator />
      <HSeparator />

      {props.isLogged ? (
        <HeaderTextContainer>
          <HeaderLink bold>Perfil</HeaderLink>
          <HeaderLink bold>Logout</HeaderLink>
        </HeaderTextContainer>
      ) : (
        <HeaderTextContainer>
          <HeaderLink>Login</HeaderLink>
          <HeaderLink bold>Cadastro</HeaderLink>
        </HeaderTextContainer>
      )}

      <HSeparator />
      <PerfilCircle />
    </HeaderContainer>
  );
};
