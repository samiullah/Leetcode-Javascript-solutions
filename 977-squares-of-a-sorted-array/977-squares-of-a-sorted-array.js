/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
let sqp = []






for(i=0;i<nums.length;i++){
    sqp.push(nums[i]*nums[i])
     
}

return sqp.sort(function(a, b){return a - b});

    
};