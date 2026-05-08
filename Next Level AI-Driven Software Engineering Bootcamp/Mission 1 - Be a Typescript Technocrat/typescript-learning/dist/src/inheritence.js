"use strict";
//* Inheritance - OOP - 1
Object.defineProperty(exports, "__esModule", { value: true });
class Parent {
    name; // Common
    age; // Common
    address; // Common
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    // CommonMethod
    getSleep(numberOfHours) {
        console.log(`${this.name} sleeps ${numberOfHours} hrs daily.`);
    }
}
class Student extends Parent {
    rollNo;
    constructor(name, age, address, rollNo) {
        super(name, age, address);
        this.rollNo = rollNo;
    }
}
const student1 = new Student("Asif", 25, "United Arab Emirates", 1280);
student1.getSleep("4-5");
class Teacher {
    name; // Common
    age; // Common
    address; // Common
    designation; // OwnProperty
    constructor(name, age, address, designation) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = designation;
    }
    // CommonMethod
    getSleep(numberOfHours) {
        console.log(`${this.name} sleeps ${numberOfHours} hrs daily.`);
    }
    //   OwnMethod
    takeClass(numOfHours) {
        console.log(`${this.name} took class for ${numOfHours} hrs.`);
    }
}
const teacher1 = new Teacher("Mezba", 30, "Bangladesh", "Senior Web Instructor");
teacher1.takeClass("3-4");
//# sourceMappingURL=inheritence.js.map