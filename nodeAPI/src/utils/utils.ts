import type { TReq, TRes } from '../types/types';

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

export const extractRequestInfo = async <T>(req: TReq) => {
  const params = req.url?.split('/').filter(Boolean) ?? [];
  const body =
    req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH'
      ? await parseBody<T>(req)
      : null;
  return {
    url: req.url ?? '/',
    method: req.method,
    params: params,
    body: body,
  };
};

const parseBody = async <T>(req: TReq): Promise<T | null> => {
  return new Promise((resole, reject) => {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resole(JSON.parse(body));
      } catch (error) {
        reject(new Error('Invalid data!'));
      }
    });
  });
};
