// KeyOf: TypeOperator

type RichPeoplesVehicles = {
  car: string;
  bike: string;
  cns: string;
};

type MyVehicle1 = "bike" | "car" | "cng";

type MyVehicle2 = keyof RichPeoplesVehicles;

const myVehicle: MyVehicle2 = "bike";

//

type User = {
  id: number;
  name: string;
  address: {
    city: string;
    country: string;
  };
};
const user: User = {
  id: 101, // key: value
  name: "Asif",
  address: {
    city: "Dubai",
    country: "United Arab Emirates",
  },
};

// const myId = user["id"];
// const myName = user["name"];
// const myAddress = user["address"];
// console.log({ myId, myName, myAddress });

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

// const result1 = getPropertyFromObj(user, "naam");
// console.log(result1);

const product = {
  brand: "HP",
};
const result2 = getPropertyFromObj(product, "brand");
console.log(result2);

const student = {
  id: 1001,
  class: "twelve",
};
const result3 = getPropertyFromObj(student, "id");
