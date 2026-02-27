"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    get isCompleted() {
      return new Date() > this.endDate;
    }

    get duration() {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    }

    static associate(models) {
      this.belongsTo(models.Department, {
        foreignKey: "depId",
        as: "department",
      });

      this.belongsToMany(models.Employee, {
        through: models.EmployeeProject,
        foreignKey: "projectId",
        otherKey: "empId",
        as: "employees",
      });
    }
  }

  Project.init(
    {
      projectId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      projectName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },

      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isAfterStart(value) {
            if (value <= this.startDate) {
              throw new Error("End date must be after the start date");
            }
          },
        },
      },

      budget: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
        validate: {
          min: 0,
        },
      },

      depId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Project",
      tableName: "projects",
      underscored: true,
      timestamps: true,
      paranoid: true,
    },
  );

  return Project;
};
