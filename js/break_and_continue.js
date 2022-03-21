//TODO: Prompt the user for an odd number between 1 and 50. Use a loop and
// a break statement to continue prompting the user if they enter invalid input.

var userNum = Number((prompt("Pick an odd number between 1 and 50.")));
while (userNum % 2 === 0) {
    userNum = Number((prompt("Pick an odd number between 1 and 50.")));
}

// -- user input is not available outside loop's scope
// do {
//     var userNum = (prompt("Pick an odd number between 1 and 50."));
//     var numNum = Number(userNum);
// } while (numNum % 2 === 0);

// -- For Loop uses a break statement per instructions
// for (var i = 1; i <= 100; i++) {
//     var userNum = (prompt("Pick an odd number between 1 and 50."));
//     var numNum = Number(userNum);
//     console.log("Number of times you have been asked: " + i);
//     if (numNum % 2 !== 0) {
//         break;
//     }
// }

//TODO: Use a loop and the continue statement to output all the odd numbers
// between 1 and 50, except for the number the user entered.

for (var i = 1; i <= 50; i++) {
    if ((i !== userNum) && (i % 2 !== 0)) {
        console.log("Odd Numbers 1-50: " + i);
    } else if (i === userNum) {
        console.log("Yikes! Skipping number: " + userNum);
        continue;
    } else {
        continue;
    }
}