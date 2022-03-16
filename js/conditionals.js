"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
console.log("TODO: fn analyzeColor with if/else if/else statements for colors");
function analyzeColor(colorName) {
   if (colorName === 'red') { //if color is red, execute the next line of code
       return "Red Hot Chili Peppers"; //return statement aassigned to each individual color
   } else if (colorName === 'blue') {
       return "Blue Man Group";
   } else if (colorName === 'green') {
       return "Green Day";
   } else if (colorName === 'black') {
       return "The Black Eyed Peas";
   } else if (colorName === 'white') {
       return 'Plain White Ts';
   } else if (colorName === 'yellow') {
       return "Yellowcard";
   } else if (colorName === 'pink') {
       return 'Pink Floyd';
   } else { //for all colors that are passed but not assigned a return string
       return 'I do not recognize that color.';
   }
}

console.log(analyzeColor('red'));
console.log(analyzeColor('blue'));
console.log(analyzeColor('green'));
console.log(analyzeColor('black'));
console.log(analyzeColor('white'));
console.log(analyzeColor('pink'));
console.log(analyzeColor('purple'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log("TODO: invoking fn analyzeColor with provided variable randomColor.")
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

console.log("TODO: refactor function to use switch case statement for color analysis.")
 function colorSwitchCase(colorID) { //chose a different name for switch-case fn to compare results
     switch(colorID) {
         case 'red':
             console.log("Red Dragon, 2002");
             break;
         case 'blue':
             console.log('Into The Blue, 2005');
             break;
         case 'green':
             console.log('The Green Mile, 1999');
             break;
         case 'black':
             console.log('Men in Black, 1997')
             break;
         case 'white':
             console.log('White Men Cant Jump, 2006');
             break;
         case 'yellow':
             console.log('Yellow Submarine, 19');
             break;
         case 'pink':
             console.log('The Pink Panther, 2005');
             break;
         default:
             console.log('...Actually, look up your own band.');
     }
}

colorSwitchCase('red');
colorSwitchCase('blue');
colorSwitchCase('green');
colorSwitchCase('black');
colorSwitchCase('white');
colorSwitchCase('pink');
colorSwitchCase('purple');

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var colorPrompt = prompt("Please type in a color here.");
var colorOutput = analyzeColor(colorPrompt);
alert("Based on the color you selected: " + colorPrompt + ". You should listen to the band: " + colorOutput);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

console.log("TODO: write fn which accepts a lucky # and total amount and returns discounted price.")
function calculateTotal(luckyNum, totalAmt) {
    var result;
    switch(luckyNum) {
        case 0:
            result = (totalAmt);
            break;
        case 1:
            result = (.9 * totalAmt);
            break;
        case 2:
            result = (.75 * totalAmt);
            break;
        case 3:
            result = (.65 * totalAmt);
            break;
        case 4:
            result = (.5 * totalAmt);
            break;
        case 5:
            result = 0;
            break;
        default:
            result = 'That is not a lucky number. Play again.';
    }
    return result;
}

console.log(calculateTotal(0, 100)) // returns 100, tests this lucky number
console.log(calculateTotal(1, 100)) // returns 90, tests this lucky number
console.log(calculateTotal(2, 100)) // returns 75, tests this lucky number
console.log(calculateTotal(3, 100)) // returns 65, tests this lucky number
console.log(calculateTotal(4, 100)) // returns 50, tests this lucky number
console.log(calculateTotal(5, 100)) // returns 0, tests this unlucky number


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

//Since this is an alert, it will run on Chrome BEFORE everything else here.
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var userInputBill = prompt("How much is your bill?");
var discPrice = calculateTotal(luckyNumber, Number(userInputBill));
alert("Your bill is: $" + userInputBill + ". Your lucky number is: " + luckyNumber + ". Your discount price is: $" + discPrice);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

//var userNum; // define the variable
//var whatchaSay = confirm("Would you like to pick a number?"); //store true value from user confirm input
//
//if (whatchaSay === true) {  //if input is 'yes' or true
//    userNum = Number(prompt("Please enter a number.")); //execute a prompt for the string and store # in var
//}
//
//// if/else statement to determine even or odd w/ user alert
//if(userNum % 2 == 0) {
//    alert("Your number is even.");
//} else {
//    alert("Your number is odd.");
//}
//
//// alert statement that adds 100 to the user's inputted number
//alert("Your number plus 100: " + (userNum + 100));
//
//// alert statement that tells the user if their number is positive or negative
//if(userNum > 0) {
//    alert("Your number is positive.");
//} else {
//    alert("Your number is negative.");
//}

//-----------
var userNum, validUserNum; // declare variable in global scope
var whatchaSay = confirm("Would you like to pick a number?");

//if the user wants to enter a number then fn to gather a valid user input is executed
if (whatchaSay === true) {
    userNum = Number(prompt("Please enter a number."));
    validUserNum = isNaN(userNum);
}

    // if user input is NaN. get new input. Otherwise, next function is invoked.
if (validUserNum === true) {
    userNum = Number(prompt("Please enter a number."));
    } else {
        lastProblem(userNum);
    }

// define the function to evaluate the user's number and be invoked when ready.
function lastProblem(num1) {
    // if/else statement to determine even or odd w/ user alert
    var evenOrOdd = (num1 % 2 === 0) ? alert("Your number is even.") : alert("Your number is odd.");
    // adds 100 to the user's inputted number
    var plusOneHund = "Your number plus 100 is: " + (num1 + 100);
    // alert statement that tells the user if their number is positive or negative
    var posOrNeg = (num1 > 0) ? alert("Your number is positive.") : alert("Your number is negative.");

    var finalPrint = evenOrOdd + alert(plusOneHund) + posOrNeg;

    return finalPrint;
}


