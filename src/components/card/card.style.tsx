import styled from "styled-components";
import { COLORS, SPACING } from "../theme";

interface CardContainerProps {
  opacity?: number;
  color?: string;
}

export const CardContainer = styled.div`
  background-color: ${(props: CardContainerProps) =>
    props.color ?? COLORS.verdeEscuro};
  border-radius: ${SPACING.borderRadius}px;
  padding: ${SPACING.medium}px;
  flex-direction: row;
  ${(props: CardContainerProps) =>
    props.opacity && `opacity: ${props.opacity}`};
`;

export const MockCircle = styled.div`
  background-color: ${COLORS.xLightGray};
  width: ${SPACING.xHuge * 2}px;
  height: ${SPACING.xHuge * 2}px;
  border-radius: ${SPACING.xHuge}px;
`;

export const MockSmallCircle = styled.div`
  background-color: ${COLORS.xLightGray};
  width: ${SPACING.xLarge * 2}px;
  height: ${SPACING.xLarge * 2}px;
  border-radius: ${SPACING.xLarge}px;
`;
