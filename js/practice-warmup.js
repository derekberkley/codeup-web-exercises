// //TODO: Write a javascript function that accepts the 3 lengths of a triangle and outputs the triangle’s area.

function pythagorean(side1, side2, side3) {

    //calculate the semi-perimeter first
    var semiPer = (side1 + side2 + side3) / 2;

    //using Heron's Formula since only know 3 sides of triangle
    var area = Math.sqrt(semiPer * (semiPer - side1) * (semiPer - side2) * (semiPer - side3));

    //Area of Triangle Formula if had other info
    // var triArea = (base * height) * 0.5

    console.log("The area of the triangle is: " + area);
    return area;
}

pythagorean(3, 4, 5);

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


//-----------
// Create a function that takes in two string inputs.
// -- If the second string input is present in the first, return the first input
// string with the second input string removed from it.
// -- If the second string input is present multiple times in the first, the second
// string will only be removed where it first occurs in the first string.
// -- If the second string input is not present in the first, return the first string
// as entered in the function.

function twoStrings(arg1, arg2) {

    for (var word of arg2) {
        if (arg1.indexOf(word)) {
            result = arg1.replace(arg2, "");
        }
        return result;
    }
}

twoStrings("hello, world!", "world");


// Write the code necessary to output the first 50 prime numbers
// Recommend starting your loop at 1 and ending your loop once you've calcualted 50 primes.

//--Answer--
// 1. for each iteration (i): checks every number from 1 to the
//      potential Prime # for its divisibility
// 2. if there is no remainder (modulus) then record a success case
//      (+1 to count variable)
// 3. Prime #'s should be divisible by 1 and itself (count = 2)
//      if count is < or > 2 then potentialPrime is NOT prime
// 4. When count = 2, push the now confirmed prime # to the empty array
// 5. Before going to the next # to test, reset the count to 0 and
//      increment potentialPrime to test the next integer
// 6. Continue to test all #'s until the array has 50 prime #'s
// 7. Console.log the array for awesome results!

var primeArray = [];
var count = 0;
var potentialPrime = 2;

do {
    for (var i = 1; i <= potentialPrime; i++) {
        (potentialPrime % i === 0) ? count++ : false;
    }
    (count === 2) ? primeArray.push(potentialPrime) : false;
    count = 0;
    potentialPrime += 1;
} while (primeArray.length < 50);

console.log(primeArray);

// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

var randomThings = [ 1, 3.5, 7, "blue", true, "five"];
var moreRandoThings = [2, 5, 7, "red", true, false, "coffee"];

function merge(arry1, arry2) {
    arry2.forEach(function(element) {
        //checking if 1st array contains each element from 2nd array before merging that element
        (arry1.includes(element)) ? false : arry1.push(element);
    });
    //sort method auto sorts numbers in ascending and words alphabetically
    return arry1.sort();
};

merge(randomThings, moreRandoThings);


// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

var tryMe = [{a:1,b:2},{a:5,b:4}]
// example input: [{a:1,b:2},{a:5,b:4}]
// expected output: [{a:1,b:2},{a:5,b:4}]

// function sortThisThing(arrObj) {
//     arrObj.sort(function(arrObj[a].b, arrObj[b].b);
//     {
//         return arrObj[a].b - arrObj[b].b;
//     };
// )};
//     sortThisThing(tryMe);

    array.sort(x, y) {
    if(x.b < y.b) {
        return -1;
    }
    }

// 1. Rewrite the following using a for loop:
// var i = 20;
// while (i >= 0) {
//     console.log(i);
//     i--;
// }

for (var i = 20; i >= 0; i--) {
    console.log(i);
}

// 2. Write a function that takes an object (a) as argument and returns an array with all object keys
// example input: {a:1,b:2,c:3}
// expected output: ['a','b','c']
// ------------------------
//     example input:{j:9,i:2,x:3,z:4}
// expected output: ['j','i','x','z']

var testObj = {a:1, b:2, c:3, d:4, e:5};

var emptyArr = [];

function allTheKeys(obj) {
    return Object.keys(obj);
}
allTheKeys(testObj);

// 1. Write a function that iterates through numbers 1 and 15 and returns the numbers that are divisible by 3 (hint hint hint: learn how to use a modulus)

function divideByThree(input) {
    for(var i = 1; i <= input; i++) {
        (i % 3 === 0) ? console.log(i, " is divisible by 3.") : false;
    }
}

divideByThree(15);

// 2. Write a function that takes a Set and an array as arguments. If not already existing,
// add each element in the array to the Set. Return the modified Set

//
// example input: new Set([1, 2, 3]), [4, 5, 6]
// expected output: new Set([1, 2, 3, 4, 5, 6 ])
// -------------------------
//     example input:new Set([1, 2, 3]), [2, 3]
// expected output: new Set([1, 2, 3])
// -------------------------

