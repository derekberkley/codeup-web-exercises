//TODO: Write a javascript function that accepts the 3 lengths of
// a triangle and outputs the triangle’s area.

function pythagorean(side1, side2, side3) {

    //calculate the semi-perimeter first
    var semiPer = (side1 + side2 + side3) / 2;

    //using Heron's Formula since only know 3 sides of triangle
    var area = Math.sqrt(semiPer * (semiPer - side1) * (semiPer - side2) * (semiPer - side3));

    //Area of Triangle Formula if had other info
    // var triArea = (base * height) * 0.5

    console.log("The area of the triangle is: " + area);
    return area;
}

pythagorean(3, 4, 5);