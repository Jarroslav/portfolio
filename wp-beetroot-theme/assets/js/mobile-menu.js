$(".mobile-menu__hamburger").click(function() {
    $(".mobile-menu__hamburger").toggleClass("active");
    $(".mobile-menu__navbar").toggleClass("active");
});
$(".menu-item").click(function () {
    $(".mobile-menu__hamburger").removeClass("active");
    $(".mobile-menu__navbar").removeClass("active");
})