// //TODO: Write a javascript function that accepts the 3 lengths of
// // a triangle and outputs the triangle’s area.
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
// Print numbers 1-100
//if # is divisible by 3 use Fizz
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
// shuffle(deck);





//-------------------
// Randomized Deck Assignment
//-------------------
// var deck = [
//     "Aspades", "Adiamonds", "Ahearts", "Aclubs",
//     "1spades", "1diamonds", "1hearts", "1clubs",
//     "2spades", "2diamonds", "2hearts", "2clubs",
//     "3spades", "3diamonds", "3hearts", "3clubs",
//     "4spades", "4diamonds", "4hearts", "4clubs",
//     "5spades", "5diamonds", "5hearts", "5clubs",
//     "6spades", "6diamonds", "6hearts", "6clubs",
//     "7spades", "7diamonds", "7hearts", "7clubs",
//     "8spades", "8diamonds", "8hearts", "8clubs",
//     "9spades", "9diamonds", "9hearts", "9clubs",
//     "10spades", "10diamonds", "10hearts", "10clubs",
//     "Jspades", "Jdiamonds", "Jhearts", "Jclubs",
//     "Qspades", "Qdiamonds", "Qhearts", "Qclubs",
//     "Kspades", "Kdiamonds", "Khearts", "Kclubs"];
// console.log("Original Deck: ", deck);
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
// shuffle(deck);















