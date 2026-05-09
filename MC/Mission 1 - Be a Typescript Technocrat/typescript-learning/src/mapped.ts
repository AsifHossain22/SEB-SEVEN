// MappedTypes

// Map

const arrayOfNumber: number[] = [7, 9, 11];

const arrayOfString: string[] = ["7", "9", "11"];

const arrayOfStringUsingMap: string[] = arrayOfNumber.map((num) =>
  num.toString(),
);
console.log(arrayOfStringUsingMap);

const user = {
  id: 101,
};

user.id;

type AreaOfNum = {
  height: number;
  width: number;
};

type height = AreaOfNum["height"];

// type AreaOfString = {
//   height: string;
//   width: string;
// };

type Area<T> = {
  [key in keyof T]: T[key];

  // key >> height >> string
  // key >> width >> number
};

/*
T >>> {height: string; width: number} 

{height: string; width: number}["height"]:number
*/

const area1: Area<{ height: string; width: boolean }> = {
  height: "50",
  width: false,
};
