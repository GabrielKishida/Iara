import { MainPage } from "./MainPage/MainPage";
import { CoursePage } from "./CoursePage/CoursePage";
import { UserPage } from "./UserPage/UserPage";

import { BrowserRouter, Route } from "react-router-dom";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={MainPage} />
      <Route path="/course" exact component={CoursePage} />
      <Route path="/user" exact component={UserPage} />
    </BrowserRouter>
  );
}
