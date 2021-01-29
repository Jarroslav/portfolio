const upScrollBtn = $('#up-scroll-btn');
const rightSideBtns = $('.right-buttons');

$(window).scroll(function() {
    if ($(window).scrollTop() > 2930) {
        upScrollBtn.addClass('active');
    }
    if ($(window).scrollTop() < 2930) {
        upScrollBtn.removeClass('active');
    }
    if ($(window).scrollTop() > 930) {
        rightSideBtns.addClass('active');
    } else {
        rightSideBtns.removeClass('active');
    }
});

upScrollBtn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});
