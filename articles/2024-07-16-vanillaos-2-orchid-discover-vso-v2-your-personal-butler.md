---
title: "Discover VSO v2: Managing your Vanilla OS installation like never before!"
description: "Explore the new features of VSO v2, the all-in-one tool that can help you manage your Vanilla OS Installation."
published: true
date: 2024-07-16
keywords:
  - Vanilla OS
  - Vanilla OS Orchid
  - Orchid
  - Download
  - Developer Preview
  - Beta
  - VSO
  - VSO Shell
  - Vanilla System Operator
  - Android
  - Sideload
layout: article
comments: true
---

After [discussing how APX v2 meets the needs of developers and creators of all kinds](https://vanillaos.org/blog/article/2024-07-11/discover-apx-v2-the-new-essential-tool-for-developers-and-creators-on-vanilla-os-orchid), it's time to talk about another essential component of Vanilla OS, which has undergone a complete rewrite and now plays a fundamentally new role. We are talking about VSO v2, the Vanilla System Operator.

## Support for Android Applications

One of the most exciting and requested features of VSO v2 is the integration of Android applications through Waydroid, with native support for the F-Droid store. This experimental feature will be available from day one on Vanilla OS 2 Orchid and will be continuously improved upon in future updates.

Think about all the apps you use daily on your smartphone: social media, productivity tools, games, and communication apps. Now imagine being able to access all these apps directly from your desktop with the same ease and functionality. Wooohoo, right?

With VSO v2, you can run Android applications in a window on your desktop, making it possible to use those apps you love in your routine, making your Vanilla OS installation even more versatile and powerful. It allows you to have a single platform for all your digital needs. For example, are you a developer who needs to test the compatibility of your applications on different platforms? Now you can do it without changing devices.

<div class="flexGrid flexGrid--2">
    <img src="/uploads/vso-v2-android-launcher.png" alt="Image of VSO showcasing the Android launcher" class="img img--fluid">
    <img src="/uploads/vso-v2-android-launcher2.png" alt="Image of VSO showcasing the Android launcher with application menu" class="img img--fluid">
</div>
<div class="flexGrid flexGrid--2">
    <img src="/uploads/vso-v2-android-launcher3.png" alt="Image of VSO showcasing the Android Launcher with open applications" class="img img--fluid">
    <img src="/uploads/vso-v2-android-launcher4.png" alt="Image of VSO showcasing the Android Launcher with application menu and open applications" class="img img--fluid">
</div>

All installed applications are automatically available in the system applications menu, and you can launch them at any time, just like native apps.

![VSO Exported Android Apps in Application Menu](/uploads/vso-android-apps-in-application-menu.png)

## Optimized Update Management

The VSO update manager has been adapted to be compatible with the new ABRoot v2 technology, the beating heart of Vanilla OS 2 Orchid. But the news doesn't end there. We have collected a lot of feedback over this past year and beyond and have consolidated the updated scheduling system to make it even more efficient and user-friendly.

![VSO v2 Update Manager in System Settings](/uploads/vso-update-manager.png)

Now, when an update is in progress, an icon appears in the top bar of the system that allows you to monitor the status of the update itself. And if the update starts at the least convenient time? No problem! You can easily stop the update by clicking on the icon and resume it at a more convenient time. This ensures that updates never interrupt your workflow, giving you maximum control over your system. But don't worry, VSO is smart and will propose updates only on a daily, weekly, or monthly basis, and only when your device is not under stress. Are you playing a game or watching that movie you've been wanting to see for a long time? VSO won't let any updates slip through!

## Enhanced Task Automation

One of the most powerful features of VSO v2 is its task automation system, which has been significantly enhanced to offer greater flexibility and control.

**What are VSO tasks?**

Think of them as a set of instructions that are executed only under a certain condition.

**What condition?**

The one you choose, without any limits. You can set simple tasks that launch a set of applications when you connect a certain device or something more complex like sending you a notification when that game on Steam has reached the price you wanted and much more. The options are multiple and allow you to customize automation based on your needs.

The real strength of VSO v2 lies in the `--on-condition-command` option, which allows more advanced users to create tasks based on highly programmable custom conditions. This means you can use scripts and commands of any kind as a condition for executing tasks. VSO will simply expect an exit code 0 or 1 to proceed accordingly, making automation extremely powerful and versatile.

**What will your first task be?**

Stay tuned; in one of the upcoming updates of Vanilla OS 2 Orchid, you might be able to publish your automations to share them with other users!

## Simplified Sideloading

Installing new software on Vanilla OS has never been easier. With VSO v2, you can install Debian packages and Android apps with a simple double-click.

![Installing the Chromium APK using the sideload utility](/uploads/sideload-utility-install.webp)

Imagine you've downloaded a new Android game or a Debian package of an application. Just double-click on the downloaded file and follow the on-screen instructions. In a few seconds, the application is installed and ready to use.

This system greatly simplifies the installation of new apps, eliminating the need to use complex commands or navigate through complicated menus. Everything is at your fingertips and immediately accessible.

## VSO: Your New Shell

The true revolution of VSO v2 is its role as the new default shell in Vanilla OS. When you open the Terminal, you no longer enter the system shell but a containerized space based on APX. This subsystem, built specifically for Vanilla OS 2 Orchid, is fully integrated and allows you to operate with the freedom and flexibility of any other operating system, without ever touching the critical components of the system that remain immutable.

In the APX's VSO subsystem, you can install and use CLI and graphical applications that will be immediately available in the Vanilla OS applications menu. This level of integration makes the user experience incredibly smooth and versatile, as well as tangible.

And if something goes wrong? No problem! If the subsystem breaks, you can easily reinitialize it without losing your personal data. Just press ALT+F2, type `reset-vso`, and follow the on-screen instructions. This guarantees you a clean and functioning work environment without worries.

Are you an advanced user and need to access the host? Don't worry, the system is very strict about it, but there are still many things you can tweak, such as the `/etc` path and `systemd`. To do this, just type `host-shell` to operate, and once you're done, type `exit` to return to VSO.

Remember, on the host, you'll need to use PolKit to operate as a system administrator, so prepend `pkexec` to any command that requires specific permissions.

With these new features, VSO v2 is not just an update but a true next-gen experience in Vanilla OS. Get ready to discover a new world of possibilities with Vanilla OS 2 Orchid, which will be released soon.
