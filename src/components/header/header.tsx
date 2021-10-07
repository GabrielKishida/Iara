import { H3, H4, H5, BodyHeader, PageTitle } from "../typography";
import { VSeparator, HSeparator } from "../theme";
import { HeaderContainer, LogoCircle, PerfilCircle, HeaderTextContainer } from "./header.style";
import React from "react";
import { Col, Row } from "../theme/grid";
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
      <Row>
        <LogoCircle />
        <HSeparator />
        <PageTitle>Iara</PageTitle>
        <HSeparator/>
        <HSeparator />

        {props.isLogged ? (
          <div>
            <BodyHeader>Perfil</BodyHeader>
            <BodyHeader>Logout</BodyHeader>
          </div>
        ) : (
          <HeaderTextContainer>
            <BodyHeader>LogIn</BodyHeader>
            <BodyHeader>Cadastro</BodyHeader>
          </HeaderTextContainer>
        )}

        <HSeparator />
        <PerfilCircle />
      </Row>
    </HeaderContainer>
  );
};
