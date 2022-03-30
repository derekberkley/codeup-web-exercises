//objects a way to store info

var derekObject = {
    myName: 'Derek',
    myTown: "Alamo Heights",
    familySize: "4",
    age: 33,
    favTeam: "Dallas Cowbows",
    placeLived: "California, Boston, Honolulu",
}

console.log(derekObject);

//TODO: Create a method on your own object that returns your age - 10.

derekObject.ageMod = function() {
    return this.age - 10;               //use "this" to call object name so as not to be redundant
}

console.log(derekObject.ageMod());

//New Object creation is called Object Literal
var frogs = {}; //creates an empty object

//New object creation is called New Object Instance
//creating a new object instance using the Object()
var sports = new Object();
console.log(sports);

// how to add values to an object
// dot notation
// bracket notation

var car = {
    year: 2020,
    make: "honda",
    model: "fit",
    has4Wheels: true,
    leather: true,
    wheels: 4,
    doors: 2,
    stereo: false,
    radioStations: [104.5, 95.1,101.1,"wrr", 105.3,"kntu",96.1]
}

console.log("I drive a " + car.year + " " + car.make + " and I like to listen to " + car.radioStations[0] + " and " +
car.radioStations[1]);

//accessing nested information in objects

var states = {
    texas: {
        capital: "Austin",
        weather: "always hot",
        cities: [{
            name: "San Antonio",
            pop: 1.5,
        }, {
            name: "Austin",
            pop: 1.2,
        }, {
            name: "Houston",
            pop: 6.6,
        }]
    },
    illinois: {
        capital: "springfield",
        weather: "always chills",
    },
    kansas: {
        capital: "topeka",
        weather: "always tornados",
    }
}

console.log(states.texas.cities[2].pop); //6.6

// Write a function that prints out all of the cities in Texas
// 1. write a function
// 2. access cities from TX states obj
// 3. loop through cities array --> object
// 4. inside of loop, access 'name' from object we're currently on

function printCities(statesObj) {
    console.log(statesObj);
    var txCities = statesObj.texas.cities;
    txCities.forEach(function(obj) {
        console.log(obj.name);
    })

}

printCities(states);

