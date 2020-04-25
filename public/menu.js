$(document).ready(function(){
    $('#menu-ham').click(function () {
        $('.menu').animate({right: '0%'}, 100)
    });
    $('.close-menu').click(function () {
        $('.menu').animate({right: '-50%'}, 100)
});
});