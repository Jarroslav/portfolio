$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault();

        const target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 800, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
});

$(window).scroll(function() {
    const scrollDistance = $(window).scrollTop();

    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.desktop-menu__list a.active-anchor').removeClass('active-anchor');
            $('.desktop-menu__list a').eq(i).addClass('active-anchor');
        }
    });
}).scroll();