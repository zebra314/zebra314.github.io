---
header:
    teaser: /assets/image/23/0402.png
tag: devlog
---

This model was built by Gavin Jhen, it would be used for the simulation of the 27th TDK robocon competition.I thought it would be helpful for coming up the idea of the mechanism if we can view the site of the competition conveniently. Therefore, I decided to transfer model of the site to web.

Originally, the only file format that solidworks can export to three.js is .3mf. However, the 3MFloader keeps return error while testing. Then, I decide to try another format called .gltf, which is normally used in loading 3D model in web, but not supported by solidworks. 

Hopefully, after a hard time of searching, I found a plugin developed by simlab that can export .gltf file from solidworks. After three days of trying, I finally loaded the model into my blog site.

<p align="center">
    <iframe src="https://zebra314.github.io/project/mechanical_model" width="600" height="400" ></iframe>
</p>
[View in full page](/project/27th_TDK_site_model){:target="_blank"}
