"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Department, {
        foreignKey: "departmentId",
      });

      this.hasMany(models.AuditLog, {
        foreignKey: "employeeId",
        onDelete: "CASCADE",
      });
    }
  }
  Employee.init(
    {
      name: DataTypes.STRING,
      salary: DataTypes.INTEGER,
      departmentId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Employee",
    },
  );
  return Employee;
};
