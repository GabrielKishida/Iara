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

const Routes: React.FC = (props) => {
  return (
    <BrowserRouter>
      {props.children}
      <Route path="/" exact component={MainPage} />
      <Route path="/class/:courseid/:classid" exact component={ClassPage} />
      <Route path="/create-class" exact component={CreateClassPage} />
      <Route path="/user" exact component={UserPage} />
      <Route path="/search" exact component={SearchPage} />
      <Route path="/classes/finished" exact component={FinishedClassesPage} />
      <Route path="/course/:courseid" component={CoursePage} />
      <Route
        path="/classes/in-progress"
        exact
        component={InProgressClassesPage}
      />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={SignupPage} />
    </BrowserRouter>
  );
};

export default Routes;
