import React from "react";
import useAuth from "../store/useAuth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const { isAuth } = useAuth();

  if (!isAuth) return <Navigate to="/login" replace />;

  return children;
}
