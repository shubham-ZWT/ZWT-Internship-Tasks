import React from "react";
import departmentService from "../../services/departmentService";
import { useState } from "react";

export default function AddDepartment() {
  const [form, setForm] = useState({
    deptName: "",
    location: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const response = await departmentService.addDepartments(form);
    if (response.success) {
      alert("Department Added SuccessFully");
    }
    console.log(form);
    console.log(response);
  };
  return (
    <div className="flex flex-col w-1/4">
      <h3 className="text-2xl tracking-tighter">Add Department</h3>
      <div>
        <form onSubmit={handelSubmit}>
          <div className="flex flex-row gap-4 items-end">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="departmentName"
                className="text-sm font-medium text-app-text"
              >
                Department Name
              </label>
              <input
                type="text"
                id="departmentName"
                name="deptName"
                value={form.deptName}
                onChange={handelChange}
                className="border border-gray-400 px-2 py-1 rounded"
                placeholder="e.g. Sales"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="location"
                className="text-sm font-medium text-app-text"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={form.location}
                onChange={handelChange}
                className="border border-gray-400 px-2 py-1 rounded"
                placeholder="e.g. New York"
              />
            </div>
            <button
              type="submit"
              className="bg-black/80 text-white px-6 py-1.5 rounded-2xl hover:bg-black transition-colors"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
