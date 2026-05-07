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
