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
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
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
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
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

<!-- song1 -->
<div class='songs'>
  <img src='/assets/mp3/howtobeaboy.jpeg' class='mp3_thumbnail'/>
  <audio id='song1' controls autoplay preload="auto" onended="playSong2()">
    <source  src="/assets/mp3/howtobeaboy.mp3" type="audio/mpeg">
    你的瀏覽器不支援 audio tag！
  </audio>
</div>

![i](/assets/image/photo_page/1.JPG)  
  
![i](/assets/image/photo_page/2.jpg)  

![i](/assets/image/photo_page/3.JPG)  

![i](/assets/image/photo_page/4.jpg)  

![i](/assets/image/photo_page/5.jpg) 

<!-- song2 -->
<div class='songs'>
  <img src='/assets/mp3/diane.jpeg' class='mp3_thumbnail'/>
  <audio id='song2' controls preload="auto" onended="playSong3()">
    <source  src="/assets/mp3/diane.mp3" type="audio/mpeg" >
    你的瀏覽器不支援 audio tag！
  </audio>
</div>

![i](/assets/image/photo_page/6.jpg)  

![i](/assets/image/photo_page/7.jpeg)  

![i](/assets/image/photo_page/8.JPG)  

![i](/assets/image/photo_page/9.jpg)   

![i](/assets/image/photo_page/10.jpg)   

<!-- song3 -->
<div class='songs'>
  <img src="/assets/mp3/marryme.jpeg" class='mp3_thumbnail'/>
  <audio id='song3' controls onended="playSong4()">
    <source  src="/assets/mp3/marryme.mp3" type="audio/mpeg">
    你的瀏覽器不支援 audio tag！
  </audio>
</div>

![i](/assets/image/photo_page/11.JPG)   
![i](/assets/image/photo_page/12.JPG)  
![i](/assets/image/23/0330-1.jpg)  

<!-- song4 -->
<div class='songs'>
  <img src='/assets/mp3/enjoy.jpeg' class='mp3_thumbnail'>
  <audio id='song4' controls onended="playSong5()">
    <source  src="/assets/mp3/enjoy.mp3" type="audio/mpeg">
    你的瀏覽器不支援 audio tag！
  </audio>
</div>

<!-- song5 -->
<div class='songs'>
  <img src='/assets/mp3/north.jpeg' class='mp3_thumbnail'>
  <audio id='song5' controls onended="playSong6()">
    <source  src="/assets/mp3/north.mp3" type="audio/mpeg">
    你的瀏覽器不支援 audio tag！
  </audio>
</div>

<!-- song6 -->
<div class='songs'>
  <img src='/assets/mp3/fish.jpg' class='mp3_thumbnail'>
  <audio id='song6' controls onended="playSong7()">
    <source  src="/assets/mp3/fish.mp3" type="audio/mpeg">
    你的瀏覽器不支援 audio tag！
  </audio>
</div>

<!-- song7 -->
<div class='songs'>
  <img src='/assets/mp3/jankuoroad.jpg' class='mp3_thumbnail'>
  <audio id='song7' controls onended="playSong8()">
    <source  src="/assets/mp3/jankuoroad.mp3" type="audio/mpeg">
    你的瀏覽器不支援 audio tag！
  </audio>
</div>

<!-- current last song -->
<!-- song8 -->
<div class='songs'>
  <img src='/assets/mp3/fraction.jpg' class='mp3_thumbnail'>
  <audio id='song8' controls onended="playSong1()">
    <source  src="/assets/mp3/fraction.mp3" type="audio/mpeg">
    你的瀏覽器不支援 audio tag！
  </audio>
</div>




<script>
// 获取音频元素
var song1 = document.getElementById("song1");
var song2 = document.getElementById("song2");
var song3 = document.getElementById("song3");
var song4 = document.getElementById("song4");
var song5 = document.getElementById("song5");
var song6 = document.getElementById("song6");
var song7 = document.getElementById("song7");
var song8 = document.getElementById("song8");


function playSong2(){
  song2.play();
}

function playSong3(){
  song3.play();
}

function playSong4(){
  song4.play();
}

function playSong5(){
  song5.paly();
}

function playSong6(){
  song6.paly();
}
function playSong7(){
  song7.paly();
}
function playSong8(){
  song8.paly();
}
function playSong1(){
  song1.play();
}
</script> 