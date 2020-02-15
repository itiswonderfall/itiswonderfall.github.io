// JavaScript Document
$(function() {
    $('#order_newsletter_btn').on('click',function() {
		var _newsletter_input         = $('input[name="newsletter_email"]');
		var _newsletter_email         = _newsletter_input.val();
		var _newsletter_error_message = _newsletter_input.attr('data-message');
		
    	if(_newsletter_email == '') {
    		alert(_newsletter_error_message);
    	} else {
    		$('#newsletter_form').attr('action','?page_type=order_newsletter').submit();
    	}
	});
});