//Sends an alert as confirmation of jQuery + HTML properly configured and rendered
//****************************************************
// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });
//****************************************************

//****************************************************
// TODO: Create a jQuery statement to alert the contents of your h1 element(s).
// alert($("#page-title").html());
//
//OR written as...
// let headAlert = $("#page-title").html();
// alert(headAlert);
//****************************************************

//****************************************************
// when using an id selector w/ more than 1 element, returns first only
alert($("#first-quote").html());
//****************************************************

//****************************************************
//set border using .css() method (assigning an object property?!)
$(".codeup").css("border", "1px solid red");
//****************************************************


//****************************************************
// TODO: Using jQuery, set the font-size of all li elements to 20px.
$("li").css("font-size", "20px");
//****************************************************


//****************************************************
// TODO: Craft selectors that highlight all the h1, p, and li elements.
// highlights the entire element NOT just the text within.
$("h1, p, li").css("background-color", "yellow");
//****************************************************

//****************************************************
// TODO: Add jQuery code that will change the background color
//  of an h1 element when clicked.
$("h1").click(
    function() {
        $(this).css('background-color', 'blue');
    }
);
//****************************************************

//****************************************************
// TODO: Make all paragraphs have a font size of 18px when
//  they are double clicked.
$("p").dblclick(
    function() {
        $(this).css('font-size', '18px');
    }
);
//****************************************************

//****************************************************
// TODO: Set all li text color to red when the mouse is
//  hovering; reset to black when it is not.
$("li").hover(
    function() {
        $(this).css('color', 'red');
    }
);
//****************************************************