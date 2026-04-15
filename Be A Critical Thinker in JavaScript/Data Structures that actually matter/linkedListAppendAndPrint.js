class Node {
  constructor(value) {
    ((this.value = value), (this.next = null));
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    // IfTheLinkedListEmpty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // IfTheLinkedListNotEmpty
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend() {}

  insert() {}

  remove() {}

  print() {
    const arr = [];

    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);

      currentNode = currentNode.next;
    }
    console.log(arr.join(" => "), "=> null");
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.print();
