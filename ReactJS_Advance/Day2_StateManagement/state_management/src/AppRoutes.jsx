import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
// import VirtualList from "./components/VirtualList";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
// import EmployeeList from "./components/EmployeeList";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import { SkeletonBox } from "./components/Skeleton";

const VirtualList = lazy(() => import("./components/VirtualList"));
const Login = lazy(() => import("./components/Login"));
const Dashboard = lazy(() => import("./components/Dashboard"));
const EmployeeList = lazy(() => import("./components/EmployeeList"));

export default function AppRoutes() {
  return (
    <>
      <Suspense fallback={<SkeletonBox height={800} width={800} />}>
        <Routes>
          <Route
            path="/zustand"
            element={
              <>
                <Login />
                <Dashboard />
              </>
            }
          ></Route>

          <Route
            path="/tanstack"
            element={
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <EmployeeList />
              </ErrorBoundary>
            }
          ></Route>
          <Route path="/" element={<VirtualList />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}
