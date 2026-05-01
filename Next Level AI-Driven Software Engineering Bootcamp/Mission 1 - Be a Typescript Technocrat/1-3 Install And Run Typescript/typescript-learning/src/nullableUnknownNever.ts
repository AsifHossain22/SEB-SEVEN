//* NullableTypes
const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log("From DB: All Users");
  }
};

// getUser("Asif");
getUser(null);

//* UnknownTypes
const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountedPrice = input * 0.1;
    console.log(discountedPrice);
  } else if (typeof input === "string") {
    const [discountedPrice] = input.split(" ");
    console.log(Number(discountedPrice) * 0.1);
  } else {
    console.log("Wrong input!");
  }
};

discountCalculator(100);
discountCalculator("100 TAKA");
discountCalculator(null);

//* Void
const throwError = (msg: string): never => {
  throw new Error(msg);
};
