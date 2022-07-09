// fixed-top navbar
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
    $('#hekto-navbar').addClass('fixed-top');
    } else {
    $('#hekto-navbar').removeClass('fixed-top');
    }
});