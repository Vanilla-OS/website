---
title: "Vanilla OS Orchid - Developer Preview 🎟️"
description: "Today, we introduce Vanilla OS 2, codenamed Orchid."
published: true
date: 2023-08-27
keywords:
  - Vanilla OS
  - Vanilla OS Orchid
  - Orchid
  - Download
  - Developer Preview
layout: article
comments: true
---

Eight months after the release of Vanilla OS 22.10 Kinetic, we are finally ready to let you experience the work we have done over these long months firsthand.

Today, we introduce Vanilla OS 2, codenamed Orchid.

With Orchid, a new generation begins for Vanilla OS. We rethought the project from its foundations, examining every detail to provide you with a stable, secure, high-performing, and above all, user-friendly experience.

## 🆕 Changelog

There are many new features in this new version, and we have already discussed them in various other articles on our blog [[1]](https://vanillaos.org/blog/article/2023-03-07/vanilla-os-20-orchid---initial-work) [[2]](https://vanillaos.org/blog/article/2023-06-11/vanilla-os-orchid---devlog-11-jun) [[3]](https://vanillaos.org/blog/article/2023-07-05/vanilla-os-orchid---devlog-5-jul). Let's go over its core features together.

Before we proceed, we want to clarify that these builds should be considered potentially unstable. The functionalities within are not yet entirely complete, and several others have not yet been implemented. The purpose of these releases is to provide a taste of what will be in the stable release.

### System

* Switched to a hybrid base composed of Debian packages and modules
* Now built using [Vib images](https://vanillaos.org/blog/article/2023-06-11/vanilla-os-orchid---devlog-11-jun)

### ABRoot

* Transactions utilize OCI images to install system updates
* The dump function allows exporting details for assistance and system replication

### Vanilla Installer

* Manual partitioning now allows the user to install the OS into multiple disks (i.e. the boot and root partitions one disk and the var partition in another)
* Switched from Distinst to our own OCI-focused installer backend called [Albius](https://github.com/Vanilla-OS/Albius)
* Added a page for network configuration, as well as a page checking connectivity
* Added recovery options which allow the user to use the live ISO as a rescue image for their existing installation
* Added support for encrypting the `/var` partition (partition that holds all user data) with LUKS2

### First Setup

* Now uses a reduced GNOME session to ensure completion
* Added a page for network configuration
* Now offers 2 configuration modes: recommended and advanced
* Removed the password prompt
* Added user creation step
* Added hostname configuration step
* Resolved several input validation bugs
* Improved connection check
* New icon
* 🐞 New bug: the process is very slow and our team is working hard to fix it for the Beta release

### Vanilla System Operator

* New meeting point between system and user
* Default manager for .deb packages

### Apx

* Support for stacks (recipes) to replicate environment configurations
* Support for definition of package managers
* Support for any system released as an OCI image
* Apx graphical interface for easier usage

### Vanilla Tools

* The `nrun` command allows the user to run software using the NVIDIA discrete GPU if present
* The `cur-gpu` command shows the current GPU

Check our [Roadmap](https://vanillaos.org/roadmap) for more information about the features we are working on.

## 🎬 More and GUADEC

Many of you probably know that we presented Vanilla OS Orchid at GUADEC 2023 in Riga. If you missed it and would like to know more about the changes we are making you can [watch our talk on YouTube](https://www.youtube.com/watch?v=hv-bkYpHSbQ&t=444s&ab_channel=GNOME) and download a PDF of the presentation [here](https://cdn.vanillaos.org/assets/Vanilla%20OS%20-%20GUADEC%202023.pdf).

## ⏭️ What's next

The team is proceeding with the next tasks in order to release a Beta version of Vanilla OS Orchid. If you are willing, and brave enough, to test the Alpha release: please provide us with feedback of your experience and any problems you encounter by opening an issue in the relevant [GitHub repository](https://github.com/orgs/Vanilla-OS) or reach us via our communities and socials!

## Alpha builds

The Alpha builds of Vanilla OS 2 Orchid are available [here](/download/orchid/alpha). Remember to carefully read the notes provided on the page before proceeding with the installation.
