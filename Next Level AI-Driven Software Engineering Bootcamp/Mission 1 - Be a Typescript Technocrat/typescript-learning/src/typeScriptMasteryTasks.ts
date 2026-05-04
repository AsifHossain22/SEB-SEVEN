//? Task 1: The "Optional" Shopping Cart

type CartItem = {
  name: string;
  price: number;
  quantity?: number;
};

function calculateTotal({ price, quantity = 1 }: CartItem) {
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

console.log(
  `Task 1 - Result 1: ${task1result1}, Task 2 - Result 2: ${task1result2}`,
);

//? Task 2: Merging User Profiles

type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };

type Employee = Person & JobDetails;

const employee1: Employee = {
  name: "ASIF",
  age: 25,
  role: "Web Developer",
  salary: 1500,
};

const employee2: Employee = {
  name: "JOHORA",
  age: 25,
  role: "Problem Solver",
  salary: 3000,
};

function getProfile(employee: Employee): string {
  return `Name: ${employee.name}, Age: ${employee.age}, Role: ${employee.role} & Salary: ${employee.salary}`;
}
const task2result1 = getProfile(employee1);
const task2result2 = getProfile(employee2);

console.log(
  `Task 2 - Result 1: ${task2result1}, Task 2 - Result 2: ${task2result2}`,
);

//? Task 3: The "Safe" Data Fetcher

type UserResponse = {
  info?: {
    address?: {
      zipCode?: string;
    };
  };
};

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

function getZipCode(user: UserResponse): string {
  return user.info?.address?.zipCode ?? "00000";
}
const task3result1 = getZipCode(user1);
const task3result2 = getZipCode(user2);

console.log(
  `Task 3 - Result 1: ${task3result1}, Task 3 - Result 2: ${task3result2}`,
);
