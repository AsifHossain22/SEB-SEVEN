//? Problem - 1
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => {
    return num % 2 === 0;
  });
}
const onlyEvenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(onlyEvenNumbers);

//? Problem - 2
function reverseString(wordString: string): string {
  const reversedWord = wordString.split("").reverse().join("");
  return reversedWord;
}
const returnReverseString = reverseString("typescript");
console.log(returnReverseString);

//? Problem - 3
type TStringOrNumber = string | number;

function checkType(whatIsTheType: TStringOrNumber) {
  if (typeof whatIsTheType === "string") {
    console.log("This is String Type");
  } else if (typeof whatIsTheType === "number") {
    console.log("This is Number Type");
  } else {
    console.log("This isn't a String or Number Type");
  }
}
checkType("Hello");
checkType(7);

//? Problem - 4
function getProperty<T>(value: T): T {
  return value;
}
const user = getProperty({ id: 1, name: "John Doe", age: 21 });
console.log(`Name: ${user.name} is a`, typeof user.name, "type");
console.log(`Age: ${user.age} is a`, typeof user.name, "type");

//? Problem - 5
interface IBook {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: IBook): IBook & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

const book: IBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

const bookTypescript = toggleReadStatus(book);
console.log(bookTypescript);
