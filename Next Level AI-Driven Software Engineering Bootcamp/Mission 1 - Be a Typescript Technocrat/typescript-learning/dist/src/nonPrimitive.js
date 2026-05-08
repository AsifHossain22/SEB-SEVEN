"use strict";
// JS - TS
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * JS:
 * Array
 *
 * TS:
 * Tuple
 */
let bazarList = ["eggs", "milk", "sugar"];
bazarList.push(7);
let mixedArray = ["eggs", 12, "milk", 1, "sugar", 2];
let coordinates = [20, 30, 50];
let couple = ["Husband", "Wife"];
let AsifNameAndRoll = ["Asif", 22];
AsifNameAndRoll[0] = 22;
let destination = ["Dhaka", "Rajshahi", 3];
/*
 * JS:
 * Object (ReferenceType)
 *
 * TS:
 * Tuple
 */
const user = {
    firstName: "Asif",
    middleName: "Hossain",
    lastName: "Ratul",
};
const user2 = {
    organization: "Programming Hero",
    firstName: "Asif",
    lastName: "Hossain",
    isMarried: true,
};
user2.organization = "Next Level Web Development";
console.log(user2);
const user3 = {
    organization: "Programming Hero",
    firstName: "Asif",
    lastName: "Hossain",
    isMarried: true,
};
user3.organization = "Next Level Web Development";
//# sourceMappingURL=nonPrimitive.js.map