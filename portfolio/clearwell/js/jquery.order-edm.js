// JavaScript Document
$(function() {
    $('#order_edm_btn').on('click',function() {
		$('#order_edm_form').attr('action','?page_type=order_edm').submit();
	});
});