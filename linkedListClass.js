class Node { 
  // constructor 
  constructor(element) 
  { 
    this.element = element; 
    this.next = null;
  } 
}

// linkedlist class 
class LinkedList { 
  constructor() 
  { 
    this.head = null; 
    this.size = 0; 
  } 

  // functions to be implemented 
  // add(element) 
  add(element) 
  { 
    // creates a new node 
    let node = new Node(element); 
  
    // to store current node 
    let current; 
  
    // if list is Empty add the 
    // element and make it head 
    if (this.head == null) 
      this.head = node; 
    else { 
      current = this.head; 
  
      // iterate to the end of the 
      // list 
      while (current.next) { 
        current = current.next; 
      } 
  
      // add node 
      current.next = node; 
    } 
    this.size++; 
  } 
  // insert element at the position index 
  // of the list 
  insertAt(element, index) 
  { 
    if (index > 0 && index > this.size) 
      return false; 
    else { 
      // creates a new node 
      let node = new Node(element); 
      let curr, prev; 
  
      curr = this.head; 
  
      // add the element to the 
      // first index 
      if (index == 0) { 
        node.next = head; 
        this.head = node; 
      } else { 
        curr = this.head; 
        let it = 0; 
  
        // iterate over the list to find 
        // the position to insert 
        while (it < index) { 
          it++; 
          prev = curr; 
          curr = curr.next; 
        } 
  
        // adding an element 
        node.next = curr; 
        prev.next = node; 
      } 
      this.size++; 
    } 
  } 
  // removeFrom(location)
  // removes an element from the 
// specified location 
removeFrom(index) 
{ 
    if (index > 0 && index > this.size) 
        return -1; 
    else { 
        let curr, prev, it = 0; 
        curr = this.head; 
        prev = curr; 
  
        // deleting first element 
        if (index == = 0) { 
            this.head = curr.next; 
        } else { 
            // iterate over the list to the 
            // position to removce an element 
            while (it < index) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
  
            // remove the element 
            prev.next = curr.next; 
        } 
        this.size--; 
  
        // return the remove element 
        return curr.element; 
    } 
}  
  // removeElement(element) 
// removes a given element from the 
// list 
removeElement(element) 
{ 
    let current = this.head; 
    let prev = null; 
  
    // iterate over the list 
    while (current != null) { 
        // comparing element with current 
        // element if found then remove the 
        // and return true 
        if (current.element == = element) { 
            if (prev == null) { 
                this.head = current.next; 
            } else { 
                prev.next = current.next; 
            } 
            this.size--; 
            return current.element; 
        } 
        prev = current; 
        current = current.next; 
    } 
    return -1; 
} 
  // Helper Methods 
  // isEmpty 
  // size_Of_List 
  // PrintList 
} 

function main(){
  const SLL = new LinkedList();
  SLL.add('Apollo');
}

main();