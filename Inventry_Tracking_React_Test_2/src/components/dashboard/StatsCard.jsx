import React from "react";

export default function StatsCard({ name, quantity, icon, iconColor }) {
  return (
    <div
      className={`flex flex-col w-fit p-4 rounded-xl bg-[#f8f8f8] text-gray-800`}
    >
      <div className="flex flex-row items-center gap-2">
        <h3 className="text-lg font-medium">{name} </h3>
        <span className={`${iconColor} text-xl`}>{icon}</span>
      </div>
      <div className="bg-white rounded-xl">
        <p className="text-4xl font-bold p-1">{quantity}</p>
      </div>
    </div>
  );
}
