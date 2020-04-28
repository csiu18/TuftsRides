$(document).ready(function(){
    $('#menu-ham').click(function () {
        $('.menu').animate({right: '0%'}, 100)
    });
    $('.close-menu').click(function () {
        $('.menu').animate({right: '-50%'}, 100)
});
});

function showMenu() {
    var subMenu = document.querySelector('.sub-menu');
    if (subMenu.style.display === "none") 
        subMenu.style.display = "block";
    else 
        subMenu.style.display = "none";
}