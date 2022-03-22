// TODO: Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

var i = 1;
while (i < 17) {
    var result = 2**i;
    console.log(result);
    i++;
}

//TODO: An ice cream seller can't go home until she sells all of her cones. First
// write enough code that generates a random number between 50 and 100
// representing the amount of cones to sell before you start your loop. Inside
// of the loop your code should generate another random number between 1 and 5,
// simulating the amount of cones being bought by her clients. Use a do-while
// loop to log to the console the amount of cones sold to each person.

//randomizer dictates how many cones need to be sold.
var allCones = Math.floor(Math.random() * 50) + 50;
//printing total cones for sale from randomizer about for reference
console.log("Total: " + allCones);


do {
    //randomizer #2 dictates how many cones are bought on each occasion (scope!)
    var bought = Math.floor(Math.random() * 5) + 1;

    // takes current values of total and purchase occasion and if greater than zero, execute
    if ((allCones - bought) >= 0) {
        console.log(bought + " cones sold."); //print each transaction
        allCones -= bought; // reassign variable with new total after transaction
    } else { //execute if the purchase request is larger than inventory
        console.log("Can't sell you " + bought + ". I only have " + allCones); //tell the customer!
        continue; // no variable to reassign since no transaction occurred.
    }
} while (allCones > 0 || allCones < 0); //if total is above or below 0 then business needs to be conducted (do!)
// when allCones = 0, break from loop and report to console.
(allCones === 0) ? "Yay! I sold them all!" : "Woops, we have more...";










