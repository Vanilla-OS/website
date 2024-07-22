---
title: "Interview with Luca Di Maio and Mirko Brombin: Exploring Immutability in Vanilla OS 2 Orchid"
description: "In this interview, we sit down with Luca Di Maio and Mirko Brombin, two of the founders of the Vanilla OS project, to delve into the concept of immutability and how it is implemented in Vanilla OS 2 Orchid."
published: true
date: 2024-07-22
keywords:
  - Vanilla OS
  - Vanilla OS Orchid
  - Orchid
  - Download
  - Developer Preview
  - Beta
  - Development
  - Developing in Vanilla OS
  - Immutability
  - Atomicity
  - ABRoot
  - A/B partitioning
  - Btrfs system snapshots
  - OSTree
  - OCI images
  - Vib
layout: article
comments: true
---

In this interview, we sit down with Luca Di Maio and Mirko Brombin, two of the founders of the Vanilla OS project, to delve into the concept of immutability and how it is implemented in Vanilla OS 2 Orchid.

Luca and Mirko share their insights on the importance of atomicity, immutability, the challenges faced during development, and the innovations introduced in this new version of the operating system.

The purpose of these interviews is to give our community a comprehensive understanding of the development process and the new features of Vanilla OS 2 Orchid, the second version of our operating system, which is set for release soon.

### Luca, Mirko could you tell us a bit about you and your roles in the Vanilla OS project?

**Luca**: 
I'm a software engineer passionate about open source, creator of [Distrobox](https://github.com/89luca89/distrobox), and co-founder of Vanilla OS together with Mirko and Pietro. My role in Vanilla OS involves studying and proposing the paradigms we use in the system. I constantly explore innovative ideas to enhance the system's efficiency.

**Mirko**:
I'm a UX designer and developer as well as a Linux and Open Source enthusiast since ever. Together with Luca and Pietro, I'm the founder of the Vanilla OS project and other initiatives like [Bottles](https://github.com/bottlesdevs/Bottles), [Atoms](https://github.com/AtomsDevs/Atoms), and [cpak](https://github.com/containerpak/cpak). My role in Vanilla OS is to direct all the implementations, effectively turning the paradigms proposed by Luca into the technologies we use, such as ABRoot, Apx, and so on.

Luca and I frequently discuss the project. We imagine how the user will want to use the system and how it should behave accordingly. It may seem like complex work, but it has led to many interesting discussions.

### How do you feel about the evolution of Vanilla OS with Orchid?

**Luca**:
I feel that Vanilla OS is heading in the right direction, particularly in creating an appliance-like OS that is accessible to everyone, especially those who are not tech-savvy. Despite being a relatively young project, the progress we've made so far has been remarkable. There are still many improvements to implement in the future, but what we've achieved up to now truly showcases the potential of both the project and our team.

**Mirko**:
Having watched the project grow, fight through issues, and celebrate successes, I can say that the project has matured significantly. Vanilla OS 2 is something we all believed in, but none of us predicted how challenging this journey would be. Vanilla OS has always been a different project; our goal was never just to create a Linux distribution, we aimed to create an operating system that truly serves the user without being a nuisance.

Our wonderful and tireless team is made up of enthusiasts of Linux, Open Source, and technology in general. We understand the challenges of a constantly evolving world, and as users ourselves, we feel the pressure to keep up. In Vanilla OS, this is our mantra. It doesn't mean everything will be perfect from day one, but we have a solid starting point to succeed and stay on our feet.

Vanilla OS is not just a distribution; sometimes, it's not even just an operating system. It's a vision of how user-centric technology should be, and we are committed to making that vision a reality.

### Luca, can you explain the concept of atomicity in operating systems and why it is important?

Atomic means it's indivisible, so an action either goes well *from start to finish*, or it doesn't happen at all.

Many times it has happened that a package manager encounters an error in the middle of an update (or install of a package), and leaves the system in limbo. Has the update been applied? Has it failed? At which point did it fail? We will never know.

The concept of atomicity here helps, in the sense that an update or a package install will *always* be guaranteed to succeed or to haven't been affecting the system otherwise.

This improves not only stability in the long term, but also gives the possibility of keeping track of how the system is changing in time.

### Luca, how is atomicity achieved in Vanilla OS 2 Orchid?

On Orchid we use an A/B partition system to handle updates or in general system changes.

Running system is *never touched by any change*, every change happens in the other root partition.

For example, if you boot into partition A, as long as the system is running, this partition can't be changed (thus it's *immutable*), and updates will be instead installed in partition B.

