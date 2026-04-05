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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root) return [];
    let queue = [];

     function preorder(node){
    if(!node) return;
        queue.push(node);
        preorder(node.left);
        preorder(node.right);
    }

    preorder(root);
    let curr = queue.shift();

    while(queue.length){
        curr.left = null;
        curr.right = queue.shift();
        curr = curr.right;
    }
    return root;

};