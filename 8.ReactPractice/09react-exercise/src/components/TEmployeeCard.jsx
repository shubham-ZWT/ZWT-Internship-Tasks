import React from "react";

export default function TEmployeeCard({ employee }) {
  return (
    <div className="bg-white m-3 dark:bg-gray-800 rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {employee.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {employee.department}
      </p>
      <p className="mt-2 text-secondary font-bold">{employee.salary}</p>
    </div>
  );
}
