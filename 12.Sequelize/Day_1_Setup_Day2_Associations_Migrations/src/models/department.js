"use strict";
const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate(models) {
      // associations will come later

      this.hasMany(models.Employee, {
        foreignKey: "depId",
        as: "employees",
        onDelete: "CASCADE",
      });

      this.hasMany(models.Project, {
        foreignKey: "depId",
        as: "projects",
        onDelete: "CASCADE",
      });
    }
  }

  Department.init(
    {
      depId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      deptName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Department",
      tableName: "departments",
      underscored: true,
      timestamps: true,
    },
  );

  return Department;
};
