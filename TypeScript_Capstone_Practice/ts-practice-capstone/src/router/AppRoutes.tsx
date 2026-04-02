import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import ProtectedRoutes from "../components/ProtectedRoutes";
import DashboardLayout from "../components/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import ProductManagement from "../pages/ProductManagement";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <DashboardLayout />
          </ProtectedRoutes>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="product-management" element={<ProductManagement />} />
      </Route>

      {/* Catch extra Routes */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
