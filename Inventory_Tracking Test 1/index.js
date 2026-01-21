const express = require("express");
require("dotenv").config();
const orderRoutes = require("./orders/orders.routes");
const warehousesRoutes = require("./warehouses/warehouses.routes");

//app config
const PORT = process.env.PORT;
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api/orders", orderRoutes);
app.use("/api/warehouses", warehousesRoutes);

app.post("/test", (req, res) => {
  const para = req.params;
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
