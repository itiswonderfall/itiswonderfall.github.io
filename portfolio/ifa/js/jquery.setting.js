// JavaScript Document
var icontwoup = $('.icongroup_2');
function pc_move() {
	if ($(window).width() > 992)  {
		$('.icongroup_1').append(icontwoup);
    } else {
    	$('.reverse_here').append(icontwoup);
    }
}
$(function() {
	// datepicker
	$( "#datepicker" ).datepicker();
	// timeline
	$.fn.albeTimeline.languages = {
        "twn": {
            days: ["日", "一", "二", "三", "四", "五", "六"],
            months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一", "十二"],
            shortMonths: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            msgEmptyContent: "No information to display."
        }
    };
    $('#myTimeline').albeTimeline(data, {
        language: 'twn'
    });
    $('#timeline-menu').before('<button id="prev"><span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span></button>').after('<button id="next"><span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span></button>');
    $('#myTimeline #next').on('click',function(){
    	$('#timeline-menu').append($('#timeline-menu').find("li:first"));
    });
    $('#myTimeline #prev').on('click',function(){
    	$('#timeline-menu').prepend($('#timeline-menu').find("li:last"));
    });
    // designfour
    pc_move();
	$(window).resize(function() {
		pc_move();
	});
    $('.designfor_1').hide();
    $('.designfor_2').hide();
    $('.designfor_3').hide();
    $('.designfor_4').hide();
    $('.designfour_1').on('click',function(){
    	$(this).toggleClass('itsme');
    	if ($(this).hasClass('itsme')) {
    		$('.designfor_1').show();
    		$('.designfor_2').hide();
    		$('.designfor_3').hide();
    		$('.designfor_4').hide();
    		$('.designfour_2').removeClass('itsme');
    		$('.designfour_3').removeClass('itsme');
    		$('.designfour_4').removeClass('itsme');
    	}else {
    		$('.designfor_1').hide();
    	}
    });
    $('.designfour_2').on('click',function(){
    	$(this).toggleClass('itsme');
    	if ($(this).hasClass('itsme')) {
    		$('.designfor_2').show();
    		$('.designfor_1').hide();
    		$('.designfor_3').hide();
    		$('.designfor_4').hide();
    		$('.designfour_1').removeClass('itsme');
    		$('.designfour_3').removeClass('itsme');
    		$('.designfour_4').removeClass('itsme');
    	}else {
    		$('.designfor_2').hide();
    	}
    });
    $('.designfour_3').on('click',function(){
    	$(this).toggleClass('itsme');
    	if ($(this).hasClass('itsme')) {
    		$('.designfor_3').show();
    		$('.designfor_1').hide();
    		$('.designfor_2').hide();
    		$('.designfor_4').hide();
    		$('.designfour_2').removeClass('itsme');
    		$('.designfour_1').removeClass('itsme');
    		$('.designfour_4').removeClass('itsme');
    	}else {
    		$('.designfor_3').hide();
    	}
    });
    $('.designfour_4').on('click',function(){
    	$(this).toggleClass('itsme');
    	if ($(this).hasClass('itsme')) {
    		$('.designfor_4').show();
    		$('.designfor_1').hide();
    		$('.designfor_2').hide();
    		$('.designfor_3').hide();
    		$('.designfour_2').removeClass('itsme');
    		$('.designfour_3').removeClass('itsme');
    		$('.designfour_1').removeClass('itsme');
    	}else {
    		$('.designfor_4').hide();
    	}
    });
    // player
    $.fn.clickToggle = function(func1, func2) {
      var funcs = [func1, func2];
      this.data('toggleclicked', 0);
      this.click(function() {
        var data = $(this).data();
        var tc = data.toggleclicked;
        $.proxy(funcs[tc], this)();
        data.toggleclicked = (tc + 1) % 2;
      });
      return this;
    };
    var vid = document.getElementById("music"); 
    $('#toggleMusic').clickToggle(function(){
      vid.pause();
      $('.box').toggleClass('hide');
      $('.stopmusic').toggleClass('show');
    },function(){
      vid.play();
      $('.box').toggleClass('hide');
      $('.stopmusic').toggleClass('show');
    });
});

$(function() {
	( function( factory ) {
		if ( typeof define === "function" && define.amd ) {
			define( [ "../widgets/datepicker" ], factory );
		} else {
			factory( jQuery.datepicker );
		}
	}( function( datepicker ) {
		datepicker.regional[ "zh-TW" ] = {
		closeText: "關閉",
		prevText: "&#x3C;上個月",
		nextText: "下個月&#x3E;",
		currentText: "今天",
		monthNames: [ "一月","二月","三月","四月","五月","六月",
		"七月","八月","九月","十月","十一月","十二月" ],
		monthNamesShort: [ "一月","二月","三月","四月","五月","六月",
		"七月","八月","九月","十月","十一月","十二月" ],
		dayNames: [ "星期日","星期一","星期二","星期三","星期四","星期五","星期六" ],
		dayNamesShort: [ "週日","週一","週二","週三","週四","週五","週六" ],
		dayNamesMin: [ "日","一","二","三","四","五","六" ],
		weekHeader: "週",
		dateFormat: "yy-mm-dd",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: "年" };
		datepicker.setDefaults( datepicker.regional[ "zh-TW" ] );
		return datepicker.regional[ "zh-TW" ];
	} ) );
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