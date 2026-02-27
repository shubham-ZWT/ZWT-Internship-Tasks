import React from "react";
import { IoMdRefreshCircle } from "react-icons/io";

export default function SearchFilter({
  searchTerm,
  setSearchTerm,
  setSortKey,
  reFetch,
}) {
  const handelClearSearch = () => {
    setSearchTerm("");
  };
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
      <div className="flex-2">
        <label className="block text-sm font-medium text-app-text mb-1">
          Search Order
        </label>
        <div className="flex flex-row gap-3">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-red-200 text-red-700 font-medium px-3 py-2 rounded-lg w-fit flex items-center gap-2"
            onClick={handelClearSearch}
          >
            Clear Search
          </button>
        </div>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-app-text mb-1">
          Filter
        </label>
        <div className="flex flex-row gap-2">
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none bg-app-bg"
            onChange={(e) => setSortKey(e.target.value)}
          >
            <option value="all">All</option>
            <option value="placed">Placed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <button
            className="bg-blue-200 text-blue-700 font-medium px-3 py-2 rounded-lg w-fit flex items-center gap-2"
            onClick={() => reFetch()}
          >
            Refresh
            <span className="text-xl">
              <IoMdRefreshCircle />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
