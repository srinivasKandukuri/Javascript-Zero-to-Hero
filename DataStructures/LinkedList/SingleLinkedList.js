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

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter == index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    insertAt(element, index) {
        if (this.head == null) {
            this.head = new Node(element);
            return;
        }
        if (index == 0) {
            this.head = new Node(element, this.node);
            return;
        }

        let prev = this.getAt(index - 1);
        let node = new Node(element);

        let temp = prev.next;
        prev.next = node;
        node.next = temp;

        this.size++;
    }

    removeAt(index) {
        if (index < 0 || index > this.size) {
            return undefined;
        }

        if (index == 0) {
            let temp = this.head;
            this.head = temp.next;
            this.size--;
        }

        let node = this.head;
        let prev = node;
        let counter = 0;
        while (counter < index) {
            counter++;
            prev = node;
            node = node.next;
        }

        prev.next = node.next;
        this.size--;
    }

    removeElement(element) {
        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.element == element) {
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
}



var linkedList = new LinkedList();

linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);

console.log(linkedList);


linkedList.insertAt(6600, 3);

console.log(linkedList);

linkedList.removeAt(2);

console.log(linkedList);

linkedList.removeElement(6600);

console.log(LinkedList);