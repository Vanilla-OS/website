---
title: 
description: Vanilla OS is an Immutable Linux-based distribution which aims to provide a vanilla GNOME experience.
---
<div class="hero hero-center hero-main">
    <div class="container hero-wrapper">
        <div class="hero-image animate__animated animate__fadeIn" data-scroll>
            <img src="/assets/images/home-laptop.svg" alt="" class="on-light" />
            <img src="/assets/images/home-laptop-dark.svg" alt="" class="on-dark" />
        </div>
        <div class="hero-text">
            <!-- <a href="{{ site.url }}/download/" class="button button-large">
                Get Vanilla OS 22.10 <span class="material-icons-outlined"> file_download </span>
            </a>
            <a href="#">Release Notes</a> -->
            <a href="https://github.com/Vanilla-OS/os/releases/latest" class="button button-large">
                Get Vanilla OS 22.10 <span class="material-icons-outlined"> file_download </span>
            </a>
            <span>
                <a href="{{ site.url }}/roadmap">Roadmap</a> | <a href="https://handbook.vanillaos.org/2022/11/05/installation.html#title1">Requirements</a>
            </span>
        </div>
        <a href="#discover" class="hero-scroll">
            What is Vanilla OS?
            <span class="material-icons-outlined" id="discover"> arrow_downward </span>
        </a>
    </div>
</div>

<div class="hero hero-center">
    <div class="container hero-wrapper">
        <div class="hero-text">
            <h2>Up to Date.</h2>
            <p>Designed to last over time and always be faithful to you.</p>
            <p>Vanilla OS is an <span class="mark">immutable</span> and <span class="mark">atomic</span> Ubuntu-based Point Release distribution that receives updates at the right time without sacrificing security or functionality.</p>
        </div>
    </div>
</div>

<div class="hero hero-feature">
    <div class="container hero-wrapper">
        <div class="hero-text">
            <h2>Work.</h2>
            <p>Your faithful colleague by day.</p>
            <p>Vanilla OS is designed to be a reliable and productive operating system for your daily work. The GNOME Desktop is the perfect environment for your daily tasks, with a clean and intuitive interface. Everything is at your fingertips.</p>
            <p>Thanks to a wide range of applications, Vanilla OS is ready to meet your needs whether you are a developer, designer, student or simple user.</p>
        </div>
        <div class="hero-image" data-scroll>
            <img class="animate-on-scroll" data-animation="fadeInRight" src="/assets/images/home-rnote.png" alt="" />
        </div>
    </div>
</div>

<div class="hero hero-feature hero-feature-inverted">
    <div class="container hero-wrapper">
        <div class="hero-text">
            <h2>Play.</h2>
            <p>Your teammate by night.</p>
            <p>Play your favourite games without worrying about setting up your devices. Vanilla OS offers the latest stable Linux kernel, ensuring support for the latest hardware and the latest performance improvements.</p>
            <p>Setting up your GPU won't be an issue thanks to integrated driver management. Whether it's an AMD®, Intel®, or NVIDIA® GPU, if a driver is needed, all you have to do is launch the driver manager and follow the instructions. <b>It's that simple.</b></p>
        </div>
        <div class="hero-image" data-scroll>
            <img class="animate-on-scroll" data-animation="fadeInUp" src="/assets/images/home-gaming.png" alt="" />
        </div>
    </div>
</div>

<div class="hero hero-center hero-bg-text">
    <div class="hero-text">
        <div class="hero-image" data-scroll>
            <img class="animate-on-scroll" data-animation="fadeIn" src="/assets/images/home-apps.png" alt="" />
            <div class="hero-text">
                <h2>Complete.</h2>
                <p>Access a large catalogue of applications.</p>
            </div>
        </div>
    </div>
</div>

<div class="hero hero-feature">
    <div class="container hero-wrapper">
        <div class="hero-text">
            <h2>Choice.</h2>
            <p>Your system, your choices.</p>
            <p>Vanilla OS is an operating system that respects your choices. You are in control, always.</p>
            <p>From the first start, you can choose which package format to use in Vanilla OS (Flatpak, Nix, Appimage ...). You choose, and Vanilla OS will take care of the rest, allowing you to get started without any problems.</p>
        </div>
        <div class="hero-image" data-scroll>
            <img class="animate-on-scroll" data-animation="fadeInRight" src="/assets/images/home-pkgs.png" alt="" />
        </div>
    </div>
