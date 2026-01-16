const http = require("http");
const url = require("url");

const servre = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  // console.log(url);
  console.log(`running for ${parsedUrl.pathname} and method ${req.method}`);

  if (parsedUrl.pathname === "/" && req.method === "GET") {
    res.end("Home Page");
  } else if (parsedUrl.pathname === "/about" && req.method === "GET") {
    res.end("Welcome to About Page");
  } else {
    res.end("404 - Page not Found");
  }
});

servre.listen(3000, () => {
  console.log(`Server is running on port http://localhost:3000`);
});
