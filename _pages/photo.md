---
layout: photo
permalink: /photo/
comments: false
---

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
      columnWidth: '.grid-item',
      gutter: 0 // Masonry 的間距設為 0，因為我們用 padding 來控制
    });

    // Re-layout Masonry after each image loads
    grid.addEventListener('load', function(event) {
      if (event.target.tagName === 'IMG') {
        msnry.layout();
      }
    }, true);
  });
</script>