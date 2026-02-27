const { sequelize, Employee, AuditLog, User } = require("../models");

exports.updateSalary = async (employeeId, newSalary) => {
  await sequelize.transaction(async (t) => {
    const employee = await Employee.findByPk(employeeId, { transaction: t });

    await employee.update(
      {
        salary: newSalary,
      },
      { transaction: t },
    );

    await AuditLog.create(
      {
        employeeId,
        action: "SALARY UPDATED",
      },
      { transaction: t },
    );
  });
};

exports.createUser = async (name, email, password) => {
  try {
    const user = await User.create({ name, email, password });
    return user;
  } catch (error) {
    // This will print the EXACT reason MySQL rejected the query
    console.error(
      "DETAILED ERROR:",
      error.original ? error.original.message : error.message,
    );
    throw error;
  }
};
