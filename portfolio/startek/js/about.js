var wphtsPro = { "is_mobile": "0", "is_rtl": "0" };
jQuery(document).ready(function($){
	$( '.wphtsp-slider-nav' ).each(function( index ) {
		var slider_nav_id   	= $(this).attr('id');
		var wphtsp_slider_id 	= $(this).attr('data-slider-nav-for');
		var slider_conf 		= $.parseJSON( $(this).closest('.wphtsp-slider-wrp').find('.wphtsp-slider-conf').attr('data-conf') );
		if( typeof(wphtsp_slider_id) != 'undefined' && wphtsp_slider_id != '' ) {
			nav_id = '.'+wphtsp_slider_id;
		}
		if( typeof(wphtsp_slider_id) != 'undefined' && wphtsp_slider_id != '' ) {
			jQuery('.'+wphtsp_slider_id).slick({
				dots			: (slider_conf.dots)	== "true"	? true : false,
				infinite		: (slider_conf.loop) == "false" ? false : true,
				arrows			: false,
				speed 			: parseInt(slider_conf.speed),
				autoplay 		: (slider_conf.autoplay)	== "true"	? true : false,
				fade 			: (slider_conf.fade)	== "true" 	? true : false,
				autoplaySpeed 	: parseInt(slider_conf.autoplayInterval),
				asNavFor 		: '#'+slider_nav_id,
				slidesToShow 	: 1,
				slidesToScroll 	: 1,
				adaptiveHeight	: (slider_conf.adaptiveheight)	== "false"	? false : true,
				fade 			: (slider_conf.fade)	== "true"	? true : false,
				mobileFirst 	: (wphtsPro.is_mobile	== 1)		? true : false,
				rtl 			: (slider_conf.rtl		== "true")	? true : false,
				initialSlide	: parseInt(slider_conf.first_slide),
			});
		}
		if( typeof(slider_nav_id) != 'undefined' ) {
			jQuery('#'+slider_nav_id).slick({
				slidesToShow 	: parseInt(slider_conf.slidestoshow),
				infinite		: (slider_conf.loop) == "false" ? false : true,
				slidesToScroll 	: 1,
				asNavFor 		: nav_id,
				arrows			: (slider_conf.arrows)	== "true"	? true : false,
				dots 			: false,
				speed 			: parseInt(slider_conf.speed),
				centerMode 		: (slider_conf.nav_centermode)	== "false"	? false : true,
				focusOnSelect 	: true,
				centerPadding 	: '10px',
				mobileFirst 	: (wphtsPro.is_mobile	== 1)	? true : false,
				rtl 			: (slider_conf.rtl == "true")	? true : false,
				initialSlide	: parseInt(slider_conf.first_slide),
				responsive 		: [
				{
					breakpoint: 1023,
					settings: {
						slidesToShow: (parseInt(slider_conf.slidestoshow) > 3) ? 3 : parseInt(slider_conf.slidestoshow),
					}
				},{
					breakpoint: 767,
					settings: {
						slidesToShow: (parseInt(slider_conf.slidestoshow) > 3) ? 3 : parseInt(slider_conf.slidestoshow),
					}
				},
				{
					breakpoint: 479,
					settings: {
						slidesToShow: (parseInt(slider_conf.slidestoshow) > 3) ? 3 : parseInt(slider_conf.slidestoshow),
					}
				},
				{
					breakpoint: 319,
					settings: {
						slidesToShow: (parseInt(slider_conf.slidestoshow) > 3) ? 3 : parseInt(slider_conf.slidestoshow),
					}
				}
				]
			});
		}
  		var currentSlide = jQuery('.'+wphtsp_slider_id).slick('slickCurrentSlide');
  		var total_articles = jQuery('.wphtsp-slider-nav-title:not(.slick-cloned)').length - 1;
  		$('.slick-prev').hide();
  		jQuery('.'+wphtsp_slider_id).on('afterChange', function(event, slick, currentSlide) {  	
  			console.log(currentSlide + "/" + total_articles);
    		if(currentSlide == 0)
			{
			   $('.slick-prev').hide();
			}
			else if(currentSlide == total_articles)
			{
				$('.slick-next').hide();
			}
			else
			{
				$('.slick-prev').show();
				$('.slick-next').show();
			}
  		});
		
	});
});

$(function() {
    $('.about-partner-slider').slick({
  		slidesToShow: 1,
	  	slidesToScroll: 1,
	  	arrows: false,
	  	fade: true,
	  	autoplay: true,
        autoplaySpeed: 3000,
	  	asNavFor: '.about-partner-nav'
	});
	$('.about-partner-nav').slick({
	  	slidesToShow: 4,
	  	slidesToScroll: 1,
	  	asNavFor: '.about-partner-slider',
	  	dots: true,
	  	autoplay: true,
        autoplaySpeed: 3000,
	  	centerMode: false,
	  	focusOnSelect: true,
	  	responsive: [
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2
		      }
		    }
	    ]
	});
});
