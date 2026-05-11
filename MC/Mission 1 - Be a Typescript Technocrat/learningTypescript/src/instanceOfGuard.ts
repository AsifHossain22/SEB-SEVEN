// OOP - InstanceOfTypeGuard / TypeNarrowing

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(numOfHours: string) {
    console.log(`${this.name} do sleep ${numOfHours} hrs daily.`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfHours: string) {
    console.log(`${this.name} do study ${numOfHours} hrs daily.`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOfHours: string) {
    console.log(`${this.name} take class ${numOfHours} hrs daily.`);
  }
}

// FunctionGuard
const isStudent = (user: Person) => {
  return user instanceof Student; // UserIsStudent
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher; // UserIsTeacher
};

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy("3-4");
  } else if (isTeacher(user)) {
    user.takeClass("3-4");
  } else {
    user.getSleep("4-5");
  }
};

const student1 = new Student("Asif");
const teacher1 = new Teacher("Mezba");
const person1 = new Person("Asif");

getUserInfo(student1);
getUserInfo(teacher1);
getUserInfo(person1);
