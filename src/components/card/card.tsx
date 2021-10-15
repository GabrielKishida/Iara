import { H3, H4, H5, Body } from "../typography";
import { VSeparator, HSeparator } from "../theme";
import { CardContainer, MockCircle } from "./card.style";
import React from "react";
import { Col, Row } from "../theme/grid";

interface ProfileCardProps {
  title: string;
  role?: string;
  subtitle?: string;
  description?: string;
}

export const Card: React.FC = (props) => {
  return <CardContainer>{props.children}</CardContainer>;
};

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  return (
    <CardContainer>
      <Row>
        <Col>
          <MockCircle />
        </Col>
        <HSeparator />
        <Col>
          <H3 white>{props.title}</H3>
          <VSeparator half />
          {props.role && (
            <div>
              <H4 white>{props.role}</H4>
            </div>
          )}
          {props.subtitle && (
            <div>
              <H5 white>{props.subtitle}</H5>
              <VSeparator half />
            </div>
          )}
          {props.description && (
            <div>
              <Body white>{props.description}</Body>
              <VSeparator half />
            </div>
          )}
        </Col>
      </Row>
    </CardContainer>
  );
};
