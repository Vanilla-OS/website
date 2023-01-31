---
title: "VSO is the Vanilla System Operator"
description: "Explore VSO, your teammate in Vanilla OS."
published: 2023-01-31
layout: article
published: true
comments: true
---

VSO, or Vanilla System Operator, is a core component of Vanilla OS, a Linux distribution that aims to offer a hassle-free and automated experience. One of the key features of VSO is the automatic and tested updates in the background. Updates are essential for the stability and security of the system, and VSO takes care of them in a smart and efficient manner.

## Importance of updates

Updates are an integral part of maintaining the **stability** and **security** of any operating system. They bring important bug fixes, security patches, and performance improvements that help keep your system running smoothly. However, manually updating a system can be a frustrating task, especially if it involves waiting for updates to be applied every time you boot your computer. With VSO, this task is automated in the background, ensuring that your system is always up-to-date and secure.

Not updating your system can expose it to potential security vulnerabilities. Outdated software can leave your system open to hacking and malware attacks, putting your data and personal information at risk. VSO ensures that your system is always up-to-date, ensuring that your system is secure and protected.

Stability is another crucial aspect of an operating system. Installing updates manually can sometimes result in conflicts or compatibility issues that can lead to instability or crashes. VSO, on the other hand, tests the updates before installing them, ensuring that they don't cause any issues with the system. This helps keep your system stable and running smoothly. VSO performs updates via [ABRoot](https://vanillaos.org/2023/01/28/almost-vs-abroot.html), the transactional system which is atomic, meaning that if an update fails, no changes are made to the system.

## Schedule and SmartUpdate

The updates are scheduled either weekly or monthly, as per the user's choice, providing even more flexibility.

However, the updates are not necessarily always performed on the set deadline, in fact the SmartUpdate function active by default, checks various values before proceeding with the update such as CPU, memory and internet usage, temperatures, battery life, and more. This ensures that the updates are installed in a smart and efficient manner, without disturbing the user's workflow.

If you prefer more control, both smart and automatic updates can be disabled from the Vanilla Control Center. This way, you have the freedom to choose whether you want VSO to take care of updates or if you'd rather handle them yourself.

## Automate your tasks

In addition to updates, VSO also has several automated tasks, allowing you to automate various operations in the system. For example, you can create a task that performs an operation when a specific device is plugged in, or every X time, or when the battery reaches a certain percentage. You can even use a custom script as a condition, so when it returns 0, the chosen operation is performed.

Despite Vanilla OS's focus on automation, users still have the ability to act as the operator. You can force an update anytime with the command 

```bash
sudo vso trigger-update --now
```

or use ABRoot for more complex tasks like installing core packages in the root system or updating the [kernel parameters](https://documentation.vanillaos.org/docs/ABRoot/#title3).

## Useful links
- [VSO documentation](https://documentation.vanillaos.org/docs/vso/manpage)
- [VSO source code](https://github.com/Vanilla-OS/vanilla-system-operator/)
- [ABRoot documentation](https://documentation.vanillaos.org/docs/ABRoot/)
- [ABRoot source code](https://github.com/Vanilla-OS/ABRoot/)
