import { createServer } from 'http';
import { sendResponse } from './utils/utils';
import { orderRoute } from './routes/order.route';
import type { TReq } from './types/types';

const server = createServer(async (req, res) => {
  const url = req.url ?? '/';

  if (url === '/') {
    sendResponse(
      res,
      { message: 'Welcome to KHAI DAI Restaurant SERVER :)' },
      200,
    );
    return;
  }

  if (url.startsWith('/orders')) {
    await orderRoute(req as TReq, res);
    return;
  }

  sendResponse(res, { message: 'Page Not Found :(' }, 404);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
