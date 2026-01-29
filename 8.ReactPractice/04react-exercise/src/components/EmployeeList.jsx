import React, { useEffect, useState } from "react";
import employeeService from "../services/employeeService";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [deletingID, setDeletingID] = useState(null);

  useEffect(() => {
    // employeeService
    //   .getAllEmployees()
    //   .then((data) => setEmployees(data))
    //   .catch((error) => {
    //     console.error(error);
    //   });

    //Production best Practice
    const fetchEmployee = async () => {
      // console.log(loading);
      setError(null);
      try {
        // setTimeout(async () => {
        setLoading(true);
        const data = await employeeService.getAllEmployees();
        setEmployees(data);
        // }, 3000);
        // throw Error;
      } catch (error) {
        // console.error(error);
        setError(error?.message || "Failed to laod Employee Data.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();

    // return ()=>{
    //   clearTimeout()

    // }
  }, []);

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handelClearSearch = () => {
    setSearchTerm("");
  };
  const totalSalary = filteredEmployees.reduce(
    (sum, emp) => sum + Number(emp.salary),
    0,
  );
  // console.log(loading);

  const formatDate = (date) => {
    const ui_date = new Date(date);
    // console.log(ui_date);
    return ui_date.toLocaleDateString();
  };

  const handelDelete = async (e) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user ?",
    );

    if (!confirmed) {
      return;
    }
    console.log(e.target.value);

    try {
      const id = Number(e.target.value);
      const deleteSuccess = await employeeService.deleteEmployee(id);
      setDeletingID(id);
      console.log(deleteSuccess);
    } catch (error) {
      console.log(error);
    } finally {
      setDeletingID(null);
    }
  };

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p style={{ color: "red" }}>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  } else {
    return (
      <>
        <div
          style={{
            backgroundColor: "#234232",
            color: "white",
            padding: "20px",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Employee List</h1>
          <label htmlFor="searchEmployee">Search Employee : </label>
          <input
            type="search"
            name="searchEmployee"
            id=""
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handelClearSearch}
            style={{
              backgroundColor: "#E67E22",
              padding: "3px",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
              border: "none",
              fontSize: "15px",
              fontWeight: "bolder",
              color: "#234232",
            }}
          >
            Clear Filter
          </button>
          <div style={{ marginTop: "10px" }}>
            <table border={1} borderColor="white">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Salary</th>
                  <th>Hire Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((e, index) => (
                  <tr
                    key={e.id}
                    style={
                      Number(index) % 2 === 0
                        ? { backgroundColor: "white", color: "black" }
                        : { backgroundColor: "#e6e6e6", color: "black" }
                    }
                  >
                    <td>{e.id}</td>
                    <td>{e.first_name}</td>
                    <td>{e.email}</td>
                    <td>{e.dept_id}</td>
                    <td>{e.salary}</td>
                    <td>{formatDate(e.hire_date)}</td>
                    <td>
                      <div style={{ padding: "2px", backgroundColor: "white" }}>
                        {/* <button>Edit User</button> */}
                        <button
                          onClick={handelDelete}
                          key={e.id}
                          value={e.id}
                          style={{
                            backgroundColor: "#df0202",
                            color: "white",
                            borderColor: "white",
                            borderRadius: "10px",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                          }}
                        >
                          {deletingID === e.id ? "Deleting..." : "Delete User"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                <tr>
                  <td colSpan="3">
                    Total Employee : {filteredEmployees.length} of{" "}
                    {employees.length}
                  </td>
                  <td colSpan={2}>Total Salary : {totalSalary}</td>
                </tr>
                {filteredEmployees.length === 0 && (
                  <tr>
                    <td colSpan={5}>No Employees Found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
