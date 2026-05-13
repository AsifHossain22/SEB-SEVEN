import type { IncomingMessage, ServerResponse } from 'http';
import { insertProduct, readProducts } from '../service/products.service';
import { parseBody } from '../utility/parseBody';
import type { IProduct } from '../types/product.type';

export const productsController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  //   console.log("Request", req);
  const url = req.url;
  const method = req.method;

  const urlParts = url?.split('/');
  //   console.log(urlParts);

  const id =
    urlParts && urlParts[1] === 'products' ? Number(urlParts[2]) : null;
  //   console.log("This is the actual id: ", id);

  //   GetAllProducts - GetMethod
  if (url === '/products' && method === 'GET') {
    // const products = [{ id: 1, productName: "Product - 1" }];

    const products = readProducts();
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(
      JSON.stringify({
        message: 'Products received successfully!',
        data: products,
      }),
    );
  } // GetSingleProduct - GetMethod
  else if (method === 'GET' && id !== null) {
    const products = readProducts();
    const singleProduct = products.find((p: IProduct) => p.id === id);
    // console.log(singleProduct);

    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(
      JSON.stringify({
        message: 'Single Product received successfully!',
        data: singleProduct,
      }),
    );
  } // PostSingleProduct - PostMethod
  else if (method === 'POST' && url === '/products') {
    const body = await parseBody(req);
    // console.log("Body: ", body);
    const products = readProducts();
    const newProduct = {
      id: Date.now(),
      ...body,
    };
    // console.log(newProduct);
    products.push(newProduct);
    // console.log(products);
    insertProduct(products);
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(
      JSON.stringify({
        message: 'Single Product created successfully!',
        data: products,
      }),
    );
  }
  // PutMethod
  else if (method === 'PUT' && id !== null) {
    const body = await parseBody(req);
    const products = readProducts();

    const index = products.findIndex((p: IProduct) => p.id === id);
    console.log(index);

    if (index < 0) {
      res.writeHead(404, { 'content-type': 'application/json' });
      res.end(
        JSON.stringify({
          message: 'Product not found!',
          data: null,
        }),
      );
    }
    // console.log(products[index]);
    products[index] = { id: products[index].id, ...body };

    insertProduct(products);

    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(
      JSON.stringify({
        message: 'Product updated successfully!',
        data: products[index],
      }),
    );
  }
  // DeleteMethod
  else if (method === 'DELETE' && id !== null) {
    const products = readProducts();

    const index = products.findIndex((p: IProduct) => p.id == id);

    if (index < 0) {
      res.writeHead(404, { 'content-type': 'application/json' });
      res.end(
        JSON.stringify({
          message: 'Product not found!',
          data: null,
        }),
      );
    }

    /*
    const arr = ["1", "2", "3", "4", "5"] 
    arr.splice(2,1);
    console.log(arr)
    */

    products.splice(index, 1);
    // console.log(products);

    insertProduct(products);

    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(
      JSON.stringify({
        message: 'Product deleted successfully!',
        data: null,
      }),
    );
  }
};
