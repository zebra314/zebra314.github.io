---
layout: single
permalink: /photo/
comments: false
---

<style>
#main {
  padding-left: 10px;
  padding-right: 10px;
}
</style>

<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js" async></script>

<div class="grid">
  {% for img in site.data.photo-page %}
  <div class="grid-item"><img class="lazyload" data-src="{{img}}" /></div>
  {% endfor %}
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const grid = document.querySelector('.grid');
    const msnry = new Masonry(grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-item'
    });

    // Re-layout Masonry after each image loads
    grid.addEventListener('load', function(event) {
      if (event.target.tagName === 'IMG') {
        msnry.layout();
      }
    }, true);

    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
      const img = item.querySelector('img');
      img.clickCount = 0;
      img.addEventListener('click', () => {
        img.clickCount++;

        if(img.clickCount %2 === 1) {
          document.body.style.overflow = 'hidden'; // Avoid scrolling
          item.style.zIndex = 501;
          img.style.zIndex = 501; // Higher than other lightbox images
          img.style.transition = 'transform 1.5s ease-in-out';
          img.style.overflow = 'hidden';

          // Get the image position
          const rect = img.getBoundingClientRect();

          // Get the center of current view
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;

          const offsetX = centerX - rect.left - rect.width / 2;
          const offsetY = centerY - rect.top - rect.height / 2;

          const scale = Math.min(window.innerWidth / rect.width, window.innerHeight / rect.height) * 0.9;

          img.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;

        } else {
          document.body.style.overflow = 'auto'; // Allow scrolling
          img.style.zIndex = 1;
          img.style.transform = ''; // 重置變化
          setTimeout(() => {
            item.style.zIndex = 1;
          }, 1500);
        }
      });
    });
  });

</script>
