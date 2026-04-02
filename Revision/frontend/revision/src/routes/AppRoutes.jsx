import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/AdminDashboard";
import ProtectedRoutes from "../components/ProtectedRoutes";
import DashboardSettings from "../pages/DashboardSettings";
import HrDashboard from "../pages/HrDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
          <Route path="settings" element={<DashboardSettings />} />

          <Route path="hr" element={<HrDashboard />} />
        </Route>

        <Route path="/admin" element={<AdminDashboard />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
