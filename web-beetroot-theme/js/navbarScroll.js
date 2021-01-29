const navbar = $('.header__top');

$(window).scroll(function() {
    if($(window).scrollTop() > 120) {
        navbar.addClass('scrolled');
    } else {
        navbar.removeClass('scrolled');
    }
})
// $(".desktop-menu__link").click(function() {
//     if ($(".desktop-menu__link").hasClass('active-anchor')) {
//         $(".desktop-menu__link").removeClass('active-anchor');
//     }
//     $(this).addClass('active-anchor')
// })