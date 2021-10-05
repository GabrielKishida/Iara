import styled from "styled-components";

export const SPACING = {
  xSmall: 8,
  small: 12,
  medium: 18,
  large: 24,
  xLarge: 32,
  huge: 48,
  xHuge: 64,
  borderRadius: 20,
};

interface SeparatorProps {
  half?: boolean;
}

export const VSeparator = styled.section`
  height: ${(props: SeparatorProps) =>
    props.half ? SPACING.small : SPACING.large}px;
`;

export const HSeparator = styled.section`
  width: ${(props: SeparatorProps) =>
    props.half ? SPACING.small : SPACING.large}px;
`;
