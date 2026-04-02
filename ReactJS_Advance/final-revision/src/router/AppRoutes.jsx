import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedRoutes from "../components/ProtectedRoutes";
import DashboardLayout from "../components/DashboardLayout";
import ProductManagement from "../pages/ProductManagement";
import CartDetails from "../components/CartDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

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
        <Route path="cart" element={<CartDetails />} />
      </Route>

      <Route path="*" element={<Login />} />
    </Routes>
  );
}