At reboot, you'll instead boot (automatically) into partition B and will have the new updated system running. Next time changes will be applied to A. And so on...

This will ensure that you will *always have a bootable system*. If an update breaks partition B, you're guaranteed to have a bootable partition A, as that was the system you were running before, and that has not been touched.

In this context the atomicity is achieved by using some concepts:

- **immutability**: the running partition *must not be modifiable at runtime*, this ensures runtime stability (no packages/libraries are changed underneath running programs) and ensures that a bootable/running system stays so.
- **system images**: an update is shipped as a complete system image, it is not handled by a package manager, this ensures that a complete system is deployed at once.
- **atomic swaps**: a new image is deployed in the non-running partition, and only if every step is successful, the old image will be removed, using a single, atomic, syscall.

These three concepts ensure that a system modification (an update, a package install, ...) is applied:

- only if an image deployment has been successful, otherwise this is scrapped and the partition will be left untouched.
- only on a non-running system, guaranteeing runtime stability.
- only on another partition, ensuring that the current, running, partition is a guaranteed restore point in case of failures.


### How does ABRoot v2 improve upon the previous implementation?

**Luca**:
The previous implementation of ABRoot (v1) used the same foundational concepts of atomicity and immutability but lacked image-based deployments. It employed a transactional approach, using the package manager (apt) to run commands in the new partition.

