// (function() {
//     $('.main-carousel').flickity({
//
//         cellAlign: 'center',
//         contain: true
//     });
// }
// )();
$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        nav: true
    });
});