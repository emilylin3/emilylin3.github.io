---
layout: page
title: catalytic micro-combustor
description: driving desorption in atmospheric water harvesters with energy-dense, autothermal combustion
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

We developed energy-dense, entrainment-driven, catalytic microcombustors that are suitable for portable devices, like atmospheric water harvesters (AWH). We designed each component of these combustors, from the microchannels and ohmic heaters to the entrainment manifold, performing various ablation studies to tune the combustor parameters and ultimately improve fuel savings and reaction rates/fuel conversion efficiency, as governed by kinetics/transport in the channels. We fabricated the microcombustors and subsequently performed cycling tests to demonstrate ultra-high thermal mass heating (>41 times its own mass). These combustors are then integrated into an in-house AWH device, along with proper controls *via* Arduino, to drive the desorption cycles in the water production process. We successfully demonstrated the combustors' and device's performance during rigorous, controlled testing in an environmental chamber (from ambient temperatures as low as 1.7°C to as high as 43.3°C). 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/combustor.png" title="catalytic micro-combustor" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/combustor_setup.png" title="combustor setup" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/combustor_cyclic.png" title="cyclic testing performance" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

We further explored mechanisms to increase fuel savings by demonstrating on a lab-scale, single-channel planar combustor 

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
