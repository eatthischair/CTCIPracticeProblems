class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports.LinkedList = LinkedList;
module.exports.Node = Node;
