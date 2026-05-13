import type { IncomingMessage, ServerResponse } from 'http';
import { productsController } from '../controller/products.controller';

export const routesHandler = (req: IncomingMessage, res: ServerResponse) => {
  //   console.log(req.url); // "/, /user, /products"
  //   console.log(req.method); // "GET, POST, PUT, PATCH, DELETE"

  const url = req.url;
  const method = req.method;
  if (url === '/' && method === 'GET') {
    // console.log("This is ROOT route");

    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ message: 'This is Root route' }));
  } else if (url?.startsWith('/products')) {
    productsController(req, res);
  } else {
    res.writeHead(404, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ message: "This Route isn't found!" }));
  }
};
