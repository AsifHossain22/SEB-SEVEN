import type { ServerResponse } from 'http';

export const sendResponse = (
  statusCode: number,
  res: ServerResponse,
  success: boolean,
  message: string,
  data: any,
) => {
  const response = {
    statusCode,
    success,
    message,
    data,
  };

  res.writeHead(statusCode, { 'content-type': 'application/json' });
  res.end(JSON.stringify(response));
};
