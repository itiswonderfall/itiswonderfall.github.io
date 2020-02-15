<?php
$verify_url = 'http://'.$_SERVER['HTTP_HOST'].'/?page_type=verify_order_newsletter&verifykey='.md5($newsletter_email).'&user_email='.$newsletter_email.'&order_type=order_newsletter';

$mailMessage = '
<style type="text/css">
#formTable {
	font-family: Arial, "微软正黑体";
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
    <th>电子报订阅通知信件</th>
  </tr>
  <tr>
    <td>
	<p>亲爱的用户您好：</p>
    <p>感谢您的订阅，请点选以下连结完成验证您所订阅的电子报服务</p>
    <p><a href="'.$verify_url.'">'.$verify_url.'</a></p>
    '.$mail_message.'
    <p class="notice">****本信件由系统自动发信，请勿直接回复****</p>
	</td>
  </tr>
</table>
';
?>
