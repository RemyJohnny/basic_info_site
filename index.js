const http = require("http");
const fs = require("fs");

const PORT = 4000;

const Server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  let path;
  switch (req.url) {
    case "/":
      path = "./index.html";
      break;
    case "/about":
      path = "./about.html";
      break;
    case "/contact":
      path = "./contact-me.html";
      break;
    default:
      path = "./404.html";
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log("an Error occurred");
    }
    res.end(data);
  });
});

Server.listen(PORT, () => {
  console.log("serving at port:" + PORT);
});
