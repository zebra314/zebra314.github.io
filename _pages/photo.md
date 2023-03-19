---
permalink: /photo/
---
  <style>
  body {
    background-image: url('{{ site.baseurl }}/assets/image/photo_page/bg.jpeg');
    /* Full height */
    height: 50%;

    /* Center and scale the image nicely */
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    /* background-size: cover; */
    background-attachment: fixed;
    background-size:100% 100vh;
    
  }
  </style>
<script>
// 获取音频元素
var song1 = document.getElementById("song1");
var song2 = document.getElementById("song2");
var song3 = document.getElementById("song3");

song1.onended = function() {
  song2.play();
}

song2.onended = function() {
  song3.play();
}

// The last song
song3.onended = function() {
  song1.play();
}

</script> 

<audio id='song1' controls autoplay preload="auto">
  <source  src="/assets/mp3/howtobeaboy.mp3" type="audio/mpeg">
  你的瀏覽器不支援 audio tag！
</audio>

![i](/assets/image/photo_page/1.JPG)  
  
![i](/assets/image/photo_page/2.jpg)  

![i](/assets/image/photo_page/3.JPG)  

![i](/assets/image/photo_page/4.jpg)  

![i](/assets/image/photo_page/5.jpg) 

<audio id='song2' controls preload="auto">
  <source  src="/assets/mp3/diane.mp3" type="audio/mpeg" >
  你的瀏覽器不支援 audio tag！
</audio>

![i](/assets/image/photo_page/6.jpg)  

![i](/assets/image/photo_page/7.jpeg)  

![i](/assets/image/photo_page/8.JPG)  

![i](/assets/image/photo_page/9.jpg)   

![i](/assets/image/photo_page/10.jpg)   

<audio id='song3' controls preload="auto">
  <source  src="/assets/mp3/marryme.mp3" type="audio/mpeg">
  你的瀏覽器不支援 audio tag！
</audio>

![i](/assets/image/photo_page/11.JPG)   