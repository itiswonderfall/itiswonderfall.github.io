<?php
/*******寄信程式開始********/
require_once 		"admin/include/mailer/inc.mailerConfig.php";
require_once		"Plugin/PHPMailer/PHPMailerAutoload.php";

$subject			= $order_newsletter_mail_subject;									//信件標題
$fromMail			= $mail_ID;															//寄件者
$fromName			= $webdetail['webtitle'];											//寄件者名稱
$address			= $newsletter_email;												//收件者

require 			"admin/include/mailer/inc.mailerDefaultConfig.php";

$mail->Send();
/*******寄信程式結束********/
?>