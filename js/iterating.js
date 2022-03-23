(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var berkleyNames = ["Derek", "Steph", "Riley", "Apollo"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log("Length of first array is ", berkleyNames.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log("Each array element printed on a line with console.log and index number.")
    console.log(berkleyNames[0]);
    console.log(berkleyNames[1]);
    console.log(berkleyNames[2]);
    console.log(berkleyNames[3]);


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    console.log("Use for loop to print all names in array.")
    for (var i = 0; i < berkleyNames.length; i++) {
        console.log(berkleyNames[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    berkleyNames.forEach(function(name) {
        console.log("A forEach function used to print this element: " + name);
    })


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    var colorArray = ["red", "blue", "green", "yellow", "purple"];

    function first(input) {
        var final =  console.log(input[0]); // returns first item in an array
        return final;
    }

    function second(input) {
        var final =  console.log(input[1]); //returns second item in an array
        return final;
    }

    function third(input) {
        var final =  console.log(input[2]); //returns third item in an array
        return final;
    }
    console.log("Array is ", colorArray);
    first(colorArray);
    second(colorArray);
    third(colorArray);

})();