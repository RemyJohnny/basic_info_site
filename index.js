const PORT = 4000;
/* const http = require("http");
const fs = require("fs");



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
}); */

const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/contact-me.html"));
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "/404.html"));
});

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
