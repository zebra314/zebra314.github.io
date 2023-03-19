---
permalink: /photo/
comments: true 
---
  <style>
  @media (min-width: 1001px){
      body {
    background-image: url('{{ site.baseurl }}/assets/image/photo_page/bg_7.png');
    /* Full height */
    height: 100%;
    width:100%;
    margin:0;

    /* Center and scale the image nicely */
    position: relative;
    /* background-position: center; */
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    /* background-size:100% 100vh; */
    
    }
  }

  @media (max-width: 1000px){
    body {
    background-image: url('{{ site.baseurl }}/assets/image/photo_page/bg_6.jpg');
    /* Full height */
    height: 100%;
    width: 100%;
    margin:0;

    /* Center and scale the image nicely */
    position: relative;
    /* background-position: center; */
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    /* background-size:100% 100vh; */
    }
  }

  .songs{
    display: inline-block;
  }

  .mp3_thumbnail{
    bottom:19px;
    position:relative;
    width:35px;
    length:35px;
    margin-right:10px;
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
<div class='songs'>
  <img src='/assets/mp3/howtobeaboy.jpeg' class='mp3_thumbnail'/>
  <audio id='song1' controls autoplay preload="auto">
    <source  src="/assets/mp3/howtobeaboy.mp3" type="audio/mpeg">
    你的瀏覽器不支援 audio tag！
  </audio>
</div>

![i](/assets/image/photo_page/1.JPG)  
  
![i](/assets/image/photo_page/2.jpg)  

![i](/assets/image/photo_page/3.JPG)  

![i](/assets/image/photo_page/4.jpg)  

![i](/assets/image/photo_page/5.jpg) 


<div class='songs'>
  <img src='/assets/mp3/diane.jpeg' class='mp3_thumbnail'/>
  <audio id='song2' controls preload="auto">
    <source  src="/assets/mp3/diane.mp3" type="audio/mpeg" >
    你的瀏覽器不支援 audio tag！
  </audio>
</div>

![i](/assets/image/photo_page/6.jpg)  

![i](/assets/image/photo_page/7.jpeg)  

![i](/assets/image/photo_page/8.JPG)  

![i](/assets/image/photo_page/9.jpg)   

![i](/assets/image/photo_page/10.jpg)   

<div class='songs'>
  <img src="/assets/mp3/marryme.jpeg" class='mp3_thumbnail'/>
  <audio id='song3' controls>
    <source  src="/assets/mp3/marryme.mp3" type="audio/mpeg">
    你的瀏覽器不支援 audio tag！
  </audio>
</div>

![i](/assets/image/photo_page/11.JPG)  

<div class='songs'>
  <img src='/assets/mp3/enjoy.jpeg' class='mp3_thumbnail'>
  <audio id='song4' controls>
    <source  src="/assets/mp3/enjoy.mp3" type="audio/mpeg">
    你的瀏覽器不支援 audio tag！
  </audio>
</div>

<div class='songs'>
  <img src='/assets/mp3/north.jpeg' class='mp3_thumbnail'>
  <audio id='song5' controls>
    <source  src="/assets/mp3/north.mp3" type="audio/mpeg">
    你的瀏覽器不支援 audio tag！
  </audio>
</div>
