<?php
$verify_url = 'http://'.$_SERVER['HTTP_HOST'].'/?page_type=verify_order_newsletter&verifykey='.md5($newsletter_email).'&user_email='.$newsletter_email.'&order_type=order_newsletter';

$mailMessage = '
<style type="text/css">
#formTable {
	font-family: Arial, "微軟正黑體";
}

#formTable th {
	background-color: #FFFFCC;
	padding-top: 10px;
	padding-bottom: 10px;
	color: #333;
}
#formTable td {
	padding: 20px;
	background-color: #F8F8F8;
	text-align: center;
}
#formTable .notice {
	font-size: 12px;
	color: #666;
	padding-top: 60px;
}
</style>

<table width="80%" border="0" align="center" cellpadding="0" id="formTable">
  <tr>
    <th>電子報訂閱通知信件</th>
  </tr>
  <tr>
    <td>
	<p>親愛的用戶您好：</p>
    <p>感謝您的訂閱，請點選以下連結完成驗證您所訂閱的電子報服務</p>
    <p><a href="'.$verify_url.'">'.$verify_url.'</a></p>
    '.$mail_message.'
    <p class="notice">****本信件由系統自動發信，請勿直接回覆****</p>
	</td>
  </tr>
</table>
';
?>