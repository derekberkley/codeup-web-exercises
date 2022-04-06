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
    input.forEach(function(num) {
        (num % 2 === 1) ? oddOnes.push(num) : false;
    });
        arry = oddOnes;
        console.log(arry, "Just the odds");
        return arry;
}
oddArr(arry);

//
// 5. Define a function named `creditCard` that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.
//

function creditCard(card) {
    var cardStr = String(card);
    if (typeof card === 'number' && cardStr.length === 16) {
        var cardArr = cardStr.split("");
        var lastFour = cardArr.slice(12, 16);
        var lastFourStr = lastFour.join("");
        console.log("************", lastFourStr);
        return "************", lastFourStr;
    } else {
        return "That's not a CC Number.";
    }
}
creditCard(1234567890123456);
//
// 6. create a function named `AlphabetSoup` that takes a string and returns a string with its letters in alphabetical order. Return false if string is empty or null
//

function AlphabetSoup(string) {
    var strToArr = string.split("");
    var inOrderArr = strToArr.sort();
    var inOrderStr = inOrderArr.join("");
    console.log(inOrderArr);
    return inOrderArr;
}
AlphabetSoup("thequickbrownfoxjumpedoverthelazydog");
//
// 7. create a function named `reverse` that takes in and reverses an array.

function goBackward(array) {
    var yarra = array.reverse();
    console.log(yarra);
    return yarra;
}

goBackward(["baby", "wife", "dog", "house"]);
goBackward([ 2, 4, 6, 8]);
goBackward([1, 2, 3, 4, 5, 6]);

//----------------------------
// JavaScript Assessment II
// Your solutions will go here :)

// 1. Define a function named lowerCase that takes in an input
// and returns that input as a string in all lower case letters.
// Returns false if the input passed is not a string.

function lowerCase(input) {
    if (typeof input !== 'string') {
        return false;
    } else {
        var final = input.toLowerCase();
        return final;
    }
}

// 2. Define a function named isAllLowerCase that takes in a string
// and returns true if all characters in the string are lowercase
// otherwise it should return false.

function isAllLowerCase(string) {
    if (typeof string !== 'string') {
        return false;
    } else {
        return (string === string.toLowerCase());
    }
}

// 3. Define a function named isAllUpperCase that takes in a string
// and returns true if all characters in the string are uppercase
// otherwise it should return false.

function isAllUpperCase(string) {
    if (typeof string !== 'string') {
        return false;
    } else {
        return (string === string.toUpperCase());
    }
}

// 4. Define a function named isNotPalindrome that takes in a string
// and returns true if that string is not palindrome, if the string
// is palindrome should return false.

function isNotPalindrome(word) {
    if (word === "") {
        return false;
    } else if (typeof word === 'boolean' || typeof word === 'number' || typeof word === 'object' || word === undefined) {
        return true;
    } else {
        var palMiddle = word.length;
        for (var i = 0; i < palMiddle / 2; i++) {
            if (word[i].toLowerCase() !== word[palMiddle - 1 - i].toLowerCase()) {
                return true;
            } else {
                return false;
            }
        }
    }
}


// 5. Define a function named multiplyBy2 that takes in an input and
// multiplies it by 2 if the input is numeric. If the input is Not A
// Number, then return false.

function multiplyBy2(input) {
    if (isNaN(input) === true) {
        return false;
    } else if (typeof input === 'boolean') {
        return false;
    } else if (typeof input === 'object') {
        return false;
    } else {
        var final = input * 2;
        return final;
    }
}

// 6. Define a function named convertHourToSec that takes in one input
// Hours. Return the conversation of the number of hours into total
// seconds. If the input is not numeric or a numeric string, convertHourToSec,
// should return false.

function convertHourToSec(hrs) {
    if (typeof hrs == 'boolean') {
        return false;
    } else if (typeof hrs === 'object') {
        return false;
    } else if (hrs < 0) {
        return false;
    } else if (typeof hrs === 'undefined') {
        return false;
    } else if (isNaN(hrs) == true) {
        return false;
    } else {
        return hrs * 3600;
    }
}

// 7. Write a function named getLowestNumber that takes in 3 arguments. If all
// 3 inputs are numbers or numeric strings, then return the lowest number. If
// any of the 3 inputs is missing or non-numeric, then return false.

function getLowestNumber(arg1, arg2, arg3) {
    if (isNaN(arg1) == true || isNaN(arg2) == true || isNaN(arg3) == true) {
        return false;
    } else if (typeof arg1 === 'boolean' || typeof arg2 === 'boolean' || typeof arg3 === 'boolean') {
        return false;
    } else if (typeof arg1 === 'object' || typeof arg2 === 'object' || typeof arg3 === 'object') {
        return false;
    } else if (arg1 === undefined || arg2 === undefined || arg3 === undefined) {
        return false;
    } else {
        return Math.min(Number(arg1), Number(arg2), Number(arg3));
    }
}

// 8. Write a function named addStringLengths that takes in two inputs. If both
// inputs provided are strings, addStringLengths returns the sum after adding the
// length (number of characters) of both strings. If either or both inputs are not
// strings, return false.

function addStringLengths (inp1, inp2) {
    if (typeof inp1 === 'string' && typeof inp2 === 'string') {
        var sum = inp1.length + inp2.length;
        return sum;
    } else {
        return false;
    }
}

// 9. Write a function named subtract that takes in two inputs. If both inputs provided
// are numeric or numeric strings, subtract will return the difference when the
// second input is subtracted from the first input. If one or both inputs is not
// numeric or numeric strings, subtract should return false.

function subtract(thing1, thing2) {
    if (isNaN(thing1) == true || isNaN(thing2) == true) {
        return false;
    } else if (typeof thing1 === 'boolean' || typeof thing2 == 'boolean') {
        return false;
    } else if (thing1 === null || thing2 === null) {
        return false;
    } else {
        return thing1 - thing2;
    }
}

// 10. Write a function named calculateChange that takes in two inputs, totalPaid and
// totalCost. If both inputs are numeric or numeric strings, calculateChange should
// return the change after subtracting the cost from the amount paid. The return should
// be in $x.xx format as a string Note: it should return with two decial places. If either
// or both inputs are not numeric or numeric strings, calculateChange should return false.

function calculateChange(totalPaid, totalCost) {
    if (isNaN(totalPaid) == true || isNaN(totalCost) == true) {
        return false;
    } else if (totalPaid === null || totalCost === null) {
        return false;
    } else if (typeof totalPaid === 'boolean' || typeof totalCost === 'boolean') {
        return false;
    }else {
        var leftOver = totalPaid - totalCost;
        return '$' + leftOver.toFixed(2);
    }
}
















































