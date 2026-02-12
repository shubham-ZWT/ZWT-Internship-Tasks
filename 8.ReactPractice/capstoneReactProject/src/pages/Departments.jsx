import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import dashboardService from "../services/dashboard";
import { IoFolderOpenSharp } from "react-icons/io5";
import DepartmentCard from "../components/departments/DepartmentCard";
import AddDepartment from "../components/departments/AddDepartment";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [stats, setStats] = useState([]);

  const { isAuthenticated, loading } = useContext(AuthContext);
  // console.log(isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/login");
    }

    const fetchDashboardData = async () => {
      const response = await dashboardService.getDepartmentDashboardData();
      setStats(response.data);
      console.log(response.data);
    };

    fetchDashboardData();
  }, [isAuthenticated, navigate, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated) {
    return null;
  }

  const filteredStats = stats.filter((s) => {
    const matchedStats = s.dept_name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchedStats;
  });

  return (
    <div className="flex flex-col p-4 text-app-text bg-app-bg h-screen">
      <div>
        <h1 className="text-4xl tracking-tighter font-bold text-left">
          Departments
        </h1>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col p-3 gap-4">
          <div className="flex flex-row gap-4">
            <div className="border p-4">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-app-text mb-1">
                    Search Department
                  </label>
                  <input
                    type="text"
                    placeholder="Search by name..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-black/40 border-b border-gray-200">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text">
                      Department Name
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text">
                      Location
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text text-center">
                      Employees
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-app-text text-right">
                      Avg Salary
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white dark:bg-black/40">
                  {stats.length > 0 ? (
                    filteredStats.map((s) => (
                      <tr
                        key={s.dept_name}
                        className="hover:bg-blue-50/50 transition-colors group"
                      >
                        <td className="px-6 py-4 text-sm font-semibold text-app-text">
                          {s.dept_name}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            {s.location}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-app-text text-center">
                          {s.Employee_per_Dept}
                        </td>
                        <td className="px-6 py-4 text-sm text-app-text font-mono text-right">
                          ${Math.round(s.Average_Salary).toLocaleString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="4"
                        className="px-6 py-12 text-center text-app-text"
                      >
                        <p className="text-lg">No matching departments found</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <DepartmentCard
              name={"Total Department"}
              count={stats.length}
              icon={<IoFolderOpenSharp />}
            />
          </div>
          <AddDepartment />
        </div>
      </div>
    </div>
  );
}
