import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./modules/routes";
import { Header } from "./components/header";
import { Links } from "./components/links";
import { Row } from "./components/theme/grid";
import { Footer } from "./components/footer";
import { LoginContext } from "./services/LoginService";

export default function App() {
  const [userId, setUserId] = React.useState("");

  const handleLogin = (id: string, role: string) => {
    localStorage.setItem("userId", id);
    localStorage.setItem("role", role);
    setUserId(id);
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    setUserId("");
  };

  return (
    <>
      <LoginContext.Provider value={{ userId, handleLogin, handleLogout }}>
        <Routes>
          <Header />
          <Row>
            <Links />
          </Row>
        </Routes>
        <Row>
          <Footer />
        </Row>
      </LoginContext.Provider>
    </>
  );
}
