import { CursoDificuldade } from "../../components/curso_dificuldade";
import { Jumbotron } from "../../components/jumbotron";
import { Grid, Row } from "../../components/theme/grid";

export const MainPage: React.FC = () => {
  return (
    <Grid>
      <Row>
        <Jumbotron />
      </Row>
      <Row>
        <CursoDificuldade></CursoDificuldade>
      </Row>
    </Grid>
  );
};
