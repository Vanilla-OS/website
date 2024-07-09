---
title: "Interview with Mat: Insights on the Development of Vanilla OS 2 Orchid"
description: "In this interview, we sit down with Mat, the leader of the contributors for Vanilla OS, to delve into the development journey of Vanilla OS 2 Orchid."
published: true
date: 2024-07-09
keywords:
  - Vanilla OS
  - Vanilla OS Orchid
  - Orchid
  - Download
  - Developer Preview
  - Beta
  - Interview
layout: article
comments: true
---

Mat shares his experiences, the challenges faced, and the innovative features introduced in this new version. This interview provides an inside look at what makes Vanilla OS 2 Orchid a significant upgrade from its predecessor.

The purpose of these interviews is to give our community a comprehensive understanding of the development process and the new features of Vanilla OS 2 Orchid, the second version of our operating system, which is set for release soon.

### Mat, could you tell us a bit about you and your role in the Vanilla OS team?

As Contributors Leader, my work is split between reviewing incoming PRs, coordinating dates and tasks with the board, and contributing code to our core applications. Most of my effort has been channeled towards both our installer backend ([Albius](https://github.com/Vanilla-OS/Albius)) and frontend ([vanilla-installer](https://github.com/Vanilla-OS/vanilla-installer)), but you can also find me pushing commits to [ABRoot](https://github.com/Vanilla-OS/vanilla-installer), [Apx](https://github.com/Vanilla-OS/apx) and many other repos.

### How did you get involved with the project and what motivated you to contribute?

I started following what would later become Vanilla OS when Mirko posted some cryptic screenshots on Twitter about his experiments with his own immutable Linux distro. Ever since I started using Fedora Silverblue in 2021, I've been fully on board with immutable base Linux desktops. As a software developer and researcher, the container-based development workflow works very well for me since it allows me to test applications on different distributions while making sure my base system is always clean. I loved my time on Silverblue, but some pain points let me search for something new, and Vanilla *almost* fits me like a glove.

The biggest problem I had was the fact that my laptop requires custom kernel parameters for setting the screen brightness, which ABRoot didn't support at the time. I saw this limitation as an opportunity to contribute to an emerging project and learn a new programming language (Go) in the meantime. My first PR was very well received and I decided to stick around. After 1 year and 6 months of contributions, I am happy to call Vanilla OS my home system.

### What were the main goals when we started working on Vanilla OS 2 Orchid?

We learned a lot since the first Vanilla OS release. Although we got a lot of things right, there were also many fundamental issues that could only be solved with a major rewrite. The first thing we wanted to explore was using [OCI](https://opencontainers.org/) images for distributing the base OS, which would allow us to have more control over what packages (and which versions) get installed during updates. This way, we could vet a new update before release and be sure that everyone will get the same experience, as the base configuration will be the same for everyone.

Our second major goal was to move away from Ubuntu towards its upstream, Debian. Ubuntu can be a good base for distributions that follow a similar release schedule, which is not our case. Our goal has always been to ship up-to-date packages to our users, which pretty much discards the possibility of sticking with an LTS release. On the other hand, we saw the 6-month release cycle of mainline Ubuntu as too pressure-inducing, especially since these versions are not supported for long and might introduce breaking changes for us. Although labelled as "unstable", Debian Sid provides us with a solid rolling base to set up Vanilla OS, with very recent package versions and a good testing infrastructure.

### How would you describe the development process of Orchid compared to the previous version?

Very, **very** challenging. We were aware of the huge endeavor we set out to achieve, but I think none of us was prepared for how much more complex all of this would turn out to be. We ended up with a handful of new tools, from low-level filesystem integrity checkers in the form of [FsGuard](https://github.com/linux-immutability-tools/FsGuard) and declarative container build systems like [Vib](https://github.com/Vanilla-OS/Vib), up to APIs like [Differ](https://github.com/Vanilla-OS/Differ) and web front-ends for both our [packages](https://packages.vanillaos.org/) and [images](https://images.vanillaos.org/#/).  Ultimately, we all learned a lot and accomplished what we wanted: a reliable and up-to-date desktop people can love.

### What were the biggest technical challenges we faced during development?

Working with container images poses a lot of challenges when compared to bootstrapping a system in the traditional way (like with SquashFS). In the beginning, we wanted to use the container images provided by the Debian team to serve as a base for Orchid, but we quickly discovered that these images were severely limited in terms of functionality. This works well (and is expected) in a cloud deployment context, but not when trying to use them on the desktop. We spent a lot of time struggling with pre-built container images until we decided the best approach was to create our own, modular solution.

In [this blog post](https://vanillaos.org/blog/article/2023-06-11/vanilla-os-orchid---devlog-11-jun) from last year, we first announced the Pico -> Core -> Desktop structure which is the base for Vanilla OS and will enable us to extend it even further in the future.
Another particularly tricky and somewhat related challenge was our installation process. We previously used Pop! OS' [distinst](https://github.com/pop-os/distinst) as our backend, but we quickly realized that it would be impossible to continue using it if we were to switch to an OCI-based distribution method. Thus, [Albius](https://github.com/Vanilla-OS/Albius) was born as a replacement for `distinst` and is responsible for handling the entire installation process. Writing an installer backend, however, is easier said than done, especially when using such a different system structure. We spent hundreds of hours perfecting the installation process to ensure people can install Vanilla OS on every type of machine, but if you encounter an issue please let us know!

### How did community feedback influence our work on Orchid?

When working on Orchid, we had already accumulated months of user feedback in the form of support requests on Discord, blog posts, YouTube videos, and even GitHub issues. While it would not be possible or even desirable to address every single suggestion, all the feedback we got gave us a pretty clear idea of what worked, what needed refactoring, and what needed to go back to the drawing board. We gave special attention to the issues new users faced as they usually followed a specific pattern, but we never gave up on the vision we had for the future of the project.

### Do you have any examples of significant changes we made thanks to user suggestions?

One feature that was suggested many times for the first version of Apx but never made the cut was the ability to create containers using custom images. For example, while Apx v1 had support for Fedora containers, it could only use the latest version, which might not be what the user wants. Furthermore, there was no way to specify completely new distros, so if the user needed to use an unsupported container, they would have to rely on Distrobox directly. With Apx v2, we rewrote it from the ground up with this idea in mind, and now all pre-packaged subsystems are created on top of *stacks*, which can be defined by the user using either the CLI or our new GUI. From Gentoo to Clear Linux, we can proudly say that Apx v2 supports ALL distros out there (as long as they have a supported container image)!

### In your opinion, what are the main differences between Vanilla OS 2 Orchid and the previous version, both technically and in terms of user experience?

When looking purely at an implementation standpoint, one could say Vanilla OS 1 (Kinetic) and 2 (Orchid) are almost entirely different systems! Sure, all the familiar tools are there (ABRoot, Apx, VSO), but they have been completely rewritten to be more reliable, featureful, and intuitive. When it comes to user experience, we decided to make our CLI usage more focused by centralizing all the main features in VSO. Now, instead of having to juggle between ABRoot, Apx, VSO, etc, most users will only need to look at VSO.

Another big change in the CLI is the fact that the default shell is now a container, so users familiar with the Debian workflow will feel right at home by being able to use `apt` and `dpkg` directly. Of course, being inside a container has its limitations, and system-level packages such as drivers still need to be installed with ABRoot. For most packages, however, the base container ensures the user doesn't need to mess with Apx anymore, leaving it purely as a developer tool for users interested in that workflow (by the way, I encourage you to give it a shot if you're a developer).

### How do you think these differences will improve the overall user experience?

Although we want Vanilla OS to be a refreshing experience not bound to the traditional Linux desktop workflow, we understand that most users come with their own experiences and expectations. These preconceived notions are usually not the same as what people would get out of the box with the previous version of Vanilla, which has caused a lot of confusion during Kinetic's lifespan, leading to many people forming a misguided opinion about the system. When creating our own project, it's easy to forget that our users don't have (and are not expected to have) the same level of in-depth knowledge about it as we do, so having familiar defaults and wrappers in place can go a long way into making a new user feel at home.

### Can you tell us more about some of the new features in Vanilla OS 2 Orchid, like VSO 2 and Vib?

VSO was completely overhauled and has become the centerpiece of Vanilla OS. It is now responsible for handling both system updates as well as the default shell, which as I previously mentioned is a special container, allowing the user to install packages the traditional way while keeping the base system intact. It will also be responsible for managing Waydroid integration (which still needs some final touches and will arrive at a later date), allowing users to seamlessly install Android apps on their desktop.

While VSO 2 is a way for users to manage their systems, Vib takes system management to an entirely new level, allowing anyone to create their own custom image of Vanilla OS with whatever changes they desire. Vib stands for Vanilla Image Builder and, as the name implies, it provides a declarative API for building Vanilla OS images. All our default images except for Pico are created using Vib, so anyone can pick up one of our base [images](https://images.vanillaos.org/#/) and use it as a starting point for creating an entirely new experience (window manager users rejoice!). We can't wait to see what people will create with Vib and the base images we provide.

### What do we have in mind for the future of Vanilla OS after the release of Orchid?

Our main focus once Orchid is released will be to make sure new OS updates come out in a timely manner. Orchid was a very big project and has taken a lot longer than we anticipated, but it's finally here and I would say it was worth the wait. Nevertheless, we understand the frustration of people who have used Vanilla OS as their daily driver, and we can confidently say that we don't plan on making another Orchid-sized update anytime soon. Users interested in keeping up with our experimentations for future releases of Vanilla OS can look at [Vision](https://github.com/Vanilla-OS/vision/issues), our perpetually unreleased image used for maybe-not-so-stable tests.

### Are there any specific features or improvements you would like to see in future versions?

One big pain point I foresee in Orchid is our large update sizes. This is due to a limitation on how our container image layers are built and causes ABRoot to re-download identical layers during an update. In the future, I'll work on making our updates smaller and faster by reusing unchanged layers, so stay tuned for that!

### What would you like to say to our community of users and developers?

I would like to thank everyone who in any way got involved with the development of Orchid, be it with coding, translation, testing, or feedback. You helped shape this massive release and you should be proud of that! In a sea of massive corporations competing for every last bit of profit, the collaborative nature of open source is what makes us strong. Thousands of small contributions put together can lead to a product that (maybe I'm biased to say, but) can not only compete with large corporate offerings but surpass them. Vanilla OS is a system made by users for users, and you will always be our primary goal.

### How can interested individuals contribute to the project and where can they find more information?

If you're interested in Vanilla OS and haven't joined our Discord server yet, you can do so through [here](https://discord.gg/vanilla-os-1023243680829681704). We also have a [get involved](https://vanillaos.org/get-involved) page with tons of information about how you can contribute to the project. Lastly, if you're a developer and not sure where to start, you should take a look at our [good first issues](https://github.com/search?q=org%3AVanilla-OS+is%3Aissue+label%3A%22good+first+issue%22+is%3Aopen&type=issues).

---

We hope this interview with Mat has provided you with a deeper understanding of the development and features of the upcoming second version of Vanilla OS. Stay tuned for more updates and insights as we continue to innovate and improve your system.

If you're interested in contributing or learning more, be sure to visit our website and join our vibrant community.
