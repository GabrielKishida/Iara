import styled from "styled-components";
import { SPACING } from "../theme";
import { Row } from "../theme/grid";

interface CardContainerProps {
    inputColor: string; 
  }

export const CardContainer = styled.div<CardContainerProps>`
  display:flex;
  background-color: ${({inputColor}) => inputColor};
  border-radius: ${SPACING.borderRadius}px;
  padding: ${SPACING.medium}px;
  flex-direction: column;
  justify-content: center;
`;

export const ImageCardContainer = styled(CardContainer)`
    margin: 30px 0px;
    width: auto;
`

export const ImageRow = styled(Row)`
    justify-content: center;
`