import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useSalaryReport } from "../queries/dashboardQueries";
import { currencyFormatter } from "../utils/formatter";
import { FaDownload } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function Reports() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const sortOrder = searchParams.get("sort") || "desc";

  const { data, isLoading, error } = useSalaryReport(sortOrder);

  const handleSortChange = (e) => {
    const newSort = e.target.value;
    setSearchParams({ sort: newSort });
  };

  const processedData = useMemo(() => {
    if (!data) return [];

    return data.filter((emp) =>
      `${emp.first_name} ${emp.last_name}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );
  }, [data, searchTerm]);

  const handleExport = () => {
    const headers = "Sr.No,Name,Department,Salary\n";
    const csvContent = processedData
      .map(
        (d, i) =>
          `${i + 1},${d.first_name} ${d.last_name},${d.dept_name},${d.salary}`,
      )
      .join("\n");

    const blob = new Blob([headers + csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Salary_Report.csv";
    a.click();
  };

  if (isLoading)
    return (
      <div className="p-10 text-center text-gray-500">Loading Report...</div>
    );
  if (error)
    return (
      <div className="p-10 text-center text-red-500">Error loading report</div>
    );

  return (
    <div className="pt-8 max-w-7xl mx-auto pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Salary Reports</h1>
          <p className="text-gray-500 mt-1">
            Review and export employee payroll data.
          </p>
        </div>

        <button
          onClick={handleExport}
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-sm"
        >
          <FaDownload size={18} /> Export CSV
        </button>
      </div>

      <div className="bg-white p-4 rounded-t-xl border border-gray-200 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <FaSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 outline-none"
            onChange={(e) =>
              setTimeout(() => {
                setSearchTerm(e.target.value);
              }, 1000)
            }
          />
        </div>

        <select
          className="border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500"
          onChange={handleSortChange}
          value={sortOrder}
        >
          <option value="desc">Salary: High to Low</option>
          <option value="asc">Salary: Low to High</option>
        </select>
      </div>

      <div className="overflow-x-auto border-x border-b border-gray-200 rounded-b-xl shadow-sm">
        <table className="w-full text-left bg-white">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                Sr.No
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                Name
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                Department
              </th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">
                Salary
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {processedData.map((d, index) => (
              <tr key={d.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-500">{index + 1}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {d.first_name} {d.last_name}
                </td>
                <td className="px-6 py-4">
                  <span className="bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full text-xs font-medium">
                    {d.dept_name}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-right font-mono font-bold text-gray-700">
                  {currencyFormatter.format(d.salary)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {processedData.length === 0 && (
          <div className="p-10 text-center text-gray-400">
            No records match your search.
          </div>
        )}
      </div>
    </div>
  );
}
