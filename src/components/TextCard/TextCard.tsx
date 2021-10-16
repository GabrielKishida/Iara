import { CardContainer, ImageCardContainer, ImageRow } from "./TextCard.style";
import { Col, Row } from "../theme/grid";
import { H4, H5 } from "../typography";
import TextCardMock from "./TextCardMock";
import { COLORS } from "../theme";

export const TextCard: React.FC = () => {
  return (
    <CardContainer inputColor="white">
      <div>
        <H4> {TextCardMock.title} </H4>
      </div>
      <ImageRow>
        <Col>
          <ImageCardContainer inputColor={COLORS.verdeEscuro}>
            <img src={TextCardMock.image}/>
          </ImageCardContainer>
        </Col>
      </ImageRow>
      <Row>
        <Col>
            <H5>
                {TextCardMock.text}
            </H5>
        </Col>
      </Row>  
    </CardContainer>
  );
};
