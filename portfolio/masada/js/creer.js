//Plugin Gotop Button
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});
$('.scrollup').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 300);
    return false;
});

//navbar_fixed_top
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('nav.navbar').addClass('fixed-top');
    } else {
       $('nav.navbar').removeClass('fixed-top');
    }
});

//wow_animation
$(function() {
	new WOW().init();
});

//toggler-collapsed
$(document).mouseup(function(e){
    var _con = $('.navbar-toggler'); 
    var _inn = $('#navbarHeader'); 
    if(!_con.is(e.target) && _con.has(e.target).length === 0 && !_inn.is(e.target) && _inn.has(e.target).length === 0){ 
        $('.navbar-toggler').addClass('collapsed').attr('aria-expanded','false');
        $('#navbarHeader').removeClass('show');
    }
});

//pre-loader
$(window).on('load',function() {
    $("#pre-loader").delay(200).fadeOut(200);
    $("#pre-loader").on('click', function() {
        $("#pre-loader").fadeOut(200);
    });
});

//includeHTML
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}
includeHTML();

