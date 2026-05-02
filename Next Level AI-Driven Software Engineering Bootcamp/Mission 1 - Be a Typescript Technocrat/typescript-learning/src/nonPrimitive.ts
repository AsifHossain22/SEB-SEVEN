// JS - TS

/*
 * JS:
 * Array
 *
 * TS:
 * Tuple
 */

let bazarList: string[] = ["eggs", "milk", "sugar"];

bazarList.push(7);

let mixedArray: (string | number)[] = ["eggs", 12, "milk", 1, "sugar", 2];

let coordinates: [number, number] = [20, 30, 50];

let couple: [string, string] = ["Husband", "Wife"];

let AsifNameAndRoll: [string, number] = ["Asif", 22];
AsifNameAndRoll[0] = 22;

let destination: [string, string, number] = ["Dhaka", "Rajshahi", 3];

/*
 * JS:
 * Object (ReferenceType)
 *
 * TS:
 * Tuple
 */

const user: { firstName: string; middleName: string; lastName: string } = {
  firstName: "Asif",
  middleName: "Hossain",
  lastName: "Ratul",
};

const user2: {
  // organization: string;
  organization: "Programming Hero"; // LiteralType - ValueAsType
  firstName: string;
  middleName?: string; // OptionalProperty
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programming Hero",
  firstName: "Asif",
  lastName: "Hossain",
  isMarried: true,
};
user2.organization = "Next Level Web Development";
console.log(user2);

const user3: {
  readonly organization: string; // AccessModifier
  // organization: "Programming Hero"; // LiteralType - ValueAsType
  firstName: string;
  middleName?: string; // OptionalProperty
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programming Hero",
  firstName: "Asif",
  lastName: "Hossain",
  isMarried: true,
};
user3.organization = "Next Level Web Development";
