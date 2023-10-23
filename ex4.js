//ex4

function findClosestElements(arr, k, x) {
    
    while(arr.length > k){
        let diff_end = Math.abs(arr[arr.length-1] - x);
        let diff_start = Math.abs(arr[0] - x);
        
        //Either remove the first element or the last element based on which-ever end is closer to x
        if(diff_end < diff_start){
            arr.shift();
        }else if(diff_end >= diff_start){
            arr.length--;
        }
    }
    return arr;
    
}

console.log(findClosestElements([1,2,3,4,5], 4,3));
console.log(findClosestElements([1,2,3,4,5], 4,-1));

