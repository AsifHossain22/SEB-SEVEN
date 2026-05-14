import { orderService } from '../service/orders.service';
import type { TOrder, TReq, TRes } from '../types/types';
import { extractRequestInfo, sendResponse } from '../utils/utils';

export const orderRoute = async (req: TReq, res: TRes) => {
  const { method, params, body } =
    await extractRequestInfo<Omit<TOrder, 'id'>>(req);
  const orderId = params[1];

  try {
    if (method === 'GET' && !orderId) {
      const orders = await orderService.get();
      sendResponse(
        res,
        { message: 'Orders received successfully!', data: orders },
        200,
      );
      return;
    }

    if (method === 'GET' && orderId) {
      const order = await orderService.getById(orderId);
      sendResponse(
        res,
        {
          message: order ? 'Order received successfully!' : 'Order Not Found!',
          data: order,
          error: order ? false : true,
        },
        order ? 200 : 404,
      );
      return;
    }

    if (method === 'DELETE' && orderId) {
      const deleted = await orderService.delete(orderId);
      sendResponse(
        res,
        {
          message: deleted ? 'Order deleted successfully!' : 'Order Not Found!',
          error: deleted ? false : true,
        },

        deleted ? 200 : 404,
      );
      return;
    }

    if (method === 'POST' && body) {
      const newOrder = await orderService.create(body);

      sendResponse(
        res,
        { message: 'Order created successfully!', data: newOrder },
        201,
      );
      return;
    }

    if (method === 'PUT' && orderId && body) {
      const updatedOrder = await orderService.update(orderId, body);

      sendResponse(
        res,
        {
          message: updatedOrder ? 'Order updated successfully!' : '',
          data: updatedOrder,
        },
        updatedOrder ? 201 : 404,
      );
      return;
    }
    sendResponse(res, { message: 'Not Found!' }, 405);
  } catch (error) {
    sendResponse(
      res,
      { message: error instanceof Error ? error.message : 'Server Error!' },
      500,
    );
  }
};
