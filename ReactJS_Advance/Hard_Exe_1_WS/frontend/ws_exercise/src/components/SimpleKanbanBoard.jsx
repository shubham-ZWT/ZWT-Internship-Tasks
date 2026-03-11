import { useKanbanData } from "../queries/usequery";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import employeeService from "../services/employeeService";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { DepartmentColumn } from "../components/DepartmentColumn";
import { EmployeeCard } from "../components/EmployeeCard";

export default function KanbanBoard() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useKanbanData();

  const { mutate } = useMutation({
    mutationFn: ({ email, newDept, empName }) =>
      employeeService.updateEmployee(email, {
        dept_name: newDept,
        emp_name: empName,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["employees"]);
    },
  });

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const employeeEmail = active.id;
    const employeeName = active.data.current?.name;
    console.log(employeeName);
    const newDeptName = over.id;

    mutate({
      email: employeeEmail,
      newDept: newDeptName,
      empName: employeeName,
    });
  };

  if (isLoading) return <div>Loading...</div>;

  const { departments, groupedEmployees } = data;

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="flex gap-6 p-8 overflow-x-auto">
        {departments.map((dept) => (
          <DepartmentColumn key={dept} id={dept} title={dept}>
            {groupedEmployees[dept].map((emp) => (
              <EmployeeCard
                key={emp.email}
                id={emp.email}
                name={`${emp.first_name} ${emp.last_name}`}
              />
            ))}
          </DepartmentColumn>
        ))}
      </div>
    </DndContext>
  );
}
