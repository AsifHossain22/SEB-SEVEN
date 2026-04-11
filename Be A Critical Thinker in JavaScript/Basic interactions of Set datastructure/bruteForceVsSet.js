// DataSetUp
function generateSimData(size) {
  const itemPool = [
    "Apple",
    "Mango",
    "Banana",
    "Orange",
    "Grape",
    "Strawberry",
    "Pineapple",
    "Watermelon",
    "Cherry",
    "Blueberry",
    "Apple",
    "Orange",
  ];

  const generatedData = [];

  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * itemPool.length);
    generatedData.push(itemPool[randomIndex]);
  }
  return generatedData;
}

const hugeDataSet = generateSimData(500000);
console.log("Data size:", hugeDataSet.length);

// BruteForce
const arrStartTime = performance.now();

const removeDupArr = (arr) => {
  const newArr = [];

  arr.forEach((element) => {
    if (newArr.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
};
console.log(removeDupArr(hugeDataSet));

const arrEndTime = performance.now();
// CheckingTheTimeUnitOfExecution
console.log("Brute Force took:", arrEndTime - arrStartTime, "millisecond");

// SetImplementation
const setStartTime = performance.now();

const removeDupSet = (arr) => {
  const set = new Set(arr);

  return Array.from(set);
};
console.log(removeDupSet(hugeDataSet));

const setEndTime = performance.now();
// CheckingTheTimeUnitOfExecution
(console.log("Set Implementation took:", setEndTime - setStartTime),
  "millisecond!");