var collection = new Set([1, 2, 3]);
var randomArray = [4, 5, 6];
var collection2 = new Set([1, 2, 3]);
var randomArray2 = [2, 3];

function addThings(thisSet, thisArray) {
    thisArray.forEach(function (element) {
        (thisSet.has(element)) ? false : thisSet.add(element);
    });
    return thisSet;
}

addThings(collection, randomArray);
addThings(collection2, randomArray2);


// Write a function that takes an object as argument
// Swap the Javascript object's key with its values and return the resulting object

var exampleObj = {z:'a', y:'b',x:'c',w:'d'}

function swapKeyValue(obj) {
    return Object.entries(obj).map(([key, value]) => [value, key]);
}

swapKeyValue(exampleObj);

//---------------------------------------------------
// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array
//
var origCities = [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }];
var addMe = 'Asia';

//declare an empty array so as to not mutate the original array
let plusContinent = [];

//define the function that takes an array of objects and a string
function continent(arrOfObjs, str) {

    //for each object(element) within the array...
    arrOfObjs.forEach(function(indivObj) {

        //add continent as the property name and use the string input to add the value to each object
        indivObj.continent = str;

        //push the updated object to the new array as its element
        plusContinent.push(indivObj);
    })
    // after all new objects are pushed to new array, return the new array
    return plusContinent;
}
continent(origCities, addMe);


//---------------------------------------------------
// TODO: Add 'strawberry' to the beginning, middle, and end of the array
var fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];

//.unshift() adds an element to the start of the array
fruits.unshift('strawberry');
//.push() adds an element to the end of the array
fruits.push('strawberry');
//.splice() method as below adds element to middle of array, does not delete anything, and gives the element to be added
fruits.splice((fruits.length / 2), 0, 'strawberry');

//---------------------------------------------------
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

var itsFriday = ['green', 'coffee', 'TGIF', 'play music', 'weekend'];

function extractThree(array) {
    return array.splice(0, 3);
}

extractThree(itsFriday);

// //---------------------------------------------------
// 2.  Write an object that describes which brands own which cereals (you can be creative here) . After the object has been declared …
// A) add properties and values to the existing object
// B) re-assign 2 properties’ values

var breakfastCereals = {
    kellogg : 'fruit loops',
    generalMills : 'wheaties',
    post : 'honey bunches of oats',
};

//adding new property and value to the object
breakfastCereals.quaker = 'cap\'n crunch crunch berries';
//changing the value of two properties
breakfastCereals.generalMills = 'lucky charms';
breakfastCereals.post = "fruity pebbles";

console.log(breakfastCereals);




var exampleArray2 = [9, 5, 3, -5, 'four', 0, -23, .5, 3, 3, -2.5, 'xyz'];

function sortArr(input) {
    var tempArray = [];

    if(Array.isArray(input)) {
        //use forEach to check every element for duplicates
        input.forEach(function(element) {
            console.log(element);
            var index = input.indexOf(element);
            //if the
            if (tempArray.includes(element) === false && typeof(element) === 'number') {
                tempArray.push(element);
            } else {
                input.splice(index, 0);
            }
        });
    } else {
        return false;
    }
    return tempArray.sort((a, b) => a - b);
}

sortArr(exampleArray2);

var array = ['John', 'Paul', 'George', 'Ringo'];
array.splice(array.indexOf('Ringo'), 0, 'Yoko');
array.unshift('Yoko');


console.log(array);

// TODO: Write a function that takes an array of numbers as argument and returns the number of negative values in the array.
// example Input: [1,-2,2,-4]
// expected output: 2

var assortedArray = [-100, -53, -7, -.86, 0, 2, 23, 78, 135];

function howManyNegs(arg) {
    var count = 0;
    arg.forEach(function(element) {
        (element < 0) ? count += 1 : false;
    });
    return count;
}
 howManyNegs(assortedArray);



//---------------------------------------------------
//TODO: Write a function that takes two date instances as arguments. It should return the number
// of days that lies between those dates.
// example input: new Date('2020-06-11'), new Date('2020-06-01')
// expected output: 10

const today = new Date (2022, 3, 27); //monthIndex has January starting at 0 NOT 1.
const future = new Date (2022, 7, 1);

function daysBetween(date1, date2) {
    console.log(today);
    console.log(future);
    var difference = date2.getTime() - date1.getTime();
    var numDays = difference / (1000 * 3600 * 24);
    return numDays;
}

daysBetween(today, future);

//---------------------------------------------------
// TODO: Write a function that takes an array (a) and a number (b) as arguments. Sum up all array
//  elements with a value greater than b. Return the sum.
// example input: [1, 2, 3, 4, 5, 6, 7], 2
// expected output: 25

var testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var testNum = 4;

function addElements (a, b) {
    var sum = 0;
    a.forEach(function(el) {
        (el > b) ? sum += el : false;
        });
    return sum;
};

addElements(testArr, testNum);









