// const x = require("./file1");

// console.log(x);

//* Destructuring
// const { a } = require("./file1");
// const { a } = require("./file3");

const { a: x } = require("./file1");
const { a: y } = require("./file3");

// const add = require("./utils/add.js");

// console.log("Addition:", add(x, y));

// const add = require("./utils");

const { f1: add, f2: sub } = require("./utils");

console.log("Addition:", add(x, y));
console.log("Subtraction:", sub(y, x));

// console.log(x, y);
