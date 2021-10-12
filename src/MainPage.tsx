import { HeaderConstitution } from "./components/header";
import { Links } from "./components/links";
import { Col, Grid, Row } from "./components/theme/grid";

export const MainPage: React.FC = () => {
  return (
    <Grid>
      <Row>
        <HeaderConstitution></HeaderConstitution>
      </Row>
      <Row>
        <Links></Links>
      </Row>
    </Grid>
  );
};
