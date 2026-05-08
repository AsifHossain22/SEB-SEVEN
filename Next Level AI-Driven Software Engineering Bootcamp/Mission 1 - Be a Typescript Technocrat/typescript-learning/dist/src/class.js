"use strict";
// OOP - Class ---> Object
Object.defineProperty(exports, "__esModule", { value: true });
// class Animal {
//   name: string;
//   species: string;
//   sound: string;
//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
//   makeSound() {
//     console.log(`'${this.name}' making sound '${this.sound}'`);
//   }
// }
// ParameterProperties
class Animal {
    name;
    species;
    sound;
    //   public name: string;
    //   public species: string;
    //   public sound: string;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }
    makeSound() {
        console.log(`'${this.name}' making sound '${this.sound}'`);
    }
}
const dog = new Animal("Bolt", "Dog", "Ghew Ghew");
const cat = new Animal("Kitty", "Cat", "Mew Mew");
const result1 = `Result 1 - Name: ${dog.name}, Species: ${dog.species} and Sound: ${dog.sound}`;
console.log(result1);
const result2 = `Result 2 - Name: ${cat.name}, Species: ${cat.species} and Sound: ${cat.sound}`;
console.log(result2);
dog.makeSound();
//# sourceMappingURL=class.js.map