"use strict";
//? Task 1: The "Optional" Shopping Cart
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTotal({ price, quantity = 1 }) {
    return price * quantity;
}
// Test1
const task1result1 = calculateTotal({
    name: "মারহাবা, জাভাস্ক্রিপ্টে মারো থাবা",
    price: 500,
    quantity: 2,
});
// Test2
const task1result2 = calculateTotal({
    name: "Programming TypeScript",
    price: 1000,
    quantity: 2,
});
console.log(`Task 1 - Result 1: ${task1result1}, Task 2 - Result 2: ${task1result2}`);
const employee1 = {
    name: "ASIF",
    age: 25,
    role: "Web Developer",
    salary: 1500,
};
const employee2 = {
    name: "JOHORA",
    age: 25,
    role: "Problem Solver",
    salary: 3000,
};
function getProfile(employee) {
    return `Name: ${employee.name}, Age: ${employee.age}, Role: ${employee.role} & Salary: ${employee.salary}`;
}
const task2result1 = getProfile(employee1);
const task2result2 = getProfile(employee2);
console.log(`Task 2 - Result 1: ${task2result1}, Task 2 - Result 2: ${task2result2}`);
const user1 = {
    info: {
        address: {
            zipCode: "00000",
        },
    },
};
const user2 = {
    info: {
        address: {
            zipCode: "11111",
        },
    },
};
function getZipCode(user) {
    return user.info?.address?.zipCode ?? "00000";
}
const task3result1 = getZipCode(user1);
const task3result2 = getZipCode(user2);
console.log(`Task 3 - Result 1: ${task3result1}, Task 3 - Result 2: ${task3result2}`);
//? Task 4: Type Assertion
let secretValue = "typescript is awesome";
let upperValue = secretValue.toUpperCase();
console.log(upperValue);
//? Task 5: Generic Constraints
//# sourceMappingURL=typeScriptMasteryTasks.js.map