import path from 'path';
import fs from 'fs/promises';
import type { TOrder } from '../types/types';

const DB_PATH = path.join(process.cwd(), 'db', 'data.json');
// console.log(DB_PATH);

class OrderService {
  // ReadData
  private async readData(): Promise<TOrder[]> {
    try {
      const data = await fs.readFile(DB_PATH, 'utf-8');
      // console.log(data);

      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }
  // WriteData
  private async writeData(data: TOrder[]) {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
  }

  // GET - Method : ReadData
  async get() {
    const data = await this.readData();
    return data;
  }

  // GET - Method: SingleDataGetById
  async getById(id: string) {
    const data = await this.readData();
    return data.find(order => order.id === id) || null;
  }

  // POST - Method: CreateData
  async create(order: Omit<TOrder, 'id'>) {
    const data = await this.readData(); // ReadData

    // CreateNewData
    const newOrder = {
      ...order,
      id: String(Math.floor(Math.random() * 100)),
    };

    data.push(newOrder); // PushData

    await this.writeData(data); // WriteData
  }

  // PUT / PATCH - Method: UpdateData
  async update(
    id: string,
    updates: Partial<Omit<TOrder, 'id'>>,
  ): Promise<TOrder | null> {
    const data = await this.readData();

    const index = data.findIndex(order => order.id === id);

    if (index === -1) return null;

    data[index] = { ...data[index], ...updates } as TOrder;

    await this.writeData(data);

    return data[index];
  }

  // DELETE - Method: DeleteData
  async delete(id: string) {
    const data = await this.readData();

    const index = data.findIndex(order => order.id === id);

    if (index === -1) return false;

    data.slice(index, 1);

    await this.writeData(data);
    return true;
  }
}
export const orderService = new OrderService();
