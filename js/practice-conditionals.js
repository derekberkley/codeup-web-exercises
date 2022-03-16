// JavaScript KEYWORDS for Conditionals
// if
// else
// else if
// switch
// case
// break
// continue
// default

// IF STATEMENT
// conditional statement --> returns a boolean value
// does it meet a specific requirement? (temp > 80) --> that's a boolean

// if(conditional statement here) {
//      code goes here
//      this code only runs if the condition is met!
// }


// If/Else and If/Else If Statements
var temp = 62;
// <50, 51 - 70, 70>
console.log(temp);

if(temp > 50) {
    console.log('bring a jacket');
} else if (temp >= 51 && temp <= 70) {
    console.log('perfect temp!');
} else {
    console.log('wear sunglasses');
}

console.log('outside of if/else statement');


// TODO: write a conditional that prints "hey, she's my instructor" to the
//  console if the name provided is "Laura", but if the name provided
//  is "Kenneth", print out "oh, he's my instructor too!", if the name
//  is neither Laura nor Kenneth, print out "um I don't know them"

var name = prompt("Give me a name from your Zoom Meeting.");

if (name === 'Laura') {
    console.log('Hey, she is my instructor!');
} else if (name === 'Kenneth') {
    console.log('He is my instructor too!');
} else {
    console.log('umm, I dont know them...');
}

// TODO: Write a function that accepts a student's grade and returns whether or not that student
//  is passing or failing. 70+ is passing.'

// 1. Write a function
// 2. create a parameter for the studentGrade
// 3. return 'passing' or 'failing'
//  if studentGrade > 70, save a string that says "passing"
//  if studentGrade < 70 save a string that says 'failing'
// 4. create a variable to store isPassingFailing
// 5. call the function, pass in the argument (grade)

function isPassing(studentGrade) {
    var result;

    if(studentGrade > 70) {
        result = 'passing';
    } else {
        result = 'failing';
    }
    return result;
}

console.log(isPassing(78));