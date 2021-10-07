import { HeaderConstitution } from "./components/header";
import { Col, Grid, Row } from "./components/theme/grid";

export const MainPage: React.FC = () => {
  return (
    <Grid>
      <Row>
        <HeaderConstitution></HeaderConstitution>
      </Row>
    </Grid>
  );
};
