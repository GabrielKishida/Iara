import { TextCard } from "./components/TextCard/TextCard";
import { QuestionCard } from "./components/QuestionCard/QuestionCard";
import { Col, Grid, Row } from "./components/theme/grid";
import { Course } from "./CoursePage.style";

export const CoursePage: React.FC = () => {
  return (
    <Grid>
      <Course>
        <TextCard />
        <QuestionCard />
      </Course>
    </Grid>
  );
};
