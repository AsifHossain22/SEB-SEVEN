// DynamicallyGeneralize

type GenericArray<T> = Array<T>;

// const friends: string[] = ["Zihad", "Abir", "Shamim"];

const friends: GenericArray<string> = ["Zihad", "Abir", "Shamim"];

// const rollNumbers: number[] = [7, 9, 11];

const rollNumbers: GenericArray<number> = [7, 9, 11];

// const isEligibleList: boolean[] = [true, false, false];

const isEligibleList: GenericArray<boolean> = [true, false, false];

const userList: GenericArray<{ name: string; age: number }> = [
  {
    name: "Mr. X",
    age: 22,
  },
  {
    name: "Mr. Y",
    age: 25,
  },
];

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];

//* Learned: Receiving dynamic types using Generic
