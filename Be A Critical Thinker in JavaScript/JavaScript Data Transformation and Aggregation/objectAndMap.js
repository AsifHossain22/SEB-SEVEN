// const obj = {
//   nextLevel: { courseId: "level2" },
//   "Programming Hero": { courseId: "level1" },
// };
// console.log(obj);
// console.log(obj.nextLevel); // DotNotation
// console.log(obj["Programming Hero"]); // BracketNotation
// console.log(obj["nextLevel"]); // BracketNotation

// const obj2 = {};

// obj2.nextLevel = { courseId: "level2" };
// obj2[true] = { courseId: "level1" };

// console.log(obj2);

//! Note: Object Limitation ---> Can't keep an object as a key of an Object. Either a String or a Symbol.

// const obj3 = {};

const course1 = { name: "Programming Hero" };
const course2 = { name: "Next Level Web Development" };

// obj3[course2] = { courseId: "level2" };
// obj3[course1] = { courseId: "level1" };

// console.log(obj3);

const courses = [
  [course1, "Level1"],
  [course2, "Level2"],
];

const map = new Map(courses);

// map.set(course1, { courseId: "Level1" });
// map.set(course2, { courseId: "Level2" });

// map.clear();

// map.delete(course1);

// console.log(map.has(course1));

// map.forEach((value, key) => console.log("Key:", key, "Value:", value));

// map.forEach((value, key) => (key.name = "Shohoz Shorol Simple " + key.name));

// console.log([...map.keys()]);
// console.log([...map.values()]);

// for (let key of map.keys()) {
//   key.name = "Shohoz Shorol Simple " + key.name;
// }

console.log(map);
