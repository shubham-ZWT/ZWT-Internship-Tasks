import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Employee from "../pages/Employee";
import AppLayout from "../layouts/AppLayout";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import EmployeeList from "../components/EmployeeList";
import CreateEmployee from "../components/CreateEmployee";
import EditEmployee from "../components/EditEmployee";
import Departments from "../pages/Departments";
import PageNotFound from "../components/PageNotFound";
import ProtectedPage from "../pages/ProtectedPage";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Login from "../components/Login";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Employee Routes */}
          <Route path="/employees">
            <Route index element={<EmployeeList />}></Route>
            <Route path="add" element={<CreateEmployee />}></Route>
            {/* <Route path=":id" element={}></Route> */}
            <Route path=":id/edit" element={<EditEmployee />}></Route>
          </Route>

          {/* Department Routes */}
          <Route path="/departments">
            <Route index element={<Departments />}></Route>
          </Route>

          {/* Protected Routes Implementation */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/protected" element={<ProtectedPage />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
