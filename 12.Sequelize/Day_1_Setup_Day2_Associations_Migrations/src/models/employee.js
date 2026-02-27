"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    static associate(models) {
      this.belongsTo(models.Department, {
        foreignKey: "depId",
        as: "department",
      });

      this.belongsToMany(models.Project, {
        through: models.EmployeeProject,
        foreignKey: "empId",
        otherKey: "projectId",
        as: "projects",
      });

      this.belongsTo(models.Employee, {
        as: "manager",
        foreignKey: "managerId",
      });

      this.hasMany(models.Employee, {
        as: "subordinates",
        foreignKey: "managerId",
      });
    }
  }

  Employee.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: { type: DataTypes.STRING(100), allowNull: false },
      lastName: { type: DataTypes.STRING(100), allowNull: false },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
        set(value) {
          this.setDataValue("email", value.toLowerCase());
        },
      },
      hireDate: { type: DataTypes.DATEONLY, allowNull: false },
      salary: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: { min: 0 },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      depId: { type: DataTypes.INTEGER },
      managerId: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "Employee",
      tableName: "employees",
      underscored: true,
      timestamps: true,
      paranoid: true,
    },
  );

  return Employee;
};
