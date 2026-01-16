const express = require("express");

const app = express();
const PORT = 8000;

const users = [
  {
    id: 1,
    name: "Sanket",
    email: "sanket@gmail.com",
  },
  {
    id: 2,
    name: "Yash",
    email: "yash@gmail.com",
  },
  {
    id: 3,
    name: "Meet",
    email: "meet@gmail.com",
  },
];
const products = [
  {
    id: 1,
    name: "bat",
    price: 500,
  },
  {
    id: 2,
    name: "pen",
    price: 20,
  },
  {
    id: 3,
    name: "headphones",
    price: 1000,
  },
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.end("Welcome to my API");
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

// URL Params
app.get("/api/users/:id", (req, res) => {
  const id = req.params.id;

  const user = users.find((u) => u.id === Number(id));
  // console.log(user);
  // console.log(`Searching for user with ${id}`);

  if (!user) {
    res.json({ Message: `User not found with id ${id}` });
  }
  res.json(user);
});

//Query Parameter
app.get("/api/search", (req, res) => {
  const { name } = req.query;

  // console.log(`Searching for ${name}`);
  res.end(`Searching for user with name : ${name}`);
});

app.post("/api/users/", (req, res) => {
  console.log("Request Received");
  const user = req.body;
  users.push(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
