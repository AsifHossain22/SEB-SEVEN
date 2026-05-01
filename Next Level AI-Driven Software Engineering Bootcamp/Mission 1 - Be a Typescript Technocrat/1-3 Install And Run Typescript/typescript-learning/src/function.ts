// Function

// ArrowFunctionAndNormalFunction

// NormalFunction
function addNormalFunction(num1: number, num2: number): number {
  return num1 + num2;
}

// ArrowFunction
const addArrowFunction = (num1: number, num2: number) => num1 + num2;

// const result = add(2, "2");
const result = addArrowFunction(2, 2);
console.log("Result 1: ", result);

// Object => Function => Method
const poosUser = {
  name: "ASIF",
  balance: 0,
  addBalance(value: number) {
    const totalBalance = this.balance + value;
    return totalBalance;
  },
};
const result2 = poosUser.addBalance(100000);
console.log("Poor User - Result 2: ", result2);

// FunctionInLoop
const array: number[] = [1, 2, 3];

const sqrArray = array.map((element: number): number => element * element);

console.log("Square Array: ", sqrArray);
