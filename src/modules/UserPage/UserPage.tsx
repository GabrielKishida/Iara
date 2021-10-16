import { ProfileCard } from "../../components";
import { Links } from "../../components/links";
import { Grid, Row } from "../../components/theme/grid";
import { WhiteBox } from "../../components/white_box/white_box";

export const UserPage: React.FC = () => {
  return (
    <Grid>
      <Row>
        <WhiteBox>
          <ProfileCard title="Olá, Joaquim" />
        </WhiteBox>
      </Row>
    </Grid>
  );
};
