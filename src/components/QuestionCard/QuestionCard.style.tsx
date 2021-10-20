import styled from "styled-components";
import { SPACING } from "../theme";
import { Row } from "../theme/grid";
import { PrimaryButton } from "../button";

interface CardContainerProps {
    inputColor: string; 
  }

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  width: 100%;
  class: "flex-container";
  background-color: ${({inputColor}) => inputColor};
  border-radius: ${SPACING.borderRadius}px;
  padding: ${SPACING.medium}px;
  flex-direction: column;
`;

export const ImageCardContainer = styled(CardContainer)`
    margin: 30px 0px;
    width: auto;
`

export const ImageRow = styled(Row)`
    justify-content: center;
`

export const AnswerButton = styled(PrimaryButton)`
  min-width: 100px;
`;

export const AnswerRow = styled(Row)`
  justify-content: space-evenly;
  margin: 15px 0px;
`;