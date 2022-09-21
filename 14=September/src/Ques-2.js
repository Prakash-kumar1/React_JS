// Question => 2: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

function twoSum(nums,target){
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length;j++){
            if(nums[j]+nums[i] == target){
                return [i,j];
            }
        }
    }
}
console.log(twoSum([3,3],6)); 