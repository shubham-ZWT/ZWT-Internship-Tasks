const { Order, OrderItem, Product, sequelize } = require("../models");

exports.createOrder = async (userId, items) => {
  const t = await sequelize.transaction();

  try {
    let totalAmount = 0;
    const itemsToCreate = [];

    for (const item of items) {
      const product = await Product.findByPk(item.productId, {
        transaction: t,
      });

      if (!product) {
        throw new Error(`Product with ID ${item.productId} not found.`);
      }

      if (product.stock < item.quantity) {
        throw new Error(`Insufficient stock for product: ${product.name}`);
      }

      const itemTotal = product.price * (item.quantity || 1);
      totalAmount += itemTotal;

      itemsToCreate.push({
        productId: product.id,
        quantity: item.quantity || 1,
        priceAtPurchase: product.price,
      });

      await product.decrement("stock", { by: item.quantity, transaction: t });
    }

    const order = await Order.create(
      {
        userId,
        totalAmount,
        status: "pending",
      },
      { transaction: t },
    );

    const itemsWithOrderId = itemsToCreate.map((item) => ({
      ...item,
      orderId: order.id,
    }));
    await OrderItem.bulkCreate(itemsWithOrderId, { transaction: t });

    await t.commit();

    return order;
  } catch (error) {
    await t.rollback();
    throw error;
  }
};
