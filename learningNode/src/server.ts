import { createServer, IncomingMessage, Server } from "http";

const server: Server = createServer((req: IncomingMessage, res) => {
  //   console.log(req.url); // "/, /user, /products"
  //   console.log(req.method); // "GET, POST, PATCH, PUT, DELETE"

  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    // console.log("This is ROOT route");

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "This is Root route" }));
  } else if (url?.startsWith("/products")) {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "This is Product route" }));
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "This Route isn't found!" }));
  }
});

server.listen(5000, () => {
  console.log("Server is running in port 5000");
});
