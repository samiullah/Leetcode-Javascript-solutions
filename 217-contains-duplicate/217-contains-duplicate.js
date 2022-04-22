/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    s = new Set(nums)
    if(s.size < nums.length){
        return true
    }
    else if(s.size == nums.length){
    }    return false
};