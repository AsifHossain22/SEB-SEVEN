"use strict";
// MappedTypes
Object.defineProperty(exports, "__esModule", { value: true });
// Map
const arrayOfNumber = [7, 9, 11];
const arrayOfString = ["7", "9", "11"];
const arrayOfStringUsingMap = arrayOfNumber.map((num) => num.toString());
console.log(arrayOfStringUsingMap);
const user = {
    id: 101,
};
user.id;
/*
T >>> {height: string; width: number}

{height: string; width: number}["height"]:number
*/
const area1 = {
    height: "50",
    width: false,
};
//# sourceMappingURL=mapped.js.map