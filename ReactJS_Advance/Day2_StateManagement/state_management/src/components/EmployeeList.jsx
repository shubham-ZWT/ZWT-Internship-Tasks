import React, { useState } from "react";
import { useEmployees } from "../queries/employeeQueries";
import useDebounce from "../hooks/useDebounce";

export default function EmployeeList() {
  const [search, setSearch] = useState("");
  const decouncedSearch = useDebounce(search, 1000);

  // React Query handles the loading, error, and data states for us
  const { data, isLoading, isError, error, isFetching } = useEmployees({
    decouncedSearch,
  });

  if (isLoading) return <div className="p-10 text-center">Initial Load...</div>;
  if (isError)
    return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Employees</h1>
        {/* isFetching shows when a background update is happening */}
        {isFetching && (
          <span className="text-sm text-blue-500">Updating...</span>
        )}
      </div>
      <input
        type="text"
        placeholder="Filter by name..."
        className="border p-2 rounded w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid gap-4">
        {data?.map((emp) => (
          <div key={emp.id} className="p-4 bg-white shadow rounded border">
            {emp.first_name} -{" "}
            <span className="text-gray-500">{emp.email}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
