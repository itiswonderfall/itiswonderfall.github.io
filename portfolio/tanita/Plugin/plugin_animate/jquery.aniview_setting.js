//Animate Run
function aniviewed() {
	$('.aniview').AniView({
  		animateThreshold: 180
	});
}

//Animate fadein single
function anuview_fadeInUp() {
	$('.aniview_fadeInUp').addClass('aniview').attr('av-animation','fadeInUp');
	aniviewed();
}
function aniview_fadeInRight() {
	$('.aniview_fadeInRight').addClass('aniview').attr('av-animation','fadeInRight');
	aniviewed();
}
function aniview_fadeInLeft() {
	$('.aniview_fadeInLeft').addClass('aniview').attr('av-animation','fadeInLeft');
	aniviewed();
}

//Animate fadeinup group
function aniview_fadeInUp_group(_e) {
	var _sec = 0.3;

	$('.aniview_fadeInUp_'+_e).each(function(index) {
		$(this).addClass('aniview').attr('av-animation','fadeInUp');
		_sec_delay = index * _sec;
		$(this).css('animation-delay',_sec_delay+'s');
	});

	aniviewed();
}

$(function() {
	//Fade In Up Group
	$('.aniview_fadeInUp_group').each(function(index) {
		$(this).find('.ani_view').addClass('aniview_fadeInUp_'+index);
		aniview_fadeInUp_group(index);
	});

	//Fade In Up
	$('.aniview_fadeInUp').each(function() {
		anuview_fadeInUp();
	});

	//Fade In Right
	$('.aniview_fadeInRight').each(function() {
		aniview_fadeInRight();
	});

	//Fade In Left
	$('.aniview_fadeInLeft').each(function() {
		aniview_fadeInLeft();
	});
});