const conn = require("../db/db.config");

exports.placeOrders = (req, res) => {
  console.log("Here on post orders");
  const { customer_name, warehouse_id, items } = req.body;
  console.log(JSON.stringify(items));
  let sql = "CALL place_Order (?,?,?,@result)";
  conn.query(sql, [customer_name, warehouse_id, JSON.stringify(items)], (err, result) => {
    if (err) {
      console.error(err);
    } else {
      conn.query("SELECT @result AS result", (err, rows) => {
        if (err) {
          console.error(err);
        } else {
          const result = rows[0].result;
          console.log(result);
        }
      });
    }
  });

  res.status(200).json({ message: "Ok from post orders" });
};

exports.getOrders = (req, res) => {
  console.log("Get all orders");
  conn.query("CALL getallOrders", (err, result) => {
    if (err) {
      console.error(err);
    }
    res.status(200).json({ orders: result[0] });
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
            res.status(200).json({ message: "Order Cancelled Successfully" });
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
