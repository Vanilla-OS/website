---
layout: page
title: FAQ
description: Frequently <s>Answered</s> Asked Questions about Vanilla OS.
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

        {% capture title %} Is it suitable for beginners and non-technical users? {% endcapture %}
        {% capture answer %}
            <p>We want Vanilla to be a maintenance-free beginner-friendly OS. In fact, we have already simplified driver installation. However, for now, it's still recommended to have some prior experience with Linux-based operating systems.</p>
        {% endcapture %}
        {% include accordion-item.html title=title text=answer %}

        {% capture title %} Can I install it alongside another OS (dual boot)? {% endcapture %}
        {% capture answer %}
            <p>Currently, Vanilla OS can only be installed to a whole disk. Manual partitioning will be available shortly.</p>
        {% endcapture %}
        {% include accordion-item.html title=title text=answer %}

        {% capture title %} Is Nvidia supported? {% endcapture %}
        {% capture answer %}
            <p>Yes, if you have an Nvidia card, you'll be prompted to install proprietary Nvidia drivers during the first setup. This includes support for Optimus laptops.</p>
        {% endcapture %}
        {% include accordion-item.html title=title text=answer %}

        {% capture title %} How to install software? {% endcapture %}
        {% capture answer %}
            <p>Vanilla OS provides optional support for <a href="https://www.flatpak.org/">Flatpak</a>, <a href="https://appimage.org/">AppImage</a>, and soon <a href="https://snapcraft.io/">Snap</a>. We recommend you use any of these three for regular application installation. We also have our own package manager, <a href="https://documentation.vanillaos.org/docs/apx/">apx</a>. You can use it from the terminal to install Ubuntu, Fedora, or Arch Linux packages inside containers. Installing packages onto the host system is not advised, but if you need to — use <a href="https://documentation.vanillaos.org/docs/ABRoot/">ABRoot</a>.</p>
        {% endcapture %}
        {% include accordion-item.html title=title text=answer %}

        {% capture title %} How to run installed packages? {% endcapture %}
        {% capture answer %}
            <p>Graphical applications installed with <a href="https://www.flatpak.org/">Flatpak</a>, <a href="https://snapcraft.io/">Snap</a>, or <a href="https://documentation.vanillaos.org/docs/apx/">apx</a> will be available in the Applications menu. To run an application from the terminal, use `flatpak run` or `apx run` commands or just the name of the binary if it's installed as a Snap.</p>
            <p><a href="https://appimage.org/">AppImages</a> can be run by double-clicking the AppImage file, but make sure to give it executable permission first (Properties -> Executable as Program).</p>
        {% endcapture %}
        {% include accordion-item.html title=title text=answer %}

        {% capture title %} Is there any telemetry? {% endcapture %}
        {% capture answer %}
            <p>No, we don't care about your data. Ours is better.</p>
        {% endcapture %}
        {% include accordion-item.html title=title text=answer %}
    </div>
</div>
