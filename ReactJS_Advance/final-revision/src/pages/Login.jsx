import React from "react";
import useAuth from "../store/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = async () => {
    console.log("Login Clicked");
    await login({ username: "emilys", password: "emilyspass" });
    navigate("/dashboard");
  };
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl">Login</h1>
        <button className="border px-3 py-1 rounded-full" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
