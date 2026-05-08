"use strict";
// Static - OOP
Object.defineProperty(exports, "__esModule", { value: true });
class Counter {
    count = 0;
    increment() {
        return (this.count += 1);
    }
    decrement() {
        return (this.count -= 1);
    }
}
const incrementCounter = new Counter();
console.log(incrementCounter.increment());
console.log(incrementCounter.increment());
console.log(incrementCounter.increment());
const incrementCounter2 = new Counter();
console.log(incrementCounter2.increment());
console.log(incrementCounter2.increment());
console.log(incrementCounter2.increment());
//# sourceMappingURL=static.js.map