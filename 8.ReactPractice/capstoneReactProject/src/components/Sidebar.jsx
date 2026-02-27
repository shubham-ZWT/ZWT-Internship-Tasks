import React from "react";
import { useNavigate } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoFolderOpenSharp } from "react-icons/io5";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useTheme } from "../hooks/useTheme";

export default function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const { theme, setTheme } = useTheme();

  const handelDashboard = () => {
    console.log("dash");
    navigate("/dashboard");
  };

  const handelEmployees = () => {
    console.log("emp");
    navigate("/dashboard/employees");
  };

  const handelDepartments = () => {
    console.log("dept");
    navigate("/dashboard/departments");
  };

  const sideNav = [
    { name: "Dashboard", fun: handelDashboard, icon: <MdSpaceDashboard /> },
    { name: "Employees", fun: handelEmployees, icon: <FaUser /> },
    {
      name: "Departments",
      fun: handelDepartments,
      icon: <IoFolderOpenSharp />,
    },
  ];

  return (
    <aside className="w-75 bg-app-bg text-app-text h-screen">
      <div className="flex flex-col gap-8 p-4 flex-1">
        <div className="text-3xl font-bold">Logo</div>
        <div className="flex flex-col gap-3 items-start justify-between">
          {sideNav.map((link) => (
            <button
              key={link.name}
              onClick={link.fun}
              className="flex flex-row gap-2 px-5 py-1 rounded-sm hover:shadow-sm justify-center items-center hover:bg-app-text/10  transition-all 1000ms"
            >
              <span className="text-xl">{link.icon}</span>
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <button
            onClick={() => setTheme("light")}
            className={`px-4 py-2 rounded-sm border  duration-300
      ${theme === "light" ? "bg-app-text text-app-bg shadow-sm " : ""}`}
          >
            Light
          </button>

          <button
            onClick={() => setTheme("dark")}
            className={`px-4 py-2 rounded-sm border transition duration-300
      ${theme === "dark" ? "bg-app-text text-app-bg shadow-sm" : ""}`}
          >
            Dark
          </button>

          <button
            onClick={() => setTheme("sharp")}
            className={`px-4 py-2 rounded-sm border transition duration-300
      ${theme === "sharp" ? "bg-app-text text-app-bg shadow-sm" : ""}`}
          >
            Sharp
          </button>
        </div>
        <div>
          <button
            className="bg-red-600 px-5 py-1 rounded-sm text-white font-semibold hover:bg-red-700 transition-all 300 shadow-sm"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}
