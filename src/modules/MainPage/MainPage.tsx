import { CursosPopulares } from "../../components/cursos_populares";
import { Jumbotron } from "../../components/jumbotron";
import { Grid, Row } from "../../components/theme/grid";

export const MainPage: React.FC = () => {
  return (
    <Grid>
      <Row>
        <Jumbotron />
      </Row>
      <Row>
        <CursosPopulares />
      </Row>
    </Grid>
  );
};
