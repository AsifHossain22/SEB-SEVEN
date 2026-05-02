/*
 * '?' : Ternary Operator - Decision Making
 * "??" : Nullish Coalescing Operator - Undefined | Null
 * '?.' : Optional Chaining
 */

const biyerJonneEligible = (age: number) => {
  if (age >= 21) {
    // console.log("You are eligible.");
  } else {
    // console.log("You are not eligible!");
  }
};

biyerJonneEligible(21);

// const userTheme = undefined;
// const userTheme = null;
const userTheme = "";

const selectedTheme = userTheme ?? "Light Theme";

console.log(selectedTheme);

// const isAuthenticated = null;
const isAuthenticated = "";

const resultWithTernary = isAuthenticated
  ? isAuthenticated
  : "You are a guest!";

const resultWithNullish = isAuthenticated ?? "You are a guest!";

// console.log({ resultWithTernary }, { resultWithNullish });

//* OptionalChaining
const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Manikganj",
  },
};

const postalCode = user?.address?.postalCode;
console.log(postalCode);
