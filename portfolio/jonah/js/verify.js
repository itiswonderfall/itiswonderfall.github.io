 //生成並渲染出驗證碼圖形
 function draw(show_num) {
  var canvas_width=$('#canvas').width();
  var canvas_height=$('#canvas').height();
  var canvas = document.getElementById("canvas");//獲取到canvas的對象，演員
  var context = canvas.getContext("2d");//獲取到canvas畫圖的環境，演員表演的舞臺
  canvas.width = canvas_width;
  canvas.height = canvas_height;
  // var sCode = "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
  var sCode = "1,2,3,4,5,6,7,8,9,0";
  var aCode = sCode.split(",");
  var aLength = aCode.length;//獲取到數組的長度
  for (var i = 0; i < 4; i++) { //這裏的for循環可以控制驗證碼位數（如果想顯示6位數，4改成6即可）
   var j = Math.floor(Math.random() * aLength);//獲取到隨機的索引值
   // var deg = Math.random() * 30 * Math.PI / 180;//產生0~30之間的隨機弧度
   var deg = Math.random() - 0.5; //產生一個隨機弧度
   var txt = aCode[j];//得到隨機的一個內容
   show_num[i] = txt.toLowerCase();
   var x = 50 + i * 20;//文字在canvas上的x座標
   var y = 20 + Math.random() * 8;//文字在canvas上的y座標
   context.font = "bold 23px 微軟雅黑";
   context.translate(x, y);
   context.rotate(deg);
   context.fillStyle = randomColor();
   context.fillText(txt, 0, 0);
   context.rotate(-deg);
   context.translate(-x, -y);
  }
  // for (var i = 0; i <= 5; i++) { //驗證碼上顯示線條
  //  context.strokeStyle = randomColor();
  //  context.beginPath();
  //  context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
  //  context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
  //  context.stroke();
  // }
  for (var i = 0; i <= 30; i++) { //驗證碼上顯示小點
   context.strokeStyle = randomColor();
   context.beginPath();
   var x = Math.random() * canvas_width;
   var y = Math.random() * canvas_height;
   context.moveTo(x, y);
   context.lineTo(x + 1, y + 1);
   context.stroke();
  }
 }
 //得到隨機的顏色值
 function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  // return "rgb(" + r + "," + g + "," + b + ")";
  return "rgb(0,0,0)";
 }