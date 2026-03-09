import React from "react";
import { List } from "react-window";

const data = Array.from({ length: 1000 }, (_, i) => `Name ${i + 31}`);

function RowComponent({ index, data, style }) {
  return (
    <div
      className="flex items-center justify-between px-4 border-b border-gray-100 hover:bg-blue-50 transition-colors"
      style={style}
    >
      <span className="font-medium text-gray-800">{data[index]}</span>
      <span className="text-slate-400 text-xs">
        {index + 1} of {data.length}
      </span>
    </div>
  );
}

export default function VirtualList() {
  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-bold mb-1 text-gray-900">
        Virtualized List
      </h1>
      <p className="text-sm text-gray-500 mb-4">
        The simplest type of list to render is one with fixed row heights.
      </p>
      <div
        className="border border-gray-200 rounded-xl overflow-hidden shadow-lg bg-white"
        style={{ height: 400 }}
      >
        <List
          rowComponent={RowComponent}
          rowCount={data.length}
          rowHeight={50}
          rowProps={{ data }}
        />
      </div>
    </div>
  );
}
