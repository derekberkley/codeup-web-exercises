// //TODO: Write a javascript function that accepts the 3 lengths of a triangle and outputs the triangle’s area.
//
// function pythagorean(side1, side2, side3) {
//
//     //calculate the semi-perimeter first
//     var semiPer = (side1 + side2 + side3) / 2;
//
//     //using Heron's Formula since only know 3 sides of triangle
//     var area = Math.sqrt(semiPer * (semiPer - side1) * (semiPer - side2) * (semiPer - side3));
//
//     //Area of Triangle Formula if had other info
//     // var triArea = (base * height) * 0.5
//
//     console.log("The area of the triangle is: " + area);
//     return area;
// }
//
// pythagorean(3, 4, 5);

//TODO: Fizzbuzz Activity
// Print numbers 1-100.
// f # is divisible by 3 use Fizz
// if # is divisible by 5 use Buzz
// if # is divisible by both 3 and 5 use FizzBuzz

function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log(i + " Fizz");
        } else if (i % 5 === 0) {
            console.log(i + " Buzz");
        } else {
            console.log(i); //print #'s 1-100
        }
    }
}

fizzBuzz();

//TODO: Write a function to shuffle an array in to a completely
// new and entirely random order, much like shuffling a pack of cards.

//Pseudo-Code
//1. Define a function called shuffle
//2. Define an array to use as an argument (Card Deck or colors)
//3. Create a for-loop to iterate through (randomize) every element
//      in the array
//4. Use the given random # calc for 0 through total # of elements (i)
//5. Use modern version of Fisher-Yates shuffle logic
//6. Take first element (front or back) and assign it (or stow it) to
//      a variable (this clears space)
//7. Assign the now-available array location a randomized value from
//      elsewhere in the array
//8. The randomized value from the array is now empty and can be filled
//      with the first location's value (stored in the variable)
    // This is the second half of the "swap"
//9. Print the now shuffled array for viewing pleasure

var colorArray = ["red", "blue", "green", "yellow", "black", "white"];
console.log("Original Array", colorArray);

function shuffle(array) {
    for (var i = array.length-1; i >= 0; i--) {

        var random = Math.floor(Math.random() * (i));
        console.log("random #: ", random);

        var placeHolder = array[i];
        console.log("Assign", placeHolder, "to card variable.");

        array[i] = array[random];
        console.log("array[", i, "] is assigned the value of array[", random, "]");
        console.log("array[", i, "] now equals: ", array[i]);

        array[random] = placeHolder;
        console.log("array[", random, "] now takes card var: ", array[random]);

        console.log("Iterated Array", array);
    }
    return array;
}
shuffle(colorArray);

var shuffledArray = array.sort((a, b) => 0.5 - Math.random());

//-------------------
// Randomized Color Array w/out Comments
//-------------------
// var colorArray = ["red", "blue", "green", "yellow", "black", "white"];
// console.log("Original Array", colorArray);
//
// function shuffle(array) {
//     for (var i = array.length-1; i >= 0; i--) {
//         var random = Math.floor(Math.random() * (i));
//         var placeHolder = array[i];
//         array[i] = array[random];
//         array[random] = placeHolder;
//     }
//     console.log("Randomized ", array);
// }
// shuffle(colorArray);






//-------------------
// Randomized Deck Assignment
//-------------------
var deck = [
    "Aspades", "Adiamonds", "Ahearts", "Aclubs",
    "1spades", "1diamonds", "1hearts", "1clubs",
    "2spades", "2diamonds", "2hearts", "2clubs",
    "3spades", "3diamonds", "3hearts", "3clubs",
    "4spades", "4diamonds", "4hearts", "4clubs",
    "5spades", "5diamonds", "5hearts", "5clubs",
    "6spades", "6diamonds", "6hearts", "6clubs",
    "7spades", "7diamonds", "7hearts", "7clubs",
    "8spades", "8diamonds", "8hearts", "8clubs",
    "9spades", "9diamonds", "9hearts", "9clubs",
    "10spades", "10diamonds", "10hearts", "10clubs",
    "Jspades", "Jdiamonds", "Jhearts", "Jclubs",
    "Qspades", "Qdiamonds", "Qhearts", "Qclubs",
    "Kspades", "Kdiamonds", "Khearts", "Kclubs"];
console.log("Original Deck: ", deck);

function shuffle(array) {
    for (var i = array.length-1; i >= 0; i--) {
        var random = Math.floor(Math.random() * (i));
        var placeHolder = array[i];
        array[i] = array[random];
        array[random] = placeHolder;
    }
    console.log("Randomized ", array);
}
shuffle(deck);




//-------------------
// 1. Return a string in reverse
// ex. reverseString(‘hello’) === ‘olleh’
// let reverseString = (str) => {
//   return //Something
// };
//-------------------

//Option 1 (syntax) define the function
// split the string into an array with each element as a letter from the string
// reverse the array
// re-join the array without any punctuation for the string in reverse.
function moonwalk(string) {
    var final = string.split("").reverse().join("");
    return final;
}

moonwalk('hello');

