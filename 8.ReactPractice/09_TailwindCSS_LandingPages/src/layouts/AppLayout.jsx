import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

export default function AppLayout() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
