import type { IncomingMessage, ServerResponse } from 'http';
import { insertProduct, readProducts } from '../service/products.service';
import { parseBody } from '../utility/parseBody';
import type { IProduct } from '../types/product.type';
import { sendResponse } from '../utility/sendResponse';

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

    try {
      const products = readProducts();
      return sendResponse(
        200,
        res,
        true,
        'All Products received successfully!',
        products,
      );
    } catch (error) {
      return sendResponse(500, res, false, 'Something went wrong!', error);
    }
  } // GetSingleProduct - GetMethod
  else if (method === 'GET' && id !== null) {
    try {
      const products = readProducts();
      const singleProduct = products.find((p: IProduct) => p.id === id);
      // console.log(singleProduct);

      if (!singleProduct) {
        return sendResponse(404, res, false, 'Product not found!', null);
      }

      return sendResponse(
        200,
        res,
        true,
        'Single Product received successfully!',
        singleProduct,
      );
    } catch (error) {
      return sendResponse(500, res, false, 'Something went wrong!', error);
    }
  } // PostMethod - CreateNewProduct
  else if (method === 'POST' && url === '/products') {
    try {
      const body = await parseBody(req);
      // console.log("Body: ", body);

      const products = readProducts();
      // console.log(products);

      const newProduct = {
        id: Date.now(),
        ...body,
      };
      // console.log(newProduct);

      // PushNewProductToAllProducts
      products.push(newProduct);
      // console.log(products);

      // PushNewProductToAllProducts
      insertProduct(products);

      return sendResponse(
        200,
        res,
        true,
        'New Single Product created successfully!',
        products,
      );
    } catch (error) {
      return sendResponse(500, res, false, 'Something went wrong!', error);
    }
  }
  // PutMethod - UpdateProduct
  else if (method === 'PUT' && id !== null) {
    try {
      const body = await parseBody(req);
      // console.log(body);

      const products = readProducts();
      // console.log(products);

      // FindProductIndex
      const index = products.findIndex((p: IProduct) => p.id === id);
      // console.log(index);

      // HandleErrorIfNoProduct
      if (index < 0) {
        return sendResponse(404, res, false, 'Product not found!', null);
      }

      products[index] = { id: products[index].id, ...body };

      insertProduct(products);

      return sendResponse(
        200,
        res,
        true,
        'Product updated successfully!',
        products[index],
      );
    } catch (error) {
      return sendResponse(500, res, false, 'Something went wrong!', error);
    }
  }
  // DeleteMethod - DeleteProduct
  else if (method === 'DELETE' && id !== null) {
    try {
      //  ReadAllProducts
      const products = readProducts();

      // FindProductIndex
      const index = products.findIndex((p: IProduct) => p.id == id);

      //  HandleErrorIfNoProduct
      if (index < 0) {
        return sendResponse(404, res, false, 'Product not found!', null);
      }

      /*
    const arr = ["1", "2", "3", "4", "5"] 
    arr.splice(2,1);
    console.log(arr)
    */

      // DeleteProduct
      products.splice(index, 1);
      // console.log(products);

      // UpdateAllProducts
      insertProduct(products);

      return sendResponse(
        200,
        res,
        true,
        'Product deleted successfully!',
        null,
      );
    } catch (error) {
      return sendResponse(500, res, false, 'Something went wrong!', error);
    }
  }
};
