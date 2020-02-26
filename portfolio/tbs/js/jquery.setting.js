// JavaScript Document
function nav_move() {
   	$('.navbarbie').append($('.navbar-bottom'));
}
function nav_unmove() {
	$('#navbar').append($('.navbar-bottom'));
}
function dropdown_show() {
	$('.navbar-bottom > li > a').on('click',function() {
		$(this).parent('li').siblings('li').children('.dropdown-menu').removeClass('show');
        $(this).siblings('.dropdown-menu').toggleClass('show');
    });
}
function dropdown_hide() {
	$('.navbar-bottom > li > a').on('click',function() {
        $(this).siblings('.dropdown-menu').removeClass('show');
    });
}
function window_view_width() {
	if ($(window).width() > 767) {
		nav_move();
		dropdown_hide();
    } else {
    	nav_unmove();
    	dropdown_show();
    }
}
$(function() {
	// banner
	$('.bxslider').bxSlider({
    	mode: 'fade',
    	pager: false,
    	autoHover: true,
    	speed: 2000,
    	auto:true
	});
	// home-activity
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
	    dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});
	// navbar-bottom
	window_view_width();
	$(window).resize(function() {
		window_view_width();
	});
	// sitemap
	$('.footer-top .btn').click(function(){
		$('.footer-top .btn i').toggleClass('fa-arrow-circle-down');
	});
	// aniview
	var options = {
        animateThreshold: 100
    };
    $('.aniview').AniView(options);
    // cookie
    $('.cookie__Btn').on('click',function() {
        $(".cookieBlock").removeClass('show');
    });
    // navbar-fixed-top
    $(window).bind('scroll', function () {
	    if ($(window).scrollTop() > 50) {
	        $('nav.navbar').addClass('fixed');
	    } else {
	        $('nav.navbar').removeClass('fixed');
	    }
	});
	// preload
	$(window).on('load',function() {
		$("#pre-loader").delay(200).fadeOut(200);
		$("#pre-loader").on('click', function() {
			$("#pre-loader").fadeOut(200);
		});
	});
});
// scroll-to-top
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});
$('.scrollup').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
});
