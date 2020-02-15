// JavaScript Document
jQuery.fn.imagesOver = function(OPTION,OCTIPY,COLOR) {
	if(OCTIPY == 'undefined') {
		OCTIPY = 0.5;
	}
	var i_width 	= $(this).find('img').width();
	var i_height	= $(this).find('img').height();
	
	//邊框顏色
	switch (COLOR) {
		case 'gray' :
		  var c_border = '#CCC';
		break;
		case 'lightgray':
		  var c_border = '#EFEFEF';
		break;
		case 'white' :
		  var c_border = '#FFF';
		break;
		case 'black' :
		  var c_border = '#000';
		break;
	}
	
	switch(OPTION) {
		case 'fade' :
		return this.each(function() {
			$(this).hover(function(){
				$(this).find('img').fadeTo('fast',OCTIPY);
			},function(){
				$(this).find('img').fadeTo('fast',1);
			});
		});
		break;
		
		case 'black' :
		return this.each(function() {
			$(this).addClass('blackBg');
			$(this).css({'width':i_width,'height':i_height});
			
			$(this).hover(function(){
				$(this).find('img').fadeTo('fast',OCTIPY);
			},function(){
				$(this).find('img').fadeTo('fast',1);
			});
		});
		break;
		
		case 'white' :
		return this.each(function() {
			$(this).addClass('whiteBg');
			$(this).css({'width':i_width,'height':i_height});
			
			$(this).hover(function(){
				$(this).find('img').fadeTo('fast',OCTIPY);
			},function(){
				$(this).find('img').fadeTo('fast',1);
			});
		});
		break;
		
		case 'blackzoom' :
		return this.each(function() {
			$(this).css({'width':i_width,'height':i_height});
			$(this).addClass('blackBg');
			$(this).prepend('<div class="zoombox"></div>');
			
			$(this).hover(function(){
				$(this).find('.zoombox').fadeIn('fast');
				$(this).find('img').fadeTo('fast',OCTIPY);
			},function(){
				$(this).find('.zoombox').fadeOut('fast');
				$(this).find('img').fadeTo('fast',1);
			});
		});
		break;
		
		case 'whitezoom' :
		return this.each(function() {
			$(this).css({'width':i_width,'height':i_height});
			$(this).addClass('whiteBg');
			$(this).prepend('<div class="zoombox"></div>');
			
			$(this).hover(function(){
				$(this).find('.zoombox').fadeIn('fast');
				$(this).find('img').fadeTo('fast',OCTIPY);
			},function(){
				$(this).find('.zoombox').fadeOut('fast');
				$(this).find('img').fadeTo('fast',1);
			});
		});
		break;
		
		case 'baseEffect' :
		return this.each(function() {
			$(this).css({'width':i_width,'height':i_height});
			$(this).addClass('relativeBox');	
			
			$(this).hover(function(){
				$(this).find('img').animate({left:"-5px",top:"-5px",width:i_width+10,height:i_height+10},{duration:'fast', easing: "easeInQuart"});
			},function(){
				$(this).find('img').animate({left:"0px",top:"0px",width:i_width,height:i_height},{duration:'fast', easing: "easeOutQuart"});
			});
		});
		break;
		
		case 'overEffect' :
		return this.each(function() {
			$(this).css({'width':i_width,'height':i_height});
			$(this).addClass('relativeBox');
				
			$(this).hover(function(){
				$(this).find('img').animate({left:"-8px",top:"-8px",width:i_width+16,height:i_height+16},{duration:'fast', easing: "easeInQuart"});
				$(this).find('img').animate({left:"-5px",top:"-5px",width:i_width+10,height:i_height+10},'fast');
			},function(){
				$(this).find('img').animate({left:"0px",top:"0px",width:i_width,height:i_height},{duration:'fast', easing: "easeOutQuart"});
			});
		});
		break;
		
		case 'outsideBorder' :
		return this.each(function() {
			$(this).css({'width':i_width,'height':i_height});
			$(this).addClass('relativeBox');
			$(this).prepend('<div class="borderBox"></div>');
			$(this).find('.borderBox').css({'width':i_width-10,'height':i_height-10,'border':"5px solid "+c_border});
			
			$(this).hover(function(){
				$(this).find('.borderBox').animate({left:"-5px",top:"-5px",width:i_width,height:i_height},{duration:'fast', easing: "easeOutQuart"});
			},function(){
				$(this).find('.borderBox').animate({left:"0px",top:"0px",width:i_width-10,height:i_height-10},{duration:'fast', easing: "easeOutQuart"})
			});
		});
		break;
		
		case 'insideBorder' :
		return this.each(function() {
			$(this).css({'width':i_width,'height':i_height});
			$(this).addClass('relativeBox');
			$(this).prepend('<div class="borderBox"></div>');
			$(this).find('.borderBox').css({'width':i_width,'height':i_height,'border':"0px solid "+c_border,"z-index":"100"});
			
			$(this).hover(function(){
				$(this).find('.borderBox').animate({width:i_width-10,height:i_height-10,borderWidth:"5px"},{duration:'fast', easing: "easeOutQuart"});
			},function(){
				$(this).find('.borderBox').animate({width:i_width,height:i_height,borderWidth:"0px"},{duration:'fast', easing: "easeOutQuart"})
			});
		});
		break;
		
		case 'groupEffect' :
		return this.each(function() {
			$(this).addClass('whiteBg');
			$(this).css({'width':i_width,'height':i_height});
			
			$(this).hover(function(){
				$(this).removeClass('group');
				$('.group').find('img').fadeTo(100,OCTIPY);
			},function(){
				$(this).addClass('group');
				$('.group').find('img').fadeTo(100,1);
			});
						
		});
		break;
	}
};