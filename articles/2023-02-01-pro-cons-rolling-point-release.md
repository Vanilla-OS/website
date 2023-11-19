---
title: "Point vs Rolling Release and the modern solutions"
description: "Explore the pros and cons of point release vs rolling release."
date: 2023-01-31
keywords:
    - Point release
    - Rolling release
    - Flatpak
    - Snap
    - AppImage
    - Apx
    - Distrobox
    - Vanilla OS
layout: article
published: true
comments: true
---

In the world of Linux distributions, there are **Point releases** (fixed releases) and **Rolling releases** (continuous releases). Each type of release has its advantages and disadvantages.

## Point releases

Point releases are well known for their stability. When a point release is released, it has gone through rigorous testing, ensuring that the user will experience fewer bugs and issues, making the overall experience more stable. Those releases also receive security updates, which is crucial in today's world of online threats.

Furthermore, point releases are easier to support since they are a fixed version, making it easier for the community to troubleshoot and resolve any issues that arise in the future, which is an advantage for those who need a stable and reliable operating system, such as businesses or professionals.

However, point releases have their disadvantages. A major one is that they tend to receive updates later than other distributions. This is a result of them usually being more focused on stability, together with updates geting tested thoroughly before being released. That's why users of point-release distributions often have to wait longer to get new software packages or features.

Some examples of point releases are [Vanilla OS](https://vanillaos.org/), [Ubuntu](https://ubuntu.com) and [Debian](https://www.debian.org/).

## Rolling releases

Rolling releases provide a more up-to-date experience. With a rolling release, users can receive updates as soon as they are available, which means that users always have access to the latest software and features. It is a crucial advantage for those who want to use the latest technology or require cutting edge packages. Rolling releases also provide the latest security updates.

However, rolling releases have their disadvantages. The most significant one is that they can be less stable than point releases. Since rolling releases receive updates continuously, there is a risk that bugs or issues may arise. This is the result of users receiving updates as soon as they are available, with a reduced testing window. That's why users of rolling releases may experience more bugs and issues compared to users of point releases.

Some examples of rolling releases are [Arch Linux](https://www.archlinux.org/), [openSUSE Tumbleweed](https://en.opensuse.org/Portal:Tumbleweed) and [Void Linux](https://voidlinux.org/).

## Modern package formats

To overcome the disadvantages of point and rolling release distributions, new technologies such as [Flatpak](https://flatpak.org/), [Snap](https://snapcraft.io/), and [AppImage](https://appimage.org/) were developed.

Flatpak and Snap are modern package formats that provide a sandbox for each application, ensuring they run independently without interfering with other applications or the system. It helps maintain stability and security. Furthermore, all these modern package formats come with all the necessary dependencies, making them portable and easy to install on any Linux distribution.

[Apx](https://vanillaos.org/blog/article/2023-01-28/apx-an-unconventional-package-manager) is another solution developed by Vanilla OS and [Distrobox](https://distrobox.privatedns.org/). It allows users to install software from any other Linux distributions using the power of [containers](https://www.docker.com/resources/what-container/). It facilitates users to receive updates without risks of destabilizing or breaking the system.
