import React from "react";

export const LoginContext = React.createContext({
  userId: "",
  handleLogin: (id: string, role: string) => {},
  handleLogout: () => {},
});
