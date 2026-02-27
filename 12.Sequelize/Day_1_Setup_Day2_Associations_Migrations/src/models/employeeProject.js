"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class EmployeeProject extends Model {
    static associate(models) {
      this.belongsTo(models.Employee, { foreignKey: "empId" });
      this.belongsTo(models.Project, { foreignKey: "projectId" });
    }
  }

  EmployeeProject.init(
    {
      empId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },

      projectId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },

      hoursWorked: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
        },
      },

      role: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "EmployeeProject",
      tableName: "employee_projects",
      underscored: true,
      timestamps: true,
    },
  );

  return EmployeeProject;
};
