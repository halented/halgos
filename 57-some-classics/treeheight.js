var Node = function (data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

const treeHeight = (root) => {
    // if root's null we've reached the end of the "branch"
    if (!root) {
        return 0;
    }
    let left = treeHeight(root.left);
    let right = treeHeight(root.right);

    return left > right ? left + 1 : right + 1;
}

var testRoot = new Node(1);
testRoot.left = new Node(2);
testRoot.right = new Node(3);
testRoot.left.left = new Node(4);
testRoot.left.right = new Node(5);
testRoot.right.left = new Node(6);
testRoot.right.right = new Node(7);

console.log(treeHeight(testRoot));