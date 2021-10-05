import styled from "styled-components";
import { COLORS } from "../theme";

interface TypographyProps {
  white?: boolean;
}

export const H1 = styled.text`
  color: ${(props: TypographyProps) =>
    props.white ? COLORS.xLightGray : COLORS.xDarkGray};
  font-family: "Roboto", sans serif;
  font-weight: bold;
  font-size: 92px;
`;

export const H2 = styled.text`
  color: ${(props: TypographyProps) =>
    props.white ? COLORS.xLightGray : COLORS.xDarkGray};
  font-family: "Roboto", sans serif;
  font-weight: bold;
  font-size: 72px;
`;

export const H3 = styled.text`
  color: ${(props: TypographyProps) =>
    props.white ? COLORS.xLightGray : COLORS.xDarkGray};
  font-family: "Roboto", sans serif;
  font-weight: bold;
  font-size: 48px;
`;

export const H4 = styled.text`
  color: ${(props: TypographyProps) =>
    props.white ? COLORS.xLightGray : COLORS.xDarkGray};
  font-family: "Roboto", sans serif;
  font-size: 34px;
`;

export const H5 = styled.text`
  color: ${(props: TypographyProps) =>
    props.white ? COLORS.xLightGray : COLORS.xDarkGray};
  font-family: "Roboto", sans serif;
  font-size: 24px;
`;

export const LinkText = styled.text`
  color: ${(props: TypographyProps) =>
    props.white ? COLORS.xLightGray : COLORS.xDarkGray};
  font-family: "Roboto", sans serif;
  font-size: 24px;
  text-decoration: underline;
`;

export const Body = styled.text`
  color: ${(props: TypographyProps) =>
    props.white ? COLORS.xLightGray : COLORS.xDarkGray};
  font-family: "Montserrat", regular;
  font-size: 18px;
`;

export const BodySecondary = styled.text`
  color: ${(props: TypographyProps) =>
    props.white ? COLORS.xLightGray : COLORS.xDarkGray};
  font-family: "Montserrat", regular;
  font-size: 14px;
`;
