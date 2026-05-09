// UtilityTypes

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

// Pick
type ProductSummary = Pick<Product, "id" | "name" | "price">;

// Omit
type ProductWithoutStock = Omit<Product, "stock" | "color">;

// Required
type ProductWithColor = Required<Product>;

const product1: ProductWithColor = {
  id: 101,
  name: "MacBook",
  price: "7000",
  stock: 2,
  color: "Black",
};

// Partial
type OptionalProduct = Partial<Product>;

// Readonly
type ProductReadOnly = Readonly<Product>;

// Record
const emptyObj: Record<string, unknown> = {};
