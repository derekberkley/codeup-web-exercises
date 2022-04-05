// const books = [
//     {
//         "title": "Genetic Algorithms and Machine Learning for Programmers",
//         "price": 36.99,
//         "author": "Frances Buontempo"
//     },
//     {
//         "title": "The Visual Display of Quantitative Information",
//         "price": 38.00,
//         "author": "Edward Tufte"
//     },
//     {
//         "title": "Practical Object-Oriented Design",
//         "author": "Sandi Metz",
//         "price": 30.47
//     },
//     {
//         "title": "Weapons of Math Destruction",
//         "author": "Cathy O'Neil",
//         "price": 17.44
//     }
// ]
//
//
// function highestPrice(array) {
//     var expensive = 0;
//     var final;
//
//     for (var i = 0; i < array.length; i++) {
//         if (array[i].price > expensive) {
//             expensive = array[i].price;
//         }
//     };
//     array.forEach(function(book) {
//         if (book.price === expensive) {
//             final = book;
//         }
//     });
//     return final;
// }
//
// highestPrice(books);
//
// // function highestPriceBook(arrObjs) {
// //
// //     var highestPrice = 0;
// //     var final = {};
// //
// //     arrObjs.forEach(function (book) {
// //         if (book.price > highestPrice) {
// //             highestPrice = book.price;
// //             console.log(highestPrice);
// //             return highestPrice;
// //         } else {
// //             console.log(highestPrice);
// //             return highestPrice;
// //         }
// //     });
// //     arrObjs.forEach(function (book) {
// //         if (book.price === highestPrice) {
// //             final = book;
// //             console.log(final);
// //             return final;
// //         } else {
// //             return false;
// //         }
// //     })
// //
// //     return final;
// // }

const shoppingCart = {
    "tax": .08,
    "items": [
        {
            "title": "orange juice",
            "price": 3.99,
            "quantity": 1
        },
        {
            "title": "rice",
            "price": 1.99,
            "quantity": 3
        },
        {
            "title": "beans",
            "price": 0.99,
            "quantity": 3
        },
        {
            "title": "chili sauce",
            "price": 2.99,
            "quantity": 1
        },
        {
            "title": "chocolate",
            "price": 0.75,
            "quantity": 9
        }
    ]
}

function numberOfItemTypes(obj) {
    console.log(Object.keys(obj));
    return Object.keys(obj);
}

numberOfItemTypes(shoppingCart);