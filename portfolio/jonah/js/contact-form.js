/* ---------------------------------------------
 Contact form
 --------------------------------------------- */
$(document).ready(function(){
	var show_num = [];
	draw(show_num);
	$("#canvas").on('click',function(){
		draw(show_num);
	})

	$("#submit").click(function(){
		//simple validation at client's end
		//we simply change border color to red if empty field using .css()
		$('.err-msg').css('color', '#e41919');
		$('.err-msg').css('padding-left', '5px');
		var proceed = true;

		if ( $('#contact_name').val() == "" ) {
			$('#contact_name').css('border-color', '#e41919');
			$('#contact_name_err').html('請輸入姓名');
			proceed = false;
		}
		if ( $('#contact_phone').val() == "" ) {
			$('#contact_phone').css('border-color', '#e41919');
			$('#contact_phone_err').html('請輸入電話');
			proceed = false;
		}
		if ( $('#contact_email').val() == "" ) {
			$('#contact_email').css('border-color', '#e41919');
			$('#contact_email_err').html('請輸入Email');
			proceed = false;
		}
		if ( $('#contact_message').val() == "" ) {
			$('#contact_message').css('border-color', '#e41919');
			$('#contact_message_err').html('請輸入留言');
			proceed = false;
		}

		var val = $("#contact_verify").val().toLowerCase();
		var num = show_num.join("");
		if( val == '' ){
			$('#contact_verify').css('border-color', '#e41919');
			$('#contact_verify_err').html('請輸入驗證碼');
			proceed = false;
		}else if( val != num ){
			$('#contact_verify').css('border-color', '#e41919');
			$('#contact_verify_err').html('驗證碼錯誤');
			$("#contact_verify-val").val('');
			draw(show_num);
			proceed = false;
		}

		//everything looks good! proceed...
		if ( proceed ) {
			//data to be sent to server
			post_data = $( "#contactform" ).serialize();
			//Ajax post data to server
			$.post('send/contactMail.php', post_data, function(response){
				//load json data from server and output message     
				if (response.type == 'success') {
					window.location.href = "thanks.html";
				} else {
					alert(response.text);
				}
			}, 'json');
		}
		return false;
	});

	//reset previously set border colors and hide all message on .keyup()
	$("#contactform input, #contactform textarea").keyup(function(){
		$("#contactform input, #contactform textarea").css('border-color', '');
		$('.err-msg').html('');
	});

});
