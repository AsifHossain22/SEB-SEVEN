//* PrimitiveType
let shopName: string = "My Shop";
let totalProducts: number = 50;
let isOpen: boolean = true;
let rating: null = null;
let discount: undefined = undefined;

//* NonPrimitiveType
let baseProducts: string[] = ["Rice", "Oil", "Salt"];

// let prices: number[] = [10, 20, 30];

const products: {
  name: string;
  price: number;
  category: "Grocery" | "Electronics";
  discount?: number;
} = {
  name: "Rice",
  price: 40,
  category: "Grocery",
};

//* VoidType
function voidFunction(): void {
  // console.log("This is VOID");
}

//* FunctionType
function calculateTotal(price: number, quantity: number) {
  return price * quantity;
}
// console.log(calculateTotal(20, 5)); // 100

//* RestOperator - CreatesArray
function totalCart(...prices: number[]): number {
  return prices.reduce((sum, p) => sum + p, 100);
}

//* SpreadOperator - BreaksArray
const newProducts = [...baseProducts, "Mustard Oil"];
// console.log(newProducts);

//* Destructuring
const buyer = {
  name: "Kareem",
  address: "Dhaka",
  contactNumber: "+971500000000",
};

const { name, contactNumber } = buyer;
// console.log(`Name: ${name} & Contact Number: ${contactNumber}`);

//* Types - TypeAlias
type TProduct = {
  productName: string;
  productPrice: number;
  productManufacturing: {
    location: "UAE"; // StringLiteral
    zipCode: string;
  };
};

const item: TProduct = {
  productName: "Water Bottle",
  productPrice: 30,
  productManufacturing: {
    location: "UAE", // StringLiteral
    zipCode: "00000",
  },
};

//* TypeUnion
type TPaymentMethod = "BKash" | "Rocket" | "Nagad" | "Brac Bank"; //

let payment: TPaymentMethod = "BKash";

//* TypeIntersection
type TUser = {
  name: string;
};
type TSeller = TUser & {
  shopName: string;
};

const SellerName: TSeller = {
  name: "Rahim",
  shopName: "Rahim's Store",
};

//* Ternary
const stock = 0;

const status = stock > 0 ? "Available" : "Out of stock";

//* Nullish
const discountPrice = products.discount ?? 0; // Whether it's Null or Undefined

//* OptionalChaining
const sellerName = products?.name;

//* TypeAssertion - Unknown
let userInput: unknown;

function processInput(input: unknown) {
  // (userInput as string).toUpperCase(); // TypeAssertion

  if (typeof input === "string") {
    input.toUpperCase();
  }
}

//* NeverType
function throwError(msg: string): never {
  throw new Error(msg);
}

//* TypeUnknown
let apiData: unknown = "Rahim";

let userName = (apiData as string).length; // TypeAssertion

//* Interface - It can't declare type for 'Primitive Types'
interface IProduct {
  productName: string;
  productPrice: number;
}

const product1: IProduct = {
  productName: "Pressure Medicine",
  productPrice: 500,
};

//* Generics
function identity<T>(value: T): T {
  return value;
}
// const paracetamol = identity("Napa");
const paracetamol = identity(20);
console.log(typeof paracetamol);

//* GenericsWithInterface
interface IApiResponse<T> {
  success: boolean;
  data: T;
}
// const res: IApiResponse<Array<string>> = {
//   success: true,
//   data: ["Rice", "Lentils"],
// };
const res: IApiResponse<string[]> = {
  success: true,
  data: ["Rice", "Lentils"],
};

//* Constraints
interface IPersonal {
  name: string;
  add: string;
}

function getName<T extends IPersonal>(param: T): string {
  return param?.name;
}

//* ConstraintsWithKeyOfOperator
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

//* Enum
enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
}

let orderStatus = OrderStatus.Delivered;

const Status = {
  PENDING: "PENDING",
  SHIPPED: "SHIPPED",
} as const;

//* TypeCheck
type StatusCheck = (typeof Status)[keyof typeof Status];

const typeBosiye: StatusCheck = "PENDING";

console.log("last", typeBosiye);
