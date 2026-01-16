const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Welcome to my node js Server");
});

server.listen(3000, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
