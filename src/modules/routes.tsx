import { MainPage } from "./MainPage/MainPage";
import { CoursePage } from "./CoursePage/CoursePage";
import { CreateClassPage } from "./CreateClassPage/CreateClassPage";
import { UserPage } from "./UserPage/UserPage";
import { BrowserRouter, Route } from "react-router-dom";
import { SearchPage } from "./SearchPage/SearchPage";
import { FinishedClassesPage } from "./ClassesPage/FinishedClassesPage";
import { InProgressClassesPage } from "./ClassesPage/InProgressClassesPage";
import { LoginPage } from "./AuthPage/LoginPage";
import { SignupPage } from "./AuthPage/SignupPage";
import { ClassPage } from "./ClassPage/ClassPage";
import { CreateCoursePage } from "./CreateCoursePage/CreateCoursePage";
import { EditCoursePage } from "./CoursePage/EditCoursePage";
import { MyClassesPage } from "./ClassesPage/MyClassesPage";

const Routes: React.FC = (props) => {
  return (
    <BrowserRouter>
      {props.children}
      <Route path="/" exact component={MainPage} />
      <Route path="/class/:courseid/:classid" exact component={ClassPage} />
      <Route path="/create-class/:courseid" exact component={CreateClassPage} />
      <Route path="/create-course" exact component={CreateCoursePage} />
      <Route path="/edit-course/:courseid" exact component={EditCoursePage} />
      <Route path="/user" exact component={UserPage} />
      <Route path="/search" exact component={SearchPage} />

      <Route path="/course/:courseid" component={CoursePage} />
      <Route
        path="/courses/in-progress"
        exact
        component={InProgressClassesPage}
      />
      <Route path="/courses/finished" exact component={FinishedClassesPage} />
      <Route path="/courses/my-courses" exact component={MyClassesPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={SignupPage} />
    </BrowserRouter>
  );
};

export default Routes;
