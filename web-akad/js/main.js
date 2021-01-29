$(document).ready(function(){
    $(".button").click(function(){
        var value = $(this).attr("data-filter");
        var elem = $(".elem");
        if(value == "all"){
            $(elem).show("500");
        }
        else{
            $(elem).not("."+value).hide("500");
            $(elem).filter("."+value).show("500");
        }
    });
})
//
//.......................................................................................
//Get the button
var mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//
//.......................................................................................
// mobile navbar
$(document).ready(function () {

    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {

        $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {

        $('.animated-icon3').toggleClass('open');
    });
});