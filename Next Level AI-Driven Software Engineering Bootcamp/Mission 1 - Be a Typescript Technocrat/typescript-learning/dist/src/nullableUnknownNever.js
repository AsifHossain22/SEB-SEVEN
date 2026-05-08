"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* NullableTypes
const getUser = (input) => {
    if (input) {
        console.log(`From DB: ${input}`);
    }
    else {
        console.log("From DB: All Users");
    }
};
// getUser("Asif");
getUser(null);
//* UnknownTypes
const discountCalculator = (input) => {
    if (typeof input === "number") {
        const discountedPrice = input * 0.1;
        console.log(discountedPrice);
    }
    else if (typeof input === "string") {
        const [discountedPrice] = input.split(" ");
        console.log(Number(discountedPrice) * 0.1);
    }
    else {
        console.log("Wrong input!");
    }
};
discountCalculator(100);
discountCalculator("100 TAKA");
discountCalculator(null);
//* Void
const throwError = (msg) => {
    throw new Error(msg);
};
//# sourceMappingURL=nullableUnknownNever.js.map