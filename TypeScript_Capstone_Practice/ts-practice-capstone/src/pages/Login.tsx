import useAuth from "../store/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = async () => {
    await login({ username: "emilys", password: "emilyspass" });
    navigate("/dashboard");
    console.log("logging...");
  };
  return (
    <div className=" flex flex-col h-screen justify-center items-center">
      <div className="border p-4 rounded-lg flex flex-col items-center gap-3">
        <h1 className="text-2xl font-bold">Login Page</h1>
        <button
          className="bg-purple-100 text-purple-800 font-semibold px-3 py-1 rounded-full"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
