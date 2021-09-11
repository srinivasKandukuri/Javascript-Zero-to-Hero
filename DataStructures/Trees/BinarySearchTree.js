class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const node = new Node(data);
        if (this.root == null) {
            this.root = node;
            return this;
        }

        let current = this.root;
        while (current) {
            if (data == current.data) return undefined;
            if (data < current.data) {
                if (current.left == null) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            } else {
                if (data > current.right) {
                    if (current.right == null) {
                        current.right = node;
                        return this;
                    }
                    current = current.right;
                }
            }

        }
    }

    insertRecursion(data) {
        const node = new Node(data);
        let current = this.root;
        if (this.root == null) {
            this.root = node;
            return this;
        } else {
            this.insertNodeRecu(current, node);
        }
    }

    insertNodeRecu(current, node) {
        if (node.data < current.data) {
            if (current.left == null) {
                current.left = node;
            } else {
                this.insertNodeRecu(current.left, node);
            }
        } else {
            if (current.right == null) {
                current.right = node;
            } else {
                this.insertNodeRecu(current.right, node);
            }
        }
    }
    find(data) {
        let current = this.root;

        if (!current) return false;
        if (current.data == data) {
            return current;
        }
        let found = false;
        while (current && !found) {
            if (data < current.data) {
                current = current.left;
            } else if (data > current.right) {
                current = current.right;
            } else {
                found = current;
            }
        }
        return found;
    }

    findRecursion(node, data) {
        if (!node) return false;
        if (data < node.data) {
            this.findRecursion(node.left, data);
        } else if (data > node.data) {
            this.findRecursion(node.right, data)
        } else {
            return node;
        }
    }


    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        if (node == null) {
            return null;
        }
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
        }
        else if(key > node.data){
            node.right = this.removeNode(node.right, key);
        }else{
            if(node.left == null && node.right == null){
                return null;
            }

            if(node.left == null){
                node = node.right;
                return node;
            }
            if(node.right == null){
                node = node.left;
                return node;
            }

            let aux = this.findMin(node.right);
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    findMin(node){
        if(!node.left)
            return node;
        else
            return this.findMin(node.left);
    }
}


const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(100);

binarySearchTree.insert(60);

binarySearchTree.insert(30);

binarySearchTree.insertRecursion(50);

binarySearchTree.insertRecursion(40);
binarySearchTree.insertRecursion(10);


console.log(binarySearchTree);

let val = binarySearchTree.findRecursion(30);

console.log(val);


let val = binarySearchTree.remove(30);

console.log(val);