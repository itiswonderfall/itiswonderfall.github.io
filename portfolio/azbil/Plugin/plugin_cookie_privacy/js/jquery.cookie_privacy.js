// JavaScript Document
$(function() {
	if($.cookie("viewed_cookie_privacy") == null) {
		$('#cookie-dialog').addClass('show');
		$('#agree-cookie-btn').on('click',function() {
			$('#cookie-dialog').removeClass('show');

			//設定Cookie
			$.cookie("viewed_cookie_privacy", 1);
		});
	}
});