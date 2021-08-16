// Userdefined class
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}


// LinkedList Class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // add an element at the end of list
    add(element) {

        // create a new node
        var node = new Node(element);
        var current;

        // if list is empty add element and make it head
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            // iterate to the end of list
            while (current.next) {
                current = current.next;
            }
            // add node
            current.next = node;
        }
        this.size++;
    }
}


var linkedList = new LinkedList();

linkedList.add(10);