This method lacked reproducibility because an image-based approach provides a known state (whether it's the official image or a custom one), making it easier to track changes and thereby improving reliability and stability in the long term.

The shift to image-based deployments is about choosing reproducibility over the ease of locally changing the system. This move, transitions customization from runtime to build time, presenting a tradeoff between flexibility and reliability.

**Mirko**:
ABRoot v2 is a complete rewrite of the project and it goes further by introducing system state dumping for improved support and diagnostics, allowing efficient capture and restoration of system states. It also facilitates seamless switching between system flavors without data loss, enhancing flexibility. The rollback mechanism has been improved and is now just a reboot away, making it easier to recover from system failures. We have also introduced the ability to update the kernel flags and regenerate the initramfs.

### What were the main challenges you faced while developing and integrating ABRoot v2?

We faced a wide range of challenges during the development and integration of ABRoot v2, primarily due to two key factors: our goal to keep ABRoot distro-agnostic and our aim to maintain simplicity in its implementation.

One of the significant hurdles was designing a new partitioning layout based on LVM Thin Provisioning, which was finely implemented by Mat. We also had to set up various measures to manage the boot process and ensure SystemD worked correctly. Using OverlayFS, we aimed to allow the system administrator to continue configuring the system from the `/etc` path.

A particularly complex issue we tackled recently involved SystemD units placed by the user in `/etc` not being processed by SystemD. This was due to OverlayFS being mounted too late by SystemD itself. To complicate matters further, the encrypted LUKS2 volume containing user data and the `/etc` path needed to be mounted before OverlayFS.

To solve this, after many attempts and discussions, we created a pre-init system. This system allows us to perform necessary setups for ABRoot before SystemD starts. Despite the difficulties, experimenting with these solutions has been enjoyable, and it will make it easier for others to adopt ABRoot in future projects.

### How do OCI images via Vib contribute to the flexibility of the system?

OCI images are a widely known standard in the cloud and server environment.

Writing and modifying a Dockerfile/Containerfile(s) and using `docker build` or `podman build` is a skill that is transferable from everyday work. [Vib](https://github.com/Vanilla-OS/Vib) (Vanilla Image Builder) has been developed to further abstract the Containerfile syntax and provide an easier-to-use YAML file. This makes the process more accessible and less error-prone.

This approach offers several advantages:

- **Deployment reproducibility**: Everyone using a specific image (e.g., `vanillaos:20240509`) will have the same system configuration, regardless of their environment. This consistency simplifies debugging and supporting users, ensuring that all users are working with an identical setup.
  
- **System state tracking**: With Vib, it becomes easy to monitor and track system states, allowing us to see which packages are added, removed, or modified. This transparency aids in maintaining system integrity and managing updates effectively.
  
- **Solid transactions**: Transactions are not just a set of commands (e.g., `apt upgrade`) but a whole new image. This makes it possible to easily swap out the entire system if needed. It enhances reliability and makes rolling back changes straightforward.
  
- **Customization**: Users can create their own custom version of Vanilla OS using Vib (or Dockerfiles) by building their own image and publishing it to a Docker registry of their choice. This flexibility allows users to tailor the system to their specific needs and share their custom builds easily.

Vib uses a modular syntax, where each module defines a specific action or set of actions required to build the image. For instance, you can have modules for installing dependencies, configuring settings, or compiling source code. This modular approach makes the configuration more organized and easier to manage.

In addition to simplifying the process, Vib is not limited to Vanilla OS. Despite its name, it can be used for any project that aims to simplify the creation of Containerfile/Dockerfile. For example, we use Vib not only for Vanilla OS but also for our documentation server Chronos, the Vanilla OS website, and essentially everything else. This versatility makes Vib a powerful tool for a wide range of applications beyond Vanilla OS.

### How does the atomicity approach in Vanilla OS compare to other operating systems?

At the moment, there are three main approaches to atomicity in the Linux world:

- A/B partitioning
- Btrfs system snapshots
- OSTree

Each of them has its own pros and cons.

Vanilla OS's A/B approach is also shared by SteamOS, ChromeOS, and Android (although with different tooling/approaches), and consists of having two copies of the system: a running copy (A) and a dormant copy (B). When a modification is needed (e.g., an update), it is performed on the dormant partition. At the next reboot, the roles will switch (B starts running, A becomes dormant), and so on. This approach requires a specific partition layout (two root partitions, a data partition, and so on) but is filesystem-independent (can be XFS, Ext4, Btrfs, etc.).

The Btrfs snapshots approach is used by OpenSUSE MicroOS and Aeon. The concept of atomicity/immutability is the same: the current snapshot (instead of a partition) is read-only and every change is done in a new snapshot that is activated upon reboot. Compared to A/B, it is filesystem-dependent (Btrfs, obviously) but is also more flexible, as it provides many rollback points (not only one as A/B).

The OSTree approach is used by Fedora Silverblue, Kinoite, and their spins. It is also filesystem-independent and doesn't require a specific partition layout. The underlying architecture might be summarized as “git for operating system binaries". It operates in userspace and, at its core, is a git-like content-addressed object store with branches (or “refs”) to track meaningful filesystem trees within the store. Similarly, one can check out or commit to these branches. It also supports OCI images (see the [Universal Blue project](https://universal-blue.org/)) and, while by default it only keeps two deployments (similar to the A/B scheme), you can pin older deployments, thus having more restore points.

### What is the role of Distrobox in Vanilla OS 2 Orchid?

**Luca**:
Distrobox is an escape latch from the rigidity introduced in the system. Using it directly or through APX or VSO allows the user to have a more familiar mutable environment where they can install packages, poke around, and experiment. The advantage is that these environments can be destroyed and recreated at any moment without compromising the stability of the running system.

It also provides compatibility with other distributions, allowing users to expand their package selection by accessing other distributions' repositories. This flexibility broadens the range of available software, making it easier to find and use the tools and applications needed for various tasks.

**Mirko**:
As Luca mentioned, Distrobox plays a crucial role in Vanilla OS. The system makes extensive use of containers to provide users with the flexibility they need without compromising critical system components. Take VSO (Vanilla System Operator), for example. In Vanilla OS 22.10, it was merely an update manager. Today, among many other things, it also serves as the system shell. When an advanced user opens the terminal, they won't find themselves in the host shell but in the VSO shell, which is a Distrobox container with multiple optimizations to integrate it seamlessly with the system.

Users can operate in Vanilla OS 2 as if they were in a regular Linux distribution. However, if something goes wrong, VSO will propose reinitialization, allowing the container to be regenerated without affecting critical system parts or user data.

### Mirko, which feature do you think is the most innovative in Vanilla OS 2 Orchid and why?

There are many innovative features of Vanilla OS 2 but the one that is probably most noteworthy is [Vib](https://vib.vanillaos.org). Although it is not strictly part of the system itself, since as explained above it can be used in multiple contexts, this small piece of technology allows you to obtain unparalleled flexibility in the world of OCI images.

### What are your thoughts on the future development of Vanilla OS, especially concerning immutability and system security?

Well, when it comes to the future development of Vanilla OS, especially regarding the immutability and security of the system, we are pretty sure about the direction we are heading. Our plans include the implementation of robust hardening measures aimed at reinforcing the system against potential threats and challenges in the path.

This will be an important process for the project and while some of these measures have already been adopted in Orchid, many others will see the light of day as a series of upcoming updates.

---

We hope this interview with Luca Di Maio and Mirko Brombin has provided you with a deeper understanding of the immutability features and the innovative ABRoot v2 in the upcoming second version of Vanilla OS. Stay tuned for more updates and insights as we continue to innovate and improve your system.

If you're interested in contributing or learning more, be sure to visit our website and join our vibrant community.
