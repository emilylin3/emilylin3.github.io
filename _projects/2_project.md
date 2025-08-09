---
layout: page
title: adsorption property prediction for CO2 adsorption in metal-organic frameworks (MOFs)
description: using IsothermNet and [dummy]
img: assets/img/mof.gif
importance: 1
category: machine learning
related_publications: true
---

We are currently facing an alarming growth in anthropogenic CO<sub>2</sub> arising from fast-paced technological booms and unyielding reliance on fossil fuels. While many exciting contributions to the carbon capture/utilization/storage (CCUS) space have been explored in the past, physisorption is particularly interesting due to its high-performance, energy-efficiency, and cyclability. Coupled with an emerging material with high CO<sub>2</sub> affinity, metal-organic frameworks (MOFs), the opportunities for CO<sub>2</sub> adsorption material design are boundless due to the high tunability and functionalization in MOFs. This versatility, however, has opened an equally vast optimization space. Conventional computational design has relied on methods such as Grand Canonical Monte Carlo (GCMC) and molecular dynamic simulations, which are computationally-expensive methods and require in-depth domain knowledge to perform. 

While recent works have leveraged the power of machine learning to tackle the problem, the investigation has been largely limited to isotherm prediction, while the estimation of heat of adsorption (ΔH<sub>ads</sub>), a critical adsorption property that determines the energy-efficiency of CCUS, remains completely untapped, especially in the context of CO<sub>2</sub> adsorption. In addition, there still lacks a unified physio-thermodynamic understanding – a correlative nature amongst local structural/atomic properties, textural information, and adsorption properties, primarily because of the constrained predictive power of conventional methods for large datasets. A fast inference approach, and even physical descriptors connecting material features and adsorption properties, would be in high demand for accelerating high-performance MOF design for large-scale CCUS applications.

# IsothermNet
To bridge this knowledge gap, we developed IsothermNet, a model leveraging both graph attention and graph convolutions for high-throughput predictions of two critical adsorption properties: uptake and ΔH<sub>ads</sub>. Fast ΔH<sub>ads</sub> prediction can be especially useful for experimentalists, since ΔH<sub>ads</sub> measurement is challenging due to its requirement for specialized equipment or multiple measurement at different temperatures. From these accurate predictions, we were able to construct full isotherms and, for the first time, heat of adsorption curves as a function of pressure for CO2 adsorption in MOFs. Upon analyzing the uptake behavior further, we discovered an additional coupling between isotherm shape (in which five distinct types were observed) and adsorption properties. We then performed a comprehensive ablation study to unfold the physical insights and relationships between local/textural features and adsorption properties. Guided by this feature importance study, we further formulated two sets of holistic descriptors unifying textural properties, isotherm shape, uptake, and heat of adsorption: the first is more physically-interpretable and the second follows a more analytical/mathematical form that excels at differentiating the five isotherm classes. Their generalizability has been robustly validated with randomly-sampled unseen data from other databases and literature-derived experiments at several conditions. When used cooperatively with IsothermNet, these descriptors can enable efficient material screening and accelerate the discovery of high-performance MOFs for CO<sub>2</sub> capture {% cite LinEmily2025Updv %}.

To summarize, we offer two methods for uptake and ΔH<sub>ads</sub> prediction: (1) high accuracy estimations utilizing the IsothermNet model or (2) very fast, large-scale predictions using easily-accessible geometric (textural) information via universal physical and analytical descriptors. Thus, for the first time, using only easily-accessible crystal information, future researchers can: 
	- Expedite ΔH<sub>ads</sub> characterization for new, experimentally-synthesized MOFs
	- Employ high-throughput uptake/ΔH<sub>ads</sub> prediction for theoretical work (wherein sample sizes easily exceed 10<sup>6</sup>)
	- Accelerate isotherm shape determination by bypassing full isotherm (or extraneous uptake/ΔH<sub>ads</sub>) calculations 
 
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/main.svg" title="network" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/fig6.svg" title="results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/fig4.png" title="descriptor" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

# Dummy
We further ...  {% cite LIN2023146627 %}.


