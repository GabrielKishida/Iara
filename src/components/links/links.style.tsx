import styled from "styled-components";
import { COLORS, SPACING } from "../theme";
import Nav from "react-bootstrap/Nav";

export const StyledNav = styled(Nav)`
  background-color: ${COLORS.darkGray};
  margin: auto;
  text-align: justify;
  width: 100%;
  box-shadow: 0px 2px 5px black;
  z-index: 10;
`;

export const StyledItem = styled(Nav.Item)``;

export const StyledLink = styled(Nav.Link)``;
