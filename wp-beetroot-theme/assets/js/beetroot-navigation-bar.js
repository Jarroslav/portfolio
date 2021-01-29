jQuery(document).ready(function() {
    jQuery('.mobile-menu__span').click(function(e) {
        jQuery('.menu.desktop-menu__navbar ul').slideToggle(500);
        console.log('Hello!')
        e.preventDefault();
    });

});