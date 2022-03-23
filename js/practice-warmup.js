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


















