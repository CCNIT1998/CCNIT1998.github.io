$('button').click(function() {
    $('.toast').stop().fadeIn(400).delay(5000).fadeOut(500); //fade out after 3 seconds
});

$('.exit').click(function() {
    $('.toast').stop()
})