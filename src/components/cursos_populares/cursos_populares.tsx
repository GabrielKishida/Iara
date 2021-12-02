import { H3, H5 } from "../typography";
import {
  CursosContainer,
  StyledCard,
  Stripe,
  StyledLink,
  StyledCardBody,
} from "./cursos_populares.style";
import React from "react";
import { request } from "../../services/RequestService";
import { Course } from "../../models/course";

export const CursosPopulares: React.FC = (props) => {
  const [courses, setCourses] = React.useState<Course[]>([]);

  React.useEffect(() => {
    async function fetchPopularCourses() {
      let response = await request("course/popular");
      setCourses(response);
    }
    fetchPopularCourses();
  }, [setCourses]);

  return (
    <CursosContainer>
      <H3>Cursos Populares</H3>

      {!!courses &&
        courses.map((course: Course) => (
          <StyledLink
            to={"/course/" + course.id_course}
            style={{ textDecoration: "none" }}
          >
            <StyledCard>
              <Stripe>
                <StyledCardBody>
                  <H5 className="col">{course.name}</H5>
                </StyledCardBody>
              </Stripe>
            </StyledCard>
          </StyledLink>
        ))}
    </CursosContainer>
  );
};