//Option 2 (syntax) arrow function accomplishes the same outcome
// let reverseString = (str) => {
//     return str.split("").reverse().join("");
// }
//
// reverseString('world');


//-------------------
// 2. Return true if palindrome and false if not
// ex. isPalindrome(‘racecar’) === ‘true’, isPalindrome(‘hello’) == false
// let isPalindrome = (str) => {
// };
//-------------------

// use a for loop to check every letter of the string
// compare each letter against its opposite in the string
// if false, return false. if true, continue.
function isPalindrome(word) {
    var palMiddle = word.length;
    for (var i = 0; i < palMiddle/2; i++) {
        if (word[i] !== word[palMiddle - 1 - i]) {
            return false;
        } else {
            return true;
        }
    }
}

isPalindrome('racecar');
isPalindrome('hello');

//-------------------
// Write a function that filters out numbers from a list.
//-------------------

var comboArr = [ 1, "A", 2, "b", 3, "C", 4, "d"];
var noNumArr = [];

function filter(array) {

    console.log("Original Array: ", array);

    array.forEach(function(item) {
        if (typeof item !== 'number'){
            noNumArr.push(item);
        } else {
            return false;
        }
    });
    console.log("Filtered Array: ", noNumArr);
    return noNumArr;
}

filter(comboArr);

// comboArr.forEach(function(item) {
//     if (typeof item !== 'number'){
//         noNumArr.push(item);
//     } else {
//         return false;
//     }
//     console.log(noNumArr);
//     return noNumArr;
// })

//TODO Write a function that returns the reading status of each of following books

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];


library.forEach(function(book) {
    if (book.readingStatus === false) {
        console.log(book.title, "by", book.author, "is NOT available at this time.");
        return false;
    } else {
        console.log(book.title, "by", book.author, "is available for your reading pleasure.");
        return true;
    }
});

//TODO: Write a JS code to return an array of only the Even numbers from the given array.

var origArray = [12,2,3,4,5,6,7,8,9]

// var onlyEvenArr = origArray.filter(x => x % 2 === 0);
// console.log(onlyEvenArr);

//filter method immediately invokes an anonymous arrow function and
// returns an array with the elements that meet stated criteria

console.log(origArray.filter(x => x % 2 === 0))


//TODO: Add up all numbers in the array.
// example input: [1,2,3,4,5]; expected output: 15
// some possible test cases to think about:
// function should be called ‘sumArr’
// function should return a number
// function should accept an array
// function should return “sum not available” if array is empty
// function should handle non-numbers

var example = [1, 2, 3, 4, 5];
var emptyArray = [];
var strArray = ["one", "two", "three", "four", "five"];
var numStrArr = ["1", "2", "3", "4", "5"];
var notArray = "nine";

function sumArr(arry) {
    var sum = 0;
    if (Array.isArray(arry) === false) {
        return "this is not an array";
    } else if (arry.length === 0) {
        return "sum not available";
    } else {
            arry.forEach(function(element) {
                if (typeof element !== 'number') {
                    sum += Number(element);
                } else {
                    sum += element;
                }
            })
        return sum;
    }
}
// sumArr(example); //testing actual numbers (returns 15 correctly)
// sumArr(notArray); //testing argument as not Array (correct string return)
// sumArr(emptyArray); //testing empty array output (correct string return)
// sumArr(strArray); //testing numbers passed as word strings (returns NaN)
// sumArr(numStrArr); //testing numbers passed as strings (returns 15 correctly)

//TODO: Create a function to sort the array from lowest to highest number
// example input: [5,8,2,6,9,3,2];
// expected output: [2,2,3,5,6,8,9] // length: 7
// possible test cases to think about:
// should be called ‘sortArr’
// function should return an array
// function should accept an array

var exampleArray = [9, 5, 3, -6, 0, -23, .5, -2.5];

function sortArr(input) {
    input.forEach(function(element) {
        if (input.indexOf(element) !== input.lastIndexOf(element)) {

        }
    })
    var final = input.sort((a, b) => a - b);
    console.log(final);
    return final;
}
sortArr(exampleArray);

// TODO: BONUS thoughts
//  what would happen if you had negative numbers in your list
//  can you sort and then remove any duplicates (would it be more/less
//  efficient to remove duplicates and then sort?)
//  if your array has non-numbers can you still sort the numbers?
//  ex: input: [3,“b”,8,5,9,true”, 4,“xyz”] expected output: [3,4,5,8,9];





//TODO: Write a function that accepts a string and returns a map with the strings
// character frequency.
// example input: [“b”, “a”, “n”, “a”, “n”, “a”];
// expected output: { b: 1, a: 3, n: 2 }

var input = ["b", "a", "n", "a", "n", "a"];
var finalObj = {};

// use a for ... of loop to iterate over the array
for (const element of input) {
    //if the declared object has the element in it...
    if(finalObj[element]) {
        //increment/increase the object's count by 1
        finalObj[element] += 1;
    } else {
        //if obj doesn't have element, assigned the key_value pair as element = 1.
        finalObj[element] = 1;
    }
}

console.log(finalObj);