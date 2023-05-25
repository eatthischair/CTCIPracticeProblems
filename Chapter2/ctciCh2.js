const { LinkedList } = require("./linkedList.js");
const { Node } = require("./linkedList.js");

//Linked Lists

//2.1 Remove Dups

const removeDups = (head) => {
  console.log("head", JSON.stringify(head));
  let current = head.head;
  while (current !== null) {
    console.log("ccurr", current);
    let runner = current;
    while (runner.next !== null) {
      console.log("i turn that b to a runner", runner, current);
      if (runner.value === current.value) {
        // console.log("im in, boss", current, runner);
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
  return head;
};

let list = new LinkedList();
for (let elem of [1, 5, 1, 6, 8, 6, 8]) {
  list.append(elem);
}

console.log("ee", JSON.stringify(removeDups(list)));

//2.2 Return Kth to Last
//find length of LL
//run two pointers, when first reaches end, update length var
//have slower pointer count every iteration, when it reaches length - k, return data

// const returnKth = (head, k) => {
//   let current = head;
//   let LLmap = new Map();
//   let depth = 0;
//   while (current.next !== null) {
//     LLmap.set(depth, current.val);
//     depth++;
//     current = current.next;
//   }
//   let depthToFind = depth - k;
//   let kThNode = LLmap.get(depthToFind);
//   return kThNode;
// };
//solution above doesnt work becauuse you want the node, not the value of the node.

const returnKth = (head, k) => {
  let p1 = head;
  let p2 = head;
  for (let i = 0; i < k; i++) {
    if (p1 === null) {
      return null;
    }
    p1 = p1.next;
  }
  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;
};

//2.3 Delete Middle Node

//why I couldnt solve
//I ASSUMED I need access to the previous node. when thinking of a chain, you can either attach the previous link to the next link, or you can MAKE the next link the current link
//this is where visual respresentations become tricky
//remember all objects are mutable, and can be changed into one another. moving and copying/changing are the same thing.

//when u copy a node, including the data and the .next, the whole chain is copied, not just the next node

const deleteMiddle = (node) => {
  if (node === null || node.next === null) {
    return false;
  }
  //create new Node with data from the next node

  let next = node.next;
  node.data = next.data;
  node.next = next.next;
  return true;
};

//2.4
const partition = (list, partitionVal) => {
  let LL1 = new LinkedList();
  let LL2 = new LinkedList();
  let current = list;
  while (current.next !== null) {
    if (current.value < partitionVal) {
      LL1.append(current.value);
    } else {
      LL2.append(current.value);
    }
  }
  LL1.tail.next = LL2;
  return LL1;
};

/* TESTS */
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// Output: 3 -> 2 -> 1 -> 5 -> 5 -> 8 -> 10
