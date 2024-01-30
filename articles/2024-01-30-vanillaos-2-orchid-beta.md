---
title: "Vanilla OS 2 Orchid Beta is here!"
description: "The day has finally come! We are proud to announce the release of Vanilla OS 2 Orchid Beta."
published: true
date: 2024-01-30
keywords:
  - Vanilla OS
  - Vanilla OS Orchid
  - Orchid
  - Download
  - Developer Preview
  - Beta
layout: article
comments: true
---

It has been a year since we [announced](/blog/article/2023-03-07/vanilla-os-20-orchid---initial-work) the start of Vanilla OS 2 Orchid development. Five months ago, we [released the Developer Preview](/blog/article/2023-08-27/vanilla-os-orchid---developer-preview-), which received positive feedback. Today, thanks to the **hard work** of our [team](/team), who deserve a huge thank you ❤️, and the community, we are proud to announce the release of Vanilla OS 2 Beta, the first version in feature freeze.

For those who may not know, Orchid is a complete rewrite of the project, aiming to provide a stable, secure, fast, and user-friendly operating system without compromises. We have reevaluated the project from its roots, incorporating the extensive feedback received with the first version. We learned a lot, took notes, and reassessed every aspect of the project to deliver a more mature and reliable product.

## What's New?

Describing everything that has changed in Vanilla OS 2 Orchid would be impossible, as even though it may seem similar to the first version at first glance, under the hood, it's an entirely new world with new technologies, concepts, and standards.

### New Wallpaper

