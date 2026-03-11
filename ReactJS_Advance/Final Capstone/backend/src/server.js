const express = require("express");
require("dotenv").config();
const { con } = require("./db/config");

const employeeRoutes = require("./routes/employee.routes");
const authRoutes = require("./routes/auth.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// DB Connection
con.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("DB Connected");
  }
});

//Employee routes
app.use("/api/employees", employeeRoutes);
//Auth routes
app.use("/api/auth", authRoutes);
//dashboard routes
app.use("/api/dashboard", dashboardRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
