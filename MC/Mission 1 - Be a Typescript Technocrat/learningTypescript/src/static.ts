// Static - OOP

class Counter {
  count: number = 0;

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
