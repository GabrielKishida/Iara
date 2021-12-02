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

export interface QuestionCardProps {
  title: string;
  image?: string;
  alternatives: string[];
  creating?: boolean;
  onDelete?: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = (props) => {
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
            value && (
              <AnswerButton>
                <H4 white>{value}</H4>
              </AnswerButton>
            )
          );
        })}
      </AnswerRow>
      <AnswerRow>
        {AlternativesRow2?.map((value, index) => {
          return (
            value && (
              <Col>
                <AnswerButton>
                  <H4 white>{value}</H4>
                </AnswerButton>
              </Col>
            )
          );
        })}
      </AnswerRow>
    </CardContainer>
  );
};
