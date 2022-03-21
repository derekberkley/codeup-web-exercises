
//TODO: Create a function named showMultiplicationTable that
// accepts a number and console.logs the multiplication table
// for that number (just multiply by the numbers 1 through 10)

var random = Math.floor((Math.random() * 10) + 1);

function showMultiplicationTable(number) {

    console.log('The random number between 1 and 10 is: ' + number);

    for (var i = 1; i <= 10; i++) {
        var print = number + " x " + i + " = " + (number * i);
        console.log(print);
    }
}

showMultiplicationTable(random);

//TODO: Use a for loop and the code from the previous lessons to
// generate 10 random numbers between 20 and 200 and output to the
// console whether each number is odd or even. For example:

for (var i = 1; i <= 10; i++) {
    //include randomizer var in for loop scope instead of outside scope so # will
    //generate differently ever iteration.
    var randomizer = Math.floor((Math.random() * 200) + 20);

    if (randomizer % 2 == 0) {
        console.log("#" + i + ": " + randomizer + " is even.")
    } else {
        console.log("#" + i + ": " + randomizer + " is odd.")
    }
}

//TODO: Create a for loop that uses console.log to create the output
// shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for (var i = 1; i < 10; i++) {
    var numI = String(i);
    var print = numI.repeat(i);
    console.log(print);
}

//TODO: Create a for loop that uses console.log to create the
// output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for (var i = 0; i <+ 20; i++) {
    console.log(100 - (5 * i));
}