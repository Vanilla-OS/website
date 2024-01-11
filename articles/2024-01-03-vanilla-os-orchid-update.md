---
title: "Vanilla OS 2 Orchid Stable, some clarifications"
description: "Our journey developing Vanilla OS Orchid, and what's next."
published: true
date: 2024-01-03
keywords:
  - Vanilla OS
  - Vanilla OS Orchid
  - Orchid
  - News
layout: article
comments: true
---

Vanilla OS is an ambitious and young project with just one year of existence. The development of the first version took about four months, a relatively short time compared to other projects. Many expected to see Vanilla OS 2 Orchid released in a similar timeframe, but that wasn't possible. Orchid is an even more ambitious release, presenting a complete rewrite of the project with a substantial amount of new technologies, developed from scratch to achieve our desired results.

![Vanilla OS Brand](/uploads/laptop-orchid.webp)

In Orchid, we have rethought the entire system from its foundations. The construction itself occurs through a tool we invented called [Vib](https://github.com/Vanilla-OS/Vib) (Vanilla image builder), which assembles Linux distribution images using modules. We have created seven OCI images used at various points in the system. One of these images is [Pico](https://github.com/Vanilla-OS/pico-image), used in all building queues to ensure each component is built precisely for Vanilla OS. We have developed and improved numerous tools and technologies for this release, including [ABRoot](https://github.com/Vanilla-OS/ABRoot), [Albius](https://github.com/Vanilla-OS/Albius), [Vib](https://github.com/Vanilla-OS/Vib), [Differ](https://github.com/Vanilla-OS/Differ), [VSO](https://github.com/Vanilla-OS/vanilla-system-operator), [Apx](https://github.com/Vanilla-OS/apx), [Apx GUI](https://github.com/Vanilla-OS/apx-gui), [EtcBuilder](https://github.com/linux-immutability-tools/EtcBuilder), [FsGuard](https://github.com/linux-immutability-tools/FsGuard), [Prometheus](https://github.com/Vanilla-OS/Prometheus), [Chronos](https://github.com/Vanilla-OS/Chronos), [Eratosthenes](https://github.com/Vanilla-OS/Eratosthenes), [Atlas](https://github.com/Vanilla-OS/Atlas), [First Setup](https://github.com/Vanilla-OS/first-setup), [Installer](https://github.com/Vanilla-OS/vanilla-installer), support for Android via Waydroid and F-Droid, and many more.

We redesigned [ABRoot](https://github.com/Vanilla-OS/ABRoot) to manage the system from boot to the user's initial interactions, handling boot management, fstab, and initramfs. We created [Albius](https://github.com/Vanilla-OS/Albius), the tool responsible for installing an operating system compatible with [ABRoot](https://github.com/Vanilla-OS/ABRoot) and [its complex structure](http://abroot-dev.vanillaos.org/), [LVM Thin Provisioning](https://vanillaos.org/blog/article/2023-11-22/vanilla-os-orchid---devlog-22-nov) and [LUKS2](https://vanillaos.org/blog/article/2023-06-11/vanilla-os-orchid---devlog-11-jun#albius-the-new-installer-backend). [Apx](https://github.com/Vanilla-OS/apx) and [VSO](https://github.com/Vanilla-OS/vanilla-system-operator) have undergone a similarly complex redesign, [redefining their roles](https://vanillaos.org/blog/article/2023-06-11/vanilla-os-orchid---devlog-11-jun#apx-v2-and-vso-v2). Apx is now a flexible and powerful tool and library for developers, whereas [VSO](https://github.com/Vanilla-OS/vanilla-system-operator) is the actual environment where the user operates with the system shell using an isolated and mutable environment, allowing the preservation of the host system.

This extensive work also includes system configuration, systemd units, containers (which play a crucial role in Orchid), and Polkit rules. Speaking of Polkit, we removed sudo, a task that took a considerable amount of time to implement. We had to create Polkit policies to let users use tools requiring administrative privileges without using sudo; we have written [a paragraph](https://vanillaos.org/blog/article/2023-06-11/vanilla-os-orchid---devlog-11-jun#sudont) on this.

Over these months, we have given talks at [GUADEC](https://www.youtube.com/live/hv-bkYpHSbQ?si=YbBzq_nXQTok2-DI&t=634) and conducted several interviews[[1]](https://vanillaos.org/blog/article/2024-01-03/vanilla-os-2-orchid-stable-some-clarifications#see-also) which, in turn, required time to plan and create the necessary assets.

It's important to note that we develop everything with a distro-agnostic approach, designing all our technologies to be used by any Linux distribution. This process increases development time as we need to consider customization and scalability. For Orchid, we chose to take our time, conduct extensive research, and engage in many discussions. Orchid is not just a pretty reskin of Debian; it is a complex project that revisits many aspects we take for granted in Linux distributions. It required effort, patience, and the **willingness to question everything every single day**.

The beta version will be released on the 30th of January, marking a milestone that we will approach with great passion. On that date, the project will enter a feature freeze, and we will focus on addressing reported bugs and refining the edges for a seamless experience. We don't know how long the beta window will last; it depends on the number of bugs that arise (hopefully few). One thing is certain: 2024 is the year Orchid will see the light, and we are confident it will be on your PCs before this summer, possibly much sooner.

We hope that all our efforts contribute to an excellent user experience. Of course, we do not rule out the existence of bugs even after the stable release, but Orchid is still a young project ready to learn from its mistakes.

_The Vanilla OS Team.

## See also

1. [GUADEC presentation: Vanilla OS is not just another distribution](https://cdn.vanillaos.org/assets/Vanilla%20OS%20-%20GUADEC%202023.pdf)
2. [Vanilla OS Team interview with Nicco Loves Linux](https://www.youtube.com/watch?v=pR5ZEbyv0ZM)
3. [FLOSS Weekly: Vanilla OS on a Stick (Interview with Cofounder)](https://twit.tv/shows/floss-weekly/episodes/725?autostart=false)
