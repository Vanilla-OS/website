---
title: "Introducing the Vanilla Installer"
description: "Vanilla OS has a whole new installer in GTK4 and libadwaita."
date: 2022-10-16
keywords:
  - Vanilla Installer
  - GTK4
  - libadwaita
  - Calamares
  - Crystal Linux
  - Jade installer
  - Python
  - Vanilla OS
  - Vanilla First Setup
  - Installation process
  - GNOME guidelines
  - Distinst
layout: article
published: false
comments: true
---

In the past few days, we have been working on a new installer that would make
the first experience with Vanilla OS as pleasant as possible. The new installer
aims to be visually faithful to GNOME guidelines and compatible with distinst,
the backend used to install the system.

## The new installer

The new installer is written in <mark>GTK4 and libadwaita</mark>, and it is a
complete replacement of the old installer ([Calamares](https://github.com/calamares/calamares)).
In the past few weeks, we have announced that Vanilla OS will be using the
[Jade](https://git.getcryst.al/crystal/software/jade-gui) installer from the
[Crystal Linux](https://getcryst.al/site) team, but after some testing and
discussions we decided to write our own to best fit it with the Vanilla OS
experience.

The [Vanilla Installer](https://github.com/Vanilla-OS/vanilla-installer) is
built on top of the [Vanilla First Setup](https://github.com/Vanilla-OS/first-setup)
project, the utility that is used to configure the system after the installation.
Both projects are written in **Python** and are meant to be flexible and easy to
maintain.

## The new installer in action

We are currently testing the new installer and **will release it with the next
open beta**. It is however possible to test it in the current images by following
the instructions at the end of the article.

The installation process is divided into seven steps:

- Welcome
- Language
- Keyboard
- Timezone
- Partitioning
- User
- Installation

The **Welcome** screen allows the user to choose between live mode and 
installation mode. The live mode is used to test the system without installing 
it, while the installation mode is used to install the system on the device.

![Welcome - Vanilla Installer](/uploads/installer-welcome.png)

Once the user has chosen the installation mode, the **Language** screen is shown.
In this screen, it is possible to choose the language in which Vanilla OS will be
installed. Here a search bar is available to quickly find the language.

![Language - Vanilla Installer](/uploads/installer-language.png)

The **Keyboard** screen allows the user to choose the keyboard layout that will
be used in the system. As for the language, a search bar is available to
quickly find the keyboard layout, plus a test area to test the keyboard layout.

![Keyboard - Vanilla Installer](/uploads/installer-keyboard.png)

The **Timezone** screen allows the user to choose the timezone in which the system
will be installed. The timezone is automatically set to the one detected by the
system, but it is possible to change it to another one. Once a region is
selected, the zones are automatically filtered. Other than the usual search bar,
a preview of the current time is available to quickly test the timezone.

![Timezone - Vanilla Installer](/uploads/installer-timezone.png)

The **Partitioning** screen allows the user to choose where to install the system.

![Partitioning - Vanilla Installer](/uploads/installer-partitioning.png)

Once a disk is selected, it is possible to choose between automatic or manual
partitioning. In automatic partitioning, the disk is automatically partitioned
with the following layout:

- 512 MB EFI partition
- 512 MB swap partition
- 1024 MB boot partition
- The rest of the disk is used for the root partition (btrfs)

It is also possible to launch the GParted utility to manually partition the
disk.

<div class="grid-images">
  <img src="/uploads/installer-partitioning-1.png" alt=" Auto Partitioning - Vanilla Installer">
  <img src="/uploads/installer-partitioning-2.png" alt=" Manual Partitioning - Vanilla Installer">
  <img src="/uploads/installer-partitioning-3.png" alt=" Confirm Partitioning - Vanilla Installer">
</div>

The **User** screen allows the user to set up the user account that will be created
in the system. It is possible to choose the Name, Username and Password. Plus
a preview of the Adwaita avatar is shown.

![User - Vanilla Installer](/uploads/installer-user.png)

Before starting the installation, a summary of the installation is shown, so
the user can check if everything is correct before proceeding.

![Installation - Vanilla Installer](/uploads/installer-confirm.png)

Finally, the **Installation** screen shows the progress of the installation. Here
we placed a tour of the system to show the user what to expect after the
installation. It is also possible to toggle the console to see the installation
logs.

![Installation - Vanilla Installer](/uploads/installer-installation.png)

## Testing the new installer

The new installer is not yet available in the open beta images, but it is
possible to test it in the current images by following these steps:

- Download the latest image
- Boot the image
- Open a terminal
- Run the following commands:

```bash
apx --sys update
apx --sys install distinst vanilla-installer
sudo almost enter rw
vanilla-installer
```

Once the system is installed, remove the `calamares` package manually with:

```bash
apx --sys remove calamares
```

## ❤️ Thanks

We would like to thank all the people that joined the development of the new
installer (design, development and testing), especially:

- [Muqtxdir](https://github.com/Muqtxdir) (development and design)
- [kra-mo](https://github.com/kra-mo) (illustrations)
See [here](https://github.com/Vanilla-OS/vanilla-installer/graphs/contributors)
for the full list of contributors.

Also, we would like to thank the Crystal Linux team (mainly [axtloss](https://github.com/axtloss))
for their work on the Jade installer, which was a great inspiration for the
new installer.

_ The Vanilla Team
