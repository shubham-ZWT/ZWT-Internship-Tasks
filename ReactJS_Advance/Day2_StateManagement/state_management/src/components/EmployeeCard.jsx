import React from "react";

export default function EmployeeCard({ id, first_name, email, handelDelete }) {
  return (
    <div
      key={id}
      className="flex flex-row justify-between items-center gap-3 bg-black rounded-lg py-3 text-white w-full px-4"
    >
      <p>
        {first_name} - <span className="text-gray-300">{email}</span>
      </p>
      <button
        className="bg-white text-black px-3 py-1 rounded-lg hover:bg-gray-200 transition-colors"
        onClick={() => handelDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}
