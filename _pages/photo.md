---
layout: single
permalink: /photo/
comments: false
---

<style>
#main {
  @include clearfix;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  -webkit-animation: $intro-transition;
  animation: $intro-transition;
  max-width: 100%;
  -webkit-animation-delay: 0.15s;
  animation-delay: 0.15s;

  @include breakpoint($x-large) {
    max-width: $max-width;
  }
}
</style>

<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js" async></script>

<div class="lightbox">
  <img class="lightbox-content" src="" alt="Lightbox image">
</div>

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

    // Lightbox functionality
    const gridItems = document.querySelectorAll('.grid-item img');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-content');

    gridItems.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.classList.add('show');
        lightboxImg.src = img.getAttribute('data-src');
        document.body.style.overflow = 'hidden'; // Disable vertical scrolling

      });
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('show');
        document.body.style.overflow = 'auto'; // Enable vertical scrolling
      }
    });
  });

</script>
