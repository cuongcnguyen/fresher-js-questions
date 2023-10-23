//ex5
//Find Second largest element in an array (Do not use sorting)

function findSecondLargestElement(arr){
    //Declared 2 variables to store 2 largest element
    let largestElement = -Infinity;
    let secondLargestElement = -Infinity;

    for (let element of arr) {
        //determine the largest element then else if to assign the second largest element
        if (element>largestElement){
            secondLargestElement = largestElement;
            largestElement = element;
            
        }  else if ((element>secondLargestElement) && (element!== largestElement)){
            secondLargestElement = element;
        }
    }

    //if the second largest element is not assigned
    if (secondLargestElement === (-Infinity)){
        return 'The second largest does not exist';
    }

    return `The second largest element is ${secondLargestElement}`;
}
//test
console.log(findSecondLargestElement([12,35,1,10,34,1]));
console.log(findSecondLargestElement([10,5,10]));
console.log(findSecondLargestElement([10,10,10]));
console.log(findSecondLargestElement([10]));
