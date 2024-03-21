var Node = function (data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

var testRoot = new Node(1);
testRoot.right = new Node(2);
testRoot.right.right = new Node(5);
testRoot.right.right.left = new Node(3);
testRoot.right.right.right = new Node(6);
testRoot.right.right.left.right = new Node(4);

const levelOrderTraversal = (root) => {
    // returns a string with a single space between node values. ex: "1 2 5 3 6 4"
    let levels = '';
    let queue = [root];
    while (queue.length) {
        levels += queue[0].data + ' ';
        let node = queue.shift();
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    console.log(levels)
}

levelOrderTraversal(testRoot)
/**

add the root node to the queue.
while theres stuff in the queue:
Dequeue a node from the front of the queue.
add data to return str
enqueue its left child (if exists).
enqueue its right child (if exists).

This is an example of breadth first. and also using a queue. which is like a stack, but it's last in last out instead of last in first out
 */