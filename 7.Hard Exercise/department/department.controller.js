const pool = require("../db/db");

incrementSalary = async (req, res) => {
  const { percentage } = req.body;
  const departmentId = req.params.id;
  console.log("Increase by ", percentage, "for Dept with Id ", departmentId);

  let emp_UpdateCount = 0;
  let total_UpdatedSalary = 0;

  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    const [employees] = await connection.query(
      "SELECT id, salary FROM employee WHERE dept_id = ?",
      [departmentId]
    );

    if (employees.length === 0) {
      await connection.rollback();
      res.status(400).json({ message: "No employees found" });
    }

    for (const emp of employees) {
      const salary_increment = Math.round((emp.salary * percentage) / 100);
      const new_salary = Number(emp.salary) + Number(salary_increment);

      await connection.query("UPDATE employee SET salary = ? WHERE id = ?", [
        new_salary,
        emp.id,
      ]);

      total_UpdatedSalary += salary_increment;
      emp_UpdateCount++;
    }

    console.log(employees);

    await connection.commit();

    res.status(200).json({
      updates: emp_UpdateCount,
      total_increment_amount: total_UpdatedSalary,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { incrementSalary };
