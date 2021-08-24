 function WinOnResize() { // 以 function 的方式來寫
     if (document.body.clientWidth > 1200) // 當瀏覽器寬度 > 1500px 例如 Full-HD
     {
         document.getElementById("img1").src = "img/pc_2.jpg" // 左

     } else if (document.body.clientWidth > 768) // 當瀏覽器寬度 > 1200px 例如 1280*1024 或 NB 的 1366*768
     {
         document.getElementById("img1").src = "img/bn_01.jpg" // 左


     } else {
         document.getElementById("img1").src = "img/mobi_bn.jpg" // 左

     }
 }
 window.onresize = WinOnResize
 window.onload = WinOnResize
