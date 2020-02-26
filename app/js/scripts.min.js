$(document).ready(function () {
        $(function () {
            var owl = $(".owl-carousel");
            owl.owlCarousel({
                items: 3,
                autoplay: true,
                margin: 10,
                loop: true,
                responsive : {
                    320 : {
                        items: 1,
                        nav: true,
                    },
                    768:{
                        items: 2,
                        nav: true,
                    },
                    1024:{
                        items: 3,
                        nav: false,
                    }
                }
            });
        });
    let btn = $('#button');
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 50) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '900');
    });
    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        var position = $($(this).attr("href")).offset().top;
        $("body, html").animate({
            scrollTop: position
        }, 700);
    });
    $('.js-menu-open').click(function () {
        $(this).parents('#menuToggle').toggleClass('open');
    });
    $('.js-remove-menu').click(function() {
        $(this).parents('#menuToggle').removeClass('open');
    });
});




