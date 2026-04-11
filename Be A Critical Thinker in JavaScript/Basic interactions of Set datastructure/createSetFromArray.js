const arr = ["apple", "banana", "grape", "apple"];

const set = new Set(arr); // CreatedSetFromArrayWithoutDuplicates

set.push("tomato"); // Error: SetDoesNotHavePushMethod

console.log(set);
