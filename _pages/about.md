---
permalink: /about/
title: false
---

## About

<div id="en" style="display:none;">
  Born in 2003 from Chiayi, I'm currently studying Mechanical Engineering at NCTU. Got hooked on photography and coding during my college days, and that’s how this website came to life.
  <br><br>
  Always wandering between numbers and symbols, with a head full of chaotic thoughts. Loves fried rice from stir-fry shops, dreams of living by the sea, owning a cat, and sleeping in forever.
</div>
<div id="zh-TW" style="display:none;">
  2003年生，嘉義人，在交通大學唸機械。大學時迷上攝影與寫程式，這個網站因此而生。時常迷惘在數字、符號間，腦子裡總塞滿著混亂思緒。喜歡熱炒店的炒飯，以後想住海邊、養隻貓咪，還有睡飽。
</div>

<script>
  const userLanguage = navigator.language || navigator.userLanguage;
  const lang = userLanguage.startsWith("zh") ? "zh-TW" : "en";
  document.getElementById(lang).style.display = "block";
</script>

![me with cat](/assets/image/cat.webp)

## Time line

- 2021.09: Attended College
- 2022.10: Join Taiwan TDK Robocon
- 2023.01: Build up this website
- 2023.07: Intern at ITRI Mechanical and Mechatronics Systems Research Lab
- 2024.08: Exchange at KTH, Sweden

## Contact

<style>
  .social-links {
  list-style: none;              /* Remove default bullets */
  padding: 0;                    /* Remove default padding */
  margin: 0;                     /* Remove default margin */
  display: flex;                 /* Use flexbox for layout */
  flex-direction: column;        /* Stack items vertically */
  gap: 1rem;                     /* Space between list items */
}

.social-links li {
  margin: 0;                     /* Remove any default margins */
}

.social-links a {
  display: flex;                 /* Flexbox for icon and label alignment */
  align-items: center;           /* Vertically center icon and label */
  gap: 0.5rem;                   /* Space between icon and label */
  text-decoration: none;         /* Remove underline from links */
  color: inherit;                /* Inherit text color (customize as needed) */
}

.social-links i {
  font-size: 1.2rem;             /* Adjust icon size if needed */
}

.social-links .label {
  font-size: 1rem;               /* Adjust label size if needed */
}
</style>

{% assign author = page.author | default: page.authors[0] | default: site.author %}
{% assign author = site.data.authors[author] | default: author %}
<script>
  console.log({{ author | jsonify }});
</script>
{% assign author = page.author | default: page.authors[0] | default: site.author %}
{% assign author = site.data.authors[author] | default: author %}

{% assign author = page.author | default: page.authors[0] | default: site.author %}
{% assign author = site.data.authors[author] | default: author %}

{% assign author = page.author | default: page.authors[0] | default: site.author %}
{% assign author = site.data.authors[author] | default: author %}

<ul class="social-links">
{% if author.links %}
  {% assign predefined_platforms = "linkedin|github|flickr" | split: "|" %}
  {% for link in author.links %}
    {% if link.label %}
      {% assign label_downcase = link.label | downcase %}
      {% assign is_predefined = false %}
      {% if predefined_platforms contains label_downcase %}
        {% assign is_predefined = true %}
      {% endif %}
      
      {% assign url = link.url %}
      {% if is_predefined and url == nil %}
        {% if label_downcase == "linkedin" %}{% assign url = "https://www.linkedin.com/in/" %}{% endif %}
        {% if label_downcase == "github" %}{% assign url = "https://github.com/" %}{% endif %}
        {% if label_downcase == "flickr" %}{% assign url = "https://www.flickr.com/" %}{% endif %}
      {% endif %}

      <li>
        <a href="{{ url | default: '#' }}" 
            rel="nofollow noopener noreferrer me"
            {% if url and url contains 'http' %}itemprop="sameAs"{% endif %}>
          <i class="{{ link.icon | default: 'fas fa-link' }}" aria-hidden="true"></i>
          <span class="label">{{ link.label }}</span>
        </a>
      </li>
    {% endif %}
  {% endfor %}
{% endif %}
</ul>