</div>

<div class="hero hero-feature hero-feature-inverted">
    <div class="container hero-wrapper">
        <div class="hero-text">
            <h2>Immutable...</h2>
            <p>...but also not.</p>
            <p>Vanilla OS is an immutable operating system. Core parts of the system are locked down to prevent unwanted changes or corruption from third-party applications or a faulty update. Some paths are still writable, such as the home and configurations directories, allowing the user to keep their files and  application data.</p>
            <p>Core components are updated via controlled and atomic transactions, which are applied only on success and made available on reboot.</p>
            <p>Need to install a component into the core system? No problem, you can open a transactional shell at any time, make your changes, and let the system apply them automatically!</p>
            <a href="https://documentation.vanillaos.org/" class="button button-secondary">
                Learn More <span class="material-icons-outlined">chevron_right</span>
            </a>
        </div>
        <div class="hero-image" data-scroll>
            <!-- This description here is both informative and decorative; it probably makes sense to provide some alt text rather than hiding it from screen readers. -->
            <img class="animate-on-scroll" data-animation="fadeInLeft" src="/assets/images/home-desk-apx.svg" alt="A simple terminal app showing the commands “apx install nice-stuff” and “abroot exec apt install nice-stuff”" />
        </div>
    </div>
</div>

<div class="hero hero-center">
    <div class="container hero-wrapper">
        <div class="hero-text">
            <h2>Free & Open Source.</h2>
            <p>You don't have to, and will never have to pay.</p>
            <p>Vanilla OS is built on free and open source technologies and software, and does not require any payment to be used. It is already yours.</p>
            <p>All system components are released under open source licenses, and the code is available for your review, contribution, or forking.</p>
            <div class="button-pattern" style="background-image: url('/assets/images/home-open-source-pattern.svg');">
                <a href="https://github.com/vanilla-os" class="button button-large button-dimmed">Fork on <ion-icon name="logo-github"></ion-icon> GitHub</a>
            </div>
        </div>
    </div>
</div>

<div class="hero hero-secondary">
    <div class="container hero-wrapper">
        <div class="hero-text">
            <h2>Frequently Asked Questions</h2>
            <p>Here are some of the most common questions we get asked.</p>
            <div class="accordion">
                {% capture title %} Why Ubuntu Based? {% endcapture %}
                {% capture answer %}
                    <p>Vanilla OS aims to be a stable and compatible distribution. Ubuntu is a distribution that respects both of these canons, being updated with strict control without having to give up functionality and security.</p>
                {% endcapture %}
                {% include accordion-item.html open=true title=title text=answer %}

                {% capture title %} Why not a rolling release? {% endcapture %}
                {% capture answer %}
                    <p>Vanilla OS aims to be a stable and compatible distribution, and Ubuntu is a distribution that respects our design philosophies.</p>
                    <p>Thanks to Flatpak, Nix, and Appimage, the user can always have the latest version of the applications they use, without having to wait for the next release of Vanilla OS.</p>
                {% endcapture %}
                {% include accordion-item.html title=title text=answer %}

                {% capture title %} Why not OStree or [put_name_here]? {% endcapture %}
                {% capture answer %}
                    <p>Vanilla OS uses an A/B structure (<a href="https://documentation.vanillaos.org/docs/abroot/">ABRoot</a>), which transacts updates atomically between two root micro partitions. The benefits of this system are a guarantee that the system is altered only when the entire transaction is successful (concept of atomicity), as well as allowing you to roll back to the previous state, meaning you will always have a home to come back to if something goes wrong.</p>
                    <p>This structure, unlike others, is compatible with already existing distributions and does not require a complex setup, allowing easy re-initialization of the system without data loss.</p>
                {% endcapture %}
                {% include accordion-item.html title=title text=answer %}
            </div>
            <a href="/faq" class="button button-secondary">
                Learn More <span class="material-icons-outlined">chevron_right</span>
            </a>
        </div>
    </div>
</div>

