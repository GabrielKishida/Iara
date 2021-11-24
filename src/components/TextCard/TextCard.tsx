import { CardContainer, ImageCardContainer, ImageRow } from "./TextCard.style";
import { Col, Row } from "../theme/grid";
import { H4, H5 } from "../typography";
import { COLORS } from "../theme";
import { DeleteButton } from "..";

export interface TextCardProps {
  title: string;
  image?: string;
  text: string;
  creating?: boolean;
  onDelete?: () => void;
}

export const TextCard: React.FC<TextCardProps> = (props) => {
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
