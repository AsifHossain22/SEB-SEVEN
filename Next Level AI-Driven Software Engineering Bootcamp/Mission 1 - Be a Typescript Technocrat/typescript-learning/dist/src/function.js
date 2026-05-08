"use strict";
// Function
Object.defineProperty(exports, "__esModule", { value: true });
// ArrowFunctionAndNormalFunction
// NormalFunction
function addNormalFunction(num1, num2) {
    return num1 + num2;
}
// ArrowFunction
const addArrowFunction = (num1, num2) => num1 + num2;
// const result = add(2, "2");
const result = addArrowFunction(2, 2);
console.log("Result 1: ", result);
// Object => Function => Method
const poosUser = {
    name: "ASIF",
    balance: 0,
    addBalance(value) {
        const totalBalance = this.balance + value;
        return totalBalance;
    },
};
const result2 = poosUser.addBalance(100000);
console.log("Poor User - Result 2: ", result2);
// FunctionInLoop
const array = [1, 2, 3];
const sqrArray = array.map((element) => element * element);
console.log("Square Array: ", sqrArray);
//# sourceMappingURL=function.js.map