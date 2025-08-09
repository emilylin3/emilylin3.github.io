---
layout: page
title: catalytic micro-combustion
description: driving desorption in atmospheric water harvesters with energy-dense, autothermal combustion
img: assets/img/combustor.png
importance: 1
category: applied science
related_publications: true
---

Small-scaled efficient heating is a well-known challenge for many weight/volume-sensitive devices that demand portability and high energy requirements. Rather than sole reliance on high-grade energy like electricity, combustion can offer high energy density that exceeds that of a conventional lithium-ion battery by almost two orders of magnitudes. More specifically, catalytic micro-combustors have become a promising method of reducing electrical consumption by utilizing stable autoignition as a heat source. However, even within the design space of combustors, very few combustors can achieve full portability due to bulky air/oxidizer tanks and external radiant heaters. Additionally, previous efforts have mainly used hot exhaust gas as a heating element via convection, which is not as effective as conduction in terms of heat transfer. The primary challenge in integrating direct-contact heating with surface reactions lies in the high heat loss rates seen by catalytic combustors due to their high surface area-to-volume fraction. Aside from prior works that have explored direct heating for small-scale TEG and sensors, which are low-mass by design, this work is the first to demonstrate high-mass heating capabilities with a catalytic combustor at high portability. This work aims to extend the regime at which micro-combustors operate.

This work proposes an energy-dense (≈236 MW/m<sup>3</sup>) catalytic micro-combustor design that utilizes the concept of air entrainment and an internal wire-based ohmic preheater. In addition to its small form factor, this design significantly reduces electrical consumption (~1948 J). First, air entrainment eliminates the need for pressurized air cylinders, which removes the otherwise mandatory weight. Second, an internal wire preheater implies both an energy-efficient and localized preheating source and high compactness. Considering most catalytic combustor designs that currently exist use external heaters, which naturally draw very high current/power and are intrinsically heavy, the new wired preheating scheme can enable fast preheating (2-3 mins) at low ignition temperatures (107-125°C). A combination of these attributes yields a heating source with very high mobile capabilities that can be advantageous in various applications. 

To realize our micro-combustor design, we performed extensive optimization efforts to determine the effects of the microchannel geometry and fuel feed flow rate (via entrainment flow analysis) on the reaction kinetics and species transport, and therefore the combustion performance and fuel conversion. A full cycle demonstration of the micro-combustor was then performed, wherein we achieved a high saturation temperature (>500°C) within a short timescale, indicating capabilities for fast cyclability. The demonstration similarly suggests the potential for the micro-combustor to be used as a heating source for both small (thermoelectric generators) and large thermal mass devices (at least 41 times its own mass). 

 We fabricated the microcombustors and subsequently performed cycling tests to demonstrate ultra-high thermal mass heating (>41 times its own mass). These combustors are then integrated into an in-house AWH device, along with proper controls *via* Arduino, to drive the desorption cycles in the water production process. We successfully demonstrated the combustors' and device's performance during rigorous, controlled testing in an environmental chamber (from ambient temperatures as low as 1.7°C to as high as 43.3°C) {% cite LIN2023117014 %}. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/combustor.png" title="catalytic micro-combustor" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/combustor_setup.jpg" title="combustor setup" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/combustor_cyclic.png" title="cyclic testing performance" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

We further explored mechanisms to increase fuel savings by demonstrating on a lab-scale, single-channel parallel-plate reactor. We found that we could save significant amounts of catalyst while simultaneously improving reaction kinetics for catalytic micro-combustors via non-uniform catalyst segmentation at the combustor surface. We were able to enhance downstream fuel distribution and maximize fuel conversion efficiency for high-aspect ratio catalytic combustors by optimizing the patterning to reduce fuel consumption and localized heating at the entrance. Ultimately, this new pattern yields large catalyst savings (77.8%) while achieving high temperatures  {% cite LIN2023146627 %}.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/parallel_setup.png" title="parallel reactor setup" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/parallel_results.png" title="segmentation methods" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
