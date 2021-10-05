import { ProfileCard } from "./components";
import { Col, Grid, Row } from "./components/theme/grid";

export const UserPage: React.FC = () => {
  return (
    <Grid>
      <Row>
        <Col size={1}>
          <ProfileCard
            title="Joaquim"
            role="Aluno"
            subtitle="18 cursos completos"
            description="Descrição de perfil "
          />
        </Col>
      </Row>
    </Grid>
  );
};
