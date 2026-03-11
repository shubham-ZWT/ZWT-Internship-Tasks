import { useQuery } from "@tanstack/react-query";
import employeeService from "../services/employeeService";

export const useKanbanData = () => {
  return useQuery({
    queryKey: ["employees"],
    queryFn: employeeService.getAllEmployees,

    select: (data) => {
      console.log("data in the query", data);
      const grouped = data.reduce((acc, employee) => {
        const dept = employee.dept_name || "Unassigned";
        if (!acc[dept]) acc[dept] = [];
        acc[dept].push(employee);
        return acc;
      }, {});

      return {
        departments: Object.keys(grouped),
        groupedEmployees: grouped,
      };
    },
  });
};
