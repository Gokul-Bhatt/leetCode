class Solution {
    public int minimumDistance(int[] nums) {
        if(nums.length < 3) return -1;
        int res = Integer.MAX_VALUE;
        for(int i=0; i<nums.length-2; i++){
            for(int j=i+1; j<nums.length-1; j++){
                if(nums[i] == nums[j]){
                    for(int k=j+1; k<nums.length; k++){
                        if(nums[j] == nums[k]){
                            res = Math.min(res, 2 * (k - i));
                            break;
                        }
                    }
                }
            }
        }
        return res == Integer.MAX_VALUE ? -1 : res;
        
    }
}