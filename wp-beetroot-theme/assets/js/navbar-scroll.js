const navbar = $('.header__top');

$(window).scroll(function() {
    if($(window).scrollTop() > 120) {
        navbar.addClass('scrolled');
    } else {
        navbar.removeClass('scrolled');
    }
})

$(window).scroll(function() {
    const scrollDistance = $(window).scrollTop() + 50;

    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('#beetroot-navigation .menu-item.active-anchor').removeClass('active-anchor');
            $('#beetroot-navigation .menu-item').eq(i).addClass('active-anchor');
        }
    });
}).scroll();