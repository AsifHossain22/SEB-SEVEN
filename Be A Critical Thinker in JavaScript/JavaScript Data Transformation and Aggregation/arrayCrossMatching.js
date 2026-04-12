// Some

const numbers = [1, 9, 3, 7, 5];

const hasEvenNumber = numbers.some((number) => number % 2 === 0);
// console.log(hasEvenNumber);

const currentUserRoles = ["user", "editor", "admin"];
const featureAccessRoles = ["admin", "manager"];

const canAccess = currentUserRoles.some((role) =>
  featureAccessRoles.includes(role),
);
console.log(canAccess);
