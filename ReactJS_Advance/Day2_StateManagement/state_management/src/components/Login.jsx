import React from "react";
import useAuthStore from "../stores/authStore";

export default function Login() {
  const login = useAuthStore((state) => state.login);

  const handelLogin = (e) => {
    e.preventDefault();
    login({ email: "sanket@gmail.com", password: "admin123" });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handelLogin}>Login test</button>
    </div>
  );
}
