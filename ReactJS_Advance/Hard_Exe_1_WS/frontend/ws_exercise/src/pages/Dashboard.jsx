import React, { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast, Toaster } from "react-hot-toast";
import { useWebSocket } from "../hooks/useWebSocket";

export default function Dashboard() {
  const queryClient = useQueryClient();
  const { data, status } = useWebSocket("ws://localhost:8080");

  useEffect(() => {
    if (!data) return;

    const type = data.type;
    if (data.type) {
      if (type === "employee_created")
        toast.success(`Real-time: ${data.payload.name} was added!`, {
          duration: 4000,
          position: "top-right",
        });
      else if (type === "salary_updated") {
        toast.success(`Real-time: ${data.payload.name} salary updated!`, {
          duration: 4000,
          position: "top-right",
        });
      } else if (type === "department_updated") {
        toast.success(
          `${data.payload.empName} department updated to ${data.payload.dept_name}`,
          {
            duration: 4000,
            position: "top-right",
          },
        );
      }
      queryClient.invalidateQueries({ queryKey: ["employees"] }); // useful when we will have the db wih transtack with useEmployees query and emmployees queryKey
    }
  }, [data, queryClient]);

  return (
    <div className="p-4 border-b flex justify-between items-center bg-gray-50">
      <Toaster />
      <h2 className="text-lg font-bold">Employee Monitoring</h2>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">WS Status:</span>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border shadow-sm">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              status === "open" ? "bg-green-500" : "bg-red-500 animate-pulse"
            }`}
          />
          <span className="text-xs font-semibold uppercase">{status}</span>
        </div>
      </div>
    </div>
  );
}
