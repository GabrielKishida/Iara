import styled from "styled-components";
import { COLORS, SPACING } from "../theme";
import Button from "react-bootstrap/Button";

export const HeaderContainer = styled.div`
  class: "flex-container";
  display: flex;
  background-color: ${COLORS.verdeRio};
  border-radius: ${100};
  padding: ${10}px ${10}px;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const LogoCircle = styled.div`
  background-color: ${COLORS.areia};
  width: ${SPACING.medium * 2}px;
  height: ${SPACING.medium * 2}px;
  border-radius: ${SPACING.medium}px;
`;

export const PerfilCircle = styled.div`
  background-color: ${COLORS.areia};
  width: ${SPACING.medium * 2}px;
  height: ${SPACING.medium * 2}px;
  border-radius: ${SPACING.medium}px;
  display: flex;
`;

interface HeaderTextContainerProps {
  align?: "left" | "right";
}

export const HeaderTextContainer = styled.div`
  display: flex;
  ${(props: HeaderTextContainerProps) =>
    props.align === "left" ? "margin-right: auto;" : "margin-left: auto;"}
`;

export const HeaderLink = styled(Button).attrs(() => ({
  variant: "outline-link",
}))`
  color: ${COLORS.areia};
  font-weight: bold;
  font-family: "Montserrat", regular;
  font-size: 18px;
`;

export const HeaderTitleLink = styled(Button).attrs(() => ({
  variant: "outline-link",
}))`
  color: ${COLORS.areia};
  font-family: "Roboto", sans serif;
  font-weight: bold;
  font-size: 30px;
`;
