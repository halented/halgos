class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(){
        this.root = null
    }
    //insert and other methods written here. inserting nodes is recursive
}

let newNode = new Node(2)
let newBst = new BST
newBst.root = newNode

console.log(newBst, "and then here's the root:", newBst.root)