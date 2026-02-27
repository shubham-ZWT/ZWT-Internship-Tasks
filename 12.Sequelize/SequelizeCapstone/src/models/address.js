const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Address extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    }
  }

  Address.init(
    {
      street: { type: DataTypes.STRING, allowNull: false },
      city: { type: DataTypes.STRING, allowNull: false },
      zipCode: { type: DataTypes.STRING, field: "zip_code" },
      isDefault: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: "is_default",
      },
    },
    {
      sequelize,
      modelName: "Address",
      tableName: "addresses",
      underscored: true,
    },
  );

  return Address;
};
