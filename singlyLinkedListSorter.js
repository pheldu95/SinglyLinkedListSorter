class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// create the first node
const head = new LinkedListNode(1);

// add a second node
head.next = new LinkedListNode(2);

// add a third node
head.next.next = new LinkedListNode(3);

//add fourth node
head.next.next.next = new LinkedListNode(4);

let current = head;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}