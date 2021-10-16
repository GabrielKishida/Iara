import { CursoDificuldade } from "../../components/curso_dificuldade";
import { HeaderConstitution } from "../../components/header";
import { Jumbotron } from "../../components/jumbotron";
import { Links } from "../../components/links";
import { Col, Grid, Row } from "../../components/theme/grid";

export const MainPage: React.FC = () => {
  return (
    <Grid>
      <Row>
        <HeaderConstitution></HeaderConstitution>
      </Row>
      <Row>
        <Links></Links>
      </Row>
      <Row>
        <Jumbotron></Jumbotron>
      </Row>
      <Row>
        <CursoDificuldade></CursoDificuldade>
      </Row>
    </Grid>
  );
};
