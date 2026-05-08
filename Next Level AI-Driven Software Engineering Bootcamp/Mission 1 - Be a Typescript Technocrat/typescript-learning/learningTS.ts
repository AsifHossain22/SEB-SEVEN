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
