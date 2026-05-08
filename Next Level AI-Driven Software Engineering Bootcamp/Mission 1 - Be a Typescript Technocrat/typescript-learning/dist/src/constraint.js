"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addStudentsToCourse = (studentInfo) => {
    return {
        course: "Next Level",
        ...studentInfo,
    };
};
const student1 = {
    id: 101,
    name: "Asif",
    isRich: false,
    isMarried: true,
};
const student2 = {
    id: 102,
    name: "Johora",
    isRich: true,
    isMarried: true,
};
const student3 = {
    id: 103,
    name: "Akashi",
    isRich: true,
    dateOfBirth: "2001",
    class: 12,
};
const result = addStudentsToCourse(student3);
console.log(result);
//# sourceMappingURL=constraint.js.map