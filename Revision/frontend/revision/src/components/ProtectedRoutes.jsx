import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../store/authStore";

export default function ProtectedRoutes() {
  const { isAuth, hasHydrated } = useAuth();

  if (!hasHydrated) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <h1>Loading Session...</h1>
      </div>
    );
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
