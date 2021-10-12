import styled from "styled-components";
import { COLORS, SPACING } from "../theme";
import Button from "react-bootstrap/Button"


export const JumbotronContainer = styled.div.attrs(() => ({
  className: 'p-5 mb-4 bg-light'
}))`
  width: 100%;
`;

export const StyledButton = styled(Button).attrs(() => ({
  variant:"outline-success"
}))`
  background-color: ${COLORS.verdeEscuro};
  border-radius: 20px;
  margin: 10px;
  padding: 20px;
`;