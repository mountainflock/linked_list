function Node(value, next) {
  return { value, next };
}
function LinkedList() {
  let head = null;

  // logs list to the console
  const log = () => {
    console.log(JSON.stringify(head, null, 2));
  };

  // adds a new node containing value to the end of the list
  const append = (value) => {
    if (head == null) {
      head = Node(value, null);
      return;
    }
    let current = head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = Node(value, null);
  };

  // adds a new node containing value to the start of the list
  const prepend = (value) => {
    head = Node(value, head);
  };

  // returns the total number of nodes in the list
  const size = () => {
    let current = head;
    let counter = 0;

    while (current != null) {
      current = current.next;
      counter += 1;
    }
    return counter;
  };

  // returns the first node in the list
  const _head = () => {
    return head.value;
  };

  // returns the last node in the list
  const tail = () => {
    let current = head;
    while (current.next != null) {
      current = current.next;
    }
    return current.value;
  };

  // returns the node at the given index
  const at = (index) => {
    let current = head;
    let counter = 0;
    while (current != null) {
      if (counter === index) {
        return current.value;
      }
      current = current.next;
      counter += 1;
    }
  };

  // removes the first element from the list
  const unshift = () => {
    if (head == null) return;
    const value = head.value;
    head = head.next;
    return value;
  };

  // removes the last element from the list
  const pop = () => {
    if (head == null) return;
    let current = head;
    if (head.next == null) {
      head = null;
      return head.value;
    }
    while (current.next.next != null) {
      current = current.next;
    }
    let value = current.next.value;
    current.next = null;
    return value;
  };

  // returns true if the passed in value is in the list and otherwise returns false
  const contains = (value) => {
    if (head == null) return;
    let current = head;
    while (current != null) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  };

  // returns the index of the node containing value, or null if not found
  const find = (value) => {
    let current = head;
    let counter = 0;
    while (current != null) {
      if (current.value === value) {
        return counter;
      }
      current = current.next;
      counter += 1;
    }
    return null;
  };

  // represents your LinkedList objects as strings
  const toString = () => {
    let current = head;
    let string = "";
    while (current != null) {
      string += `( ${current.value} ) -> `;
      current = current.next;
    }

    return `${string}null`;
  };

  // inserts a new node with the provided value at the given index
  const insertAt = (value, index) => {
    let current = head;
    let counter = 0;
    if (index === 0) {
      head = Node(value, head);
    }

    while (current != null) {
      if (counter === index - 1) {
        current.next = Node(value, current.next);
        return;
      }
      current = current.next;
      counter += 1;
    }
  };

  // removes the node at the given index
  const removeAt = (index) => {
    if (head == null) return;
    let current = head;
    let counter = 0;
    if (index === 0) {
      head = head.next;
    }

    while (current != null) {
      if (counter === index - 1) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
      counter += 1;
    }
  };

  return {
    log,
    prepend,
    append,
    size,
    head: _head,
    tail,
    at,
    unshift,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

const a = LinkedList();

a.prepend(0);
a.append(1);
a.append(2);
a.append(3);

a.log();

console.log(a.pop());

a.log();
