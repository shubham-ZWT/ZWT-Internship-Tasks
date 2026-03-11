import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from "react";
import { useForm } from "react-hook-form";
import {
  useEmployeeDetails,
  useUpdateEmployee,
} from "../queries/employeeQueries";

import { employeeSchema } from "../utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";

const UpdateEmployeeModal = forwardRef(({ departments }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const { data: employee, isLoading: isFetching } =
    useEmployeeDetails(selectedId);
  console.log("emp from update m", employee);

  const updateMutation = useUpdateEmployee();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(employeeSchema),
  });

  useImperativeHandle(ref, () => ({
    open: (id) => {
      setSelectedId(id);
      setIsOpen(true);
    },
    close: () => handleClose(),
  }));

  useEffect(() => {
    if (employee) {
      reset({
        first_name: employee[0].first_name,
        last_name: employee[0].last_name,
        email: employee[0].email,
        salary: employee[0].salary,
        dept_id: employee[0].dept_id,
      });
    }
  }, [employee, reset]);

  const handleClose = () => {
    setIsOpen(false);
    setSelectedId(null);
    reset();
  };

  const onSubmit = (formData) => {
    updateMutation.mutate(
      { id: selectedId, ...formData },
      {
        onSuccess: () => handleClose(),
      },
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="px-6 py-4 border-b flex justify-between items-center bg-gray-50">
          <h2 className="text-xl font-bold text-gray-800">Update Employee</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            &times;
          </button>
        </div>

        {isFetching ? (
          <div className="p-20 text-center text-gray-500">
            Loading employee details...
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  {...register("first_name", {
                    required: "First name is required",
                  })}
                  className={`w-full border p-2 rounded-md outline-none focus:ring-2 focus:ring-purple-500 ${
                    errors.first_name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.first_name && (
                  <p className="text-red-500">{errors.first_name.message}</p>
                )}
                {errors.first_name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.first_name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  {...register("last_name", {
                    required: "Last name is required",
                  })}
                  className="w-full border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full border p-2 rounded-md outline-none focus:ring-2 focus:ring-purple-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Department
                </label>
                <select
                  {...register("dept_id", { required: "Select a department" })}
                  className="w-full border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select Dept</option>
                  {departments?.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Salary
                </label>
                <input
                  type="number"
                  {...register("salary", {
                    required: "Salary is required",
                    min: 0,
                  })}
                  className="w-full border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-6">
              <button
                type="button"
                onClick={handleClose}
                className="px-5 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={updateMutation.isPending}
                className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium transition-all shadow-md disabled:bg-purple-300"
              >
                {updateMutation.isPending ? "Updating..." : "Update Employee"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
});

export default UpdateEmployeeModal;
