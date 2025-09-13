---
permalink: /about/
title: false
---

## About

<div id="about-en" style="display:none;">
  Born in 2003 from Chiayi, I'm currently studying Mechanical Engineering at NCTU. Got hooked on photography and coding during my college days, and that’s how this website came to life.
  <br><br>
  Always wandering between numbers and symbols, with a head full of chaotic thoughts. Loves fried rice from stir-fry shops, dreams of living by the sea, owning a cat, and sleeping in forever.
</div>
<div id="about-zh" style="display:none;" class="page__content">
  2003年生，嘉義人，在交通大學唸機械。大學時迷上攝影與寫程式，這個網站因此而生。時常迷惘在數字、符號間，腦子裡總塞滿著混亂思緒。<br><br>
  
  喜歡熱炒店的炒飯，以後想住海邊、養隻貓咪，還有睡飽。<br><br>
</div>

![me with cat](/assets/image/cat.webp)

## Timeline

<div id="timeline-en" style="display:none;">
  <ul>
    <li>2021.09: Attended College</li>
    <li>2022.10: Join Taiwan TDK Robocon</li>
    <li>2023.01: Build up this website</li>
    <li>2023.07: Intern at ITRI Mechanical and Mechatronics Systems Research Lab</li>
    <li>2024.08: Exchange at KTH, Sweden</li>
    <li>2025.07: Join KIBO RPC Competition</li>
  </ul>
</div>

<div id="timeline-zh" style="display:none;" class="page__content">
  <ul>
    <li>2021.09: 入學大學</li>
    <li>2022.10: 參加台灣 TDK Robocon</li>
    <li>2023.01: 此網站誕生</li>
    <li>2023.07: 工研院機電與機器人系統實驗室實習</li>
    <li>2024.08: 瑞典 KTH 交換</li>
    <li>2025.07: 參加 KIBO RPC 競賽</li>
  </ul>
</div>

## Contact

- [GitHub](https://github.com/zebra314)
- [LindkedIn](https://www.linkedin.com/in/zebra314/)
- [Flickr](https://www.flickr.com/people/197788472@N04/)

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const userLanguage = (navigator.language || navigator.userLanguage).toLowerCase();
    const isZh = userLanguage.startsWith("zh");

    document.querySelectorAll('[id$="-en"]').forEach(el => {
      el.style.display = isZh ? "none" : "block";
    });

    document.querySelectorAll('[id$="-zh"]').forEach(el => {
      el.style.display = isZh ? "block" : "none";
    });
  });
</script>