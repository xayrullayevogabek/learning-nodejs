const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.write(JSON.stringify({ message: "Hello World" }));
  res.end();
});

server.listen(3000, () => {
  console.log("Server has started on PORT:3000");
});
