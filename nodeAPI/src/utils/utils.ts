import type { TRes } from '../types/types';

export function sendResponse<T>(
  res: TRes,
  { message, data, error }: { message: string; data?: T; error?: boolean },
  status = 200,
) {
  res.writeHead(status, { 'content-type': 'application/json' }); // WritingHeaders
  res.end(
    JSON.stringify({
      success: error ? false : true,
      message: message,
      data: error ? null : data,
    }),
  );
}
