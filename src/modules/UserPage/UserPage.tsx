import React from "react";
import {
  H1,
  H3,
  LinkText,
  ProfileCard,
  VSeparator,
  HSeparator,
} from "../../components";
import { ClassCard, CreateClassCard } from "../../components/card/class_card";
import { Col, Grid, Row, VBox } from "../../components/theme/grid";
import { WhiteBox } from "../../components/white_box/white_box";

import { Link, RouterProps, useParams } from "react-router-dom";
import { User } from "../../models/user";
import { request } from "../../services/RequestService";
import { Course } from "../../models/course";

export const UserPage: React.FC<RouterProps> = (props) => {
  const { userid } = useParams<{ userid: string }>();

  const [myProfile, setMyProfile] = React.useState(true);
  const [userRole, setUserRole] = React.useState("aluno");
  const [userData, setUserData] = React.useState<User>();
  const [userCourses, setUserCourses] = React.useState<Course[]>();

  const handleClickCreate = () => {
    props.history.push("/create-course/");
  };

  const handleClickEdit = (id: string) => {
    props.history.push("/edit-course/" + id);
  };

  const handleClickCourse = (id: string) => {
    props.history.push("/course/" + id);
  };

  React.useEffect(() => {
    async function fetchUser() {
      let response: User = await request("user/" + userid);
      setUserData(response);
      setUserRole(response.role);
    }
    fetchUser();
  }, [setUserData, userid]);

  React.useEffect(() => {
    async function fetchUserCourses() {
      let response = await request("course/getUserCourses/userId=" + userid);
      setUserCourses(response?.splice(0, 3));
    }
    fetchUserCourses();
  }, [setUserCourses]);

  return (
    <Grid>
      <Row>
        <WhiteBox>
          {myProfile && (
            <Row justifyContent="flex-start">
              <H1>Olá, {userData?.name}</H1>
            </Row>
          )}

          <Row justifyContent="flex-start">
            <Col size={1}>
              {!!userData && (
                <ProfileCard
                  title={userData.name}
                  role={userData.role}
                  description={userData.bio}
                />
              )}
            </Col>
          </Row>
        </WhiteBox>
      </Row>
      <VSeparator />
      <Row>
        <VBox>
          {userRole === "professor" && myProfile && (
            <>
              <Row justifyContent="space-between" alignItems="flex-end">
                <H3>Crie Cursos</H3>
              </Row>
              <Row justifyContent="flex-start">
                <CreateClassCard onClick={handleClickCreate} />
              </Row>
              <VSeparator />

              {false && (
                <>
                  <Row justifyContent="space-between" alignItems="flex-end">
                    <H3>Seus cursos</H3>
                    <Link to="/courses/my-courses">
                      <LinkText>Ver mais</LinkText>
                    </Link>
                  </Row>

                  <Row justifyContent="flex-start">
                    <HSeparator />
                    {MOCK_CLASSES.map((classData) => (
                      <>
                        <ClassCard
                          classType="teacher"
                          name={classData.name}
                          description={classData.description}
                          onClick={() => handleClickEdit(classData.id)}
                        />
                        <HSeparator />
                      </>
                    ))}
                  </Row>
                  <VSeparator />
                </>
              )}
            </>
          )}

          <Row justifyContent="space-between" alignItems="flex-end">
            <H3>Minhas Aulas</H3>
            <Link to={"/courses/in-progress/" + userid}>
              <LinkText>Ver mais</LinkText>
            </Link>
          </Row>

          <Row justifyContent="flex-start">
            {userCourses?.map((classData) => (
              <>
                <ClassCard
                  classType="teacher"
                  name={classData.name}
                  description={classData.description}
                  onClick={() =>
                    handleClickCourse(classData.id_course.toString())
                  }
                />
                <HSeparator />
              </>
            ))}
          </Row>
          <VSeparator />
        </VBox>
      </Row>
    </Grid>
  );
};

const MOCK_CLASSES = [
  {
    id: "1",
    name: "Curso I",
    progress: 34,
    description:
      "Descrição genérica de uma curso, como os conteúdos abordados e tudo mais que tem em uma curso.",
  },
  {
    id: "2",
    name: "Curso II",
    progress: 74,
    description:
      "Descrição genérica de uma curso, como os conteúdos abordados e tudo mais que tem em uma curso.",
  },
  {
    id: "3",
    name: "Curso III",
    progress: 99,
    description:
      "Descrição genérica de uma curso, como os conteúdos abordados e tudo mais que tem em uma curso.",
  },
];
