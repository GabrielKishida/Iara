import styled from "styled-components";
import { COLORS } from ".";

export const Grid = styled.div`
  background-color: ${COLORS.xLightGray};
`;

export const Row = styled.div`
  display: flex;
`;

interface ColProps {
  size?: number;
  wrap?: boolean;
}

export const Col = styled.div`
  ${(props: ColProps) => props.size ?? `flex: ${props.size}`}
  align-items: center;
`;
