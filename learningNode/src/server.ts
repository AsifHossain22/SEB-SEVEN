import { createServer, IncomingMessage, Server } from 'http';
import { routesHandler } from './routes/routes';
import config from './config';

const server: Server = createServer((req: IncomingMessage, res) => {
  routesHandler(req, res);
});

server.listen(config.port, () => {
  console.log(`Server is running in port ${config.port}`);
});
