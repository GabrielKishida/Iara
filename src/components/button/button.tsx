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

export const DeleteButton = styled(Button).attrs(() => ({
  variant: "danger",
}))`
  font-weight: bold;
  font-family: "Montserrat", regular;
  font-size: 18px;
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

interface SocialMediaButtonProps {
  url: string;
}

export const SocialMediaButton = styled(Button).attrs(() => ({
  variant: "shadow-none",
}))`
  background-color: ${COLORS.areia};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  outline: none !important;
  margin: 5px;
  line-height: 20px;
  padding: 0;
  background-image: url(${(props: SocialMediaButtonProps) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
`;
