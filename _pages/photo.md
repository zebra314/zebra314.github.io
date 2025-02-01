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

<div class="overlay"></div>

<div class="grid">
  {% assign image_folder = 'assets/image/photo_page/' %}

  {% for data in site.data.photo-page %}
    {% for file in site.static_files %}
      {% if file.path contains image_folder and file.path contains data.keyword %}
        <div class="grid-item">
          <img class="lazyload" data-src="{{ file.path }}"/>
        </div>
      {% endif %}
    {% endfor %}
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
    const masthead = document.querySelector('.masthead');
    const footer = document.querySelector('.page__footer');
    const overlay = document.querySelector('.overlay');
    
    // Track currently expanded image
    let expandedImage = null;

    // Function to close expanded image
    const closeExpandedImage = () => {
      if (expandedImage) {
        document.body.style.overflow = 'auto';
        expandedImage.style.transform = '';
        overlay.classList.remove('active');
        setTimeout(() => {
          expandedImage.style.zIndex = 1;
          expandedImage.parentElement.style.zIndex = 1;
          masthead.style.zIndex = 20;
          footer.style.zIndex = 20;
          expandedImage = null;
        }, 1200);
      }
    };

    // Add click handler to overlay
    overlay.addEventListener('click', closeExpandedImage);

    gridItems.forEach(item => {
      const img = item.querySelector('img');

        img.addEventListener('click', (e) => {

        // Prevent click from reaching overlay
        e.stopPropagation();

        // If image is already expanded, do nothing
        if (expandedImage === img) {
          return;
        } else if (expandedImage !== img && expandedImage) {
          return;
        }

        // Expand clicked image
        document.body.style.overflow = 'hidden';
        masthead.style.zIndex = 0;
        footer.style.zIndex = 0;
        item.style.zIndex = 50;
        img.style.zIndex = 50;
        img.style.transition = 'transform 1.2s ease-in-out';
        img.style.overflow = 'hidden';

        overlay.classList.add('active');

        // Get the image position
        const rect = img.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const offsetX = centerX - rect.left - rect.width / 2;
        const offsetY = centerY - rect.top - rect.height / 2;
        const scale = Math.min(window.innerWidth / rect.width, window.innerHeight / rect.height) * 0.9;

        img.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
        expandedImage = img;
      });
    });
  });
</script>
