// JavaScript Document
( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));

$(function(){
    var requiredCheckboxes = $('.options :checkbox[required]');
    requiredCheckboxes.change(function(){
        if(requiredCheckboxes.is(':checked')) {
            requiredCheckboxes.removeAttr('required');
        } else {
            requiredCheckboxes.attr('required', 'required');
        }
    });
});

/*$(function() { 
$("#loginForm,#registerForm,#memberForm,#foodPostForm,#companyPostForm,#housePostForm,#ediPostForm,#addCommentForm").validate(); 
}) */
/*var validator = $("#registerForm").validate({
	rules: {
      cm_sex:{ required:true }
    },
    messages: {
      cm_sex: {
        required: "This field is required."
      }
    },
    errorPlacement: function (error, element) { //指定错误信息位置
      if (element.is(':radio') || element.is(':checkbox')) { //如果是radio或checkbox
       var eid = element.attr('name'); //获取元素的name属性
       error.appendTo(element.parent()); //将错误信息添加当前元素的父结点后面
     } else {
       error.insertAfter(element);
     }
   }
})*/
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

$(function(){
    $("#dateBtn1").on("click",function(){
        var _this=$(this);
        if(!$(this).hasClass("on")){
            $.leftTime(5,function(d){
                /*年年抽31536000 月月抽2592000 週週抽604800*/
                if(d.status){
                    _this.addClass("on");
                    $("#dateBtn1").css({"background-color":"rgba(153, 153, 153, 1)","border-color":"rgba(153, 153, 153, 1)"});
                    var $dateShow1=$("#dateShow1");
                    $dateShow1.find(".d");
                    $dateShow1.find(".h");
                    $dateShow1.find(".m");
                    $dateShow1.find(".s");
                    _this.html((d.d)+"天"+(d.h)+"時"+(d.m)+"分"+(d.s)+"秒");
                }else{
                    _this.removeClass("on");
                    $("#dateBtn1").css({"background-color":"#27ae60","border-color":"#27ae60"});
                    _this.html("參加抽獎");
                }
            });
        }

    });
});

$(function(){
    $("#dateBtn2").on("click",function(){
        var _this=$(this);
        if(!$(this).hasClass("on")){
            $.leftTime(604800,function(d){
                /*年年抽31536000 月月抽2592000 週週抽604800*/
                if(d.status){
                    _this.addClass("on");
                    $("#dateBtn2").css({"background-color":"rgba(153, 153, 153, 1)","border-color":"rgba(153, 153, 153, 1)"});
                    var $dateShow1=$("#dateShow1");
                    $dateShow1.find(".d");
                    $dateShow1.find(".h");
                    $dateShow1.find(".m");
                    $dateShow1.find(".s");
                    _this.html((d.d)+"天"+(d.h)+"時"+(d.m)+"分"+(d.s)+"秒");
                }else{
                    _this.removeClass("on");
                    $("#dateBtn2").css({"background-color":"#27ae60","border-color":"#27ae60"});
                    _this.html("參加抽獎");
                }
            });
        }

    });
});

$(function(){
    $("#dateBtn3").on("click",function(){
        var _this=$(this);
        if(!$(this).hasClass("on")){
            $.leftTime(2592000,function(d){
                /*年年抽31536000 月月抽2592000 週週抽604800*/
                if(d.status){
                    _this.addClass("on");
                    $("#dateBtn3").css({"background-color":"rgba(153, 153, 153, 1)","border-color":"rgba(153, 153, 153, 1)"});
                    var $dateShow1=$("#dateShow1");
                    $dateShow1.find(".d");
                    $dateShow1.find(".h");
                    $dateShow1.find(".m");
                    $dateShow1.find(".s");
                    _this.html((d.d)+"天"+(d.h)+"時"+(d.m)+"分"+(d.s)+"秒");
                }else{
                    _this.removeClass("on");
                    $("#dateBtn3").css({"background-color":"#27ae60","border-color":"#27ae60"});
                    _this.html("參加抽獎");
                }
            });
        }

    });
});

$(function(){
    $("#dateBtn4").on("click",function(){
        var _this=$(this);
        if(!$(this).hasClass("on")){
            $.leftTime(31536000,function(d){
                /*年年抽31536000 月月抽2592000 週週抽604800*/
                if(d.status){
                    _this.addClass("on");
                    $("#dateBtn4").css({"background-color":"rgba(153, 153, 153, 1)","border-color":"rgba(153, 153, 153, 1)"});
                    var $dateShow1=$("#dateShow1");
                    $dateShow1.find(".d");
                    $dateShow1.find(".h");
                    $dateShow1.find(".m");
                    $dateShow1.find(".s");
                    _this.html((d.d)+"天"+(d.h)+"時"+(d.m)+"分"+(d.s)+"秒");
                }else{
                    _this.removeClass("on");
                    $("#dateBtn4").css({"background-color":"#27ae60","border-color":"#27ae60"});
                    _this.html("參加抽獎");
                }
            });
        }

    });
});