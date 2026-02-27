const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

//Middlewares
const { Authenticate } = require("./middlewares/auth.middleware");

//Routes
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");
const adminRoutes = require("./routes/admin.routes");

app.use(express.json());

//health Route
app.get("/health", (req, res) => {
  res.status(200).json({ success: true });
});

//App Routes
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/orders", Authenticate, orderRoutes);
app.use("/admin", Authenticate, adminRoutes);

//Protected Route
app.get("/protected", Authenticate, (req, res) => {
  res.status(200).json({
    success: true,
    message: "accessed Protected Route",
    user: req.user,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
