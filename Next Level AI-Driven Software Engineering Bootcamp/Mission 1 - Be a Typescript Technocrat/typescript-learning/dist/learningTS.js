"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* PrimitiveType
let shopName = "My Shop";
let totalProducts = 50;
let isOpen = true;
let rating = null;
let discount = undefined;
//* NonPrimitiveType
let baseProducts = ["Rice", "Oil", "Salt"];
// let prices: number[] = [10, 20, 30];
const products = {
    name: "Rice",
    price: 40,
    category: "Grocery",
};
//* VoidType
function voidFunction() {
    // console.log("This is VOID");
}
//* FunctionType
function calculateTotal(price, quantity) {
    return price * quantity;
}
// console.log(calculateTotal(20, 5)); // 100
//* RestOperator - CreatesArray
function totalCart(...prices) {
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
const item = {
    productName: "Water Bottle",
    productPrice: 30,
    productManufacturing: {
        location: "UAE", // StringLiteral
        zipCode: "00000",
    },
};
let payment = "BKash";
const SellerName = {
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
let userInput;
function processInput(input) {
    // (userInput as string).toUpperCase(); // TypeAssertion
    if (typeof input === "string") {
        input.toUpperCase();
    }
}
//* NeverType
function throwError(msg) {
    throw new Error(msg);
}
//* TypeUnknown
let apiData = "Rahim";
let userName = apiData.length; // TypeAssertion
const product1 = {
    productName: "Pressure Medicine",
    productPrice: 500,
};
//* Generics
function identity(value) {
    return value;
}
// const paracetamol = identity("Napa");
const paracetamol = identity(20);
console.log(typeof paracetamol);
// const res: IApiResponse<Array<string>> = {
//   success: true,
//   data: ["Rice", "Lentils"],
// };
const res = {
    success: true,
    data: ["Rice", "Lentils"],
};
function getName(param) {
    return param?.name;
}
//* ConstraintsWithKeyOfOperator
function getProperty(obj, key) {
    return obj[key];
}
//* Enum
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
let orderStatus = OrderStatus.Delivered;
const Status = {
    PENDING: "PENDING",
    SHIPPED: "SHIPPED",
};
const typeBosiye = "PENDING";
console.log("last", typeBosiye);
//# sourceMappingURL=learningTS.js.map