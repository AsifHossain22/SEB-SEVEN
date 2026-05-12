import type { IncomingMessage, ServerResponse } from "http";
import { readProducts } from "../service/products.service";
import type { IProduct } from "../types/product.type";

export const productsController = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;

  const urlParts = url?.split("/");
  //   console.log(urlParts);

  const id =
    urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null;
  //   console.log("This is the actual id: ", id);

  //   GetAllProducts
  if (url === "/products" && method === "GET") {
    // const products = [{ id: 1, productName: "Product - 1" }];

    const products = readProducts();
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Products received successfully!",
        data: products,
      }),
    );
  } // GetSingleProduct
  else if (method === "GET" && id !== null) {
    const products = readProducts();
    const singleProduct = products.find((p: IProduct) => p.id === id);
    // console.log(singleProduct);

    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Single Product received successfully!",
        data: singleProduct,
      }),
    );
  }
};
