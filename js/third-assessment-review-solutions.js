//TODO: Create a function named getFirstValue that takes an array containing only numbers
// and returns the first element

const getFirstValue = (arr) => (arr[0]);

// function getFirstValue(array) {
//     return array[0];
// };

let testArr = [3, 7, 5, 9,13, 5.1, -6];

console.log("getFirstValue: ", getFirstValue(testArr));;

// TODO: Create a function named getVoteCount that takes an object as an argument. Given an object
//  containing counts of both upvotes and downvotes, return what vote count should be displayed.
//  This is calculated by subtracting the number of downvotes from upvotes.

const getVoteCount = (obj) => (obj.upvote - obj.downvote);

// function getVoteCount(obj) {
//     return obj.upvote - obj.downvote;
// }

let voteObj = {
    upvote: 550,
    downvote: 125
}
console.log("getVoteCount: ", getVoteCount(voteObj));

// TODO: Define a function named incrementItems that takes in an array, add 1 to every element in
//  the array.

const incrementItems = (array) => array.map(e => e + 1);

// function incrementItems(array) {
//     return array.map(e => e + 1);
// }

console.log("incrementItems: ", incrementItems(testArr));

// TODO: Create a function named parseArray that takes an array of integers and strings. Convert
//  integers to strings and return the new array.

const parseArray = (array) => array.map(e => String(e));

// function parseArray(array) {
//     let final = array.map(e => String(e));
//     console.log(final);
//     return final;
// }

let testArr2 = [7, "blue", 41, "cat", 0.3, "bbq sauce"];
console.log("parseArray: ", parseArray(testArr2));;

// TODO: Create a function named newWord that takes a word and returns the new word without
//  including the first character.

const newWord = (word) => word.substring(1, (word.length));

// function newWord(word) {
//     let final = word.substring(1, (word.length));
//     console.log(final);
//     return final;
// }

let wordTest = "Star Wars";
console.log("oldWord: ", wordTest, " newWord: ", newWord(wordTest));;

// TODO: Create a function named doubleChar that takes a string and returns a string in which
//  each character is repeated once.

function doubleChar(string) {
    let strArr = string.split("");
    let strArrFilter = strArr.filter((e, i) => strArr.indexOf(e) !== i);
    let final = strArrFilter.join("");
    console.log(final);
    return final;
}

let stringTest = "aabbccddeeffgghhiijj";
console.log("doubleChar: ", doubleChar(stringTest));;

// TODO: You work for a manufacturer, and have been asked to calculate the total profit made on
//  the sales of a product. You are given an object containing the cost price per unit (in dollars),
//  sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded
//  to the nearest dollar.

let business = {
    cpu: 3.50,
    spu: 8.00,
    inventory: 75
}

const profit = (a, b, c) => ((b - a) * c);

console.log('total profit: $', profit(business.cpu, business.spu, business.inventory));