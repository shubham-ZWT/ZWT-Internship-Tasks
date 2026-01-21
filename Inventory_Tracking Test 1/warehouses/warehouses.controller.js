const conn = require("../db/db.config");

//Connec to DB
conn.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connected to DB");
  }
});

exports.getStockforWarehouses = (req, res) => {
  console.log("here for stocks from warehouse");
  console.log(req.params);
  const warehouseID = req.params.id;
  console.log(`get data for warehouse id : ${warehouseID}`);
  let sql =
    "SELECT products.product_name, warehouse_stock.quantity FROM warehouse_stock JOIN products ON products.product_id = warehouse_stock.product_id WHERE warehouse_stock.warehouse_id = ?";
  const data = conn.query(sql, [warehouseID], (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200).json({ warehouseID: warehouseID, stock: result });
    }
  });
};