<div class="hero hero-center">
    <div class="hero-wrapper">
        <div class="hero-text">
            <h2>Technologies</h2>
            <p>Vanilla OS is made possible by the following technologies.</p>
            <div class="logo-carousel">
                <div class="logo-carousel-item">
                    <a href="https://www.ubuntu.com/" target="_blank" rel="noopener">
                        <img src="/assets/images/logos/ubuntu.svg" alt="Ubuntu" />
                    </a>
                </div>
                <div class="logo-carousel-item">
                    <a href="https://www.gnome.org/" target="_blank" rel="noopener">
                        <img src="/assets/images/logos/gnome.svg" alt="GNOME" />
                    </a>
                </div>
                <div class="logo-carousel-item">
                    <a href="https://distrobox.privatedns.org/" target="_blank" rel="noopener">
                        <img src="/assets/images/logos/distrobox.svg" alt="Distrobox" />
                    </a>
                </div>
                <div class="logo-carousel-item">
                    <a href="https://github.com/Vanilla-OS/ABRoot/" target="_blank" rel="noopener">
                        <img src="/assets/images/logos/abroot.svg" alt="ABRoot" />
                    </a>
                </div>
                <div class="logo-carousel-item">
                    <a href="https://github.com/Vanilla-OS/apx/" target="_blank" rel="noopener">
                        <img src="/assets/images/logos/apx.png" alt="Apx" />
                    </a>
                </div>
            </div>
            <small>All trademarks are the property of their respective owners.</small>
        </div>
    </div>
</div>

<div class="hero hero-center">
    <div class="hero-wrapper">
        <div class="hero-text">
            <div class="media-carousel">
                <div class="media-carousel-item">
                    <a href="https://www.zdnet.com/article/vanilla-os-offers-a-new-take-on-security-for-the-linux-desktop/" target="_blank" rel="noopener">
                        <img src="/assets/images/logos/media/zdnet.svg" alt="ZDNet: “If you're looking for a new operating system that takes security seriously ... Vanilla OS might be just the ticket.”" />
                        <p>If you're looking for a new operating system that takes security seriously… Vanilla OS might be just the ticket.</p>
                    </a>
                </div>
                <div class="media-carousel-item">
                    <a href="https://www.theregister.com/2023/01/03/vanilla_os_2210/" target="_blank" rel="noopener">
                        <img src="/assets/images/logos/media/the_register.svg" alt="The Register: “Vanilla OS is going for bigger, bolder improvement to the Linux desktop... it could prove transformative to the Linux industry...”" />
                        <p>Vanilla OS is going for bigger, bolder improvement to the Linux desktop… it could prove transformative to the Linux industry… </p>
                    </a>
                </div>
                <div class="media-carousel-item">
                    <a href="https://www.techrepublic.com/article/vanilla-os-linux-desktop/" target="_blank" rel="noopener">
                        <img src="/assets/images/logos/media/techrepublic-logo.svg" alt="Tech Republic: “This will be a project you’ll want to keep a close watch on... I think Vanilla OS could be a real game-changer.”" />
                        <p>This will be a project you’ll want to keep a close watch on… I think Vanilla OS could be a real game-changer.</p>
                    </a>
                </div>
                <div class="media-carousel-new-line"></div>
                <div class="media-carousel-item">
                    <a href="https://www.omglinux.com/vanilla-os-first-release-download/" target="_blank" rel="noopener">
                        <img src="/assets/images/logos/media/omg-linux.png" alt="OMG! Linux: “Far more than “just another” Ubuntu fork, this distro takes a bold new approach to desktop computing using an immutable file system.”" />
                        <p>Far more than “just another” Ubuntu fork, this distro takes a bold new approach to desktop computing using an immutable file system.</p>
                    </a>
                </div>
                <div class="media-carousel-item">
                    <a href="https://news.itsfoss.com/vanilla-os-release/" target="_blank" rel="noopener">
                        <img src="/assets/images/logos/media/itsfoss-logo.webp" alt="It's FOSS: “Being a new distro, Vanilla OS has a well-equipped feature set that you might like.”" />
                        <p>Being a new distro, Vanilla OS has a well-equipped feature set that you might like.</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
