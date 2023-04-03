---
title: "Vanilla OS 22.10 Kinetic is out!"
description: "First stable release of Vanilla OS 22.10 Kinetic is released."
published: 2022-12-29
layout: article
published: true
comments: true
---

It is with great pleasure that we announce that Vanilla OS 22.10 Kinetic, the 
first stable release of the project, is available for download!

We have been working on the project for many months, there were many changes 
along the way and also many complications, but we managed to get through them.

Introducing such a large project is not easy, there are many ways, many means 
and so many things to say. To make it easier for you to understand this project,
we created a commercial like the big guys do (or at least we tried). Here it 
is below, enjoy it but then come back here, we have a lot to talk about!

<div class="video">
    <iframe src="https://www.youtube.com/embed/aDvIJ_Hu90Y?controls=0" allowfullscreen="" frameborder="0" height="315" width="560"> </iframe>
</div>

Vanilla OS is not an ordinary Linux distribution, it is a project that sets 
itself many goals and is not afraid to put itself out there, proudly displaying 
its unique technologies such as the Apx sub-system, its own automatic update 
system, and ABRoot transactions.

![](/assets/uploads/vanilla-os-stable-illustration.webp)

So many terms, so many promises, so much everything. But let's see together, in 
detail what the strengths of Vanilla OS are, the features that make it unique.

## Apx

Vanilla OS comes with its own sub-system.. ehm.. package manager, called Apx 
(`/à·peks/`).

Apx introduces a whole new paradigm in package management. The idea is to use 
your system only as a box for storing your files, leaving it clean of packages 
and limiting the risk of breaking due to incompatible, poorly constructed or 
conflicting packages.

It achieves this by installing software inside one or more containers fully
managed by Apx having restricted access to your system’s resources while still
being able to use the same drivers, hardware, etc.

By default, Apx provides a container based on your Linux distribution (Ubuntu 
22.10 for Vanilla OS 22.10) and wraps all commands from the distribution’s 
package manager (apt for Ubuntu).

![The "apx enter" command entering an Ubuntu 22.10 container, with the ouput of "cat /etc/os-release".](/assets/uploads/vanilla-os-apx.png)

Nevertheless, you can install packages from other package distributions. For 
example, using the `--aur` flag, a new container based on Arch Linux will be 
created. Here, apx will manage the packages from the AUR (Pacman and yay), 
tightly integrating them with the host system. Using the `--dnf` flag with apx 
will create a new container based on Fedora Linux. Here, apx will manage 
packages from Fedora’s DNF repository, tightly integrating them with the host 
system.

![The Vanilla Control Center showing the list of installed applications in a "Sub System" tab, "htop". There are also "Drivers" and "Updates" tabs.](/assets/uploads/vanilla-os-apx-control-center.png)

Graphical applications installed inside apx containers are automatically added 
to the Applications menu as well as the “Open with” menu in the file manager. 
They are also listed in the Sub System section of Vanilla control center.

## ABRoot

ABRoot is a new technology that allows you to perform changes to your system
atomically, limiting the risk of breaking your system.

Atomicity is the ability to perform a specific operation in a way where if it
fails, nothing will be changed and if it succeeds, the changes will be
applied in their entirety.

ABRoot achieves this by transacting between 2 root file systems: A and B. Let's
make an example. Let's say you want to install a new package. ABRoot will check
which partition is the present root partition (i.e A), then it will mount an
overlay on top of it and perform the transaction. If the transaction succeeds,
the overlay will be merged with the future root partition (i.e B). On your
next boot, the system will automatically switch to the new root partition (B).
In case of failure, the overlay will be discarded and the system will boot
normally, without any changes to either partition.

## ~~Automatic~~ Smart Updates

Vanilla OS comes with a new concept of automatic updating, an intelligent 
system let's say. VSO (Vanilla System Operator) is the tool that will 
periodically check for an update and then download and install it in the 
background if the device is not under heavy usage. In fact, VSO checks that 
certain checks are met, such as whether the resources are free (CPU/RAM), 
whether the connection allows it, whether the battery is at least 30%, etc.

We designed this system to take away an annoying task from the user, who 
simply wants to do their own thing. Updates go through ABRoot transactions and 
are applied on the next reboot, without taking extra time during boot.

![The Updates tab of the Vanilla Control Center showing the latest update check, weekly updates scheduling set, and "SmartUpdate," where the system will not update if the system is under load or the battery is low.](/assets/uploads/vanilla-os-updates.png)

From the Vanilla Control Center, it is possible to set the update frequency, 
check when the last one was performed, and turn off Smart Update features.

## First Setup

Unlike other Linux distributions, Vanilla OS is designed to provide a user 
experience built for you, just like a suit!

After the first boot, you will be prompted to complete the installation through 
a guided process. Here you will be able to make several choices, such as for 
Dark Mode, Flatpak, AppImage, NVIDIA drivers, and more.

![The first boot prompt for Vanilla OS with a button to confirm beginning setup.](/assets/uploads/vanilla-os-first-setup.png)

The process is designed to be fast and as minimally invasive as possible. Once 
complete, you will need to reboot to be able to use your device with Vanilla OS!

## GNOME 43

Vanilla OS uses GNOME 43 as its Desktop Environment. It is a stock, clean 
version with as few changes as possible to give you the best GNOME experience 
ever.

We chose to provide GNOME because of its uniqueness and ease of use, which make 
it the perfect companion to Vanilla OS.

![GNOME 43 with the default Vanilla OS wallpaper.](/assets/uploads/vanilla-os-gnome.png)

All official Vanilla OS applications are built with GTK4 and Libadwaita to be 
as consistent as possible with the GNOME experience.

## Official Wallpapers

Vanilla OS comes with a set of official wallpapers, designed by our team and
community. They are available in high resolution and are designed to best fit
with the system.

![A collection of Vanilla OS themed wallpapers.](/assets/uploads/vanilla-os-backgrounds.png)

Every wallpaper has a light and a dark version, so you can choose the one that
best suits your needs.

## Final Words

Vanilla OS is a project that we have been working on for a long time, and we
are very proud of it. We hope that you will like it as much as we do.

So, what are you waiting for? Download Vanilla OS 22.10 and try it out.

## Need more?

Check out our [handbook](https://handbook.vanillaos.org) to learn more about
how to use Vanilla OS, read the [documentation](https://documentation.vanillaos.org)
or join our [Discord server](https://discord.gg/3cD2Q7Ht3S) to ask questions
and get help.
