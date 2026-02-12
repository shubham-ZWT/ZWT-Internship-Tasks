import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import Employee from "../pages/Employees";
import Departments from "../pages/Departments";
import Login from "../pages/login";
import ErrorPage from "../pages/ErrorPage";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard">
            <Route index element={<Dashboard />} />
            <Route path="employees" element={<Employee />} />
            <Route path="departments" element={<Departments />} />
          </Route>
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
