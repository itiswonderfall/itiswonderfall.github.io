// JavaScript Document
$(function() {
	$('#capcha_image').click(function() {
		$('#verifyImgCode').attr('src','Plugin/PHPcaptcha/varyimg.php?v=' + Math.random());
	});
});