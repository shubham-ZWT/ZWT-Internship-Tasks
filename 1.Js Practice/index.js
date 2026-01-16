const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // console.log(url, method);

  const parserUrl = url.parse(req.url, true);
  console.log(`Runnig for ${parserUrl} and method ${req.method}`);

  //   const parserURL = new URL(req.url, true);
  //   console.log(parserURL);

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "content-type": "text/json" });
    console.log("This is the Home page");
  }
  if (url === "/users" && method === "GET") {
    //Getting all users
    // console.log(__dirname);
    // const dirName = __dirname
    // const userFilePath = `${dirName}/`
    let users = fs.readFileSync(
      "./userFile/users.json",
      "utf-8",
      (error, data) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(data);
        return data;
      }
    );
    res.writeHead(200, { "content-type": "text/json" });
    res.end(users);
  }
  if (url === "/users" && method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      console.log(JSON.parse(body));
      fs.writeFileSync("./userFile/users.json", body, "utf-8");
    });
  }
  if (url.startsWith("/users/") && method === "PUT") {
    //Getting all users
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      console.log(JSON.parse(body));
      fs.writeFileSync("./userFile/user.json", body, "utf-8");
    });
  }
});

server.listen(8000, () => {
  console.log(`Server started at http://127.0.1:8000`);
});
