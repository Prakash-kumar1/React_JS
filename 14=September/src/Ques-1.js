// Question => 1 : Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
function searchInsert(nums, target){
    for(let i=0; i<nums.length; i++){
        if(nums.includes(target)){
            res = (nums.indexOf(target));
        }else if(!nums.includes(target)){
            nums.push(target);
            nums.sort(function(a, b){return a - b});
            res = (nums.indexOf(target));
        };
    };
    return (res);
};
console.log(searchInsert([1,3,5,6],7));