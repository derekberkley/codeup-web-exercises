console.log("Hello from external JavaScript!");

alert("Welcome to my Website!");

var favColor = prompt("What is your favorite color?");
alert("Great, my favorite color is " + favColor + " too!");

//Answers from the Variables Exercises

//Movie Rental Question
alert("Welcome to the Movie Rental Store. The rental price for a movie per day is $3.00");
var movie1 = prompt("How many days would you like to rent The Little Mermaid for?");
var movie2 = prompt("How many days would you like to rent Brother Bear for?");
var movie3 = prompt("How many days would you like to rent Hercules for?");
var pricePerDay =3.00;
var total = pricePerDay * (parseInt(movie1) + parseInt(movie2) + parseInt(movie3)); //need parseInt since the user is providing the hours in a string.
alert("Your Movie Rental Total is: $ " + total.toFixed(2));
console.log("Variables Exercise #3A");
console.log("Your Movie Rental Total is: $ " + total.toFixed(2)); //.toFixed() returns a STRING not a number


//Contractor Pay Question
alert("Now, let's figure out how much you earned this week as a contractor.");
console.log("Variables Exercise #3B");
var googleHours = prompt("How many hours did you work at Google this week?");
console.log("You indicated you worked" + googleHours + "at Google this week.");
var amazonHours = prompt("How many hours did you work at Amazon this week?");
console.log("You indicated you worked" + amazonHours + "at Amazon this week.");
var facebookHours = prompt("How many hours did you work at Facebook this week?");
console.log("You indicated you worked" + facebookHours + "at Facebook this week.");
var googlePay = 400;
var amazonPay = 380;
var facebookPay = 350;
var paycheck = (googleHours * googlePay) + (amazonHours * amazonPay) + (facebookHours * facebookPay);
alert("The total amount of bacon you brought home as a contractor this week is: $ " + paycheck.toFixed(2));
console.log("The total amount of bacon you brought home as a contractor this week is: $ " + paycheck.toFixed(2));

//Enrollment Questions
alert("Thank you for your interest in enrolling in this class! Let's check a couple things first...");
console.log("Variables Exercise #3C");
var openSeat = prompt("Type: 'yes' if you see an open seat in the class?");
console.log("You indicated whether or not there is any open seat in the class.")
var anyConflict = prompt("Type: 'no' if this class does NOT conflict with any of your other classes.");
console.log("You indicated whether or not you have any scheduling conflicts with this class.")
if (openSeat == 'yes' && anyConflict == 'no') {
    alert("Congrats! Welcome to the Class!");
    console.log("You have been registered for the class.")
} else {
    alert("Apologies, you are not eligible to enroll in this class. Please resolve any issues and try again.")
    console.log("Thank you for your interest in the class. Please try again when you've resolved the issue."); }

//Product Offer Question
alert("Welcome to The Store.");
console.log("Variables Exercise #3D");
console.log("Welcome to The Store.")
var expirationDate = prompt("What is the date today?");
console.log("You said the date is " + expirationDate);
console.log("You're in luck! Since it is " + expirationDate + " the offer is still valid through the end of the day.");
var premiumMember = prompt("Please enter if you a premium member or a guest of The Store?");
    if (premiumMember == 'premium member' || premiumMember == 'premium') {
        var premiumBuy = prompt("Great! You are eligible for the product offer. How many would you like to buy?");
        console.log("Excellent, you requested " + premiumBuy + ". Coming right up.")
    } else {
        var guestBuy = prompt("Welcome new friend! This offer is available with the purchase of 2 items or more! How many would you like to buy?");
        console.log("Excellent, you requested " + guestBuy + ". Coming right up.");
    }

