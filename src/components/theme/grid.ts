import styled from "styled-components";
import { COLORS } from ".";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 64px)) 1fr;
  grid-template-rows: max-content;
  gap: 0px 32px;
  margin: 0;
  background-color: ${COLORS.xLightGray};
`;

export const FullWidthSection = styled.section`
  grid-column: 1 / span 14;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 64px)) 1fr;
  grid-template-rows: max-content;
  gap: 0rem 32px;
  margin: 0;
  padding-left: 32px;
  padding-right: 32px;
`;

export const MaxWidthSection = styled.section`
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 64px));
  grid-template-row: max-content;
  gap: 0rem 2rem;
  margin: 0;
  padding-left: 48px;
  padding-right: 48px;
`;

interface RowProps {
  start?: number;
  end?: number;
}

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  grid-column-start: ${(props: RowProps) => props.start ?? "1"};
  grid-column-end: ${(props: RowProps) => props.end ?? "12"};
`;

interface ColProps {
  size?: number;
  wrap?: boolean;
}

export const Col = styled.div`
  display: flex;
  ${(props: ColProps) => props.size ?? `flex: ${props.size}`}
  align-items: center;
`;
