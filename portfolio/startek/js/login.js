$(function(){
	$('.hide-show').show();
  	$('.hide-show').addClass('show')
 
  	$('.hide-show').click(function(){
    	if( $(this).hasClass('show') ) {
      		$(this).siblings('.password').attr('type','text');
      		$(this).removeClass('show');
    	} else {
       		$(this).siblings('.password').attr('type','password');
       		$(this).addClass('show');
    	}
  	});
});