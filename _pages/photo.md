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

    const gridItems = document.querySelectorAll('.grid-item img');

    // Lightbox functionality
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    gridItems.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.classList.add('active');
        const image = document.createElement('img');
        image.src = img.src;
        lightbox.appendChild(image);
        document.body.style.overflow = 'hidden';
      });
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    function closeLightbox() {
      lightbox.removeChild(lightbox.firstChild);
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

</script>
