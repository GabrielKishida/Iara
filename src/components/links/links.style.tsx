import styled from "styled-components";
import { COLORS, SPACING } from "../theme";
import Nav from "react-bootstrap/Nav";

export const StyledNav = styled(Nav)`
  background-color: ${COLORS.xLightGray};
  margin: auto;
  text-align: justify;
  width: 100%;
`;

export const StyledItem = styled(Nav.Item)``;

export const StyledLink = styled(Nav.Link)``;
