const { con } = require("../db/config");

exports.getDashboardStats = (req, res) => {
  console.log("getting stats");

  const statsSql = `
    SELECT 
      (SELECT COUNT(*) FROM employee) as totalEmployees,
      (SELECT ROUND(AVG(salary), 2) FROM employee) as avgSalary,
      (SELECT COUNT(*) FROM departments) as deptCount
  `;

  const activitySql = `
    SELECT e.first_name, e.last_name FROM employee e LIMIT 5
  `;

  con.query(statsSql, (err, statsResult) => {
    if (err) return res.status(500).json({ error: err.message });

    con.query(activitySql, (err, activityResult) => {
      if (err) return res.status(500).json({ error: err.message });

      res.status(200).json({
        kpis: statsResult[0],
        recentActivity: activityResult,
      });
    });
  });
};

exports.getSalaryReports = (req, res) => {
  const sortOrder = req.query.sort?.toUpperCase() === "ASC" ? "ASC" : "DESC";
  console.log(sortOrder);

  const sql = `
    SELECT 
      e.id,
      e.first_name, 
      e.last_name, 
      e.salary, 
      d.dept_name 
    FROM employee e
    JOIN departments d ON e.dept_id = d.dept_id
    ORDER BY e.salary ${sortOrder} 
  `;

  con.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};
