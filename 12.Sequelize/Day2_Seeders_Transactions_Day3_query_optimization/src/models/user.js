"use strict";
const { Model, DataTypes, Op } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Cart, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });

      this.hasMany(models.Order, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      timestamps: true,
      // paranoid: true,
      underscored: false,
      hooks: {
        beforeCreate: async (user) => {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        },

        beforeUpdate: async (user) => {
          if (user.changed("password")) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
          }
        },
      },

      //Default Scope
      defaultScope: {
        where: {
          password: "TEMP_PASSWORD_HASH",
        },
        attributes: { exclude: ["name"] },
      },

      //Named Scopes
      // Inside User.init options object
      scopes: {
        admins: {
          where: {
            email: {
              [Op.ne]: "TEMP_PASSWORD_HASH",
            },
          },
        },

        customer: {
          where: {
            email: {
              [Op.ne]: "shu@gmail.com",
            },
          },
        },
      },
    },
  );
  return User;
};
