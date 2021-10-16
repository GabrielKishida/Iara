import { H4, Body } from "../typography";
import { VSeparator, HSeparator, COLORS } from "../theme";
import { CardContainer, MockSmallCircle } from "./card.style";
import React from "react";
import { Col, Row } from "../theme/grid";
import ProgressBar from "react-bootstrap/ProgressBar";

interface ClassCardProps {
  name: string;
  classType: "inProgress" | "finished";
  description?: string;
  progress?: number;
}

export const ClassCard: React.FC<ClassCardProps> = (props) => {
  const cardColor =
    props.classType === "inProgress" ? COLORS.verdeEscuro : COLORS.darkGray;
  return (
    <CardContainer color={cardColor}>
      <Row>
        <Col>
          <MockSmallCircle />
          {props.progress && (
            <div>
              <VSeparator half />
              <H4 white>{props.progress + "%"}</H4>
            </div>
          )}
        </Col>
        <HSeparator />
        <Col>
          {props.progress && <ProgressBar now={props.progress} />}
          <H4 white>{props.name}</H4>
          <VSeparator half />
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
