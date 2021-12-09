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
  huge?: boolean;
}

export const VSeparator = styled.div`
  height: ${(props: SeparatorProps) =>
    props.half ? SPACING.small : props.huge ? SPACING.xHuge : SPACING.large}px;
`;

export const BigHSeparator = styled.div`
  width: ${SPACING.xHuge}px;
`;

export const HSeparator = styled.div`
  width: ${(props: SeparatorProps) =>
    props.half ? SPACING.small : props.huge ? SPACING.xHuge : SPACING.large}px;
`;
