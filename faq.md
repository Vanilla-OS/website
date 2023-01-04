---
layout: page
title: FAQ
description: Freqently <s>Answered</s> Asked Questions about Vanilla OS.
---

<div class="container hero-wrapper">
    <div class="accordion">
        {% capture title %} Why Ubuntu Based? {% endcapture %}
        {% capture answer %}
            <p>Vanilla OS aims to be a stable and compatible distribution. Ubuntu is a distribution that respects both of these canons, being updated with strict control, without having to give up functionality and security.</p>
        {% endcapture %}
        {% include accordion-item.html open=true title=title text=answer %}

        {% capture title %} Why not a rolling release? {% endcapture %}
        {% capture answer %}
            <p>Vanilla OS aims to be a stable and compatible distribution. Ubuntu is a distribution that respects both of these canons, being updated with strict control, without having to give up functionality and security.</p>
            <p>Thanks to Flatpak, Snap and Appimage, the user can always have the latest version of the applications they use, without having to wait for the next release of Vanilla OS.</p>
        {% endcapture %}
        {% include accordion-item.html title=title text=answer %}

        {% capture title %} Why not OStree or [put_name_here]? {% endcapture %}
        {% capture answer %}
            <p>Vanilla OS uses an A/B structure (<a href="https://documentation.vanillaos.org/docs/abroot/">ABRoot</a>), which transacts updates atomically between two root micro partitions. The benefits of this system are the guarantee that the system is altered only when the entire transaction is successful (concept of atomicity), furthermore, the double root partition structure allows you to roll back to the previous state, directly from your boot, you will always have a home to come back to.</p>
            <p>This structure, unlike others, is compatible with already existing distributions and does not require a complex setup and allows easy re-initialization of the system without data loss.</p>
        {% endcapture %}
        {% include accordion-item.html title=title text=answer %}
    </div>
</div>
