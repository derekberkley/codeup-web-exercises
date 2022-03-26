// # JavaScript Second reassessment Review
// ## Instructions
// *Carefully* read *all* the instructions and problems before beginning your work.
//
// ## Problems
// 1. Create a function named `calcAge` that takes the age and return the age in days. If input is not numeric, calcAge should return false.

function calcAge(ageYears){
    if (typeof ageYears === 'number') {
        var ageDays = ageYears * 365;
        console.log(ageDays, "Age in days.");
        return ageDays;
    } else {
        console.log(false, "Input is not a number.");
        return false;
    }
}
calcAge(33);
calcAge("Thirty-Three");

//
// 2. Create a function named `increment` that takes a number as an argument, increments the number by +1 and returns the result. If input is not numeric, increment should return false.
//
function increment(number){
    if (typeof number === 'number') {
        number++;
        console.log(number);
        return number;
    } else {
        console.log(false, "Input is not a number.");
        return false;
    }
}
increment(21);
increment("Twenty-One");
//
// 3. Define a function named `isOdd` that takes in a number, return true is that number is odd. Return false if the number is either not a number or even.
//
function isOdd(numArg) {
    if (typeof numArg !== 'number' || isNaN(numArg)) {
        console.log(false, "Input is not a number.");
        return false;
    } else {
        if (numArg % 2 === 1) {
            console.log(true);
            return true;
        } else {
            console.log(false, "This is even.");
            return false;
        }
    }
}
isOdd(3);
isOdd(6);
isOdd("ten");
isOdd(NaN);
isOdd(undefined);
//
// 4. Write a function named `oddArr`. Given the array of var arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] return the odd numbers.
//
var arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddOnes = [];

function oddArr(input) {
    input.forEach(function(num)) {
        if (num % 2 === 1) ? addOnes.push(num) : ;
    }

}
//
// 5. Define a function named `creditCard` that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.
//
//
// 6. create a function named `AlphabetSoup` that takes a string and returns a string with its letters in alphabetical order. Return false if string is empty or null
//
//
// 7. create a function named `reverse` that takes in and reverses an array.
// # regulus-second-js-reassessment-review