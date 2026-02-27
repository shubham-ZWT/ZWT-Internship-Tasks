import React from "react";
import { TbBrandAirbnb } from "react-icons/tb";
import { FaBookmark } from "react-icons/fa";

export default function Card() {
  return (
    <div className="flex flex-col w-65 bg-bg text-text rounded-sm p-3 border shadow-sm transition duration-300 ">
      <div className="flex flex-row justify-between">
        <div className="bg-red-400 rounded-pill p-2">
          <TbBrandAirbnb className="text-xl text-white" />
        </div>

        <div className="flex items-center text-sm">
          <FaBookmark />
        </div>
      </div>

      <div className="flex flex-row gap-3 py-6 items-end">
        <h3 className="text-xl font-semibold">Airbnb</h3>
        <p className="flex-1 text-sm text-text opacity-60 text-right">
          2 days ago
        </p>
      </div>

      <h3 className="text-xl font-bold py-4">Junior UI/UX Designer</h3>

      <div className="flex flex-row gap-3 mb-5">
        <button className="bg-text text-bg rounded-sm px-3 py-1 shadow-sm">
          Contract
        </button>
        <button className="bg-text text-bg rounded-sm px-3 py-1 shadow-sm">
          Remote
        </button>
      </div>

      <div className="h-0.5 bg-text opacity-20 rounded-pill mb-5"></div>

      <div className="flex flex-row justify-between items-end">
        <p className="text-xl font-semibold">$100/hr</p>

        <button className="bg-text text-bg rounded-sm px-3 py-1 shadow-sm">
          Apply now
        </button>
      </div>
    </div>
  );
}
