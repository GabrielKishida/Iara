import { MainPage } from "./MainPage/MainPage";
import { CoursePage } from "./CoursePage/CoursePage";
import { UserPage } from "./UserPage/UserPage";

import { BrowserRouter, Route } from "react-router-dom";

const Routes: React.FC = (props) => {
  return (
    <BrowserRouter>
      {props.children}
      <Route path="/" exact component={MainPage} />
      <Route path="/course" exact component={CoursePage} />
      <Route path="/user" exact component={UserPage} />
    </BrowserRouter>
  );
};

export default Routes;
