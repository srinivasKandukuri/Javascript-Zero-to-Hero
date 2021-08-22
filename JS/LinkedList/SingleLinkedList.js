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

    getAt(index){
        let counter =0;
        let node = this.head;
        while(node){
            if(counter == index){
                return node;
            }
            counter ++;
            node = node.next;
        }
        return null;
    }

    insertAt(element, index){
        if(this.head == null){
            this.head = new Node(element);
            return;
        }
        if(index == 0){
            this.head = new Node(element, this.node);
            return;
        }

        let prev = this.getAt(index-1);
        let node = new Node(element);

       let temp = prev.next;
        prev.next = node;
        node.next = temp;

        this.size++;
    }
}




var linkedList = new LinkedList();

linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);

console.log(linkedList);


linkedList.insertAt(6600,3);

console.log(linkedList);