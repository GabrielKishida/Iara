import styled from "styled-components";
import { COLORS, SPACING } from "../theme";

export const HeaderContainer = styled.div`
  class: "flex-container";
  background-color: ${COLORS.azulRio};
  border-radius: ${100};
  padding: ${10}px ${10}px;
  flex-direction: row;
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

export const HeaderTextContainer = styled.div`
  margin-left: auto;
  vertical-align: middle;
`;
