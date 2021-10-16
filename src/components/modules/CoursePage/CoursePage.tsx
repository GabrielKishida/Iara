import CoursePageMock from "./CoursePageMock";
import { Grid } from "../../theme/grid";
import { Course } from "./CoursePage.style";
import { H3 } from "../../typography";

export const CoursePage: React.FC = () => {
  return (
    <Grid>
      <Course>
        {CoursePageMock.content.map((value) => {
          return (
            <>
              <H3 style={{display:'flex', justifyContent:'flex-start'}}>
                {value.title}
              </H3>
              <div style={{width: '40%', marginBottom: '100px'}}>
                {value.content}
              </div>
            </>
          )
        })}
      </Course>
    </Grid>
  );
};
