const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <h2>Send Your Name</h2>
        <form action="/" method="POST">
            <input type="text" name="name" />
            <button type="submit">Send Name</button>
        </form>
    `);
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
