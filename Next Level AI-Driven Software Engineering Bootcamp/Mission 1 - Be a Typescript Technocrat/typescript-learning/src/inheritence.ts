class Parent {
  name: string; // Common
  age: number; // Common
  address: string; // Common

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  // CommonMethod
  getSleep(numberOfHours: string) {
    console.log(`${this.name} sleeps ${numberOfHours} hrs daily.`);
  }
}

class Student extends Parent {
  rollNo: number;

  constructor(name: string, age: number, address: string, rollNo: number) {
    super(name, age, address);
    this.rollNo = rollNo;
  }
}

const student1 = new Student("Asif", 25, "United Arab Emirates", 1280);
student1.getSleep("4-5");

class Teacher {
  name: string; // Common
  age: number; // Common
  address: string; // Common
  designation: string; // OwnProperty

  constructor(name: string, age: number, address: string, designation: string) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.designation = designation;
  }

  // CommonMethod
  getSleep(numberOfHours: string) {
    console.log(`${this.name} sleeps ${numberOfHours} hrs daily.`);
  }

  //   OwnMethod
  takeClass(numOfHours: string) {
    console.log(`${this.name} took class for ${numOfHours} hrs.`);
  }
}

const teacher1 = new Teacher(
  "Mezba",
  30,
  "Bangladesh",
  "Senior Web Instructor",
);
teacher1.takeClass("3-4");
