import React from "react";

export default function SearchStock({ searchTerm, setSearchTerm }) {
  const handelClearSearch = () => {
    setSearchTerm("");
  };
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
      <div className="flex-2">
        <label className="block text-sm font-medium text-app-text mb-1">
          Search Stock
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
            className="bg-red-200 hover:bg-red-300 transition-colors duration-300 text-red-700 font-medium px-3 py-2 rounded-lg w-fit flex items-center gap-2"
            onClick={handelClearSearch}
          >
            Clear Search
          </button>
        </div>
      </div>
    </div>
  );
}
