import styled from "styled-components";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { MainPage } from "./modules/MainPage/MainPage";
import { UserPage } from "./modules/UserPage/UserPage";
import Routes from "./modules/routes";

import React from "react";
import { HeaderConstitution } from "./components/header";

export default function App() {
  return <Routes />;
}

/*export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
} */
