<?php
/*
 *
 */
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
use PHPMailer\PHPMailer\PHPMailer;

class SendMail{

	function __construct(){
		date_default_timezone_set("Asia/Taipei");
		$this->mail = new PHPMailer;

		/** ===== 設定發件人mail和名稱 ===== */
		$this->sendMail = 'service@jonah-design.com'; //設定發件人mail
		$this->sender = '約拿設計'; //設定發件人顯示名稱
		/** ===== 設定結束 ===== */
	}

	/**
	 * 發送信件
	 *
	 * @param string $sendEmail 發送的 email 帳號
	 * @param string $subject 信件主旨
	 * @param string $content 信件內容
	 * @return string
	 */
	function sendMail($sendEmail = '', $subject = '', $content = ''){
		if ( trim($sendEmail) == '' || trim($subject) == '' || trim($content) == '' ){
			return 'parameters empty';
		}
		$sendArr = explode(',' ,$sendEmail );
		if ( !is_array($sendArr) || count($sendArr) <= 0 ){
			return '無收件人信箱';
		}
		foreach( $sendArr as $vmail ){
			$this->mail->addAddress(trim($vmail));
		}
		$this->mail->CharSet = 'UTF-8';
		$this->mail->setFrom($this->sendMail, $this->sender);
		
		$this->mail->Subject = $subject;
		$this->mail->msgHTML($content, __DIR__);
		$this->mail->AltBody = 'This is a plain-text message body';
	
		if (!$this->mail->send()) {
			return $this->mail->ErrorInfo;
		}
		return 'success';
	
	}

}

?>