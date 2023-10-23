//ex1
//Largest number

function largestNumber(nums) {
    nums.sort((a, b) => {
        let sa = a.toString();
        let sb = b.toString();
        //The concatenation of string a + string b is greater than string b+string a, then return -1, resulting in a comes before b in the final form. 
        return sa + sb > sb + sa ? -1 : 1;
    });

    //If the largest number combination is 0 then 0 is returned
    if (nums[0] === 0) {
        return '0';
    }
    return nums.join('');
};

let arr = [3, 30, 34, 5, 9];
//[10,2]
//[3, 30, 34, 5, 9]
console.log(largestNumber(arr));

