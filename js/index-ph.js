/*global $*/
$(function () {
    var winWid = $(window).width();
    $(window).on('resize', function () {
        winWid = $(window).width();
    });
    if ( winWid <= 640) {
        // start hidden and show the nav bar
        function slideNav(elt, elt2) {
            if (elt.hasClass('show')) {
                elt.css('display', 'block').animate({
                    height:'100vh'
        
                }, 500).toggleClass('show');
                elt2.removeClass('fa-bars').addClass("fa-times");
            } else {
                elt.animate({
                    height:'0'
        
                }, 500).toggleClass('show').css('display', 'none');
                elt2.removeClass('fa-times').addClass("fa-bars");
            }   
        }
        $('header nav .navicon').on('click', function () {
            slideNav($('header nav .list-menu'), $(this).find('i'));
        });
    }




})