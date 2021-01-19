$(document).ready(function(){
    $('#menu-ham').click(function () {
        $('.menu').animate({right: '0%'}, 100)
    });
    $('.close-menu').click(function () {
        $('.menu').animate({right: '-100%'}, 100)
});
});

var x = window.matchMedia("(max-width: 625px)");
myFunction(x);
x.addListener(myFunction);
function myFunction(x) {
  if (x.matches) { // If media query matches
    $(document).ready(function(){
        $('#menu-ham').click(function () {
            $('.menu').animate({right: '0%'}, 100)
        });
        $('.close-menu').click(function () {
            $('.menu').animate({right: '-100%'}, 100)
        });
    });
  }
}

function showMenu() {
    var subMenu = document.querySelector('.sub-menu');
    if (subMenu.style.display === "none") 
        subMenu.style.display = "block";
    else 
        subMenu.style.display = "none";
}