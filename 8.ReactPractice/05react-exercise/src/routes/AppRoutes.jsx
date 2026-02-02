import React from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "../components/Counter";
import Form from "../components/Form";
import ProtectedRoute from "../components/ProtectedRoute";
import ItemsPage from "../pages/ItemsPage";
import EmployeePage from "../pages/EmployeePage";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<Form />} />

        <Route path="/protected" element={<ProtectedRoute />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/employees" element={<EmployeePage />} />
      </Routes>
    </>
  );
}
