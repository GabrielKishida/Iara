import { CursoDificuldade } from "../../components/curso_dificuldade";
import { CursosPopulares } from "../../components/cursos_populares";
import { Jumbotron } from "../../components/jumbotron";
import { Grid, Row } from "../../components/theme/grid";
import { Footer } from "../../components/footer";

export const MainPage: React.FC = () => {
  return (
    <Grid>
      <Row>
        <Jumbotron />
      </Row>
      <Row>
        <CursoDificuldade />
      </Row>
      <Row>
        <CursosPopulares />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Grid>
  );
};
