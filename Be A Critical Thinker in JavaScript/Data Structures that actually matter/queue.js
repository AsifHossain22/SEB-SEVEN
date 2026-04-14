// ArrayImplementation

class Queue {
  constructor() {
    this.items = [];
  }

  //   O(1)
  enqueue(value) {
    this.items.push(value); // AddingFirstElement
  }

  //   O(1)
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items.shift(); // RemovingFirstElement
  }

  //   O(1)
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[0];
  }

  //   O(1)
  isEmpty() {
    return this.items.length === 0;
  }

  //   O(n)
  print() {
    console.log(this.items.slice().reverse().join("=>"));
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.peek());

queue.print();
