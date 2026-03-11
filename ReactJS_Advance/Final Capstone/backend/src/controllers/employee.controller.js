const { con } = require("../db/config");

exports.CreateEmployee = (req, res) => {
  const newEmployee = req.body;
  console.log(newEmployee);
  const sql =
    "INSERT INTO employee (employee.first_name,employee.last_name,employee.email,employee.salary,employee.dept_id) VALUES (?,?,?,?,?)";
  con.query(
    sql,
    [
      newEmployee.first_name,
      newEmployee.last_name,
      newEmployee.email,
      newEmployee.salary,
      newEmployee.dept_id,
    ],
    (error, result) => {
      if (error) {
        console.error(error);
        throw new Error("Db Error");
      } else {
        res.status(200).json(result);
      }
    },
  );
};

exports.GetAllEmployees = (req, res) => {
  console.log("req for getting employees");
  const sql =
    "SELECT employee.id, employee.first_name, employee.last_name, employee.email,employee.salary, departments.dept_name, departments.dept_id FROM employee JOIN departments ON employee.dept_id=departments.dept_id";
  con.query(sql, (error, result) => {
    if (error) {
      console.error(error);
      throw new Error("Db Error");
    } else {
      res.status(200).json(result);
    }
  });
};

exports.GetEmployeeDetails = (req, res) => {
  console.log("req for getting single employee details");
  const id = req.params.id;
  const sql =
    "SELECT employee.id, employee.first_name, employee.last_name, employee.email,employee.salary, departments.dept_name, departments.dept_id FROM employee JOIN departments ON employee.dept_id=departments.dept_id WHERE employee.id=?";
  con.query(sql, [id], (error, result) => {
    if (error) {
      console.error(error);
      throw new Error("Db Error");
    } else {
      res.status(200).json(result);
    }
  });
};

exports.UpdateEmployee = (req, res) => {
  const userId = req.params.id;
  console.log("update req for ", userId);
  const { first_name, last_name, salary, dept_id, email } = req.body;

  const sql = `
    UPDATE employee 
    SET first_name = ?, last_name = ?, salary = ?, dept_id = ?, email = ?
    WHERE id = ?
  `;

  con.query(
    sql,
    [first_name, last_name, salary, dept_id, email, userId],
    (error, result) => {
      if (error) {
        return res.status(500).json({ error: "Database update failed" });
      }
      console.log(result);
      res.status(200).json({ message: "Employee updated successfully" });
    },
  );
};

exports.DeleteEmployee = (req, res) => {
  console.log("deleting employee ");
  const id = req.params.id;

  console.log(`deleting employee with id ${id}`);
  const sql = `DELETE FROM employee where employee.id=?`;

  con.query(sql, [id], (error, result) => {
    if (error) {
      console.error("DB Error:", error);
      return res.status(500).json({ error: "Failed to Delete an Employee" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Employee not found" });
    }
    console.log(result);
    res.status(200).json({ message: "Employee Deleted Successfully" });
  });
};
