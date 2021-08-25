/* $('.first').on('click', function() {
    $('.obr1').toggle()
} );

$('.second').on('click', function() {
    $('.obr2').slideToggle()
} );

$('.third').on('click', function() {
    $('.obr3').fadeOut()
} );

*/

$('.first').on('click', function() {
    $('.obr1').html("Yeah, you clicked me")
} );

$('.first').on('click', function() {
    $('.first').css('background', 'black')
} );

$('.second').on('click', function() {
    $('.obr1').html("You click on the button 2, don´t you ?")
} );

$('.second').on('click', function() {
    $('.second').css('background', 'red')
} );

$('.third').on('click', function() {
    $('.third').css('background', 'yellow')
} );

$('.fourth').on('click', function() {
    $('.fourth').text("Blue !")
} );

