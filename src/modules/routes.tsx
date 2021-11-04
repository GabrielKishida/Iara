import { MainPage } from "./MainPage/MainPage";
import { CoursePage } from "./CoursePage/CoursePage";
import { CreateCoursePage } from "./CreateCoursePage/CreateCoursePage";
import { UserPage } from "./UserPage/UserPage";
import { BrowserRouter, Route } from "react-router-dom";
import { SearchPage } from "./SearchPage/SearchPage";
import { FinishedClassesPage } from "./ClassesPage/FinishedClassesPage";
import { InProgressClassesPage } from "./ClassesPage/InProgressClassesPage";
import { LoginPage } from "./AuthPage/LoginPage";
import { SignupPage } from "./AuthPage/SignupPage";

const Routes: React.FC = (props) => {
  return (
    <BrowserRouter>
      {props.children}
      <Route path="/" exact component={MainPage} />
      <Route path="/course" exact component={CoursePage} />
      <Route path="/create-course" exact component={CreateCoursePage} />
      <Route path="/user" exact component={UserPage} />
      <Route path="/search" exact component={SearchPage} />
      <Route path="/classes/finished" exact component={FinishedClassesPage} />
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
