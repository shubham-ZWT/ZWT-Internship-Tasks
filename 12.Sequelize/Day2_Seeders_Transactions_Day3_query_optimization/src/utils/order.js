const { where } = require("sequelize");
const {
  sequelize,
  Order,
  Product,
  OrderItem,
  Cart,
  Payment,
  Refund,
} = require("../models");

exports.createOrder = async (userId, cartItems) => {
  return await sequelize.transaction(async (t) => {
    const order = await Order.create(
      { userId, status: "pending" },
      { transaction: t },
    );

    for (const item of cartItems) {
      const product = await Product.findByPk(item.productId, {
        transaction: t,
        lock: t.LOCK.UPDATE,
      });

      if (!product || product.stock < item.quantity) {
        throw new Error(
          `Insufficient stock for product: ${product?.name || item.productId}`,
        );
      }

      await OrderItem.create(
        {
          orderId: order.id,
          productId: item.productId,
          quantity: item.quantity,
          price: product.price,
        },
        { transaction: t },
      );

      await Payment.create(
        {
          orderId: order.id,
          status: "SUCCESS",
        },
        { transaction: t },
      );

      await product.decrement("stock", { by: item.quantity, transaction: t });
    }

    await Cart.destroy({ where: { userId }, transaction: t });

    return order;
  });
};

exports.processRefund = async (orderId) => {
  await sequelize.transaction(async (t) => {
    const order = await Order.findByPk(orderId, {
      include: [{ model: OrderItem }],
      transaction: t,
    });

    if (order.status === "refunded") throw new Error("Order already refunded");

    for (const item of order.OrderItems) {
      await Product.increment("stock", {
        by: item.quantity,
        where: { id: item.productId },
        transaction: t,
      });
    }

    await order.update({ status: "refunded" }, { transaction: t });
    await Payment.update(
      { status: "reversed" },
      {
        where: { orderId: order.id },
        transaction: t,
      },
    );

    await Refund.create(
      { orderId: order.id, amount: order.total },
      { transaction: t },
    );
  });
};

exports.addProduct = async (name, price, stock) => {
  const product = await Product.create({ name, price, stock });

  return product;
};
