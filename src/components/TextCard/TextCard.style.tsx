import styled from "styled-components";
import { SPACING } from "../theme";
import { Row } from "../theme/grid";

interface CardContainerProps {
    inputColor: string; 
  }

export const CardContainer = styled.div<CardContainerProps>`
  class: "flex-container";
  background-color: ${({inputColor}) => inputColor};
  border-radius: ${SPACING.borderRadius}px;
  padding: ${SPACING.medium}px;
  flex-direction: row;
  width: 40%;
  flex: 0 0 auto;
  justify-content: center;
  padding: 150px, 150px;
  margin: 100px 0; 
`;

export const ImageCardContainer = styled(CardContainer)`
    margin: 30px 0px;
    width: auto;
`

export const ImageRow = styled(Row)`
    justify-content: center;
`