const express = require("express");

const { createOrder, processRefund, addProduct } = require("./utils/order");
const { updateSalary, createUser } = require("./utils/employee");
const { User } = require("./models");
const user = require("./models/user");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.post("/create-order", async (req, res) => {
  console.log(req.body);
  const { userId, cartItems } = req.body;
  console.log(userId, cartItems);

  const order = await createOrder(userId, cartItems);
  console.log(order);
  res.status(200).json(order);
});

app.post("/employee-update", async (req, res) => {
  const { employeeId, newSalary } = req.body;
  const employee = await updateSalary(employeeId, newSalary);

  res.status(200).json(employee);
});

//Hooks
app.post("/create-user", async (req, res) => {
  console.log("Reveived");
  console.log(req.body);
  const { name, email, password } = req.body;
  const user = await createUser(name, email, password);

  res.status(200).json({ user });
});

app.post("/add-product", async (req, res) => {
  console.log("received");
  const { name, price, stock } = req.body;
  const product = await addProduct(name, price, stock);

  res.status(200).json({ product });
});

//Scopes
app.get("/users", async (req, res) => {
  console.log("Receied for users");
  // const admins = await User.scope("admins").findAll();
  // const customers = await User.scope("customer").findAll();

  // const allUsers = await User.scope(["admins", "customer"]).findAll();

  const allUsers = await User.unscoped().findAll();
  // console.log(admins, customers);
  res.status(200).json({ allUsers: allUsers });
});

app.post("/process-refund", async (req, res) => {
  console.log(req.body);
  const { orderId } = req.body;
  console.log(orderId);

  const refund = await processRefund(orderId);
  console.log(refund);
  res.status(200).json(refund);
});

app.get("/health", (req, res) => {
  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
