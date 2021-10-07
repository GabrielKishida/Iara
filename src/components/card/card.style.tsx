import styled from "styled-components";
import { COLORS, SPACING } from "../theme";

export const CardContainer = styled.div`
  background-color: ${COLORS.verdeEscuro};
  border-radius: ${SPACING.borderRadius}px;
  padding: ${SPACING.medium}px;
  flex-direction: row;
`;

export const MockCircle = styled.div`
  background-color: ${COLORS.xLightGray};
  width: ${SPACING.xHuge * 2}px;
  height: ${SPACING.xHuge * 2}px;
  border-radius: ${SPACING.xHuge}px;
`;
