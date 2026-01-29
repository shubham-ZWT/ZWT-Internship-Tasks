import React from "react";
import AuthContext from "../contexts/AuthContext";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function ProtectedRoute() {
  const { login, isAuthenticated, logout } = useContext(AuthContext);
  const { toggleTheme } = useContext(ThemeContext);

  const handelLogin = () => {
    const credentials = {
      email: "sanket@gmail.com",
      password: "123",
    };

    login(credentials);
  };

  if (isAuthenticated) {
    return (
      <>
        <h1>Hello you are Authenticated</h1>
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>

        <button
          onClick={() => {
            toggleTheme();
          }}
        >
          Toggle Theme
        </button>
      </>
    );
  } else
    return (
      <>
        <h1>Unauthenticated</h1>
        <button onClick={handelLogin}>Login</button>
      </>
    );
}
