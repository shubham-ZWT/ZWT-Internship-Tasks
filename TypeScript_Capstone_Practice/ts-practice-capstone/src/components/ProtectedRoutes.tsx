import { Navigate } from "react-router-dom";
import useAuth from "../store/useAuth";
import type { ReactNode } from "react";

interface ProtectedRoutesProps {
  children: ReactNode;
}

export default function ProtectedRoutes({ children }: ProtectedRoutesProps) {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
