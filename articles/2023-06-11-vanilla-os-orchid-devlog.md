---
title: "Vanilla OS Orchid - Devlog 11 Jun"
description: "We are happy to announce the dev log for Vanilla OS 2.0 Orchid! with various exciting updates and changes."
published: true
date: 2023-06-11
keywords:
    - Vanilla OS 2.0 Orchid
    - Vanilla OS
    - Orchid
    - Apx
    - ABRoot
    - OCI
    - Debian Sid
    - Kernel 6
    - GNOME 44
    - Installation
    - Post-installation
    - Express
    - Advanced
    - First Setup
layout: article
comments: true
---

After [our article](https://vanillaos.org/blog/article/2023-03-07/vanilla-os-20-orchid---initial-work) announcing the development of the second version of Vanilla OS, codenamed Orchid, several months of planning, development, and testing have followed. In this article, we will cover some of the new features that the upcoming major release of Vanilla OS will bring, together with our reasoning for them.

## ABRoot v2 - Immutability changes, once again

Throughout its lifespan, Vanilla OS has adopted [various approaches](https://vanillaos.org/blog/article/2023-01-28/why-we-switched-from-almost-to-abroot) to achieve system immutability and atomicity from [Almost](https://github.com/Vanilla-OS/almost) to [ABRoot](https://github.com/Vanilla-OS/ABRoot). Thanks to a rapidly growing community, we have received excellent feedback. We listened to our community's opinions and learned from our mistakes. All of this has led to the conceptualization, design, and development of [ABRoot v2](https://github.com/Vanilla-OS/ABRoot), a matured version of our system that brings numerous benefits, countless new possibilities, and a higher level of stability.

The new version is not just an update; the entire underlying structure has been rethought and rewritten from scratch to be the ideal solution for all use cases due to the use of OCI images.

In ABRoot v1, obtaining and applying system updates is done by leveraging the package manager in an isolated and atomic environment. In ABRoot v2, the update operation now utilizes OCI ([Open Container Initiative](https://opencontainers.org)) images, which are exact copies of the new system, downloaded and allocated using data deduplication and applied in a single atomic transaction. This way, all installations of Vanilla OS receive the exact copy of the update, making the system 100% reproducible and faithful to our tests.

This automatically raises the question: "How do I install extra drivers?" In Vanilla OS Orchid, installation of the most common drivers is a graphical and effortless process. However, there are cases where it is necessary to install additional packages in the system. For this reason, we have introduced a package manager in ABRoot v2 that allows users to manage their packages using atomic transactions.

Below is an example of the commands to add and remove packages:

```bash
abroot pkg add <your-package>
abroot pkg remove <your-package>
```

Once a package is added or removed, it will not be installed or removed from the system immediately. It will be up to the user to apply them with the command:

```bash
abroot pkg apply
```

This will create a local image of the latest Vanilla OS version, adding or removing the desired packages. This new local image will be kept up-to-date automatically with the latest versions of Vanilla OS.

### Always Bootable

One of the main features of this version is the change in boot management. In v1, a single boot partition managed and contained the kernel images, initrd, and GRUB configuration. In v2, this process changes significantly as the boot partition gets divided into two parts: root boot and master boot.

Each root partition has its own boot directory, containing the GRUB configuration, kernel, and initrd images. These configurations get dynamically managed by the master boot, a general GRUB configuration that handles switching and loading the boot files from the correct root based on the update status.

Thanks to this new structure, the update process never modifies the master boot except atomically, ensuring and preserving the system's boot integrity.

### Custom Images with Vib

Since Vanilla OS is a general-purpose distribution, users may have specific needs that require modifications to the base structure of Vanilla OS, such as a different desktop environment. Thanks to the OCI image system, you can create your own custom image in just a few minutes by adding your customizations on top of the official image's recipe.

To simplify this process, we have created a tool called [Vib (Vanilla Image Builder)](https://github.com/Vanilla-OS/Vib), which provides a convenient method for creating OCI images using [recipes](https://github.com/Vanilla-OS/core-image/blob/main/recipe.yml) and [modules](https://github.com/Vanilla-OS/Vib#moule-structure).

More information and guides about creating your custom images will follow after the release of Orchid.

### Other Features

The are many more features coming to Vanilla OS with Orchid, such as improved management of kernel flags, the ability to rollback to a previous state, checking the system's integrity status, displaying useful metadata information such as added and removed packages, the last obtained image, and more.

## A New Structure

Vanilla OS Orchid consists of 3 main OCI images:

- [Pico](https://github.com/Vanilla-OS/pico-image)
- [Core](https://github.com/Vanilla-OS/core-image)
- [Desktop](https://github.com/Vanilla-OS/desktop-image)

[Pico](https://github.com/Vanilla-OS/pico-image) is a minimal (~60MB) version of Debian built from the Vanilla OS repository, intended to be the base of the Vanilla OS Core image.

[Core](https://github.com/Vanilla-OS/core-image) is an image based on Pico, which adds all the core functionalities of Vanilla OS. It is the intended starting point for developing OCI images for Vanilla OS.

[Desktop](https://github.com/Vanilla-OS/desktop-image) is the official system image based on Core. It offers the complete user experience designed for Vanilla OS, including the GNOME desktop and all the graphical tools developed by our team.

![System composition of Vanilla OS, as described above](/uploads/images.webp)

This division allows us to open the doors to every type of flavor, ranging from servers to desktops. It would also allow you to change your base system from Debian to your distribution of choice.

## Apx v2 and VSO v2

Apx and VSO (Vanilla System Operator) have so far been different utilities with nothing in common. This is changing in Vanilla OS Orchid, where both tools will work together to cover a wide range of use cases.

### Apx, as a developer tool

Apx v2 was designed primarily for developers and anyone who needs isolated and easily manageable environments, with integration with Vanilla OS.

In Apx v1, it was possible to use multiple package managers by specifying the dedicated flag, such as `--dnf` for Fedora or `--zypper` for openSUSE, making it easy to interact with packages from other Linux distributions.

Apx v2 still offers this possibility, but it does so through stacks that are configurable environments based on the user's needs.

A stack is a set of instructions that can configure an environment based on any Linux distribution, adding packages and settings at the user's discretion. At any time, the user can create a new stack by defining a base Linux distribution, such as Arch Linux, and an optional list of packages. With this stack, the user can start one or more new subsystems based on it.

Once a subsystem gets created, the user can use package manager commands (install, remove, update, etc.) or enter the subsystem, just like in Apx v1.

Stacks are shareable and restoreable, so you can easily share them with your team. Apx v2 already has a set of preconfigured stacks to access all the major Linux distributions.

Thanks to this new structure, the user can create stacks for each use case, for example, one with all the tools and libraries useful for development in various domains like 3D applications, music production, programming, etc.

If something goes wrong, the subsystem can be restored by reinitializing it, resetting the environment to the state defined by the stack.

### VSO, as a system package manager

VSO v2 plays a crucial role in Vanilla OS Orchid. On top of managing update configurations, it will also handle the installation of Deb, Nix, and Apk packages through Waydroid.

#### Vanilla OS Subsystem

Since Apx v2 is a tool designed for developers and more advanced users, which will receive several other features for this target audience over time, we have decided to create a new subsystem specifically for the end user, who is typically less technologically inclined. In VSO v2, there is a subsystem based on Vanilla OS Pico. This subsystem will be a system-integrated container which supports systemd, allowing straightforward installation, removal, and management of packages, both graphically and through the command line.

At any time, the user can access the command line to install packages using this subsystem or use the new graphical sideload utility to install Deb packages or Android APKs.

![Installing the Chromium APK using the sideload utility](/uploads/sideload-utility-install.webp)

![Uninstalling the Chromium APK using the sideload utility](/uploads/sideload-utility-uninstall.webp)

We are working on making the subsystem easier to access by integrating it into GNOME Software. We can't promise this at this time. But it is in our plans.

#### Waydroid

Support for Android applications has been one of the most widely requested features by our community since the beginning of the project. Finally, this will be possible with VSO v2. The integration is similar to the Vanilla OS subsystem, as it will allow us to install Android APKs from the command line or through the Sideload application by simply downloading and opening an APK.

#### Nix

Support for Nix was previously a feature of Apx v1, but we realized that this feature is no longer compatible with the direction we are moving towards with Apx v2. Therefore, it has been moved to VSO v2. Its functionality remains the same, but it has a new codebase that resolves many reported issues and provides a better user experience.

## Albius, the new installer backend

With our transition towards image-based updates, we found the need for an installer that supports installing an image-based OS. While Distinst has served well as the backend for previous versions of [Vanilla Installer](https://github.com/Vanilla-OS/vanilla-installer), we decided that the best course of action was to work on our own installation backend, which will give us the flexibility to implement new and distinct features in the upcoming releases. We call this installation tool Albius, in reference to Edmond Albius, the horticulturalist who discovered the method to pollinate the Vanilla flowers manually.

Albius is written in Go and can install virtually any Linux-based operating system with the right group of commands, including distributions that use Squashfs for installation. Albius reads a JSON file containing the installation recipe and does the rest automatically, allowing for easier integration with applications written in any programming language.

One of the most significant features Albius introduces is LUKS2 encryption. LUKS2 allows you to encrypt your system for enhanced security and privacy. It was one of most highly requested features from our laptop users. Now they can carry their laptops with them without any worries.

## Sudon't

During the design process of Orchid, one of the discussions that frequently arose was about the usefulness of the `sudo` command. Vanilla OS is an immutable system, and any modifications should occur through Apx, VSO, or ABRoot (especially with Orchid). We questioned whether it was worth including a command like `sudo` in the distribution and what benefits its removal would bring. From our analysis and discussions we identified several advantages of removing the `sudo` command.

By eliminating `sudo`, the risk of accidental or harmful operations performed by unauthorized entities would get reduced. Since Vanilla OS promotes a secure and stable environment, we are limiting privileged access to help preserve the system's integrity. The absence of `sudo` would encourage the adoption of a more structured approach to privilege management. Tools like Apx, VSO, and ABRoot offer specific mechanisms for system administration, allowing users to perform configuration and update operations securely and in a controlled manner. By removing `sudo`, the use of specialized tools will get encouraged instead of relying on potentially misused commands. Additionally, utilities like systemd already allow for sudo-less management of units, and we can't think of any other use cases where `sudo` would be necessary.

For this reason we have chosen to go down this path and remove the `sudo` command. However, the `pkexec` command remains available, which is more suitable for a desktop environment. All your operations requiring root privileges will function the same, with the only difference is another command to invoke the root privileges, which does that in a safer manner than `sudo`.

## Prometheus

With the adoption of OCI images, many system components need to be able to work with this new structure. To simplify image development and management, we have developed [Prometheus*](https://github.com/Vanilla-OS/Prometheus), a container library/engine written in Go, that enables working with and manipulating OCI images.

Prometheus provides a convenient and easily extendable method for obtaining, building and managing OCI images in all our projects. Both ABRoot v2 and Albius leverage Prometheus to get, extract, and build new images if necessary. Compared to other integrations we have experimented with, Prometheus offers a streamlined implementation and improved performance over previous implementations we have tested.

*Prometheus was the Titan of Greek mythology who stole fire from the gods to give it to humans.

## Eratosthenes

With the switch to Debian as the base for Orchid, we had to create our own repositories to manage package freezes and packages. This was not only a week-long effort, but it led to the need for a platform to display package details from the repositories.

Unfortunately, most currently available platforms for this purpose did not meet our UX standards and offered a complex and outdated interface. That's why we developed [Eratosthenes*](https://github.com/Vanilla-OS/Eratosthenes), a platform based on Flask and written in Python, which allows easy searching and reading of package details directly from our repositories.

You can check out the platform by visiting [packages.vanillaos.org](https://packages.vanillaos.org).

*Eratosthenes was a Greek mathematician, astronomer, and geographer.

## Atlas

With the introduction of OCI images in Vanilla OS, there arose a need to provide a convenient and simplified method for developers to access image details. For this reason, we created [Atlas*](https://github.com/Vanilla-OS/Atlas), a platform that lists the images used in Vanilla OS and allows users to read their specifications and composition.

Atlas is built with VueJS and designed to be easily navigatable, displaying all image details clearly and intuitively. Users can read about the build steps, size, layers, and other details for creating a variant of Vanilla OS.

Currently, the platform showcases the Pico, Core, Desktop and Dev images, but this list might expand in the future to include new compliant images.

You can test the platform by visiting [images.vanillaos.org](https://images.vanillaos.org/).

*Atlas was the Titan of Greek mythology condemned to hold up the heavens or sky for eternity.

## New Wallpaper

Like every Linux distribution that sees a new major update, Vanilla OS Orchid has received a new official wallpaper. [Kramo](https://github.com/kra-mo) has been working hard on this. They made a wallpaper highlighting the new light that Orchid brings to Vanilla OS, representing its growth.

![Orchid Wallpaper, light variant: A 2D image of vanilla orchid over a sky-based wallpaper](/uploads/orchid-light.webp)

The new wallpaper comes in two colors, light and dark, and it represents a vanilla orchid in a pure environment, which embodies the pure essence of Vanilla OS and the desire to provide a simple and relaxing user experience.

![Orchid Wallpaper, dark variant: A 2D image of vanilla orchid over a plant-based wallpaper](/uploads/orchid-dark.webp)

## Other news

There are many new features we have worked on, and we cannot cover them all in detail in a single article for various reasons. However, we can briefly mention some of them.

As announced in the previous article, we have been working on changes to support OEM in Vanilla OS. This includes moving user creation and other installer steps to [First Setup](https://github.com/Vanilla-OS/first-setup) and improving the user experience of both the Installer and First Setup.

We are also developing an intelligent graphics driver manager based on [Ikaros](https://github.com/Vanilla-OS/ikaros) that suggests driver installations whenever needed, guiding the user without interrupting their workflow.

![Hardware driver utility asking to install the drivers for an HP Laserjet P1102](/uploads/drivers-utility.webp)

Among the various new features we are working on for the installer is a new Recovery mode with easy access to all recovery tools like the terminal, ABRoot recovery, the browser, and more. Additionally, we are working on a recovery partition that allows graphical restoration of one's Vanilla OS installation if anything gets compromised due to external causes.

![The described Recovery Mode with the following menus: Reinstall Vanilla OS, and Advanced Utilities: Disks Utility, Rescue Shell, Web Browser, and Repair File System.](/uploads/recovery-utility.webp)

---

The development of Vanilla OS Orchid is progressing rapidly, and more news will follow soon!

For the latest updates, check out the [roadmap](https://vanillaos.org/roadmap) and the [project tracker](https://github.com/orgs/Vanilla-OS/projects/4).
