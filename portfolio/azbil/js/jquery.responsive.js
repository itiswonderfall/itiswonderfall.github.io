// JavaScript Document
$(function() {
	//rwd-images
	$('.rwd-images img,.editor-area img').each(function() {
		$(this).removeAttr('width height style');
		$(this).addClass('img-responsive');
	});
	
	//rwd-tables
	$(".rwd-tables").each(function() {
		$(this).removeAttr('width height style bgcolor align');
		$(this).find('thead,tbody,tr,th,td').removeAttr('width height style bgcolor align class');
		$(this).find('p').contents().unwrap();
		$(this).find('font').contents().unwrap();
		$(this).find("span").contents().unwrap();
		$(this).find('div').contents().unwrap();
		$(this).attr({width:'100%',border:'0',cellpadding:'0',cellspacing:'0'});
		$(this).wrap('<div class="table-responsive table_contain"></div>');
	});

	//Youtube iframe
	$('iframe[src*="youtube.com"]').wrap('<div class="youtube_content" />');
});