import styled from "styled-components";
import { COLORS, SPACING } from "../theme";
import Button from "react-bootstrap/Button";

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

export const PrimaryButton = styled(Button).attrs(() => ({
  variant: "outline-success",
}))`
  color: ${COLORS.areia};
  font-weight: bold;
  font-family: "Montserrat", regular;
  font-size: 18px;
  background-color: ${COLORS.verdeEscuro};
  border-radius: ${SPACING.borderRadius}px;
  padding: ${SPACING.medium}px;
`;

interface LinkButtonProps {
  delete?: boolean;
}

export const LinkButton = styled(Button).attrs(() => ({
  variant: "link",
}))`
  color: ${(props: LinkButtonProps) =>
    props.delete ? COLORS.red : COLORS.verdeEscuro};
  font-weight: bold;
  font-family: "Montserrat", regular;
  font-size: 18px;
  padding: ${SPACING.medium}px;
  max-width: 200px;
`;
