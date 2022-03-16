"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(myName) {
    return "Hello, " + myName; //can also store the string in a variable and return that variable
}

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

console.log("TODO: call fn and pass name as a string literal argument."); //for reference in the Console

var helloMessage = sayHello("Derek"); //storing fn result to a var per instructions
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

console.log("TODO: Store name as string in a var and pass to fn");

var myName = 'Derek B.'; //slightly altered name in variable assignment for differentiation in Console
console.log(sayHello(myName)); //chose alt way of console.log the fn result

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(num) {
    var result = (num === 2); //stores Boolean value in variable
    return result;  //return the variable so the Boolean can be manipulated elsewhere if necessary
}

console.log("TODO: Create function that returns boolean based on if random # is 2");
console.log(random); //This lets me read the random number to check if the function is working
console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(tip, bill) {
    var total = tip * bill;
    console.log("The tip amount is: $" + total.toFixed(2)); // used .toFixed for formatting in Console, I understand string vs number outputs!
    return total; //separate console.log prints from the return if going to use final value in future fn calls
}

console.log("TODO: Create function that takes in a bill and tip % and calculates tip.");
calculateTip(0.20, 20);
calculateTip(0.25, 25.50);
calculateTip(0.15, 33.42);

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

 console.log("TODO: Use a prompt & alert to prompt user for the bill total and " +
     "requested tip % and display tip $ amount."); //sets apart the answers on Console.

 var mealBillString = prompt("Thank you for eating at The Family Restaurant. What is your bill total?");
 var mealTipString = prompt("Would you like to tip a percentage of 15, 20, or 25?");
 var mealTipNum = Number(mealTipString) / 100; //make sure string from user goes to Number for fn
 var mealBillNum = Number(mealBillString);

 var tipTotal = calculateTip(mealTipNum, mealBillNum);
 alert("Based on the percentage you selected, the tip amount is: $" + tipTotal); //instructions say use prompt and alert

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 * */

    // Pseudo-Code Road Map
    // write the function using the assigned name
    // create variables for price and discount percentage
    // in the function, apply the discount
    // return the price result after applying the discount

console.log("TODO: Create a fn to calc result of applying discount to original price"); //sets apart the answers on Console.
var originalPrice = 100;    //using example variables provided
var discountPercent = .2; // 20%

function applyDiscount(origP, amtOff) {
    var newTotal = origP * (1 - amtOff); // 1 (or 100%) minus amtOff will calc new price after discount

    //console.log NOT part of instruction but valuable to check my work
    console.log("The original price of $" + origP + " after calculating the " + amtOff + " discount is: $" + newTotal.toFixed(2));

    return newTotal; //this is the actual calc in num form, NOT in string as in Console.log above
}
applyDiscount(originalPrice, discountPercent) // 80
applyDiscount(45.99, 0.12) // 40.4712
