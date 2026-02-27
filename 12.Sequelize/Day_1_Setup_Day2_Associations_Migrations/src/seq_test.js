require("dotenv").config({ path: "../.env" });
const { raw } = require("express");
const {
  sequelize,
  Employee,
  Project,
  EmployeeProject,
  Department,
} = require("./models");
const { Op, fn, col, where, Model } = require("sequelize");

const getPagination = (page = 1, size = 10) => {
  const limit = parseInt(size);
  const offset = (parseInt(page) - 1) * limit;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count, rows } = data;
  const currentPage = parseInt(page);
  const totalPages = Math.ceil(count / limit);

  return {
    totalItems: count,
    totalPages,
    currentPage,
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1,
    data: rows,
  };
};

async function run() {
  try {
    await sequelize.authenticate();
    console.log("DB connected ✅");

    await sequelize.sync({ alter: true });
    console.log("Tables synced ✅");

    // Pagination Logic
    // const { limit, offset } = getPagination(2, 2);
    // const employees = await Employee.findAndCountAll({
    //   limit,
    //   offset,
    // });
    // console.log(employees);

    // const response = getPagingData(employees, 2, limit);
    // console.log(response);

    //Employees Per Department
    // const employees = await Employee.findAll({
    //   attributes: ["depId", [fn("COUNT", col("id")), "employeeCount"]],
    //   group: ["depId"],
    // });

    // const employees = await Employee.findAll({
    //   attributes: [
    //     "depId",
    //     [fn("COUNT", col("id")), "employeeCount"],
    //     [fn("AVG", col("salary")), "avgSalary"],
    //   ],
    //   group: ["depId"],
    // });

    // Salary Expense Per dept
    // const employees = await Employee.findAll({
    //   attributes: ["depId", [fn("SUM", col("salary")), "salaryExpense"]],
    //   group: ["depId"],
    // });

    // Dept with highest avg Salary
    // const employees = await Employee.findAll({
    //   attributes: ["depId", [fn("SUM", col("salary")), "salaryExpense"]],
    //   group: ["depId"],
    //   order: [[fn("AVG", col("salary")), "DESC"]],
    //   limit: 1,
    // });

    // const employees = await Employee.findAll({
    //   where: {
    //     salary: {
    //       [Op.gte]: sequelize.literal(
    //         `(SELECT AVG(emp.salary) FROM employees emp WHERE emp.dep_id = Employee.dep_id)`,
    //       ),
    //     },
    //   },
    // });

    // Total hrs per project
    // const projectData = await EmployeeProject.findAll({
    //   attributes: [
    //     "project_id",
    //     [fn("SUM", col("hours_worked")), "hoursWorkedPerProject"],
    //   ],
    //   group: ["project_id"],
    // });

    //Project with totalhrs >500
    // const projectData = await EmployeeProject.findAll({
    //   attributes: ["projectId", [fn("SUM", col("hours_worked")), "totalHours"]],
    //   group: ["projectId"],
    //   having: sequelize.literal("SUM(hours_worked) > 150"),
    // });

    // const projectData = await EmployeeProject.findAll({
    //   attributes: [
    //     "emp_id",
    //     [fn("SUM", col("hours_worked")), "total_hours_worked"],
    //   ],
    //   group: ["emp_id"],
    //   order: [[fn("SUM", col("hours_worked")), "DESC"]],
    //   limit: 1,
    // });

    //empAnalytics Data
    // const empAnalytics = await Employee.findAll({
    //   attributes: [
    //     [fn("COUNT", col("id")), "totalEmployees"],
    //     [fn("AVG", col("salary")), "totalAvgSalary"],
    //     [fn("Max", col("salary")), "MaxSalary"],
    //     [fn("Min", col("salary")), "Minsalary"],
    //   ],
    //   order: [["salary", "DESC"]],
    //   raw: true,
    // });

    // JOINS
    // const empData = await Employee.findAll({
    //   attributes: [
    //     [col("Department.dept_name"), "departmentName"],
    //     [fn("COUNT", col("Employee.id")), "employeeCount"],
    //   ],
    //   include: [
    //     {
    //       model: Department,
    //       attributes: [],
    //     },
    //   ],
    //   group: ["Department.dept_name"],
    //   raw: true,
    // });

    // Join query emp with departments
    // const data = await Employee.findAll({
    //   attributes: ["id", "first_name", "last_name", "dep_id"],
    //   include: [
    //     {
    //       model: Department,
    //       attributes: ["dept_name", "location"],
    //       as: "department",
    //     },
    //   ],
    //   raw: true,
    // });

    // projects with department name
    // const data = await Project.findAll({
    //   attributes: ["project_name", "budget", "dep_id"],
    //   include: [
    //     {
    //       model: Department,
    //       as: "department",
    //       attributes: ["dept_name", "location"],
    //     },
    //   ],

    //   raw: true,
    // });

    // const data = await Employee.findAll({
    //   attributes: ["id", "first_name", "last_name", "dep_id"],
    //   include: [
    //     {
    //       model: EmployeeProject,
    //       attributes: ["role", "hours_worked"],
    //       as: "projects",
    //     },
    //   ],

    //   raw: true,
    // });

    // const data = await Employee.findAll({
    //   include: [
    //     {
    //       model: Department,
    //       as: "department",
    //       attribute: ["dept_name", "location"],
    //       where: {
    //         dept_name: "Engineering",
    //       },
    //     },
    //   ],
    //   where: {
    //     salary: {
    //       [Op.gt]: 80000,
    //     },
    //   },

    //   raw: true,
    // });

    // const data = await Department.findAll({
    //   attributes: [
    //     "dep_id",
    //     "dept_name",

    //     [fn("COUNT", col("id")), "employeeCount"],
    //   ],
    //   include: [
    //     {
    //       model: Employee,
    //       as: "employees",
    //       attributes: [],
    //     },
    //   ],

    //   group: ["dep_id"],

    //   raw: true,
    // });

    // const data = await EmployeeProject.findAll({
    //   attributes: [
    //     "project_id",
    //     [fn("SUM", col("hours_worked")), "total_hours"],
    //   ],
    //   include: [
    //     {
    //       model: Project,
    //       as: "Project",
    //       attributes: ["project_id", "project_name"],
    //     },
    //   ],
    //   group: ["project_id"],

    //   raw: true,
    // });

    // const data = await Employee.findAll({
    //   attributes: ["id", "first_name", "last_name", "manager_id", "salary"],
    //   include: [
    //     {
    //       model: Employee,
    //       as: "manager",
    //       attributes: ["first_name", "salary"],
    //       required: true,
    //     },
    //   ],

    //   where: {
    //     salary: {
    //       [Op.gt]: col("manager.salary"),
    //     },
    //   },
    //   raw: true,
    // });

    // const data = await Employee.findByPk(1, {
    //   include: [
    //     { model: Department, as: "department", attributes: ["dept_name"] },
    //     {
    //       model: EmployeeProject,
    //       as: "projects",
    //       attributes: ["hours_worked", "role"], // Data from the junction table
    //     },
    //   ],

    //   raw: true,
    // });

    // const employee = await Employee.findByPk(1);
    // const dept = await employee.getDepartment();

    const employee = await Employee.findByPk(1);
    const project = await Project.findByPk(2);

    // await project.addEmployee(employee, {
    //   through: { hoursWorked: 20, role: "Developer" },
    // });

    // const isAssigned = await employee.hasProject(2);

    // await employee.removeProject(2);
    const newProject = await employee.createProject(
      {
        projectName: "Internal Audit",
        startDate: "2024-05-01",
        endDate: "2024-06-01",
        budget: 5000.0,
      },
      {
        through: { hoursWorked: 0, role: "Lead" },
      },
    );

    console.log(newProject);
    // console.log(empAnalytics.map((e) => e.toJSON()));
  } catch (err) {
    console.error(err);
  } finally {
    await sequelize.close();
  }
}

run();
