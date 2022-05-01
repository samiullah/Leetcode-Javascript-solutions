/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let leftProductArray =[]
    leftProductArray[0]=1
    let rightProductArray = []
    rightProductArray[nums.length-1]=1
    let result =[]
    
    for(i=1;i<nums.length;i++){
        leftProductArray[i]=leftProductArray[i-1]*nums[i-1]
    }
    
    for(i=nums.length-2;i>=0;i--){
        rightProductArray[i] = rightProductArray[i+1]*nums[i+1]
    }
    
    for(i=0;i<nums.length;i++){
        result[i]= leftProductArray[i]*rightProductArray[i]
    }
    
    return result
    
};