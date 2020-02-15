// JavaScript Document
$(function() {
	// sidebar start
	$('.im_menu').on('click',function(){
		if ($(this).next().css('display') == "none") {
	    	$('.nav-item').children('ul.im_list').slideUp(300);
		    $(this).next('ul').slideDown(300);
		    $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
   		}else{
		    $(this).next('ul').slideUp(300);
		    $('.nav-item.nav-show').removeClass('nav-show');
	   	}
 	});
 	// sidebar end
 	// gotothere start
 	$('.method-title').each(function(index) {
        $(this).append('<span id="sec' + index + '" class="move2"></span>');
    });
    $(".goToThere a").click(function(){
        var methodSec=$('.goToThere a').index(this);
        $('html,body').animate({scrollTop:$('#sec' + methodSec).offset().top}, "show");
        return false;
    });
    // gotothere end
    // products-grid start
    var heights = $("div.col_list").map(function ()
    {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
    var img_heights = $("div.products_grid_img").map(function ()
    {
        return $(this).height();
    }).get(),
    img_maxHeight = Math.max.apply(null, img_heights);
    $(".row_products_grid .col_list").css({"height":maxHeight + "px"});	
    $(".products_grid_menu .products_grid_img").css({"height":img_maxHeight + "px"});
    // products-grid end
    // products-list start
    var left_heights = $("div.col_umn .left").map(function ()
    {
        return $(this).height();
    }).get(),
    max_Height = Math.max.apply(null, left_heights);
    $(".row_products_list .left").css({"height":max_Height + "px"});
    var top_heights = $("div.col_umn .top").map(function ()
    {
        return $(this).height();
    }).get(),
    maxes_Height = Math.max.apply(null, top_heights);
    $(".row_products_list .top").css({"height":maxes_Height + "px"});
    // products-list end
    // mobile nav start
    $(".menuzord-menu > li > a").click(function(){
    	var opened = $(this).next(".dropdown");
    	$('.menuzord-menu > li > .dropdown').not(opened).removeClass('on');
    	$(this).next(".dropdown").toggleClass('on');
    });
    // mobile nav end
    // formula start
    $(".chemistry-short").each(function(){
      	var txt = $(this).html();
      	txt = txt.replace(/(\)|\]|H|He|Li|Be|B|C|N|O|F|Ne|Na|Mg|Al|Si|P|S|Cl|Ar|K|Ca|Sc|Ti|V|Cr|Mn|Fe|Co|Ni|Cu|Zn|Ga|Ge|As|Se|Br|Kr|Rb|Cs|Fr|Sr|Ba|Ra|Y|Zr|Nb|Mo|Tc|Ru|Rh|Pd|Ag|Cd|In|Sn|Sb|Te|I|Xe|Pt|Au|Hg|Tl|Pb|Bi|Po|At|Rn)(\d+)/gm,'$1<sub>$2</sub>');
      	txt = txt.replace(/\^(\d*[\+\-]|\d+)/gm,'<sup>$1</sup>');
	    txt = txt.replace(/(SO|NO)x/gm,'$1<sub>x</sub>');
	    txt = txt.replace(/\)(n|m)/gm,')<sub>$1</sub>');
	    txt = txt.replace(/K(w|a|b|sp|h)( |\n)/gm,'K<sub>$1</sub>$2');
	    $(this).html(txt);
    });
    // formula end
});

