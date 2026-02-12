import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import employeeService from "../services/employeeService";
import dashboardService from "../services/dashboard";
import { IoFolderOpenSharp } from "react-icons/io5";
import DepartmentCard from "../components/departments/DepartmentCard";
import AddEmpForm from "../components/employees/AddEmpForm";

export default function Employees() {
  const [sortKey, setSortKey] = useState("hire_date"); // Default sort
  const [searchTerm, setSearchTerm] = useState("");
  const [Employees, setEmployees] = useState([]);

  const { isAuthenticated, loading } = useContext(AuthContext);
  // console.log(isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/login");
    }

    const fetchEmployeeDashboardData = async () => {
      const response = await dashboardService.getEmployeeDashboardData();
      setEmployees(response.data);
      console.log(response);
    };

    fetchEmployeeDashboardData();
  }, [isAuthenticated, navigate, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated) {
    return null;
  }

  const filteredEmployees = [...Employees]
    .sort((a, b) => {
      if (sortKey === "salary") {
        return b.salary - a.salary;
      }
      if (sortKey === "first_name") {
        return a.first_name.localeCompare(b.first_name);
      }
      if (sortKey === "hire_date") {
        return new Date(a.hire_date) - new Date(b.hire_date);
      }
      return 0;
    })
    .filter((s) =>
      s.first_name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

  const handelDelete = (id) => {
    const response = employeeService.deleteEmployee(id);
    console.log(response);
    console.log(id);
  };

  const handelEdit = (id) => {
    console.log(id);
  };

  const avgSalary =
    filteredEmployees.length > 0
      ? `${Math.round(filteredEmployees[0].AVG_SALARY).toLocaleString()}`
      : "$0";

  return (
    <div className="flex flex-col p-4 text-app-text bg-app-bg">
      <div>
        <h1 className="text-4xl tracking-tighter font-bold text-left">
          Employees
        </h1>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col p-3 gap-4">
          <div className="flex flex-row gap-4">
            <div className="border p-4 ">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-2">
                  <label className="block text-sm font-medium text-app-text mb-1">
                    Search Employee
                  </label>
                  <input
                    type="text"
                    placeholder="Search by name..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-app-text mb-1">
                    Sort
                  </label>
                  <select
                    name="empFilter"
                    id="empFilter"
                    value={sortKey}
                    onChange={(e) => setSortKey(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none bg-app-bg"
                  >
                    <option value="hire_date">Hire Date</option>
                    <option value="first_name">Name</option>
                    <option value="salary">Salary</option>
                  </select>
                </div>
              </div>

              <table className="w-full text-left border-collapse bg-app-bg text-app-text">
                <thead>
                  <tr className="bg-gray-50 dark:bg-black/40 border-b border-gray-200 text-app-text">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider ">
                      Name
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">
                      hire Date
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-right">
                      Salary
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white dark:bg-black/40 text-app-text">
                  {filteredEmployees.length > 0 ? (
                    filteredEmployees.map((emp) => (
                      <tr
                        key={emp.first_name}
                        className="hover:bg-blue-50/50 transition-colors group"
                      >
                        <td className="px-6 py-4 text-sm font-semibold">
                          {emp.first_name}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold">
                          {emp.email}
                        </td>
                        <td className="px-6 py-4 text-sm  text-center">
                          {new Date(emp.hire_date).toDateString()}
                        </td>
                        <td className="px-6 py-4 text-sm  font-mono text-right">
                          ${Math.round(emp.salary).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-sm  font-mono text-right flex flex-row gap-2 items-center">
                          <button
                            className="flex space-x-2 items-center px-3 py-2 bg-rose-500 hover:bg-rose-800 rounded-md drop-shadow-md cursor-pointer duration-300"
                            onClick={() => handelDelete(emp.id)}
                          >
                            <span className="text-white">Delete</span>
                          </button>

                          <button
                            className="flex space-x-2 items-center px-4 py-2 bg-green-600 hover:bg-amber-600 rounded-full drop-shadow-md cursor-pointer duration-300"
                            onClick={() => handelEdit(emp.id)}
                          >
                            <span className="text-white text-md">Edit</span>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="4"
                        className="px-6 py-12 text-center text-gray-400"
                      >
                        <p className="text-lg">No matching departments found</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <DepartmentCard
              name={"Total Employees"}
              icon={<IoFolderOpenSharp />}
              count={filteredEmployees.length}
            />
            <DepartmentCard
              name={"Average Salary"}
              icon={<IoFolderOpenSharp />}
              count={avgSalary}
            />
          </div>
        </div>
      </div>
      <AddEmpForm />
    </div>
  );
}
