/******* pre-loading *******/

var _loaded = false;

function hide_loader() {
	if (!_loaded) {
		$('.pre-loading').fadeOut(400, function () {
			$(this).remove();
		});
		_loaded = true;
	}
}

function enable_scroll(){
	$('html, body').css({
		'overflow': 'auto',
		'height': 'auto'
	})
}

//loading結束
$(window).load(function () {
	hide_loader();
	enable_scroll();
});

/******* pre-loading *******/