import { CardContainer } from "./card.style";
import React from "react";

export const Card: React.FC = (props) => {
  return <CardContainer>{props.children}</CardContainer>;
};
