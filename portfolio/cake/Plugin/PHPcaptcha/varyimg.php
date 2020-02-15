<?php
session_start(); 
header("Content-type:image/png");

// 設定亂數種子
mt_srand((double)microtime()*1000000);

// 定義顯示在圖片上的文字，可以再加上大寫字母
//$str = 'abcdefghijkmnpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
$str = 'ABCDEFGHJKLMNPRSTWXYZ23456789';

//字體檔
$fontType = 'font/fakto10.ttf';

//取得字串長度
$l = strlen($str);

//隨機取出 5 個字
for($i=0; $i<5; $i++){
   $num = rand(0,$l-1);
   $verification_session.= $str[$num];
}

// 將驗證碼記錄在 session 中
$_SESSION['webConfig']['verify_Image'] = $verification_session;

// 圖片的寬度與高度
$imageWidth		= 150;
$imageHeight	= 45;

// 建立圖片物件
$im = @imagecreatetruecolor($imageWidth, $imageHeight) or die("無法建立圖片！");


//主要色彩設定
// 圖片底色
$bgColor = imagecolorallocate($im, 230,230,230);
// 文字顏色
$Color = imagecolorallocate($im, 84,84,84);
// 干擾線條顏色
$gray1 = imagecolorallocate($im, 84,84,84);
// 干擾像素顏色
$gray2 = imagecolorallocate($im, 84,84,84);

//設定圖片底色
imagefill($im,0,0,$bgColor);

//底色干擾線條
for($i=0; $i<20; $i++){
   imageline($im,rand(0,$imageWidth),rand(0,$imageHeight),rand($imageHeight,$imageWidth),rand(0,$imageHeight),$gray1);
}
// 干擾像素
for($i=0;$i<200;$i++){
   imagesetpixel($im, rand()%$imageWidth ,rand()%$imageHeight , $gray2);
}

//利用true type字型來產生圖片
imagettftext($im, 26, 0, 23, 38, $Color, $fontType, $verification_session);
/*
imagettftext (int im, int size, int angle, int x, int y, int col, string fontfile, string text)
im 圖片物件
size 文字大小
angle 0度將會由左到右讀取文字，而更高的值表示逆時鐘旋轉
x y 文字起始座標
col 顏色物件
fontfile 字形路徑，為主機實體目錄的絕對路徑，可自行設定想要的字型
text 寫入的文字字串
*/

//產生圖片
imagepng($im);

//銷毀暫時圖片
imagedestroy($im);
?>