/**
 * A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.
 * Given the root of a binary tree, return the sum of all left leaves.
*/
const sumOfLeftLeaves = (root) => {
    let sum = 0;

    const sumLeaves = (node) => {
        if (!node) return;
        if (node.left) {
            const leftChild = node.left;
            if (!leftChild.left && !leftChild.right) {
                sum += leftChild.val;
            }
        }
        sumLeaves(node.left);
        sumLeaves(node.right);
    };

    sumLeaves(root);
    return sum;
};

