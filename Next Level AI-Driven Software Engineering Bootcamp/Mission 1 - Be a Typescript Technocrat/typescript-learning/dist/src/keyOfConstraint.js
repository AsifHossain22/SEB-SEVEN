"use strict";
// KeyOf: TypeOperator
Object.defineProperty(exports, "__esModule", { value: true });
const myVehicle = "bike";
const user = {
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
const getPropertyFromObj = (obj, key) => {
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
//# sourceMappingURL=keyOfConstraint.js.map