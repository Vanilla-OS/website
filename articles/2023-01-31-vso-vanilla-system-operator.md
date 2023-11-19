---
title: "VSO is the Vanilla System Operator"
description: "Explore VSO, your teammate in Vanilla OS."
date: 2023-01-31
keywords:
    - VSO
    - Vanilla System Operator
    - Updates
    - Automation
    - Vanilla OS
layout: article
published: true
comments: true
---

VSO, or Vanilla System Operator, is a core component of Vanilla OS, a Linux distribution that aims to offer a hassle-free and automated experience. One of the crucial features of VSO is providing automated and tested updates in the background. Updates are essential for the stability and security of the system, and VSO takes care of them smartly and efficiently.

## Importance of updates

Updates are essential for maintaining **stability** and **security** of any operating system. They bring bug fixes, security patches, and performance improvements that help keep your system running smoothly. However, manually updating a system can be frustrating, especially if it involves waiting for updates to be applied every time you boot your computer. With VSO, this task is automated in the background, ensuring that your system is always up-to-date and secure.

Not updating your system can expose it to potential security vulnerabilities. Outdated software leaves your system prone to hacking and malware attacks, putting your data and personal information at risk. VSO ensures that your system is always up-to-date, resulting in a secure and protected system.

Stability is another crucial aspect of an operating system. Installing updates can sometimes result in conflicts or compatibility issues that can lead to instability or crashes. However, VSO tests the updates before installing them, ensuring they don't cause any problems with the underlying system. It helps keep your system stable and running smoothly. VSO performs updates via [ABRoot](https://vanillaos.org/blog/article/2023-01-28/why-we-switched-from-almost-to-abroot), the transactional system which is atomic, meaning that if an update fails, no changes or modifications get applied to the system.

## Schedule and Smart Updates

The updates are scheduled either weekly or monthly, as per the user's choice, providing even more flexibility.

However, the updates are not necessarily always performed on the set deadline. By default, the Smart Updates function performs various checks ranging from CPU, memory and internet usage, temperatures, to battery life before proceeding with the update. It ensures that the updates are installed smartly and efficiently without disturbing the user's workflow.

If you prefer more control, Smart and Automatic updates can also be disabled from the Vanilla Control Center. This way, you can choose if you want VSO to take care of updates or if you want to handle them yourself.

## Automate your tasks

In addition to updates, VSO has several automated tasks, allowing you to automate various operations in the system. For example, you can create specific tasks to be performed when a device is plugged-in into the system, every X time, or when the battery reaches a certain percentage. You can even use a custom script as a condition, so when it returns 0, the chosen operation gets performed.

Despite Vanilla OS's focus on automation, users can still act as operators. You can force an update anytime with the following command:-

```bash
sudo vso trigger-update --now
```

Or use ABRoot for more complex tasks like installing core packages in the root system or updating the [kernel parameters](https://documentation.vanillaos.org/en/abroot#kernel-parameters).

## Useful links

- [VSO documentation](https://documentation.vanillaos.org/en/vso-manpage)
- [VSO source code](https://github.com/Vanilla-OS/vanilla-system-operator/)
- [ABRoot documentation](https://documentation.vanillaos.org/en/abroot)
- [ABRoot source code](https://github.com/Vanilla-OS/ABRoot/)
