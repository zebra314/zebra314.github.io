---
permalink: /about/
title: "About"
---

## Brief

Hi! I am Alfonso Lin, curently studying at KTH Royal Institute of Technology as a exchange student. I am majoring in mechanical engineering and really interested in robotics and automation. Beside the academic study, I also find myself enjoy in photography, cooking an traveling.

This webite is built to record my daily life and put some shitposts. I hope you enjoy it! If you have any question or suggestion, feel free to contact me.

## Time line

<div class="container">
  <div class="timeline">
    <ul>
    {% for event in site.data.timeline %}
      <li>
        <div class="timeline-content">
          <h3 class="date">{{ event.date }}</h3>
          <h1>{{event.title}}</h1>
          <p>{{event.description}}</p>
        </div>
      </li>
    {% endfor %}
    </ul>
  </div>
</div>

