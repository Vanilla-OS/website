---
title: "Apx, an unconventional package manager"
description: "Explore apx, the distro-agnostic package manager made by Vanilla OS and Distrobox."
date: 2023-01-28
keywords:
    - Apx
    - Distrobox
    - Podman
    - Container
    - Package Manager
    - Vanilla OS
layout: article
published: true
comments: true
---

Vanilla OS is an [immutable and atomic](https://vanillaos.org/blog/article/2023-01-28/why-we-switched-from-almost-to-abroot#immutability-and-atomicity) distribution that prioritizes security and stability. As such, installing packages in the root partition is possible using [ABRoot](https://documentation.vanillaos.org/en/abroot), but this approach isn't ideal or recommended as the root partition is small and should get used for kernel modules or root-side essential packages only. To address this issue, Vanilla OS and Distrobox have collaborated to introduce a new package manager:- apx.

Apx is a package manager created by the Vanilla OS team, which includes [Luca di Maio](https://github.com/89luca89), the creator of the popular utility - [Distrobox](https://github.com/89luca89/distrobox). Unlike traditional package managers, apx's design eliminates the barriers between different Linux distributions and package managers, allowing you to install packages from any distribution without leaving Vanilla OS. It is distro-agnostic, which means it can work on any distribution.

With apx, you can install packages from any Linux distribution (Fedora, Ubuntu, Arch Linux, openSUSE, Alpine Linux, etc). For example, you can install Lutris from Arch Linux with the following command:-

```bash
apx --aur install lutris
```

Or you can install Steam from Fedora (using the [RPM Fusion](https://rpmfusion.org/) repositories) using the following command:-

```bash
apx --dnf install steam
```

All without ever leaving Vanilla OS.

Thanks to the immense work on Distrobox, all the installed applications are fully integrated with the host system, with access to the user's home directory (useful for office tools such as LibreOffice), peripherals and so on. Your experience with containerized applications will be the same as if you are using the program natively on the host.

## Under the hood

Apx utilizes Podman under the hood. It is a wrapper of Distrobox that creates containers where you can install and manage your applications. [Podman](https://podman.io/) is a technology increasingly used in programming for software development and distribution.

Apx's role is to let the user communicate with Distrobox through an experience similar to that of a classic package manager. It also allows the user to easily access the installed programs, export binaries and desktop entries, and have immediate access to all the functions of the package manager used in the container.

Simplifying, this is the schema behind: Apx -> Distrobox -> Podman -> Container.

## Apx Commands

The commands of apx are similar to those of APT, the package manager adopted by Debian-based distributions. Additionally, apx offers a simple unified interface to access the package managers of multiple distributions. For example, it will not be necessary to use `pacman` or `dnf` commands directly. Instead, you can use the apx commands with dedicated flags (which automatically redirects and executes it inside the container).

Below is the list of supported commands:-

```txt
Usage:
  apx [command]

Available Commands:
  autoremove  Remove all unused packages automatically
  clean       Clean the apx package manager cache
  completion  Generate the autocompletion script for the specified shell
  enter       Enter in the container shell
  export      Export/Recreate a program's desktop entry from a managed container
  help        Help about any command
  init        Initialize the managed container
  install     Install packages inside a managed container
  list        List installed packages.
  purge       Purge packages inside a managed container
  remove      Remove packages inside a managed container.
  run         Run programs/commands inside a managed container.
  search     Search packages in a managed container.
  show        Show details about a package
  unexport    Unexport/Remove a program's desktop entry from a managed container
  update      Update the list of available packages
  upgrade     Upgrade the system by installing/upgrading available packages.

Flags:
      --apk           Install packages from the Alpine repository.
      --apt           Install packages from the Ubuntu repository.
      --aur           Install packages from the AUR (Arch User Repository).
      --dnf           Install packages from Fedora's DNF (Dandified YUM) repository.
  -h, --help          help for apx
  -n, --name string   Create or use a custom container with this name.
  -v, --version       version for apx
```

At any time, it is possible to open a shell on the container you want and operate as if you were in that specific distribution. For example, you can type the following command to enter the Fedora container:-

```bash
apx enter --dnf
```

## Useful links

- [apx documentation](https://documentation.vanillaos.org/en/apx)
- [apx source code](https://github.com/Vanilla-OS/apx)
