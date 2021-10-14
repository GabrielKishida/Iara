import React from "react";
import { LinkButtonStyled } from "./button.style";

interface LinkButtonProps {
  title: string;
  onClick?: () => void;
}

export const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setIsClicked(true);
    props.onClick?.();
  };

  return (
    <LinkButtonStyled onClick={handleClick} isClicked={isClicked}>
      {props.title}
    </LinkButtonStyled>
  );
};
