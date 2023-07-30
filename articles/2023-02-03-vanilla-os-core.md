---
title: "Vanilla OS Core - A minimal and clean base"
description: "An introduction to Vanilla OS Core, a minimal Vanilla OS base."
date: 2023-02-03
keywords:
    - Vanilla OS Core
    - Vanilla OS
    - Core
    - Flavors
    - GNOME
    - KDE
    - Vanilla OS KDE Edition
layout: article
published: true
comments: true
---

We have chosen the GNOME desktop environment as the default in Vanilla OS. To cater to the diverse needs of users, we are developing Vanilla OS Core (a minimal and clean base that provides the necessary components for an operating system without the desktop environment and without losing all the benefits of the Vanilla OS core components).

## Flavors

The purpose of Vanilla OS Core is to serve as a foundation for various Vanilla OS flavours, each designed to meet the specific needs of different users.

It is important to note that the default desktop environment for the original version of Vanilla OS will always be GNOME. With alternative options offered as various flavours, it is crucial to maintain the integrity and quality of the Vanilla OS project. To ensure consistency and provide a unified experience few guidelines are to be followed by each flavour to be considered official.

The following is a preview of the guidelines under consideration:

- The name must follow the pattern `Vanilla OS <Flavor Name> Edition`, for example, Vanilla OS KDE Edition.
- It must be based on Vanilla OS-Core.
- It must not make any modifications to the core components of Vanilla OS-Core.
- It must be available for all architectures supported by Vanilla OS Core (currently only amd64).
- Essential graphical applications like the Vanilla Control Center, First Setup and Upgrade Utility must be rewritten to follow the guidelines and toolkit of the chosen desktop environment for the flavour. On the other hand, the installer can be an existing one that respects the UX of the desktop environment (e.g. Calamares for KDE).
- The features of Vanilla OS integrating with the desktop environment are recommended to be implemented in the new flavour.
- The flavour must include all default applications as in the original Vanilla OS (such as a browser and file manager).
- The desktop environment should be in its original "vanilla" form without custom themes or icons. This exception applies to flavours featuring a window manager like Openbox or i3.

All of these guidelines are still under discussion, particularly the first one. More of these guidelines will get added here in future.

### KDE

The first flavour to get developed is Vanilla OS KDE Edition, featuring the vanilla KDE Plasma desktop environment. Development has not yet begun, but plans are to start work this year.

Want to join the development team? Reach us on [Discord](https://discord.gg/3cD2Q7Ht3S).
