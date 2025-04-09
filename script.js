//Parameters:
//Input; Array of Integers
//Output: Integer

//Results:
//Answer: Integer for even numbers

//Examples:
//Input: [1, 2, 3, 4, 5]
//Output: 8
//---
//Input: [2, 4, 6, 8]
//Output: 20
//--
//Input: [1, 3, 5]
//Output: 0
//---
//Input: []
//Output: 0

//Psuedocode:
/* 
I'm going to define a variable called evenNumSum with a value of 0;
With the input provided, I am going to thenloop through the array;
In the loop, I want to check if the element in the array is divisible by 2;
If the element is divisible by 2, I want to add the element to my evenNumSum variable;
After the loop, we return the evenNumSum variable;
*/

const sumEvenNumbers = (arr) => {
    //1st Psuedocode step
    let evenNumSum = 0;

    //2nd psuedocode step [set up the loop to check through each thing in the array]
    for(let i = 0; i < arr.length; i++){ //this is always looping so value is always increases and will continue checking each thing
        if(arr[i] % 2 == 0){ //3rd psuedo code step [checks for even numbers]
            evenNumSum += arr[i];// 4th psuedocode step [adds where the sum is current at to what was deemed an even number (0 + 2) and makes it the new value]
        }
    }

    return evenNumSum //5th psuedocode [returns the final value of the value after the loop finished
    // which should be all of the even numbers added ]
}

console.log(sumEvenNumbers([-5, 2, -6, 20, 1]));