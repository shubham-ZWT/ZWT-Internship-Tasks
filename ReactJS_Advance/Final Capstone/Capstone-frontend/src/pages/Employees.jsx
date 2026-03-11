import React, { useRef, useState, useMemo, useEffect } from "react";
import { useEmployees, useDeleteEmployee } from "../queries/employeeQueries";
import DeleteModal from "../components/DeleteModal";
import { currencyFormatter } from "../utils/formatter";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import AddEmployee from "../components/AddEmployee";
import UpdateEmployeeModal from "../components/UpdateEmployeeModal";

export default function Employees() {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryDept = searchParams.get("dept") || "";
  const querySearch = searchParams.get("search") || "";

  const [searchInput, setSearchInput] = useState(querySearch);

  const { data, isLoading, error } = useEmployees({});
  const deleteMutation = useDeleteEmployee();
  const modalRef = useRef();
  const updatetModalRef = useRef();

  const departments = useMemo(() => {
    if (!data) return [];
    const allDepts = data.map((emp) => ({
      id: emp.dept_id,
      name: emp.dept_name,
    }));
    return Array.from(
      new Map(allDepts.map((item) => [item.id, item])).values(),
    );
  }, [data]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (searchInput) {
        params.set("search", searchInput);
      } else {
        params.delete("search");
      }
      setSearchParams(params);
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchInput]);

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter((emp) => {
      const matchesSearch = `${emp.first_name} ${emp.last_name}`
        .toLowerCase()
        .includes(querySearch.toLowerCase());
      const matchesDept =
        queryDept === "" || emp.dept_id.toString() === queryDept;
      return matchesSearch && matchesDept;
    });
  }, [data, querySearch, queryDept]);

  const handleDeptChange = (e) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set("dept", e.target.value);
    } else {
      params.delete("dept");
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchInput("");
    setSearchParams({});
  };

  if (isLoading)
    return <div className="p-10 text-center text-gray-500">Loading...</div>;
  if (error)
    return (
      <div className="p-10 text-center text-red-500">Error loading data</div>
    );

  return (
    <>
      <DeleteModal
        ref={modalRef}
        onDeleteConfirm={(id) => deleteMutation.mutate(id)}
      />
      <UpdateEmployeeModal ref={updatetModalRef} departments={departments} />

      <div className="pt-8 max-w-7xl mx-auto pb-20 px-4">
        <h1 className="text-2xl font-bold mb-6">Employee Management</h1>
        <div className="pb-8">
          <AddEmployee departments={departments} />
        </div>
        {/* Filters Bar */}
        <div className="bg-white p-4 rounded-t-xl border border-gray-200 flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <FaSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>

          <select
            className="w-full sm:w-64 border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500"
            value={queryDept}
            onChange={handleDeptChange}
          >
            <option value="">All Departments</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>

          {(querySearch || queryDept) && (
            <button
              onClick={clearFilters}
              className="text-red-600 hover:text-red-800 flex items-center gap-1 text-sm font-medium"
            >
              <FaTimes /> Clear
            </button>
          )}
        </div>

        {/* Table */}
        <div className="overflow-x-auto border-x border-b border-gray-200 rounded-b-xl shadow-sm">
          <table className="w-full text-left bg-white">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Sr.No
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Email
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Department
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">
                  Salary
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.map((d, index) => (
                <tr key={d.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {d.first_name} {d.last_name}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {d.email}
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full text-xs font-medium">
                      {d.dept_name}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-right font-mono font-bold">
                    {currencyFormatter.format(d.salary)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2 justify-end">
                      <button
                        className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg hover:bg-red-100 transition-colors font-medium"
                        onClick={() => updatetModalRef.current.open(d.id)}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() =>
                          modalRef.current.open(d.id, d.first_name)
                        }
                        className="bg-red-50 text-red-600 px-3 py-1 rounded-lg hover:bg-red-100 transition-colors font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredData.length === 0 && (
            <div className="p-10 text-center text-gray-400">
              No employees found.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
