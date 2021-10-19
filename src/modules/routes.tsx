import { MainPage } from "./MainPage/MainPage";
import { CoursePage } from "./CoursePage/CoursePage";
import { UserPage } from "./UserPage/UserPage";

import { BrowserRouter, Route } from "react-router-dom";
import { FinishedClassesPage } from "./ClassesPage/FinishedClassesPage";
import { InProgressClassesPage } from "./ClassesPage/InProgressClassesPage";

const Routes: React.FC = (props) => {
  return (
    <BrowserRouter>
      {props.children}
      <Route path="/" exact component={MainPage} />
      <Route path="/course" exact component={CoursePage} />
      <Route path="/user" exact component={UserPage} />
      <Route path="/classes/finished" exact component={FinishedClassesPage} />
      <Route
        path="/classes/in-progress"
        exact
        component={InProgressClassesPage}
      />
    </BrowserRouter>
  );
};

export default Routes;
