import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AppLayout from "../layouts/AppLayout";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Blogs from "../pages/Blogs";
import SingleBlogPage from "../pages/SingleBlogPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<SingleBlogPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
