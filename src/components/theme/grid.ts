import styled from "styled-components";
import { COLORS, SPACING } from ".";

export const Grid = styled.div`
  background-color: ${COLORS.xLightGray};
`;

interface RowProps {
  justifyContent?: string;
}

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props: RowProps) =>
    props.justifyContent ?? "space-evenly"};
`;

interface ColProps {
  size?: number;
  wrap?: boolean;
}

export const DivLine = styled.div`
  height: 1px;
  width: auto;
  background-color: ${COLORS.gray};
`;

export const Col = styled.div`
  ${(props: ColProps) => props.size ?? `flex: ${props.size}`}
  align-items: center;
`;
