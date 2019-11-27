const _Node = require('./Node');
let Node = new _Node();

// linkedlist class 

class LinkedList { 
  constructor() 
  { 
    this.head = null; 
  } 
  insertFirst(item) {
    this.head = new Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new Node(item, null);
    }
  }

  add(item){
    let 
  }

  find(item) { 
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking 
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }
  remove(item){ 
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  // finds the index of element 
indexOf(element) 
{ 
    let count = 0; 
    let current = this.head; 
  
    // iterae over the list 
    while (current != null) { 
        // compare each element of the list 
        // with given element 
        if (current.element == = element) 
            return count; 
        count++; 
        current = current.next; 
    } 
  
    // not found 
    return -1; 
} 

insetBefore()

} 

function main(){
  vonst SLL - new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  
}