//ex2: Rotate Array
//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

function rotateArr(arr, steps){
    for(let i=1; i <= steps;i++){
        arr.unshift( arr.pop());
    }
    return arr;
}

//test
console.log(rotateArr([1,2,3,4,5,6,7], 3));
console.log(rotateArr([1,2,3,4,5,6,7], 10));
console.log(rotateArr([1,2,3,4,5,6,7], 1));
console.log(rotateArr([-1,-100,3,99], 2));
console.log(rotateArr([-1,-100,3,99], 1));