// JavaScript Document
$(function() {

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

//Plugin validate Form
if($('#contactForm').size() > 0 || $('#order_edm_form').size() > 0) {
  $("#contactForm,#order_edm_form").validate();
  $(".numeric").numeric();
  $('.upperfont').keyup(function(){
    this.value = this.value.toUpperCase();
  });
  $("#sendBtn").on('click',function() {
    $("#contactForm").attr('action','?action=sendForm').submit();
  });
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
$('.parallax').parallax({

});

//Plugin aniview
$('.aniview').AniView({
  animateThreshold: 180
});

//Plugin Subpage nav icon taggle
$('.subpage-nav-btn').on('click',function() {
    $(this).toggleClass('dropdown-icon');
});
*/