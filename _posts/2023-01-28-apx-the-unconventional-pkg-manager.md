---
title: "Apx, an unconventional package manager"
description: "Expore Apx, the distro-agnostic package manager made by Vanilla OS and Distrobox."
published: 2023-01-28
layout: article
published: false
comments: true
---

Vanilla OS is an [immutable and atomic](https://vanillaos.org/2023/01/28/almost-vs-abroot.html#immutability-and-atomicity) distribution that prioritizes security and stability. As such, installing packages in the root partition is possible using [ABRoot](https://documentation.vanillaos.org/docs/apx/), but this approach is not recommended as the root partition is quite small and should only be used for kernel modules or root-side packages. To address this issue, Vanilla OS and Distrobox have collaborated to introduce a new package manager: Apx.

Apx is a package manager created by the Vanilla OS team, which includes [Luca di Maio](https://github.com/89luca89), the creator of the now popular [Distrobox](https://github.com/89luca89/distrobox). Unlike traditional package managers, Apx was specifically designed to eliminate the barriers between different Linux distributions, allowing you to install packages from any distribution without ever leaving Vanilla OS. It is distro-agnostic, so it can work on any distributions.

With Apx, you can install packages from any Linux distribution (Fedora, Ubuntu, Arch Linux, openSUSE, Alpine Linux, etc.) For example, you can install Lutris from Arch Linux with the command:

```bash
apx --aur install lutris
```

or Steam from Fedora (using the [RPM Fusion](https://rpmfusion.org/) repositories) typing:

```bash
apx --dnf install steam
```

all without ever leaving Vanilla OS.

Thanks to the immense work of Distrobox, all the installed software is fully integrated with the host system, has access to the user's home directory (useful for office tools such as LibreOffice), sees the same peripherals and so on. Your experience will be that you are using the program natively.

## Under the hood

Under the hood, Apx uses Podman, which is managed by Distrobox to create the containers where the software is installed. [Podman](https://podman.io/) is a technology increasingly used in programming, both for software development and distribution. 

The Apx role is to let the user communicate with Distrobox through an experience similar to that of a classic package manager. Apx also takes care of allowing the user to easily access the installed programs, export binaries and desktop entries, and have immediate access to all the functions of the package manager used in the destination container.

Simplifying, this is the schema behind: Apx -> Distrobox -> Podman -> Container.

## Apx Commands

The commands of Apx are almost completely similar to those of APT, the package manager adopted by Debian-based distributions. Additionally, Apx offers the use of a single interface to access the package managers of each distribution, for example, it will not be necessary to use `pacman` or `dnf` directly, just use the dedicated command in `apx`, which will automatically redirect to the correct one.

Below is the list of supported commands:

```
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
  run         Run a program inside a managed container.
  search      Search for packages in a managed container.
  show        Show details about a package
  unexport    Unexport/Remove a program's desktop entry from a managed container
  update      Update the list of available packages
  upgrade     Upgrade the system by installing/upgrading available packages.

Flags:
      --apk           Install packages from the Alpine repository.
      --apt           Install packages from the Ubuntu repository.
      --aur           Install packages from the AUR (Arch User Repository).
      --dnf           Install packages from the Fedora's DNF (Dandified YUM) repository.
  -h, --help          help for apx
  -n, --name string   Create or use custom container with this name.
  -v, --version       version for apx
```

At any time, it is possible to open a shell on the container you want and operate as if you were in that specific distribution. For example, you can type:

```bash
apx enter --dnf
```

to enter the Fedora container.

## Useful links

- [Apx documentation](https://documentation.vanillaos.org/docs/apx/)
- [Apx source code](https://github.com/Vanilla-OS/apx)
