/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
let sq = []
let sqp = []

for(j=0;j<nums.length;j++){
    sq.push(Math.abs(nums[j]))
     
}

sorted = sq.sort()


for(i=0;i<sorted.length;i++){
    sqp.push(sq[i]*sq[i])
     
}

return sqp.sort(function(a, b){return a - b});

    
};