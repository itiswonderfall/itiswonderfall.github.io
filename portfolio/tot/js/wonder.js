$(function() {
	/*************************
			owl-carousel
	*************************/

	$('.owl-single').owlCarousel({
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    items:1,
	    nav:true
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:2,
	            nav:true
	        },
	        600:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:4,
	            nav:true,
	            loop:false
	        }
	    }
	});

	/*************************
			AniView
	*************************/

	var options = {
        animateThreshold: 100
    };
	$('.aniview').AniView(options);
});

/*************************
		pre-load
*************************/

$(window).on('load',function() {
	$("#pre-loader").delay(200).fadeOut(200);
	$("#pre-loader").on('click', function() {
		$("#pre-loader").fadeOut(200);
	});
});
	
/*************************
		masonry
*************************/
$(window).on('load', function(){
	$('.grid').masonry({
		itemSelector: '.grid-item',
	  	columnWidth: '.grid-sizer',
	  	percentPosition: true
	});
});

/*************************
	scroll-to-top
*************************/
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