$(document).ready(function(){
    $('.header-slider').slick({
        dots: true,
        arrow: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        /*autoplay: true,
        autoplaySpeed: 4000,*/
    });
    $('.news-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
});
});