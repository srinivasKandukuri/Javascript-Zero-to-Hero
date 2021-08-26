// Reference 
// https://medium.com/geekculture/doubly-linked-lists-javascript-b13cc21ca59d


class Node {
    constructor(element) {
        this.element = element;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // add node end of the list
    append(element) {
        const node = new Node(element);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }

    prepend(element) {
        const node = new Node(element);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    insertAt(index, element) {

        if (index == 0) {
            this.prepend(element);
            return this;
        }
        if (this.size == index) {
            this.append(element);
            return this;
        }
        const node = new Node(element);
        let previous = this.head;
        for (let i = 0; i < index - 1; i++) {
            previous = previous.next;
        }
        let nextNode = previous.next;
        previous.next = node;
        node.prev = previous;
        nextNode.prev = node;
        node.next = nextNode;
        this.size++;
    }
}


var doubleLinkedList = new DoubleLinkedList();

doubleLinkedList.append(30);
console.log(doubleLinkedList);


doubleLinkedList.append(50);
console.log(doubleLinkedList);

doubleLinkedList.append(660);
console.log(doubleLinkedList);

doubleLinkedList.append(70);
console.log(doubleLinkedList);

doubleLinkedList.insertAt(2, 80);
console.log(doubleLinkedList);