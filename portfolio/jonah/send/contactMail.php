<?php
	require_once('ParametersException.php');
	require_once('SendMail.php');
try{

	/** ===== 設定收件人和郵件標題 ===== */
	$sendMailList = 'jonahdesign01@gmail.com,firstjoinid@gmail.com,service@creer-design.com'; // 設定收件人，以半形逗號 ',' 隔開 EX: mailA,mailB,mailC
	$subject = '線上諮詢'; // 設定標題
	/** ===== 設定結束 ===== */

	$returnArray = array('type'=>'success', 'text' => '您的諮詢已送出!!');

	if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
		throw new ParametersException('來源錯誤，請再試一次!');
	}

	$nameStr = '';
	$phoneStr = '';
	$emailStr = '';
	$messageStr = '';
	$message2 = '';

	if( !isset($_POST['name']) || trim($_POST['name']) == "" ){
		throw new ParametersException('您的姓名尚未填寫');
	}
	if( !isset($_POST['phone']) || trim($_POST['phone']) == "" ){
		throw new ParametersException('您的電話尚未填寫');
	}
	if( !isset($_POST['email']) || trim($_POST['email']) == "" ){
		throw new ParametersException('您的 Email 尚未填寫');
	}
	if( !isset($_POST['message']) || trim($_POST['message']) == "" ){
		throw new ParametersException('您的留言尚未填寫');
	}

	$nameStr = trim($_POST['name']);
	$phoneStr = trim($_POST['phone']);
	$emailStr = trim($_POST['email']);
	$messageStr = trim($_POST['message']);

	$message2 = "
	姓名：".$nameStr."<br>
	電話：".$phoneStr."<br>
	Email：".$emailStr."<br>
	留言：".$messageStr."<br>
	";

	$mail = new SendMail();
	$mailResult = $mail->sendMail($sendMailList, $subject, $message2); // (收件人, 信件標題, 內容)

	if ( $mailResult != 'success' ){
		throw new ParametersException('信件發送失敗');
	}

	echo json_encode($returnArray);
	exit;

} catch (ParametersException $pe) {
	$returnArray['type'] = 'error';
	$returnArray['text'] = $pe->getMessage();
	echo json_encode($returnArray);
	exit;
} catch (Exception $e) {
	$returnArray['type'] = 'error';
	$returnArray['text'] = '發送發生錯誤!!';
	echo json_encode($returnArray);
	exit;
}
?>
