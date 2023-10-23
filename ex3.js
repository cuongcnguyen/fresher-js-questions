// Ex3: Single number

function singleElement(arr){
    let x =0;
    for (let i of arr) {
        //Collect all same number to each array then return the array with length = 1, because that is the array with the unique number
        if (arr.filter(num => num === i).length === 1) {
            x = i; 
            break; 
        }
    }
    return x;
}
//[2,2,3,2]
// [0,1,0,1,0,1,99]

const nums = [2,2,3,2];
console.log(singleElement(nums));
