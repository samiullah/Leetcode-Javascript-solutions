/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let leftproductArray=[]
leftproductArray[0]=1
let rightproductArray = []
rightproductArray[nums.length-1]=1
let result = []



 for(i=1;i<nums.length;i++){
     leftproductArray[i]=leftproductArray[i-1]*nums[i-1]
 }

 for(i=nums.length-2;i>=0;i--){
    rightproductArray[i]=rightproductArray[i+1]*nums[i+1]
}

for(i=0;i<nums.length;i++){
     result[i]=leftproductArray[i]*rightproductArray[i]
}
    
    return result
    
};