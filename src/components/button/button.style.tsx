import styled from "styled-components";
import { COLORS } from "../theme";

interface LinkButtonStyledProps {
  isClicked?: boolean;
}

export const LinkButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props: LinkButtonStyledProps) =>
    props.isClicked ? COLORS.verdeClaro : COLORS.verdeEscuro};
  font-size: 24px;
  text-decoration: underline;
  cursor: pointer;
`;
