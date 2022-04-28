"use strict"
//******************************
//Mouse Events lecture notes
//******************************
//hides all animal images based on class of 'animals'
//because it is first here then all our functions below supercede the hidden pictures via class.
$('.animals').css('visibility', 'hidden')


//TODO: Write a click function using jQuery and make the image with the id of "cat" appear by clicking on the h4
// with the id of "click"

$('#click').click(function () {
    $('#cat').css('visibility', 'visible')
})

//TODO: Write a double click function to hide el gato by clicking on the h4 with the if of "dblClick"

$('#dblClick').dblclick(function() {
    $('#cat').css('visibility', 'hidden')
})

//TODO: Write an event handler using the .hover function to make the image with the id of "turtle" appear by hovering
// over the div with the id of "hover"

$('#hover').hover(
    function() {
        $('#turtle').css('visibility', 'visible')
    },
    function() {
        $('#turtle').css('visibility', 'hidden')
    }
)

//******************************
//Keyboard Events lecture notes
//******************************

//TODO: Use keydown to change the background of the whole page

$('#background').keydown(function() {
    $('#background').css('background', 'lightgrey')
})

//TODO: Modify the previous snipp et of code so that after the background is changed with keydown, the background can
// then be reverted back to normal by using keypress

$('#background').keypress(function() {
    $('#background').css('background', 'white')
})


//TODO: Modify the original snippet of code again so that after the background is changed with keydown, the background can
// then be reverted back to normal by using keyup

// $('#background').keypress(function() {
//     $('#background').css('background', 'white')
// })



//TODO: You're given two buttons that can change the h4 tags to red and black. create two more buttons that has the ability
// to enable or disable these two buttons using the .off an .on functions

$('#red').click( function (){
    $('h4').css('color', 'red')
})

$('#black').dblclick( function () {
    $('h4').css('color', 'black')
})
$('#offSwitch').click(function () {
    $('#red').off()
    $('#black').off()
})

//on function is NOT an on switch as the off function is. need to reassign the functionality
$('#onSwitch').click(function() {
    $('#red').on('click', function() {
            $('h4').css('color', 'red')
        })
    $('#black').on('dblclick', function() {
        $('h4').css('color', 'black')
    })
})





