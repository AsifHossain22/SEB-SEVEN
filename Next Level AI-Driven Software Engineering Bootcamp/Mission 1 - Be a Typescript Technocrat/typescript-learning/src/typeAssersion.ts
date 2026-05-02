/*
let anything: any;

anything = 222;
(anything as number).

const everything: any;

everything = "ASIF";
(everything as string).
*/

/*
const KGToGConverter = (input: string | number | undefined) => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted output is: ${Number(value) * 1000}`;
  }
};

const result1 = KGToGConverter(7) as number;
console.log(result1);

const result2 = KGToGConverter(22) as string;

console.log(result2);
*/

// type CustomError = aray

// type CustomErrorII =

type CustomError = {
  message: string;
};

try {
} catch (err) {
  console.log((err as CustomError).message);
}
