import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), './src/database/db.json');

// ReadProducts
export const readProducts = () => {
  //   console.log(process.cwd());
  //   console.log(filePath);

  const products = fs.readFileSync(filePath, 'utf-8');
  //   console.log(products.toString());

  //   console.log(JSON.parse(products));
  return JSON.parse(products);
};

// InsertProducts
export const insertProduct = (payload: any) => {
  console.log(JSON.stringify(payload));
  fs.writeFileSync(filePath, JSON.stringify(payload));
};
