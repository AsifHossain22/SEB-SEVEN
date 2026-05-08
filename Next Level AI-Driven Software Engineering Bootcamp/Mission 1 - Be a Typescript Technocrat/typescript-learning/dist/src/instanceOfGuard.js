"use strict";
// OOP - InstanceOfTypeGuard / TypeNarrowing
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    getSleep(numOfHours) {
        console.log(`${this.name} do sleep ${numOfHours} hrs daily.`);
    }
}
class Student extends Person {
    constructor(name) {
        super(name);
    }
    doStudy(numOfHours) {
        console.log(`${this.name} do study ${numOfHours} hrs daily.`);
    }
}
class Teacher extends Person {
    constructor(name) {
        super(name);
    }
    takeClass(numOfHours) {
        console.log(`${this.name} take class ${numOfHours} hrs daily.`);
    }
}
// FunctionGuard
const isStudent = (user) => {
    return user instanceof Student; // UserIsStudent
};
const isTeacher = (user) => {
    return user instanceof Teacher; // UserIsTeacher
};
const getUserInfo = (user) => {
    if (isStudent(user)) {
        user.doStudy("3-4");
    }
    else if (isTeacher(user)) {
        user.takeClass("3-4");
    }
    else {
        user.getSleep("4-5");
    }
};
const student1 = new Student("Asif");
const teacher1 = new Teacher("Mezba");
const person1 = new Person("Asif");
getUserInfo(student1);
getUserInfo(teacher1);
getUserInfo(person1);
//# sourceMappingURL=instanceOfGuard.js.map