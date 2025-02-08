---
header:
    teaser: /assets/image/23/0402.png
tag: devlog
---
This model was built by Gavin Jhen and will be used for simulating the 27th TDK Robocon competition. I believe that having a convenient way to view the competition site could help generate ideas for the mechanism. Therefore, I decided to transfer the site model to this online web page.

Initially, SolidWorks could only export the model to the .3mf format for use in three.js. However, I encountered an error with the 3MFloader during testing. Consequently, I decided to try another format called .gltf, which is typically used for loading 3D models on the web but is not supported by SolidWorks.

After an exhaustive search, I found a plugin developed by Simlab that can export .gltf files from SolidWorks. After three days of trying, I finally succeeded in loading the model.


<style>
    .preview_model {
        width: 100%;
        height: 30vh;
        border-radius: 10px;
        overflow: hidden;
    }
</style>
<p align="center">
    <iframe class='preview_model' src="/project/27th_TDK_site_model"></iframe>
</p>
[*View in full page*](/project/27th_TDK_site_model){:target="_blank"}