var tpj=jQuery;
var revapi34;
tpj(document).ready(function() {
if(tpj("#rev_slider_home").revolution == undefined){
  revslider_showDoubleJqueryError("#rev_slider_home");
}else{
  revapi34 = tpj("#rev_slider_home").show().revolution({
    sliderType:"standard",
    jsFileLocation:"js/revolution-slider/js/",
    sliderLayout:"fullwidth",
    dottedOverlay:"none",
    delay:5000,
    navigation: {
      keyboardNavigation:"on",
      keyboard_direction: "horizontal",
      mouseScrollNavigation:"off",
      onHoverStop:"on",
      touch:{
        touchenabled:"on",
        swipe_threshold: 75,
        swipe_min_touches: 1,
        swipe_direction: "horizontal",
        drag_block_vertical: false
      }
      ,
      arrows: {
        style:"zeus",
        enable:true,
        hide_onmobile:true,
        hide_under:600,
        hide_onleave:true,
        hide_delay:200,
        hide_delay_mobile:1200,
        tmp:'<div class="tp-title-wrap">    <div class="tp-arr-imgholder"></div> </div>',
        left: {
          h_align:"left",
          v_align:"center",
          h_offset:30,
          v_offset:0
        },
        right: {
          h_align:"right",
          v_align:"center",
          h_offset:30,
          v_offset:0
        }
      },
      bullets: {
        enable:true,
        hide_onmobile:true,
        hide_under:600,
        style:"metis",
        hide_onleave:true,
        hide_delay:200,
        hide_delay_mobile:1200,
        direction:"horizontal",
        h_align:"center",
        v_align:"bottom",
        h_offset:0,
        v_offset:30,
        space:5,
        tmp:'<span class="tp-bullet-img-wrap"><span class="tp-bullet-image"></span></span>'
      }
    },
    viewPort: {
      enable:true,
      outof:"pause",
      visible_area:"80%"
    },
    responsiveLevels:[1240,1024,778,480],
    gridwidth:[1240,1024,778,480],
    gridheight:[420,385,350,315],
    lazyType:"none",
    parallax: {
      type:"scroll",
      origo:"enterpoint",
      speed:400,
      levels:[5,10,15,20,25,30,35,40,45,50],
    },
    shadow:0,
    spinner:"off",
    stopLoop:"off",
    stopAfterLoops:-1,
    stopAtSlide:-1,
    shuffle:"off",
    autoHeight:"off",
    hideThumbsOnMobile:"off",
    hideSliderAtLimit:0,
    hideCaptionAtLimit:0,
    hideAllCaptionAtLilmit:0,
    debugMode:false,
    fallbacks: {
      simplifyAll:"off",
      nextSlideOnWindowFocus:"off",
      disableFocusListener:false,
    }
  });
}
});
/*
	//Plugin fitText
	$("#fittext").fitText();
	$("#fittext2").fitText(1.2);
	$("#fittext3").fitText(1.1, { minFontSize: '50px', maxFontSize: '75px' });

	//Plugin ColorBox
	$(".lightbox a").colorbox();
	$(".colorbox").colorbox();
	$(".groupColorbox a").colorbox({rel:'group'});
	$(".videoShow").colorbox({iframe:true, innerWidth:640, innerHeight:360});
	$(".inline").colorbox({inline:true, width:"50%"});

	//Plugin jQuery UI Date Picker
	var _calendarIco = 'Plugin/UI/img/calendar.png';
	$("#datepicker").datepicker({
	  showOn: 'both',
	  buttonImage: _calendarIco,
	  buttonImageOnly: true,
	  dateFormat: 'yy-mm-dd',
	  minDate : '-0',
	  changeYear: true,
	  showButtonPanel: true
	});
	$("#datetimepicker").datetimepicker({
	  showOn: 'both',
	  buttonImage: _calendarIco,
	  buttonImageOnly: true,
	  dateFormat: 'yy-mm-dd',
	  minDate : '-0',
	  changeYear: true,
	  showButtonPanel: true
	});
	$("#timepicker").timepicker({
	  showOn: 'both',
	  buttonImage: 'images/clock.png',
	  buttonImageOnly: true,
	  showButtonPanel: true
	});
	$("#datetimepicker_birthday").datetimepicker({
	  showOn: 'both',
	  buttonImage: _calendarIco,
	  buttonImageOnly: true,
	  dateFormat: 'yy-mm-dd',
	  maxDate : '+0',
	  changeYear: true,
	  showButtonPanel: true
	});

	//Plugin datepicker for bootstrap
	$('input.bootstrap_datepicker').datepicker({
	  format: "yyyy-mm-dd",
	  todayHighlight: true,
	  language: "zh-TW"
	});

	$('input.birthday_date_picker').datepicker({
	  format: "yyyy-mm-dd",
	  endDate: "+0d",
	  todayHighlight: true,
	  defaultViewDate: { year: 1977, month: 04, day: 25 },
	  language: "zh-TW"
	});

	//Plugin validate Form
	if($('#submitForm').length > 0) {
	  $("#submitForm").validate();
	}
	if($('#order_edm_form').length > 0) {
	  $("#order_edm_form").validate();
	}
	$(".numeric").numeric();
	$('.upperfont').keyup(function(){
		this.value = this.value.toUpperCase();
	});
	$("#submit_btn").on('click',function() {
		$("#submitForm").attr('action','?action=sendForm').submit();
	});

	$('.cm_files').on('change', function() {
		var _file_size_limit = 3;   //MB
		var _this_file_size = this.files[0].size;
		var _this_file_type = this.files[0].type;

		if(_this_file_size > _file_size_limit * 1048576) {
			alert('您的檔案已超過符合規定 3MB 大小，請重新選擇或建議縮圖!');
			$(this).val('');
		}
		if(_this_file_type != 'image/png' && _this_file_type != 'image/jpg' && _this_file_type != 'image/gif' && _this_file_type != 'image/jpeg') {
			alert('僅支援JPG、PNG檔案格式，請重新選擇!');
			$(this).val('');
		}
	});

	//Plugin bxSlider
	$('.bxslider').bxSlider();

	//Plugin masonry + Zoomin
	var $grid = $('#masonry_container').imagesLoaded(function () {
	      $grid.masonry({
	          itemSelector: '.masonry_box',
	          columnWidth: '.masonry_box',
	          animate:true,
	          percentPosition: true
	      });
	});

	$('.copy_a img').each(function() {
	  var _img_url = $(this).attr('src');
	  $(this).wrap('<div class="masonry_box zoomin_box"><a href="'+_img_url+'"></a></div>');
	});
	$('.zoomin_box a').append('<div class="overlay"><i class="fa fa-search-plus" aria-hidden="true"></i></div>');

	//Plugin Parallax
	$('.parallax').parallax();

	//Plugin Owl Carousel
	//https://owlcarousel2.github.io/OwlCarousel2/
	$('.owl-carousel').owlCarousel();

	//Plugin aniview
	$('.aniview').AniView({
	  animateThreshold: 180
	});

	//Plugin Subpage nav icon taggle
	$('.subpage-nav-btn').on('click',function() {
	    $(this).toggleClass('dropdown-icon');
	});

	//Plugin Bootstrap4 carousel
	$('.carousel').each(function() {
	  var _counter = $(this).find('.carousel-item').length;

	  $(this).prepend('<ol class="carousel-indicators"></ol>');
	  for(var i=0;i<4;i++) {
	    if(i==0) {
	      $('.carousel-indicators').append('<li data-target="#carousel1" data-slide-to="'+i+'" class="active"></li>');
	    } else {
	      $('.carousel-indicators').append('<li data-target="#carousel1" data-slide-to="'+i+'"></li>');
	    }
	  }

	  $(this).append('<a class="carousel-control-prev" href="#carousel1" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a><a class="carousel-control-next" href="#carousel1" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>');
	});

	//Plugin Gotop Button
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
*/