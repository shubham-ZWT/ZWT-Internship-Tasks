import { , Navigate } from "react-router-dom";

export default function ProtectedRoutes() {
  const isAuth = localStorage.getItem("isAuthenticated") === "true";
  return isAuth ? < /> : <Navigate to="/login" />;
}
