import React from "react";
import { List } from "react-window";

function RowComponent({ index, employees, style }) {
  const emp = employees[index];

  return (
    <div style={style} className="flex justify-between px-2 border-b">
      <span>{emp.name}</span>
      {/* <span className="text-gray-500 text-sm">
        {index + 1} of {employees.length}
      </span> */}
    </div>
  );
}

export default function VirtualizedEmployeeList({ employees }) {
  return (
    <List
      rowComponent={RowComponent}
      rowCount={employees.length}
      rowHeight={35}
      rowProps={{ employees }}
      height={600}
      width="100%"
    />
  );
}
