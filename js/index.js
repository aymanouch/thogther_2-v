/*global $*/
$(function () {
//    slide the section in aside 
function slideSect(par) {
         $("#" + par).addClass('active').siblings("section").removeClass('active');
}
$('header nav .list-menu ul li a').on('click', function (e){
    e.preventDefault();
    slideSect($(this).attr('data-attr'));
});

})