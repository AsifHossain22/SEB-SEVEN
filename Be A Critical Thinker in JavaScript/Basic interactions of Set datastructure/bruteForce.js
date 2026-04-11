const arr = ["apple", "banana", "orange", "apple"];

// BruteForce
const removeDupArr = (arr) => {
  const newArr = [];

  arr.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });

  return newArr;
};
console.log(removeDupArr(arr));

// SetImplementation
const removeDupSet = (arr) => {
  const set = new Set(arr);
  return Array.from(set);
};
console.log(removeDupSet(arr));
