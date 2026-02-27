const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Payment extends Model {
    static associate(models) {
      this.belongsTo(models.Order, { foreignKey: "orderId", as: "order" });
    }
  }

  Payment.init(
    {
      method: {
        type: DataTypes.ENUM("credit_card", "paypal", "cod"),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("pending", "completed", "failed", "refunded"),
        defaultValue: "pending",
      },
      transactionId: { type: DataTypes.STRING, field: "transaction_id" },
    },
    {
      sequelize,
      modelName: "Payment",
      tableName: "payments",
      underscored: true,
    },
  );

  return Payment;
};
