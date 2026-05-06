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

//* Function
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
