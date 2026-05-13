import type { IncomingMessage, ServerResponse } from 'http';

export type TRes = ServerResponse;
export type TReq = IncomingMessage;

export interface TOrder {
  id: string;
  customerName: string;
  foodName: string;
  quantity: number;
  price: number;
}
