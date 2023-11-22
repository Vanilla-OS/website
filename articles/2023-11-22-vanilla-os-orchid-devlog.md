---
title: "Vanilla OS Orchid - Devlog 22 Nov"
description: "We are excited to announce that we have recently completed the transition to LVM thin provisioning in the installer."
published: true
date: 2023-11-22
keywords:
  - Vanilla OS
  - Vanilla OS Orchid
  - Orchid
  - Vanilla Installer
  - Albius
  - LVM
layout: article
comments: true
---

The root partitions combined taking up 40 GB of storage was one of the primary concerns of users of Vanilla OS Kinetic, and a majority of the storage space was left unused. Since last year, we have been discussing efficient alternatives with a smaller storage footprint.

A few weeks ago, we started working on [LVM](https://en.wikipedia.org/wiki/Logical_Volume_Manager_(Linux)) (Logical Volume Management) thin provisioning support, for both our installer backend [Albius](https://github.com/Vanilla-OS/Albius) and the [Installer](https://github.com/Vanilla-OS/vanilla-installer) frontend.

LVM thin provisioning allows users to create virtual filesystems larger than the available physical storage. This is possible due to LVM thin pools allocating blocks when they are written, rather than when a volume gets created. Thin provisioning is commonly found in places like VPS clusters, where a provider can allocate a very large storage pool (e.g. 500TB) without needing to have that amount of physical storage. This way, they can provide customers with adequate storage limits and only buy more storage when it's actually needed.

We have successfully added LVM thin provisioning support to Vanilla OS with the recent [alpha build #89](https://vanillaos.org/download/orchid/alpha) (thanks to the incredible work of our Software Engineer, [**Mateus Melchiades**](https://github.com/matbme)). This setup allows us to have two virtual root partitions inside a single pool, as only the required space is being used. This opens up opportunities to have smaller installations with extra storage for you to store your data.

## New Partitioning Structure

With the introduction of LVM thin provisioning support, we are changing the default partitioning structure of Vanilla OS. The new manual partitioning requirements are:

- GPT/MBR partitioning table (in Device selection)
- 1 GB (1024 MB) storage for Boot partition in `ext4` format.
- 512 MB storage for EFI (System) partition in `fat32` format.
- 20.5 GB (20992 MB) storage for the Root partition pool unformatted.
- Optionally, create a Swap partition for hibernation support (we use `zram` by default).
- The remaining storage should be used for the var partition in `btrfs` format. This partition is where all of your data is stored.

![Image of the new partitioning structure for LVM thin provisioning support](/uploads/lvm-partitioning-structure.webp)

With these changes and Full Disk Encryption support with LUKS, Orchid is gearing up to be a more efficient and secure release for all users. Try out the [alpha builds](https://vanillaos.org/download/orchid/alpha) today, and let us know if you stumble on any new issues.

_ Vanilla OS Team
