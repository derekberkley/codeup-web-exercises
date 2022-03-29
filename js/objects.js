(function() {
    "use strict";
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

        var person = {
            firstName: 'Derek',
            lastName: 'Berkley',
        };
        console.log(person.firstName);
        console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // --- Old way of defining the function and assigning it as an object property
    // function sayHello() {
    //     var final = "Hello, " + person.firstName + " " + person.lastName + "!";
    //     console.log(final);
    //     return final;
    // }
    // person.greeting = sayHello();

    person.sayHello = function() {
        var final = "Hello, " + person.firstName + " " + person.lastName + "!";
        return final;
    };

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180}, //0 element (is an object)
        {name: 'Ryan', amount: 250}, //1 element (is an object)
        {name: 'George', amount: 320} //2 element (is an object)
    ];

    // for (var i = 0; i < shoppers.length; i++) {
    //
    //     console.log("Name: " + shoppers[i].name);
    //     console.log("Spent $" + shoppers[i].amount);
    //
    //     if (shoppers[i].amount > 200) {
    //         var discountReport = ("Received a discount of 12% worth: $" + (shoppers[i].amount * .12));
    //         var final = ("Paid $" + (shoppers[i].amount * .88));
    //         console.log(discountReport);
    //         console.log(final);
    //         continue;
    //     } else {
    //         var noDiscount = "Did not receive the 12% discount."
    //         console.log(noDiscount);
    //         continue;
    //     }
    // };

    //array.forEach(function(element, index (not necessary), array) {}
    shoppers.forEach(function(input) {

        console.log("Name: " + input.name);
        console.log("Spent $" + input.amount);

        if(input.amount > 200) {
            console.log("Received a discount of 12% worth: $" + (input.amount * .12));
            console.log("Paid $" + (input.amount * .88));
        } else {
            var noDiscount = "Did not receive the 12% discount."
            console.log(noDiscount);
        }
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "The Road",
            author: {
                firstName: "Cormac",
                lastName: "Mccarthy",
            },
        },
        {
            title: "The Obstacle is the Way",
            author: {
                firstName: "Ryan",
                lastName: "Holiday",
            },
        },
        {
            title: "The End is Always Near",
            author: {
                firstName: "Dan",
                lastName: "Carlin",
            },
        },
        {
            title: "Irresistible Revolution",
            author: {
                firstName: "Matthew",
                lastName: "Lohmeier",
            },
        },
        {
            title: "How to Destroy America in Three Easy Steps",
            author: {
                firstName: "Ben",
                lastName: "Shapiro",
            }
        }
    ];

    for (var i = 0; i < books.length; i++) {
        console.log(books[i].title);
        console.log(books[i].author.firstName);
        console.log(books[i].author.lastName);
    }

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(book) {
        console.log("Book # ", books.indexOf(book) + 1);
        console.log("Title: " + book.title);
        console.log("Author: ", book.author.firstName, book.author.lastName);
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    function createBook(argTitle, argAuthor) {
        var books = {};
        books.title = argTitle;
        books.author = argAuthor;
        console.log(books);
        return books;
    }

    createBook('12 Rules for Life', 'Jordan Peterson');

    function showBookInfo(bookObj) {
        // console.log(bookObj.title);
        // console.log(bookObj.author);
        for (var i = 0; i < bookObj.length; i++) {
            console.log(bookObj[i].title);
            console.log(bookObj[i].author.firstName);
            console.log(bookObj[i].author.lastName);
        }
    }
        showBookInfo(books);

    }());
