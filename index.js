const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/") {
      fs.readFile(
        path.join(__dirname, "templates/index.html"),
        (err, content) => {
          if (err) throw new Error();
          res.end(content);
        }
      );
    } else if (req.url === "/about") {
      fs.readFile(
        path.join(__dirname, "templates", "about.html"),
        (err, content) => {
          if (err) throw new Error();
          res.end(content);
        }
      );
    } else if (req.url === "/blog") {
      fs.readFile(
        path.join(__dirname, "templates", "blog.html"),
        (err, content) => {
          if (err) throw new Error();
          res.end(content);
        }
      );
    } else if (req.url === "/api/admin") {
      res.writeHead(200, { "Content-Type": "application/json" });
      const admin = {
        name: "Admin",
        surname: "Adminov",
        job: "Full-Stack Developer",
      };
      res.end(JSON.stringify(admin));
    } else {
      fs.readFile(
        path.join(__dirname, "templates", "404.html"),
        (err, content) => {
          if (err) throw new Error();
          res.end(content);
        }
      );
    }
  } else if (req.method === "POST") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const body = [];

    req.on("data", (data) => {
      body.push(Buffer.from(data));
    });

    req.on("end", () => {
      const message = body.toString().split("=")[1];

      res.end(`<h2>Hello ${message}</h2>`);
    });
  }
});

server.listen(3000, () => {
  console.log("Server has started on PORT:3000");
});
