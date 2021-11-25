import { H4, Body } from "../typography";
import { VSeparator, HSeparator, COLORS } from "../theme";
import { CardContainer, MockCircle, MockSmallCircle } from "./card.style";
import React from "react";
import { Col, Row } from "../theme/grid";
import ProgressBar from "react-bootstrap/ProgressBar";

interface ClassCardProps {
  name: string;
  classType: "inProgress" | "finished" | "teacher";
  description?: string;
  progress?: number;
  onClick?: () => void;
}

export const ClassCard: React.FC<ClassCardProps> = (props) => {
  const [cardOpacity, setCardOpacity] = React.useState(1.0);

  const cardColor =
    props.classType === "inProgress"
      ? COLORS.verdeEscuro
      : props.classType === "finished"
      ? COLORS.darkGray
      : props.classType === "teacher"
      ? COLORS.marrom
      : COLORS.xDarkGray;

  return (
    <CardContainer
      color={cardColor}
      opacity={cardOpacity}
      onClick={props.onClick}
      onPointerEnter={() => setCardOpacity(0.8)}
      onPointerLeave={() => setCardOpacity(1.0)}
    >
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

export const CreateClassCard: React.FC = (props) => {
  return (
    <CardContainer color={COLORS.azulRio}>
      <Row>
        <Col>
          <MockSmallCircle />
        </Col>
        <HSeparator />
        <Col>
          <H4 white>{"Criar Aula"}</H4>
          <VSeparator half />
          <div>
            <Body white>{"Crie conteúdo para seus alunos"}</Body>
            <VSeparator half />
          </div>
        </Col>
      </Row>
    </CardContainer>
  );
};
