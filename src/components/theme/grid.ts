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
  display: flex;
  flex-direction: column;
  ${(props: ColProps) => props.size ?? `flex: ${props.size};`}
`;

export const VBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: ${SPACING.medium}px;
  justify-content: flex-start;
  align-self: center;
  flex-wrap: wrap;
`;
