$(document).ready(function () {
        $(function () {
            // Owl Carousel
            var owl = $(".owl-carousel");
            owl.owlCarousel({
                items: 1,
                margin: 10,
                loop: true,
                nav: true
            });
        });


    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true
    });

});

$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});
$('.menu-cont').on('click', function() {
    $('.menu').toggleClass('active');
    $('.menu-txt').attr('src', '/img/logo.png');
});
var findNCenter = function() {
    var elems = document.querySelectorAll('.center-vertical');

    for(var i =0; i<elems.length; i++) {
        elems[i].style.marginTop = (elems[i].parentNode.offsetHeight - elems[i].offsetHeight)/2 + 'px';
    }
};
document.addEventListener && document.addEventListener('DOMContentLoaded', findNCenter);
window.addEventListener && window.addEventListener('resize', findNCenter);

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});
$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});
