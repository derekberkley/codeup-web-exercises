// // DATA TYPES
//
//
//
//
// // boolean
// true
// false
// // number
// 18
// 99999
// // string
// "moses"
// "friday"
// "hey, how's it going today"
// "x82nf!*j4n#*1()"
// // undefined
// var myAge = 31;
// myAge // 31 defined
// myHeight // undefinged
// friday
// myState
// // null
//     [ ]
// // NAN
// 18/0 ?? nan
// age = 31;
// height = "tall";
// age + height; // 31tall || nan
// VM940:19
//
//
//
// // example from google on getting back NAN (we're not that far ahead
// // yet, so it's okay if it doesn't make sense)
// function sanitise(x) {
//     if (isNaN(x)) {
//         return NaN;
//     }
//     return x;
// }
//
// console.log(sanitise('1'));
// // expected output: "1"
//
// console.log(sanitise('NotANumber'));
// // expected output: NaN
//
//
// // % modulus
// 12 % 5
//
// var myState = "texas";
// var x = 2;
// var isLoggedIn = true;
//
// undefined
// isLoggedIn
// true
// var user = "laura123"
// undefined
// if(user == "laura123" && isLoggedIn == true){
//     console.log("you have $2938749128374081327409132874 in your savings account");
// }
// VM1770:2 you have $2938749128374081327409132874 in your savings account
// undefined
// var myFaveNumber = 18;
// var isWoodpeckerWeek = true;
// const myFaveFood = "pizza";
// let currentlyReading = "atomic habits";
// undefined
// myFaveNumber;
// 18
// myFaveNumber = 42;
// 42
// myFaveNumber
// 42
// myFaveFood = "french fries";
//
// myName = "laura";
// 'laura'
// yourName = "Cody"
// 'Cody'
// myName == yourName
// false
// alsoMyName = "Laura"
// 'Laura'
// myName == alsoMyName
// false
// 1 == 1
// true
// 1 == "1"
// true
// 1 === "1"
// false
// if(yourName !== myName){
//     console.log("sorry we can't be friends");
// }
// VM3188:2 sorry we can't be friends
// undefined
// 8 !== 7
// true
// prompt("how old are you");
// '31'
// var userInput = prompt("how old are you");
// undefined
// userInput
// '99999'
// if(userInput >= 21){
//     console.log("enjoy your friday with a michelada!");
// }
// VM3753:2 enjoy your friday with a michelada!
//     undefined
// var user2Age = prompt("age pls")
// undefined
// user2Age
// '13'
// if(user2Age >= 21){
//     console.log("enjoy your friday with a michelada!");
// }
// undefined
// //== // doesn't care about data types  // returns boolean
// //=== // does care a lot about data types // returns boolean
// // !== // bang!! NOT true // returns boolean
// // = // assignment - assign values to something
// undefined
// // <> // !==
// undefined
// 6 <> 4
// VM4397:1 Uncaught SyntaxError: Unexpected token '>'
//
// //
// && // ampersand / and symbol
// || // pipeline
//
// var age = prompt("age pls");
// VM4626:1 Uncaught SyntaxError: Unexpected token '&&'
// var age = prompt("age pls");
// undefined
// var name = prompt("whats your name")
// undefined
// if(age < 30 && name == "laura"){
//     console.log("hey that's cool your young!");
// } else {
//     console.log("not both are true");
// }
// VM5070:4 not both are true
// undefined
// age
// '45'
// name
// 'laura'
// if(age < 30 || name == "laura"){
//     console.log("hey that's cool your young!");
// } else {
//     console.log("not both are true");
// }
// VM5117:2 hey that's cool your young!
// undefined
// prompt("type something")
// ''
//
// //
// var randomNum = prompt("please enter a number");
// console.log(randomNum);
//
//
// // if(10 > 2){
// //     console.log("hey it's true")
// // } else {
// //     console.log("not true")
// // }
// VM6608:2 18
// undefined
// if(randomNum > 2){
//     console.log("hey it's true " + randomNum + " is greater than 2")
// } else {
//     console.log("false, " + randomNum + " is NOT greater than 2")
// }
// VM6904:2 hey it's true 18 is greater than 2
// undefined
// randomNum = 1;
// 1
// if(randomNum > 2){
//     console.log("hey it's true " + randomNum + " is greater than 2")
// } else {
//     console.log("false, " + randomNum + " is NOT greater than 2")
// }
// VM6934:4 false, 1 is NOT greater than 2
// undefined
// // comment quickly: command + question mark
// //
//
// 1 == "1"
// true
// let pi = 3.14;
//
// undefined
// typeof pi
// 'number'
// pi.toString();
// '3.14'
// typeof pi
// 'number'
// let piString = pi.toString();
// undefined
// piString
// '3.14'
// typeof piString
// 'string'
// pi
// 3.14
// pi + 10
// 13.14
// pi * 4
// 12.56
// var piMultiplied = pi * 45;
// undefined
// piMultiplied
// 141.3
// piMultiplied.toFixed();
// '141'
// Math.PI
// 3.141592653589793
// var actualPi = Math.PI;
// undefined
// var fixedPi = piMultiplied.toFixed();
// undefined
// fixedPi
// '141'
// typeof fixedPi;
// 'string'
// actualPi.toFixed()
// '3'
// actualPi.toFixed(4);
// '3.1416'
// Math.PI.toFixed(5);
// '3.14159'
// var maryPoppins = "supercalifragilisticexpialidocious"
// undefined
// maryPoppins.length
// 34
//
// // in the notes in the Operator:
// // !== Not equal in type and value
// // should it be !==Not equal in type OR value?
// // because 4 == '4' is true and 4 !== '4' is true
// undefined
// 4 == '4'
// true
// 4 !== '4'
// true
// 4 != '4'
// false
//     = // assignment
// != // comparison operator // ==
// !== // strict comparison operator // ===
// !!= // not not equal to
//
//
// VM8590:1 Uncaught SyntaxError: Unexpected token '='
// 4 == 5
// false
// 4 != 5
// true
// 4 !!= 5
// // VM8663:1 Uncaught SyntaxError: Unexpected token '!'
// 4 == '4'
// true
// 4 ==='4'
// false
// 4 != '4'
// false
// 4 !== '4'
// true