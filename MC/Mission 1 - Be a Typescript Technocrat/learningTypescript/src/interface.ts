type User = {
  name: string;
  age: number;
};

type Role = {
  role: "admin" | "user";
};

// InterfaceWillWorkInObjectTypeOnly - Array, Object, Function
interface IUser {
  name: string;
  age: number;
}

type UserWithRole = User & Role;

const user1: UserWithRole = {
  name: "ASIF",
  age: 25,
  role: "admin",
};

const user2: IUser = {
  name: "Johora",
  age: 25,
};

type IsAdmin = boolean;

const isAdmin: IsAdmin = false;

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

// Function
type Add = (num1: number, num2: number) => number;

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;

// Array
type Friends = string[];

interface IFriends {
  [index: number]: string;
}

const friends: IFriends = ["Zihad", "Abir"];
