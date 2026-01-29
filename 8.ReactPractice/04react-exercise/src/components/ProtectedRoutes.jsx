import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes() {
  const isAuth = localStorage.getItem("isAuthenticated") === "true";
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
