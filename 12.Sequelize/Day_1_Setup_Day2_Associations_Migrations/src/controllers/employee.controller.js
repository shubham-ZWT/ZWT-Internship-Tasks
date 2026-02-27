const { Employee } = require("../models");
const { Op, where, Model } = require("sequelize");

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json({
      message: "Employee created successfully",
      data: employee,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: error.message,
    });
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByPk(id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.status(200).json({ employee });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findByPk(id);

    if (!employee) {
      return res.status(404).json({ message: "Employee Not Found" });
    }

    await employee.update(req.body);

    res.status(200).json({
      message: "Employee updated successfully",
      data: employee,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findByPk(id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not Found" });
    }

    await employee.destroy();

    res.status(200).json({
      message: "Employee soft deleted successfully",
    });
  } catch (error) {
    console.error(error);
  }
};

exports.restoreEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findByPk(id, {
      paranoid: false,
    });

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    await employee.restore();

    res.status(200).json({
      message: "Employee restored successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

// // Queries Practice
// await Employee.findAll();
// await Employee.findAll({
//   attributes: ["firstName", "email"],
// });

// await Employee.findAll({
//   where: {
//     salary: {
//       [Op.gt]: 50000,
//     },
//   },
// });

// await Employee.findAll({
//   where: {
//     hireDate: {
//       [Op.gt]: "2023-01-01",
//     },
//   },
// });

// await Employee.count();

// await Employee.max("salary");
// // or -- other way
// await Employee.findOne({
//   order: [["salary", "DESC"]],
//   attributes: ["salary"],
// });

// await Employee.aggregate("salary", "avg");
// // or -- other way
// await Employee.findAll({
//   attributes: [[fn("AVG", col("salary")), "avgSalary"]],
// });

// await Employee.findAll({
//   order: [["salary", "DESC"]],
// });

// await Employee.findAll({
//   where: {
//     firstName: {
//       [Op.like]: "J%",
//     },
//   },
// });

// await Employee.findAll({
//   order: [["hireDate", "DESC"]],
//   limit: 3,
// });

// // Insert Queries
// await Employee.create({
//   firstName: "Sanket",
//   lastName: "Patel",
//   email: "sanket05@gmail.com",
//   salary: 60000,
//   hireDate: "2026-01-01",
// });

// await Employee.bulkCreate([
//   { firstName: "A", lastName: "A", email: "a@company.com", salary: 50000 },
//   { firstName: "B", lastName: "B", email: "b@company.com", salary: 55000 },
//   { firstName: "C", lastName: "C", email: "c@company.com", salary: 60000 },
//   { firstName: "D", lastName: "D", email: "d@company.com", salary: 65000 },
//   { firstName: "E", lastName: "E", email: "e@company.com", salary: 70000 },
// ]);

// await Department.create({
//   name: "Engineering",
//   location: "Mumbai",
// });

// const [department, created] = await Department.findOrCreate({
//   where: { name: "HR" },
//   default: { location: "Delhi" },
// });

// await employee.update(
//   {
//     salary: fn("salary * 1.1"),
//   },
//   {
//     where: { id: 1 },
//   },
// );
// // Better Way to do this
// await Employee.increment("salary", {
//   by: 0.1 * 50000,
//   where: { id: 1 },
// });

// await Department.update(
//   {
//     location: "Mumbai",
//   },
//   {
//     where: { id: 1 },
//   },
// );

// await EmployeeProject.increment("hoursWorked", {
//   by: 5,
//   where: { employeeId: 1, projectId: 2 },
// });

// await Employee.update(
//   { salary: fn("salary * 1.05") },
//   { where: { departmentId: 1 } },
// );

// // Delete Operations

// // Soft Delete
// await Employee.destroy({
//   where: { id: 1 },
// });

// // Restore
// await Employee.restore({
//   where: { id: 1 },
// });

// // Permanent Delete
// await Employee.destroy({
//   where: { id: 1 },
//   force: true,
// });

// await Employee.destroy({
//   where: { departmentId: 3 },
// });

// // Complex with Where
// await Employee.findAll({
//   where: {
//     salary: {
//       [Op.between]: [50000, 80000],
//     },
//   },
// });

// await Employee.findAll({
//   where: {
//     departmentId: {
//       [Op.in]: [1, 2, 3],
//     },
//   },
// });

// await Employee.findAll({
//   where: {
//     hireDate: {
//       [Op.between]: ["2023-01-01", "2023-12-31"],
//     },
//   },
// });

// await Employee.findAll({
//   where: {
//     email: {
//       [Op.like]: "%@company.com",
//     },
//   },
// });

// await Employee.findAll({
//   where: {
//     salary: { [Op.gt]: 70000 },
//     isActive: true,
//   },
// });

// await Employee.findAll({
//   include: [
//     {
//       Model: Department,
//       where: {
//         name: {
//           [Op.in]: ["Engineering", "Marketing"],
//         },
//       },
//     },
//   ],
// });
