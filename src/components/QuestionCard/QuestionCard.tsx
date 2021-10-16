import { AnswerButton, CardContainer, AnswerRow, ImageCardContainer, ImageRow } from "./QuestionCard.style";
import { Col, Row } from "../theme/grid";
import { H4 } from "../typography";
import QuestionCardMock from "./QuestionCardMock";
import { COLORS } from "../theme";

export const QuestionCard: React.FC = () => {
  const AlternativesRow1 = QuestionCardMock.alternatives.slice(0,3);
  const AlternativesRow2 = QuestionCardMock.alternatives.slice(3); 

  return (
    <CardContainer inputColor="white">
      <div>
        <H4> {QuestionCardMock.title} </H4>
      </div>
      <ImageRow>
        <Col>
          <ImageCardContainer inputColor={COLORS.verdeEscuro}>
            <img src={QuestionCardMock.image}/>
          </ImageCardContainer>
        </Col>
      </ImageRow>
      <AnswerRow>
        {AlternativesRow1.map((value, index) =>{
          return (
            <AnswerButton>
              <H4> 
                {value}
              </H4>
            </AnswerButton>
          )
        })}
      </AnswerRow>
      <AnswerRow>
        {AlternativesRow2.map((value, index) =>{
          return (
            <Col>
            <AnswerButton>
              <H4> 
                {value}
              </H4>
            </AnswerButton>
            </Col>
          )
        })}
      </AnswerRow>
    </CardContainer>
  );
};
