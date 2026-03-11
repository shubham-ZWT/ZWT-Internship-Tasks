const express = require("express");
require("dotenv").config();
const { WebSocketServer } = require("ws");
const http = require("http");
const { con } = require("./db/config");

const app = express();
const cors = require("cors");
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// DB Connection
con.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("DB Connected");
  }
});

// for storing active connectiion
let clients = [];

wss.on("connection", (ws) => {
  clients.push(ws);
  console.log(`Client connected. Total: ${clients.length}`);

  ws.on("close", () => {
    clients = clients.filter((client) => client !== ws);
    console.log("Client disconnected");
  });
});

// Helper to broadcast to all connected clients
const broadcast = (data) => {
  clients.forEach((client) => {
    if (client.readyState === 1) {
      // 1 = OPEN
      client.send(JSON.stringify(data));
    }
  });
};

app.post("/api/employees", (req, res) => {
  const newEmployee = req.body;

  // db query here to insert and al;l
  broadcast({ type: "employee_created", payload: newEmployee });
  res.status(201).json(newEmployee);
});

// app.put("/api/employees/:id", (req, res) => {
//   const id = req.params.id;

//   console.log("Updating Salary for ", id);
//   broadcast({ type: "salary_updated", payload: { name: "Shubham" } });
//   res.status(201).json(id);
// });

// for Kanban Board implentation
app.get("/api/employees", (req, res) => {
  console.log("req for getting employees");
  const sql =
    "SELECT employee.first_name, employee.last_name, employee.email, departments.dept_name FROM employee JOIN departments ON employee.dept_id=departments.dept_id";
  con.query(sql, (error, result) => {
    if (error) {
      console.error(error);
      throw new Error("Db Error");
    } else {
      // console.log(result);
      res.status(200).json(result);
    }
  });
});

app.put("/api/employees/:id", (req, res) => {
  console.log("updating the dept");
  const userEmail = req.params.id;
  const { dept_name, emp_name } = req.body;
  console.log(emp_name);

  console.log(`Updating dept to "${dept_name}" for user: ${userEmail}`);
  const sql = `
    UPDATE employee 
    SET dept_id = (SELECT dept_id FROM departments WHERE dept_name = ?) 
    WHERE email = ?
  `;

  con.query(sql, [dept_name, userEmail], (error, result) => {
    if (error) {
      console.error("DB Error:", error);
      return res.status(500).json({ error: "Database update failed" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Employee not found" });
    }
    console.log(result);
    broadcast({
      type: "department_updated",
      payload: { empName: emp_name, dept_name: dept_name },
    });
    res.status(200).json({ message: "Department updated successfully" });
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`WebSocket ready on ws://localhost:${PORT}`);
});
