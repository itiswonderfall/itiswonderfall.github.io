//Plugin Fancybox Setting
$(function() {
	//fancybox div
	$('.fancybox a').fancybox({
		smallBtn: true
	});

	//fancybox
	$('.fancybox').fancybox({
		smallBtn: true
	});

	//fancybox Gallery
	$('.fancybox_group').each(function() {
		$(this).find('a').attr('data-fancybox','group');
	})
	$('.fancybox_group a').fancybox({
		buttons: [
		    "zoom",
		    //"share",
		    //"slideShow",
		    //"fullScreen",
		    //"download",
		    //"thumbs",
		    "close"
		],
		btnTpl: {
        // Arrows
        arrowLeft:
            '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;">' +
            '<img src="Plugin/plugin_fancybox/svg/keyboard-left-arrow-button.svg">' +
            "</a>",

        arrowRight:
            '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;">' +
            '<img src="Plugin/plugin_fancybox/svg/keyboard-right-arrow-button.svg">' +
            "</a>"
		}
	});
	$('a[data-fancybox="gallery"]').fancybox();

	//fancybox Inline
	$('.fancybox_inline').fancybox();

	//Videos
	$('.fancybox_videos').fancybox({
	    youtube : {
	        controls : 0,
	        showinfo : 0
	    },
	    vimeo : {
	        color : 'f00'
	    }
	});
})