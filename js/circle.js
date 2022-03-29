(function() {
    "use strict";
    // create a circle object
    var circle = {
            radius: 3,

            getArea: function () {
                var area = Math.PI * Math.pow(circle.radius, 2);
                return area;
                },

            logInfo: function(doRounding) {
                if (doRounding === true) {
                    var final = Math.round(circle.getArea());
                    console.log("Rounded area is: ", final);
                    return final;
                } else {
                    console.log("Area without rounding is: ", circle.getArea());
                    return circle.getArea();
                }

                console.log("Area of a circle with radius: " + this.radius + ", is: ", circle.getArea());
            }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

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