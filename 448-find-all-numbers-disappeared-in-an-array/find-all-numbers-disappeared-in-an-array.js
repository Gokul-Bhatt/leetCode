/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let myset = new Set(nums);
    let res = [];
    for(let i=1; i<=nums.length; i++){
        if(!myset.has(i)){
            res.push(i);
        }
    }
    return res;
};