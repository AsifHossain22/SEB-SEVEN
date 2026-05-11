import { createServer, IncomingMessage, Server } from "http";
import { routesHandler } from "./routes/routes";

const server: Server = createServer((req: IncomingMessage, res) => {
  routesHandler(req, res);
});

server.listen(5000, () => {
  console.log("Server is running in port 5000");
});
