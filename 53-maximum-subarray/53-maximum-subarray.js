/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max=nums[0]
let currSum =nums[0]
    
    for(i=1;i<nums.length;i++){
    if(currSum<0){
        currSum = nums[i]
    }
    else{
        currSum = currSum+nums[i]
    }

    if(max<currSum){
        max = currSum
    }
}
    return max
    
};