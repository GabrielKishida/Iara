import {
  AnswerButton,
  CardContainer,
  AnswerRow,
  ImageCardContainer,
  ImageRow,
} from "./QuestionCard.style";
import { Col } from "../theme/grid";
import { H4 } from "../typography";
import { COLORS } from "../theme";

export interface QuestionCardProps {
  title: string;
  image?: string;
  alternatives: string[];
}

export const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  const AlternativesRow1 = props.alternatives?.slice(0, 3);
  const AlternativesRow2 = props.alternatives?.slice(3);

  return (
    <CardContainer inputColor="white">
      <div>
        <H4>{props.title}</H4>
      </div>
      <ImageRow>
        <Col>
          <ImageCardContainer inputColor={COLORS.verdeEscuro}>
            <img src={props.image} />
          </ImageCardContainer>
        </Col>
      </ImageRow>
      <AnswerRow>
        {AlternativesRow1?.map((value) => {
          return (
            <AnswerButton>
              <H4 white>{value}</H4>
            </AnswerButton>
          );
        })}
      </AnswerRow>
      <AnswerRow>
        {AlternativesRow2?.map((value, index) => {
          return (
            <Col>
              <AnswerButton>
                <H4 white>{value}</H4>
              </AnswerButton>
            </Col>
          );
        })}
      </AnswerRow>
    </CardContainer>
  );
};
