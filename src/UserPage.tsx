import { H1, ProfileCard, VSeparator } from "./components";
import { CursoDificuldade } from "./components/curso_dificuldade";
import { HeaderConstitution } from "./components/header";
import { Jumbotron } from "./components/jumbotron";
import { Links } from "./components/links";
import { Col, DivLine, Grid, Row } from "./components/theme/grid";
import { WhiteBox } from "./components/white_box/white_box";

export const UserPage: React.FC = () => {
  return (
    <Grid>
      <Row>
        <HeaderConstitution />
      </Row>
      <Row>
        <Links></Links>
      </Row>
      <Row>
        <WhiteBox>
          <ProfileCard title="Olá, Joaquim" />
        </WhiteBox>
      </Row>
    </Grid>
  );
};
