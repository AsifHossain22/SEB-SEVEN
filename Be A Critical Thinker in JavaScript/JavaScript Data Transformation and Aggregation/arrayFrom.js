// Array.from()

const arr1 = Array.from({ length: 5 }).fill(0); // CanBeFillWithNumber
const arr2 = Array.from({ length: 5 }).fill(null); // CanBeFillWithNull
const arr3 = Array.from({ length: 5 }).fill(""); // CanBeFillWithEmptyString
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// const arr = Array.from({ length: 5 }, (_, i) => i);

const arr = Array.from([1, 2, 3], (value, i) => value * value); // SquareOfTheValue
// console.log(arr);

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step,
  );
console.log(range(0, 11, 2));
