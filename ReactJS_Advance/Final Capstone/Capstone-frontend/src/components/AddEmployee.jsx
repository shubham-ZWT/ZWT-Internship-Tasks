import React from "react";
import { useForm } from "react-hook-form";
import { useCreateEmployee } from "../queries/employeeQueries";
import { zodResolver } from "@hookform/resolvers/zod";
import { employeeSchema } from "../utils/schema";

export default function AddEmployee({ departments }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(employeeSchema),
  });

  const createMutation = useCreateEmployee();

  const onSubmit = (data) => {
    console.log(data);
    createMutation.mutate(data);
  };
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl">Add Employee</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex felx-row gap-3 items-center">
            <label className="text-sm font-medium">First Name: </label>
            <input
              className="border p-2 rounded-md"
              {...register("first_name", {
                required: "First Name is required",
              })}
            />

            <label className="text-sm font-medium">Last Name: </label>
            <input
              className="border p-2 rounded-md"
              {...register("last_name", { required: "Last Name is required" })}
            />
            <label className="text-sm font-medium">Email: </label>
            <input
              className="border p-2 rounded-md"
              {...register("email", { required: "Email is required" })}
            />
            <label className="text-sm font-medium">Salary: </label>
            <input
              className="border p-2 rounded-md"
              {...register("salary", { required: "Salary is required" })}
            />

            <label className="text-sm font-medium">Dept Id: </label>
            <select
              {...register("dept_id", { required: true })}
              className="w-full sm:w-64 border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500"
            >
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>

            <input
              type="submit"
              className="bg-purple-100 text-purple-800 font-semibold px-3 py-1 rounded-lg"
            />
          </div>
        </form>
        {errors && errors.first_name && (
          <p className="text-red-500">{errors.first_name.message}</p>
        )}
      </div>
    </div>
  );
}
