import styled from "styled-components";
import { COLORS, SPACING } from "../theme";

export const FooterContainer = styled.div`
  class: "flex-container";
  display: flex;
  background-color: ${COLORS.verdeEscuro};
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

export const FooterTextContainer = styled.div`
  margin-left: auto;
`;



