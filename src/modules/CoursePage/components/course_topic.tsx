import styled from "styled-components";
import { COLORS, SPACING } from "../../../components/theme";

export const TopicsContainer = styled.div`
  display: flex;
  background-color: ${COLORS.white};
  border-radius: ${SPACING.borderRadius}px;
`;

export const MockCircle = styled.div`
  background-color: ${COLORS.xLightGray};
  width: ${SPACING.xHuge * 2}px;
  height: ${SPACING.xHuge * 2}px;
  border-radius: ${SPACING.xHuge}px;
`;
