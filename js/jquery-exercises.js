//Sends an alert as confirmation of jQuery + HTML properly configured and rendered
//****************************************************
// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });
//****************************************************

//****************************************************
//testing jQuery selectors with an alert (two syntax methods)
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
// changes font size for multiple instances of a single element type
$("li").css("font-size", "20px");
//****************************************************


//****************************************************
// use multiple selectors to highlight each type of element
// highlights the entire element NOT just the text within.
$("h1, p, li").css("background-color", "yellow");
//****************************************************