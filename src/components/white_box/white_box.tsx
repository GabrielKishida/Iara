import styled from "styled-components";
import { COLORS, SPACING } from "../theme";
import { VBox } from "../theme/grid";

export const WhiteBox = styled(VBox)`
  background-color: ${COLORS.white};
  border-bottom-left-radius: ${SPACING.borderRadius}px;
  border-bottom-right-radius: ${SPACING.borderRadius}px;
`;
