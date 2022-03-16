var myName = "Derek";
var myAge = 33;
var isMonday = true;

console.log(myName, myAge, isMonday);
console.log("I'm printing my name here: ", myName);
console.log("My name is " + myName + " and my age is " + myAge); //concatenation

//standard function syntax
function doSomething() {

}

//global scope variables
var myNotes = "my notes blah blah blah";
var isColdOutside = true;
var temp = 86;
var isACWorking = false;

//functions
// TODO: write a function that takes in the isColdOutside
//  and returns a string that says "you'll need a jacket" if it IS cold outside.

//isColdOutside is the var we'll be using to verify whether or not to print "you'll need jacket" //argument
// - name of function
// - do we need parameters? yes!
// - what are parameters?
// - what are we naming the parameters?
// - how do we use parameters inside of a function?
// - pass in variables we're actually going to be using inside of our function
// - return something from function
// - what's being returned? a phrase / returning a "string"
// - where is the string being defined? We can create a variable or return the string directly
// - if/else --> check to see if isColdOutside is true, if it is, return string
// - if it's false, return...?? // exit the function (have no output)

// 1. Write a function
// 2. Function needs parameter(s)
// 3. Call the Function
// 4. Pass in the arguments (isColdOutside)
// 5. Inside of function: check IF isColdOutside == true / else exit
// 6. out of function

function tempCheck(jacket) {
    console.log(jacket); //false
    var finalString;
    if (jacket === true) {
        finalString = "Youll need a jacket.";
       return finalString;
    } else {
        return;
    }
}

tempCheck(isColdOutside);

// FUNCTIONS

// functions without parameters
// functions that don't return anything (void)
// functions that do return something

    // TODO: write a function that adds 4 + 19;
        // 1. write a function (addNumbers)
        // 2. code: 4 + 19
        // 3. Call the Function

    // Called a VOID FUNCTION --> returns nothing; doesn't even have a return statement
    function addNumbers() {
        console.log(4 + 19);
    }
    addNumbers();


    // TODO: write a function that adds 4 + 19 and returns the sum;

    function addNumNums() {
        // option 1: create a variable that stores the sum and returns the variable
        var sum = 4 + 19;
        return sum;
        //option 2: return the sum of 4 + 19 directly
        return (4 + 19);
    }
    //Option 1 and 2 both have their use cases. No "better" option at this time.
    addNumNums(); // does this display anything on the console? - No
    console.log(addNumNums()); // does this display anything on the console? -Yes


// function with 1 parameter/argument that doesn't return anything
    // TODO: write a function that adds num1 to 25;
    // 1. write a function
    // 2. add num1 + 25
    // 3. call the function
    // 4. create a num1 variable (outside of my function - globally)
    // 5. pass in num1 as an argument to the function
    //    - what is the argument? the value being passed in to the fn --> num1
    //    - where do we pass in an argument? --> passed in when we CALL (invoke) the function
    //    - how will we reference those arguments inside of my function? --> parameters! (Step 6)
    // 6. create a parameter to be used inside of the function (placeholder)
    //    - what is a parameter? --> placeholder for the actual value
    //    - where do parameters get created? --> right after the name of the fn in parens
    //    - where/how do we use them? --> we reference the values being brought in as arguments by
    //      calling them by param names

    var num1 = 18;
    var num2 = 24;

    function sumVar(param) {
        console.log("param: " + param); // This is a print of the param
        console.log(param + 25);
    }
    console.log("Argument called num1 is " + num1); // This is a print of the argument taken from global variable above
    sumVar(num1);
    sumVar(num2);


// ----------
// Console.logs are printed in order globally and then if used in functions, print when functions are called.
    console.log("A - console.log print");   // 1
    function printCity(location) {
        console.log('B - console.log print');   //3
        return location; //"San Antonio"
        console.log('C - console.log print'); //5... DOES NOT PRINT since this is after the return statement.
    }

    console.log('D - console.log print'); //2
    printCity("San Antonio");
    console.log('E - console.log print'); //4


// functions with 1+ parameters/arguments
function multipleTwoNums(a, b) {
    return a + b;
}

console.log(multipleTwoNums(3, 82)); //use console.log to check work

