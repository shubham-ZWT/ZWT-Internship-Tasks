import React, { useState } from "react";
import employeeService from "../../services/employeeService";

export default function AddEmpForm() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    hire_date: "",
    salary: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const response = await employeeService.createEmployee(form);
    if (response.success) {
      alert("Employee Added Successfully");
    }
  };

  return (
    <div className="flex flex-col w-full max-w-4xl p-4">
      <h3 className="text-2xl tracking-tighter font-bold mb-4">Add Employee</h3>

      <form onSubmit={handelSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="first_name"
              className="text-sm font-medium text-app-text"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={form.first_name}
              onChange={handelChange}
              className="border border-gray-400 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="e.g. Sanket"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="last_name"
              className="text-sm font-medium text-app-text"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={form.last_name}
              onChange={handelChange}
              className="border border-gray-400 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="e.g. Patel"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-app-text"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handelChange}
              className="border border-gray-400 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="sanket@example.com"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="hire_date"
              className="text-sm font-medium text-app-text"
            >
              Hire Date
            </label>
            <input
              type="date"
              id="hire_date"
              name="hire_date"
              value={form.hire_date}
              onChange={handelChange}
              className="border border-gray-400 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="salary"
              className="text-sm font-medium text-app-text"
            >
              Salary
            </label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={form.salary}
              onChange={handelChange}
              className="border border-gray-400 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="e.g. 50000"
            />
          </div>

          <div className="pt-1">
            <button
              type="submit"
              className="w-full bg-black/80 text-white px-6 py-2.5 rounded-lg hover:bg-black transition-colors font-semibold"
            >
              Add Employee
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
