"use strict";
//* Polymorphism - OOP - 2
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    getSleep() {
        console.log("Sleep for 6-8 hrs");
    }
}
class Student extends Person {
    getSleep() {
        console.log("I sleep for 4-5 hrs");
    }
}
class NextLevelDeveloper extends Person {
    getSleep() {
        console.log("Next Level Developer sleep for 6 hrs");
    }
}
const getSleepingHours = (param) => {
    param.getSleep();
};
const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();
getSleepingHours(person1);
getSleepingHours(person2);
getSleepingHours(person3);
//# sourceMappingURL=polymorphism.js.map