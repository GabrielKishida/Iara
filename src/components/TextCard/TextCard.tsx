import { CardContainer, ImageCardContainer, ImageRow } from "./TextCard.style";
import { Col, Row } from "../theme/grid";
import { H4, H5 } from "../typography";
import { COLORS } from "../theme";

export interface TextCardProps {
  title: string;
  image?: string;
  text: string;
}

export const TextCard: React.FC<TextCardProps> = (props) => {
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
      <Row>
        <Col>
          <H5>{props.text}</H5>
        </Col>
      </Row>
    </CardContainer>
  );
};
