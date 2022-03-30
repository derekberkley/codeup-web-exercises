(function() {
    "use strict";
    // create a circle object
    var circle = {
            radius: 3,

            getArea: function () { //add functionality to the object with method that calc area
                var area = Math.PI * Math.pow(circle.radius, 2);
                return area;
                },

            logInfo: function(doRounding) { //add fn to obj w/ method that rounds area result if asked
                if (doRounding === true) {
                    var final = Math.round(circle.getArea()); //Math.round = traditional numerical rounding
                    console.log("Rounded area is: ", final);
                    return final;
                } else {
                    console.log("Area without rounding is: ", circle.getArea());
                    return circle.getArea(); // invoke fn stored in another method to calc area and use for this fn
                }
                    //The 'this' keyword refers to the object name and is therefore able to be used for other obj's
                console.log("Area of a circle with radius: " + this.radius + ", is: ", this.getArea());
            }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false); //testing area math without rounding
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);  //testing the rounding method

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    var circle2 = {
        radius: 5,

        getArea: function () {
            var area = Math.PI * Math.pow(circle2.radius, 2);
            return area;
        },

        logInfo: function(doRounding) {
            if (doRounding === true) {
                var final = Math.round(circle2.getArea());
                console.log("Rounded area is: ", final);
                return final;
            } else {
                console.log("Area without rounding is: ", circle2.getArea());
                return circle2.getArea();
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: ", circle.getArea());
        }
    };
    // log info about the circle
    console.log("Raw circle information");
    circle2.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle2.logInfo(true);

})();