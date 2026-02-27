import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/layouts/AppLayout";
import Dashboard from "../pages/Dashboard";
import OrderList from "../pages/OrderList";
import PlaceNewOrder from "../pages/PlaceNewOrder";
import WarehouseStock from "../pages/WarehouseStock";
import ErrorPage from "../pages/ErrorPage";
export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/place-order" element={<PlaceNewOrder />} />
          <Route path="/warehouse/:id/stock" element={<WarehouseStock />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
