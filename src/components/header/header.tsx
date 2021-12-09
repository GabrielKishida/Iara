import { HeaderLink, HeaderTitleLink } from "../button";
import { HSeparator } from "../theme";
import {
  HeaderContainer,
  LogoCircle,
  PerfilCircle,
  HeaderTextContainer,
} from "./header.style";
import { Link } from "react-router-dom";
import React from "react";
import { LoginContext } from "../../services/LoginService";
import * as url_mermaid from "../assets/images/mermaid_logo.png";
import { User } from "../../models/user";
import { request } from "../../services/RequestService";

export const Header: React.FC = (props) => {
  const [userData, setUserData] = React.useState<User>();

  React.useEffect(() => {
    async function fetchUser() {
      let response: User = await request(
        "user/" + localStorage.getItem("userId")
      );
      setUserData(response);
    }
    fetchUser();
  }, [setUserData]);

  return (
    <LoginContext.Consumer>
      {({ userId, handleLogout }) => (
        <HeaderContainer>
          <LogoCircle url={url_mermaid.default} />
          <HSeparator />
          <HeaderTextContainer align="left">
            <Link to="/" style={{ textDecoration: "none" }}>
              <HeaderTitleLink>Iara</HeaderTitleLink>
            </Link>
          </HeaderTextContainer>
          <HSeparator />
          <HSeparator />

          {!!userId ? (
            <HeaderTextContainer>
              <Link to={"/user/" + userId} style={{ textDecoration: "none" }}>
                <HeaderLink bold>{userData?.name}</HeaderLink>
              </Link>
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                onClick={handleLogout}
              >
                <HeaderLink bold>Logout</HeaderLink>
              </Link>
            </HeaderTextContainer>
          ) : (
            <HeaderTextContainer>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <HeaderLink>Login</HeaderLink>
              </Link>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <HeaderLink bold>Cadastro</HeaderLink>
              </Link>
            </HeaderTextContainer>
          )}

          <HSeparator />
          <PerfilCircle />
        </HeaderContainer>
      )}
    </LoginContext.Consumer>
  );
};
