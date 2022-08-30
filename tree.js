class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor(array) {
    // prettier-ignore
    this.root = this.buildTree(array.sort((a, b) => a - b) ,0,array.length - 1);
  }
  buildTree(array, start, end) {
    if (start > end) return null;
    let mid = parseInt((start + end) / 2);
    let node = new Node(array[mid]);
    console.log(array);
    node.left = this.buildTree(array, start, mid - 1);
    node.right = this.buildTree(array, mid + 1, end);
    return node;
  }
  insert(value, node = this.root) {
    if (node == null) {
      return (node = new Node(value));
    }

    if (node.value < value) {
      node.right = this.insert(value, node.right);
    } else {
      node.left = this.insert(value, node.left);
    }

    return node;
  }
  delete(value, node) {
    if (root == null) return root;

    if (key < root.key) root.left = deleteRec(root.left, key);
    else if (key > root.key) root.right = deleteRec(root.right, key);
    else {
      if (root.left == null) return root.right;
      else if (root.right == null) return root.left;

      root.key = minValue(root.right);

      root.right = deleteRec(root.right, root.key);
    }

    return root;
  }
}
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};
let tree = new Tree([5, 1, 3, 6, 8, 9, 23, 65, 12, 86]);
prettyPrint(tree.root);
tree.insert(10);
prettyPrint(tree.root);
