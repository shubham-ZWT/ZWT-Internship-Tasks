import React from "react";

export default function DepartmentCard({ name, count, icon }) {
  return (
    <div className="border h-fit flex flex-col gap-3 p-4">
      <h2 className="text-xl flex items-center gap-2">
        {name} <span className="">{icon}</span>
      </h2>
      <p className="text-5xl font-bold ">{count}</p>
    </div>
  );
}
