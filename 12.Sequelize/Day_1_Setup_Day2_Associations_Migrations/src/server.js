require("dotenv").config();
const express = require("express");
const app = express();
const { sequelize } = require("./models");

sequelize
  .sync({ alter: true })
  .then(() => console.log("Tables synced"))
  .catch((err) => console.error(err));

app.use(express.json());
const PORT = process.env.PORT;

const employeeRoutes = require("./routes/employee.routes");
const departmentRoutes = require("./routes/department.routes");

app.use("/employees", employeeRoutes);
app.use("/departments", departmentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
