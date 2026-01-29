import React, { useEffect, useState } from "react";
import DeptCard from "../components/departments/DeptCard";
import departmentService from "../services/departmentService";
import EmployeeCard from "../components/EmployeeCard";

export default function Departments() {
  const [departments, setDepartments] = useState([]);
  const [deptEmployees, setDeptEmployees] = useState([]);

  useEffect(() => {
    console.log("running...");
    const fetchDepartment = async () => {
      console.log("fetching...");
      try {
        console.log("fetching");
        const data = await departmentService.getAllDepartments();
        console.log(data);
        setDepartments(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDepartment();
  }, []);

  const fetchEmployee = async (id) => {
    console.log("id is", id);
    const emp = await departmentService.getAllEmployessOfDepartment(id);
    setDeptEmployees(emp);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "300px", border: "1px solid " }}>
          {departments.map((dept) => (
            <div key={dept.dept_id}>
              <DeptCard
                deptName={dept.dept_name}
                deptLocation={dept.location}
              />
              <button
                onClick={() => {
                  fetchEmployee(dept.dept_id);
                }}
              >
                Get Employees
              </button>
            </div>
          ))}{" "}
        </div>
        <div>
          <h4>Click department to get employees</h4>
          <div className="dept-employee" style={{display:"flex"}}>
            {deptEmployees.map((emp) => (
              <div key={emp.id}>
                <EmployeeCard
                  name={emp.first_name}
                  email={emp.email}
                  salary={emp.salary}
                  hireDate={emp.hire_date}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
