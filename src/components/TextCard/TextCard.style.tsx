import styled from "styled-components";
import { COLORS, SPACING } from "../theme";
import { Col, Row } from "../theme/grid";

interface CardContainerProps {
    inputColor: string; 
  }

export const CardContainer = styled.div<CardContainerProps>`
  class: "flex-container";
  background-color: ${({inputColor}) => inputColor};
  border-radius: ${SPACING.borderRadius}px;
  padding: ${SPACING.medium}px;
  flex-direction: row;
  max-width: 50%;
  flex: 0 0 auto;
  justify-content: center;
  padding: 150px, 150px;
`;

export const ImageCardContainer = styled(CardContainer)`
    margin: 30px 0px;
    max-width: 100%;
`

export const ImageRow = styled(Row)`
    justify-content: center;
`