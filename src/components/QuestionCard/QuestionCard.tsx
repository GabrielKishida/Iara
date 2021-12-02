import {
  AnswerButton,
  CardContainer,
  AnswerRow,
  ImageCardContainer,
  ImageRow,
} from "./QuestionCard.style";
import { Col, Row } from "../theme/grid";
import { H4 } from "../typography";
import { COLORS } from "../theme";
import { DeleteButton } from "..";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

export interface QuestionCardProps {
  title: string;
  image?: string;
  alternatives?: Array<{
    id: number;
    text: string;
    correct: boolean;
  }>;
  creating?: boolean;
  onDelete?: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = (props) => {

  const checkCorrectAnswer = (correct: boolean) => {
    handleShow();
    setCorrectAnswer(correct);
  }

  const [correctAnswer, setCorrectAnswer] = useState(false);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const AlternativesRow1 = props.alternatives?.slice(0, 3);
  const AlternativesRow2 = props.alternatives?.slice(3);

  return (
    <CardContainer inputColor="white">
      <div>
        <Row justifyContent="space-between">
          <Col>
            <H4>{props.title}</H4>
          </Col>
          {props.creating && (
            <Col>
              <DeleteButton onClick={props.onDelete}>Deletar</DeleteButton>
            </Col>
          )}
        </Row>
      </div>
      {props.image && (
        <ImageRow>
          <Col>
            <ImageCardContainer inputColor={COLORS.verdeEscuro}>
              <img src={props.image} />
            </ImageCardContainer>
          </Col>
        </ImageRow>
      )}

      <AnswerRow>
        {AlternativesRow1?.map((value) => {
          return (
            value.text && (
              <AnswerButton
              onClick={() => checkCorrectAnswer(value.correct)}>
                <H4 white>{value.text}</H4>
              </AnswerButton>
            )
          );
        })}
      </AnswerRow>
      <AnswerRow>
        {AlternativesRow2?.map((value, index) => {
          return (
            value.text && (
              <Col>
                <AnswerButton
                onClick={() => checkCorrectAnswer(value.correct)}>
                  <H4 white>{value.text}</H4>
                </AnswerButton>
              </Col>
            )
          );
        })}
      </AnswerRow>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sua resposta está...</Modal.Title>
        </Modal.Header>
        {correctAnswer?
          <Modal.Body>Certa! Parabéns!</Modal.Body>
          :
          <Modal.Body>Errada! Tente novamente!</Modal.Body>
        }
        <Modal.Footer>
          <AnswerButton variant="secondary" onClick={handleClose}>
            Fechar
          </AnswerButton>
        </Modal.Footer>
      </Modal>
    </CardContainer>
  );
};