Firstly, we have a new wallpaper, designed by our community member [hrstwn](https://github.com/hrstwn), who did an excellent job. We are very happy with the results:

<div class="flexGrid flexGrid--2">
  <img src="https://github.com/Vanilla-OS/vanilla-backgrounds/raw/main/backgrounds/petals_light.webp" alt="Image of Vanilla OS Petals wallpaper in light mode" class="img img--fluid">
  <img src="https://github.com/Vanilla-OS/vanilla-backgrounds/raw/main/backgrounds/petals_dark.webp" alt="Image of Vanilla OS Petals wallpaper in dark mode" class="img img--fluid">
</div>

### Hybrid Debian Base

The system consists of a hybrid base of Debian packages and [Vib](https://github.com/vanilla-os/vib) modules. The major change in Orchid is the switch from Ubuntu to Debian, providing more flexibility and control over the system and update distribution.

Regarding updates, we transitioned from a package-based structure to an [OCI image-based structure](/blog/article/2023-06-11/vanilla-os-orchid---devlog-11-jun#a-new-structure), using Vib, a technology developed by us. It allows us to assemble OCI images using modules of various types, such as Debian packages, software builds, scripts, etc. It enables us to provide updates in the exact state they got tested, ensuring every user receives the same updates.

### ABRoot v2

ABRoot, our implementation of A/B Partitioning, facilitates updates in an immutable system through atomic transactions between two partitions, ensuring a consistently functioning system.

In Vanilla OS 2 Orchid, we [introduced ABRoot v2](/blog/article/2023-06-11/vanilla-os-orchid---devlog-11-jun#abroot-v2---immutability-changes-once-again), a complete rewrite of the project designed to be more reliable and faster. Transactions now occur through OCI image expansion instead of applying package updates, ensuring the system receives an exact copy of the tested image.

ABRoot v2 brings additional features, such as the ability to dump the system state for support in case of issues, switching between flavors without data loss by changing the base image, auto-recovery of the ABRoot file system structure, and more.

#### Driver and System Changes

In ABRoot v1, users could access the transactional shell to make atomic system changes. In ABRoot v2, this feature was removed, and replaced by support for generating custom local images. For example, when installing a driver not present in the system, ABRoot can generate a custom image with the driver installed, similar to a traditional package manager but creating a local OCI image used for updates. While this feature was introduced out of necessity, it is not recommended for daily use and should only be used for driver installations, as it puts the system in an indeterminate state.

To minimize the need for this operation, Vanilla OS now includes a broad set of drivers, covering most peripherals. In some cases, multiple OCI images were created to cover different scenarios (i.e. NVIDIA, VM). During installation, Vanilla OS proposes the most suitable image based on detected hardware.

### LVM Thin Provisioning

Addressing a major criticism of Vanilla OS 22.10, which was the allocated space for the two root partitions, totalling 20GB for root and taking up 40GB of disk space, we [introduced support for LVM Thin Provisioning](/blog/article/2023-11-22/vanilla-os-orchid---devlog-22-nov). 

![Image of the new partitioning structure](/uploads/lvm-partitioning-structure.webp)

This technology allows the creation of logical volumes with variable sizes, optimizing disk space usage. Now, the two root partitions share a total of 20GB, dynamically allocated based on the size of the two partitions, providing more disk space for user data.

### Sudon't

Having `sudo` is a common practice in Linux, but it [is not secure](/blog/article/2023-06-11/vanilla-os-orchid---devlog-11-jun#sudont). In Vanilla OS 2 Orchid, we have replaced `sudo` with PolKit policies, allowing users to perform privileged operations in a more controlled and secure manner.

PolKit, unlike `sudo`, is integrated into the system as a centralized authentication authority and privileged operations are managed through specific policies defined for each action. This structure provides greater control and prevents users from inadvertently or intentionally running malicious scripts that could compromise the system. Normally, such scripts would use `sudo` to execute privileged operations, and even if adapted to use the counterpart `pkexec`, they can't be executed without the safer graphical interaction of the user.

The user will still have access to `sudo` but within the VSO subsystem.

### Vanilla System Operator and Apx

VSO (Vanilla System Operator) and Apx are familiar tools for Vanilla OS users. In Vanilla OS 2, both tools underwent significant [rewriting to cover various scenarios](/blog/article/2023-06-11/vanilla-os-orchid---devlog-11-jun#apx-v2-and-vso-v2).

#### VSO v2

VSO v2 is no longer just an update manager but also serves as the system shell, and package manager, and provides support for Android applications. In Vanilla OS 2, users no longer have direct access to the system shell; opening the console brings them to the VSO shell, an integrated and mutable Vanilla OS subsystem. It allows users to install and run applications as they would in any Linux distribution without affecting the system.

Additionally, VSO now [supports Android applications](/blog/article/2023-11-19/vanilla-os-orchid---devlog-19-nov), which can be installed and run as native applications without the need for an emulator. The Android subsystem is isolated from the system and can be initialized at the user's discretion.

To simplify the experience, we integrated the F-Droid store into VSO, allowing users to install Android applications without relying on external sources.

#### DEB/APX Sideloading

Given the enhanced capabilities of VSO, we simplified the way users install unofficial packages. In Vanilla OS 2, users can install `.deb` and `.apk` packages by simply opening them with the Sideloading application, which handles the installation into the correct subsystem.

![Install panel in Sideload utility](/uploads/sideload-utility-install.webp)

The process is straightforward: download the `.deb` or `.apk` package, open it with Sideload Utility, and its done.

#### Apx v2

Apx v2 now plays an [entirely new role](/blog/article/2023-07-05/vanilla-os-orchid---devlog-5-jul) by serving as a powerful tool for developers and creators. It allows the creation of custom environments (stacks) for various needs. While Apx v2 got rewritten from scratch, its usage method remains similar. Users can now create custom stacks, defining which packages to install and creating one or more subsystems based on these stacks.

Despite the rewrite, Apx v2 allows users to create custom stacks and access created subsystems through direct shells or by leveraging the declared package manager in the stack. Users can then export the applications to the main system and more. The only limit is their imagination.

Responding to a common request, Apx v2 supports package managers other than those provided in Apx v1, allowing users to define the package manager to use in a stack. For example, users can create a stack based on Arch Linux, defining `yay` as the package manager instead of `pacman`, and install packages from AUR without issues.

##### Apx GUI

Among the many new features of Apx v2, we introduced a graphical interface, Apx GUI, facilitating the management and access to created subsystems quickly and easily.

### FsGuard and FsWarn

One of the goals of Vanilla OS 2 Orchid is to make the system more secure and reliable. To achieve this, we introduced two new tools, FsGuard and FsWarn, developed in collaboration with [Linux Immutability Tools](https://github.com/linux-immutability-tools).

FsGuard is the tool that initiates during the system boot, checking the integrity of the system binaries to ensure no discrepancies with the state provided by the system image. If a modification is detected, FsGuard will start FsWarn, which halts the system boot, notifying the user of the issue and advising them to restart the system to the previous state, ensuring  system's integrity. Users can choose to ignore the warning and start the system, but in this case, we cannot guarantee the system's integrity and you may encounter serious issues.

### Vanilla Installer and First Setup

Vanilla OS Installer and First Setup are crucial tools for the Vanilla OS experience, and we invested a lot of time in improving them to make them more user-friendly.

#### Vanilla Installer

The first, probably less noticeable change, is the switch from Distinst to our installer backend, [Albius](/blog/article/2023-06-11/vanilla-os-orchid---devlog-11-jun#albius-the-new-installer-backend). Albius is a tool developed by us, capable of installing the system from OCI images, covering the whole installation process.

![Welcome screen of Vanilla Installer](/uploads/orchid-installer-welcome.png)

<div class="flexGrid flexGrid--2">
  <img src="/uploads/orchid-installer-recovery.png" alt="Recovery screen of Vanilla Installer" class="img img--fluid">
  <img src="/uploads/orchid-installer-poweroff.png" alt="Poweroff screen of Vanilla Installer" class="img img--fluid">
</div>

In addition to redesigning several screens for better intuitiveness and usability, such as language selection, timezone, and keyboard layout:

<div class="flexGrid">
  <img src="/uploads/orchid-installer-language.png" alt="Language screen of Vanilla Installer" class="img img--fluid">
  <img src="/uploads/orchid-installer-timezone.png" alt="Timezone screen of Vanilla Installer" class="img img--fluid">
  <img src="/uploads/orchid-installer-keyboard.png" alt="Keyboard Layout screen of Vanilla Installer" class="img img--fluid">
</div>

We introduced a new screen for system requirements, preventing users from installing the system on unsupported hardware. VM Tools, which were previously installed during the first setup, are now proposed during installation:

![VM Tools screen of Vanilla Installer](/uploads/orchid-installer-vmtools.png)

if the user opt to install them, the Installer will use a vm dedicated image, which includes the tools and drivers for the most common virtualization platforms. The same concept applies to the Nvidia drivers, which are now proposed during installation in the same way as VM Tools, the installer will identify your hardware and propose the most best image for your system.

Since the live session was limited and didn't represent the final user experience, we added a new screen for network configuration, allowing users to set up the network before proceeding with the installation:

![Network configuration screen of Vanilla Installer](/uploads/orchid-installer-network.png)

You can choose to encrypt the `/var` partition (partition that holds all user data) with LUKS2 for maximum data security (recommended):

![Encryption screen of Vanilla Installer](/uploads/orchid-installer-luks.png)

#### First Setup

In this version, we worked on OEM compatibility. Now, once the system gets installed, the First Setup not only asks which applications to install but also allows users to configure the username, device name, timezone, language, keyboard, and network. 

![Image of the welcome screen in First Setup](/uploads/orchid-first-setup.png)

This enables hardware manufacturers to pre-install Vanilla OS on their devices, leaving only the final configuration to the user.

### Let's take a Tour

After completing the First Setup, users get taken on a system tour, by a new application that introduces the system's main features, making the first encounter with Vanilla OS simpler and more understandable.

<div class="flexGrid">
  <img src="/uploads/tour-main.png" alt="Welcome screen of the tour" class="img img--fluid">
  <img src="/uploads/tour-solid.png" alt="Solid principles screen of the tour" class="img img--fluid">
  <img src="/uploads/tour-apps.png" alt="Applications screen of the tour" class="img img--fluid">
  <img src="/uploads/tour-android.png" alt="Android compatibility screen of the tour" class="img img--fluid">
  <img src="/uploads/tour-apx.png" alt="APX screen of the tour" class="img img--fluid">
  <img src="/uploads/tour-overview.png" alt="Overview screen of the tour" class="img img--fluid">
  <img src="/uploads/tour-configure.png" alt="Device configuration screen of the tour" class="img img--fluid">
  <img src="/uploads/tour-account.png" alt="Online accounts configuration screen of the tour" class="img img--fluid">
  <img src="/uploads/tour-end.png" alt="Final screen of the tour" class="img img--fluid">
</div>

### PRIME Profiles

With the departure from Ubuntu as the base for the system, we had to rewrite support for switching PRIME profiles, a feature that allows quick and easy switching between graphics cards.

Due to the complexities of porting this feature to Vanilla OS 2 and its unique immutable structure, we developed a new tool ([prime-switch](https://github.com/Vanilla-OS/vanilla-tools/tree/main/prime-switch)) compatible with the new system.

`prime-switch` is a command-line tool, but we simplified its usage by integrating a new screen in Settings, under the Display section, allowing users to change the PRIME profile easily without resorting to the command line.

### Vanilla Tools

To streamline the Vanilla OS experience, we introduced Vanilla Tools, a set of tools that manage some system features quickly and easily. These tools are intended for use by experienced users.

- `cur-gpu` displays details of the currently used graphics card.
- `nrun` allows running a program using the Nvidia graphics card, if available, useful when the PRIME hybrid profile is active.
- `prime-switch` allows changing the PRIME profile quickly and easily, as explained earlier.

## More and GUADEC

Many of you probably know that we presented Vanilla OS Orchid at GUADEC 2023 in Riga. If you missed it and would like to know more about the changes we are making, you can [watch our talk on YouTube](https://www.youtube.com/watch?v=hv-bkYpHSbQ&t=444s&ab_channel=GNOME) and download a PDF of the presentation [here](https://cdn.vanillaos.org/assets/Vanilla%20OS%20-%20GUADEC%202023.pdf).

## What's next

Orchid is currently in a feature freeze, and the team is working to fix minor bugs and those reported during the testing window. The Stable version will be released once all reported bugs have been resolved, optimistically before this summer.

## Download

To download Vanilla OS 2 Orchid Beta, please visit the [download page](/download/orchid/beta).

We want to thank everyone who decided to test this version and encourage you to report any issues you encounter during system use so that we can address them before the stable release.

## Documentation

The documentation for Orchid is currently being worked on, but it isn't ready yet for this beta release. We have added a few handy references regarding the [minimum system requirements](#minimum-system-requirements) below. For manual partitioning, refer to the partition layout [from here](https://vanillaos.org/blog/article/2023-11-22/vanilla-os-orchid---devlog-22-nov#new-partitioning-structure).

### Unified Documentation

To improve discoverability and ease of navigation. We have unified both documentation and handbook sites to a single new address: <https://docs.vanillaos.org/>.

The documentation site utilizes [Chronos](https://github.com/Vanilla-OS/Chronos) our in-house documentation server in the backend to serve the articles. It is accompanied by [a nice frontend](https://github.com/Vanilla-OS/chronos-frontend) written in Vue.JS. 

### Minimum System Requirements

- An `amd64` 64-bit system with UEFI support.
- 4 GB of RAM.
- 32 GB of storage (this includes 10 GB for storing your files)