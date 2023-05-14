var sumOfLeftLeaves = function (root) {
    let sum = 0;

    function sumLeaves(root) {
        if (root === null) return;

        if (root.left) {
            let current = root.left;
            if (!current.left && !current.right) {
                sum += current.val;
            }
        }
        sumLeaves(root.left);
        sumLeaves(root.right);
    }
    sumLeaves(root);
    return sum;
};