/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let res = {val: -Infinity};
    dfs(root,res);
    return res.val
};

const dfs=(root, res)=>{
    if(!root) return 0;

    let leftsum = Math.max(0,dfs(root.left, res));
    let rightsum = Math.max(0, dfs(root.right, res));

    let temp = leftsum + rightsum + root.val;

    res.val = Math.max(res.val, temp)

    return root.val + Math.max(leftsum , rightsum)
}