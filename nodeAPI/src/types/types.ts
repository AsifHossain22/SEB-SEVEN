import type { IncomingMessage, ServerResponse } from 'http';
import data from '../../db/data.json' with { type: 'json' };

export type TMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type TRes = ServerResponse;
export type TReq = IncomingMessage & {
  method: TMethod;
};

// export interface TOrder {
//   id: string;
//   customerName: string;
//   foodName: string;
//   quantity: number;
//   price: number;
// }

export type TOrder = (typeof data)[number];
