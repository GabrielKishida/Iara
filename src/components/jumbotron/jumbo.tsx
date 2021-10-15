import { H3, H4, H5, Body, BodyHeader } from "../typography";
import { VSeparator, HSeparator } from "../theme";
import React from "react";
//import Jumbotron from 'react-bootstrap/Nav'
import { JumbotronContainer } from "./jumbo.style";
import { Row } from "../theme/grid";
import { StyledButton } from "./jumbo.style";

/**export const Header: React.FC: = (props) => {
  return <HeaderContainer>{props.children}</HeaderContainer>;
};**/

export const Jumbotron: React.FC = (props) => {
  return (
    <JumbotronContainer>
      <H3>Bach mais longe!</H3>
      <Row justifyContent={"flex-start"}>
        <Body>
          Com os novos cursos da Iara, aprender teoria musical se tornou muito
          mais legal!
        </Body>
      </Row>
      <Row justifyContent={"flex-start"}>
        <StyledButton>
          <BodyHeader bold> Comece Agora!</BodyHeader>
        </StyledButton>
      </Row>
    </JumbotronContainer>
  );
};
