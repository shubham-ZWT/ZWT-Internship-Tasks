const conn = require("../db/db.config");

exports.placeOrders = (req, res) => {
  console.log("Here on post orders");
  const { customer_name, warehouse_id, items } = req.body;
  console.log(JSON.stringify(items));
  let sql = "CALL place_Order (?,?,?,@result)";
  conn.query(
    sql,
    [customer_name, warehouse_id, JSON.stringify(items)],
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        conn.query("SELECT @result AS result", (err, rows) => {
          if (err) {
            console.error(err);
            res.status(400).json({ message: "Failed to Place the Order" });
          } else {
            const result = rows[0].result;
            console.log(result);
            res.status(200).json({ message: "success", orderID: result });
          }
        });
      }
    },
  );
};

exports.getOrders = (req, res) => {
  const { status, search, sort = "order_date", order = "DESC" } = req.query;

  let query = `
    SELECT 
      orders.order_id,
      orders.customer_name,
      orders.warehouse_id,
      DATE_FORMAT(orders.order_date, '%d/%m/%Y') AS order_date,
      products.product_name,
      order_items.quantity,
      order_items.price,
      orders.status
    FROM order_items
    JOIN orders ON order_items.order_id = orders.order_id
    JOIN products ON order_items.product_id = products.product_id
  `;

  const conditions = [];
  const values = [];
  if (status) {
    conditions.push("orders.status = ?");
    values.push(status.toUpperCase());
  }

  if (search) {
    conditions.push("orders.customer_name LIKE ?");
    values.push(`%${search}%`);
  }

  if (conditions.length > 0) {
    query += " WHERE " + conditions.join(" AND ");
  }

  const allowedSortFields = [
    "orders.order_date",
    "orders.customer_name",
    "orders.status",
    "orders.order_id",
  ];

  const allowedOrder = ["ASC", "DESC"];

  const sortField = allowedSortFields.includes(sort)
    ? sort
    : "orders.order_date";

  const sortDirection = allowedOrder.includes(order.toUpperCase())
    ? order.toUpperCase()
    : "DESC";

  query += ` ORDER BY ${sortField} ${sortDirection}`;

  console.log(query);

  conn.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(400).json({ message: "Error fetching orders" });
    }

    // console.log(result);
    const groupedOrders = [];
    const orderMap = new Map();

    result.forEach((item) => {
      const { order_id, product_name, quantity, price, ...orderHeader } = item;

      if (!orderMap.has(order_id)) {
        const newOrder = {
          ...orderHeader,
          order_id,
          items: [],
        };

        orderMap.set(order_id, newOrder);
        groupedOrders.push(newOrder); // preserve SQL order
      }

      orderMap.get(order_id).items.push({
        product_name,
        quantity,
        price,
      });
    });

    res.status(200).json({
      orders: groupedOrders,
    });
  });
};

exports.cancelOrders = (req, res) => {
  const orderID = req.params.id;
  console.log(orderID);
  let sql = "CALL cancel_Order(?,@result)";
  conn.query(sql, [orderID], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      conn.query("SELECT @result AS result", (err, rows) => {
        if (err) {
          console.error(err);
        } else {
          const result = rows[0].result;
          if (result === 1) {
            res
              .status(200)
              .json({ success: true, message: "Order Cancelled Successfully" });
          } else {
            res.status(200).json({ message: "Can not cancel order" });
          }
          console.log(result);
        }
      });
    }
  });

  console.log("Here to cancel order for ID : ", orderID);
};
