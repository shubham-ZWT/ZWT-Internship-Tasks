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

  const { theme, toggleTheme } = useTheme();

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
              className="flex flex-row gap-2 px-5 py-1 rounded-2xl justify-center items-center hover:bg-gray-200 dark:hover:bg-black/80 transition-all 1000ms"
            >
              <span className="text-xl">{link.icon}</span>
              {link.name}
            </button>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          className="px-4 py-2 border rounded-md hover:opacity-80 bg-app-bg text-app-text"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <div>
          <button
            className="bg-red-600 px-5 py-1 rounded-2xl text-white font-semibold hover:bg-red-700 transition-all 1000ms"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}
