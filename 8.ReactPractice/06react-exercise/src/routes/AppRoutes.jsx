import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DemoCalcu from "../pages/DemoCalcu";
import DemoCallback from "../pages/DemoCallback";
// import EmployeeListVS from "../pages/EmployeeListVS";

import Loader from "../components/Loader";
import { Suspense } from "react";
import ImageOptimi from "../pages/ImageOptimi";

//Rotes based lazy load
const EmployeeListVS = React.lazy(() => import("../pages/EmployeeListVS"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo-calc" element={<DemoCalcu />} />
        <Route path="/callback" element={<DemoCallback />} />

        <Route path="/employees" element={<EmployeeListVS />} />
        <Route path="/image-lazy-loading" element={<ImageOptimi />} />
      </Routes>
    </Suspense>
  );
}
