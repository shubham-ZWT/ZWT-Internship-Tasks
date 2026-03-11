import React from "react";

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
      <div className={`${color} p-3 rounded-lg text-white text-2xl`}>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-gray-500 text-sm font-medium">{title}</span>
        <span className="text-2xl font-bold text-gray-800">{value}</span>
      </div>
    </div>
  );
};

export default StatCard;
