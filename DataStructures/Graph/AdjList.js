//Ref# https://www.youtube.com/watch?v=e4RezPkq3UI

class Node{
    constructor(value){
        this.value = value;
        this.edgesList = [];
    }

    connect(node){
        this.edgesList.push(node);
        node.edgesList.push(this);
    }

    getAdjacentNodes(){
        return this.edgesList.map(edges => edges.value);
    }

    isConnected(node){
        return this.edgesList.map(edges => edges.value).indexOf(node.value) >-1;
    }
}

class Graph{
    constructor(nodes){
        this.nodes = [...nodes];
    }
}


const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const nodeF = new Node('F');

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE, nodeF]);

nodeA.connect(nodeB);
nodeB.connect(nodeC);
nodeC.connect(nodeD);
nodeD.connect(nodeE);
nodeE.connect(nodeF);
nodeF.connect(nodeB);

// console.log(' nodeA ', nodeA );
// console.log('Graph ',graph);

for(let node of graph.nodes){
    console.log(node.value);
    for(let connected of node.edgesList){
        console.log(`node ${node.value} connected to ${connected.value}`);
    }
}

console.log(nodeB.getAdjacentNodes());

console.log(nodeA.isConnected(nodeB));