// JavaScript Document
$(function() {
	// editor-symod
	$(".editor-area div.pull-right").parent(".row").wrap('<div class="WrapTextAroundPic"></div>');
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
	  $("#submitForm").validate({
	  	submitHandler: function(form) {
                            form.submit();
                         }

	  });
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

	//Plugin Swipper
	if($('.swiper-container').length >= 1) {
		var mySwiper = new Swiper ('.swiper-container', {
			effect: 'fade',
			speed: 500,
			loop: true,
			autoHeight: true,
			direction: 'horizontal'
			,autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			}
			,pagination: {
			  el: '.swiper-pagination',
			  dynamicBullets: true,
			}
			,navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			}
		})
	}

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