---
layout: photo
permalink: /photo/
comments: false
---

<style>
  .masonry:after {
    content: '';
    display: block;
    clear: both;
  }

  .grid {
    margin: 0 -10px; /* 負邊距來補償 grid-item 的 padding */
  }

  .grid-item {
    float: left;
    padding: 10px; /* 在圖片容器四周增加內距 */
  }

  .grid-item img {
    display: block;
    width: 100%;
    border-radius: 15px;
  }

  @media(min-width: 751px) {
    .grid-item {
      width: 33.3333%;
    }
  }

  @media(max-width: 750px) {
    .grid-item {
      width: 50%;
    }
  }
</style>

<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>

<div class="grid">
  <div class="grid-item"><img src="/assets/image/photo_page/1.JPG"  /></div>
  <div class="grid-item"><img src="/assets/image/photo_page/2.jpg"  /></div>
  <div class="grid-item"><img src="/assets/image/photo_page/3.JPG"  /></div>
  <div class="grid-item"><img src="/assets/image/photo_page/4.jpg"  /></div>
  <div class="grid-item"><img src="/assets/image/photo_page/5.jpg"  /></div>
  <div class="grid-item"><img src="/assets/image/photo_page/6.jpg"  /></div>
  <div class="grid-item"><img src="/assets/image/photo_page/7.jpeg" /></div>
  <div class="grid-item"><img src="/assets/image/photo_page/8.JPG"  /></div>
  <div class="grid-item"><img src="/assets/image/photo_page/9.jpg"  /></div>
  <div class="grid-item"><img src="/assets/image/photo_page/10.jpg" /></div>
  <div class="grid-item"><img src="/assets/image/photo_page/11.JPG" /></div>
  <div class="grid-item"><img src="/assets/image/photo_page/12.JPG" /></div>
  <div class="grid-item"><img src="/assets/image/23/0330-1.jpg"     /></div>
  <div class="grid-item"><img src="/assets/image/23/0422-1.jpg"     /></div>
</div>

<script>
  const grid = document.querySelector('.grid');
  const msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    gutter: 0 // Masonry 的間距設為 0，因為我們用 padding 來控制
  });
</script>

<!-- 
  <img src="/assets/image/photo_page/112windycity/IMG_1732.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1733.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1734.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1735.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1736.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1737.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1738.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1739.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1740.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1741.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1742.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1743.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1744.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1745.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1746.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1747.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1748.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1749.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1750.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1751.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1752.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1753.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1754.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1755.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1756.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1757.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1758.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1759.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1760.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1761.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1762.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1763.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1764.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1765.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1766.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1767.JPG">
  <img src="/assets/image/photo_page/112windycity/IMG_1768.JPG">
  <img src="/assets/image/photo_page/112arch/1.jpg">
  <img src="/assets/image/photo_page/112arch/2.jpg">
  <img src="/assets/image/photo_page/112arch/3.jpg">
  <img src="/assets/image/photo_page/112arch/4.jpg">
  <img src="/assets/image/photo_page/112arch/5.jpg">
  <img src="/assets/image/photo_page/112arch/7.jpg">
  <img src="/assets/image/photo_page/112arch/9.jpg">
  <img src="/assets/image/photo_page/112arch/11.jpg">
  <img src="/assets/image/photo_page/112arch/12.jpg">
  <img src="/assets/image/photo_page/112arch/14.jpg">
  <img src="/assets/image/photo_page/112arch/15.jpg">
  <img src="/assets/image/photo_page/112arch/16.jpg">
  <img src="/assets/image/photo_page/112arch/17.jpg">
  <img src="/assets/image/photo_page/112arch/18.jpg">
  <img src="/assets/image/photo_page/112arch/19.jpg">
  <img src="/assets/image/photo_page/112arch/20.jpg">
  <img src="/assets/image/photo_page/112arch/22.jpg">
  <img src="/assets/image/photo_page/lanyu/1.JPG">
  <img src="/assets/image/photo_page/lanyu/2.jpg">
  <img src="/assets/image/photo_page/lanyu/3.JPG">
  <img src="/assets/image/photo_page/lanyu/4.jpg">
  <img src="/assets/image/photo_page/lanyu/5.JPG">
  <img src="/assets/image/photo_page/lanyu/6.jpg">
  <img src="/assets/image/photo_page/lanyu/7.JPG">
  <img src="/assets/image/photo_page/lanyu/8.JPG">
  <img src="/assets/image/photo_page/lanyu/9.JPG">
  <img src="/assets/image/photo_page/lanyu/10.jpg">
  <img src="/assets/image/photo_page/lanyu/11.JPG">
  <img src="/assets/image/photo_page/lanyu/12.jpg">
  <img src="/assets/image/photo_page/lanyu/13.JPG">
  <img src="/assets/image/photo_page/lanyu/14.JPG">
  <img src="/assets/image/photo_page/lanyu/15.JPG">
  <img src="/assets/image/photo_page/lanyu/16.jpg">
  <img src="/assets/image/photo_page/lanyu/17.JPG"> -->
