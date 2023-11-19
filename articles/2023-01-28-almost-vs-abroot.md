---
title: "Why we switched from Almost to ABRoot"
description: "Explore the advantages and disadvantages of using Almost and ABRoot technologies to achieve immutability."
date: 2023-01-28
keywords:
    - Almost
    - ABRoot
    - Immutability
    - Atomicity
    - Vanilla OS
layout: article
published: true
comments: true
---

If you've been following the Vanilla OS project from the start, you'll notice that our plans for immutability have changed. We've developed two technologies, [Almost](https://github.com/Vanilla-OS/almost) and [ABRoot](https://github.com/Vanilla-OS/ABRoot), that we've used to achieve immutability in our system. In this article, we want to go into detail about our choice to switch from Almost to ABRoot, explaining the advantages and disadvantages of each technology.

## Immutability and Atomicity

Immutability and atomicity are two essential concepts in computer science, particularly in domains dealing with operating systems. Immutability is the ability to prevent accidental or unauthorized changes to the current state of a system. It gets achieved by making specific files or directories read-only or using other techniques such as copy-on-write or overlay filesystems.

Atomicity, on the other hand, refers to the ability of a system to ensure that a series of operations gets executed as a single, indivisible unit. In other words, if any part of the operation fails, it is rolled back entirely, leaving the system in its previous state. It often gets achieved using transactional systems, which allow multiple grouping and execution of operations as a single transaction.

Both immutability and atomicity are essential in ensuring the stability and security of an operating system. By preventing unauthorized changes and ensuring that updates get executed as a single, indivisible unit, a system can become more robust and resistant to errors and failures.

## Almost and ABRoot

Almost was our first approach to achieving immutability. It was created and developed by our team to achieve immutability by toggling the "i" (immutability) attribute of files. While this made it possible to prevent accidental changes to the system, it wasn't a proper immutable solution. When updating the system, the immutability attribute was turned off, allowing changes to the root partition. It meant there was no validation or previous state to recover if something went wrong during the update.

ABRoot, on the other hand, is a fully atomic transactional system developed by our team. It performs transactions between two root partitions. It means that a new root always gets generated, and a restore point (to the previous root partition) is always available for use in case of a problem. Additionally, ABRoot provides complete immutability and atomicity, ensuring that the system is always in a known, stable state.

Initially, we tried to use overlays to make Almost atomic, but we found that managing overlays this way was a space-wasting solution. Deleting old states required a re-generation of the whole history, which was time-consuming and inefficient.

## Partial immutability vs complete immutability and atomicity

As an example of the differences between Almost and ABRoot, let's say you want to install a new package on your Vanilla OS system.

With Almost, you would enter the following command to switch the system to read-write mode, which would allow you to make changes:-

```bash
almost enter rw
```

After switching the system to read-write mode, you would use the following command to install a new package:-

```bash
apt install <package>
```

Once the installation is complete, you would use the following command to switch the system back to read-only mode:-

```bash
almost enter ro
```

However, **this process comes with risks**. If something goes wrong during the installation, the system may not boot, and the package may not work as expected. Additionally, if you accidentally delete or modify a critical file, there is no way to recover it since **Almost does not keep track of previous states**.

With ABRoot, you can run the following command to install a new package:-

```bash
sudo abroot exec apt install <package>
```

This command will facilitate creating an overlay on top of the current root state and check if everything went smoothly. Once the process is complete, ABRoot will create a new root state based on the current state of the files, and at the next boot the system will use the newly created root state. In case something goes wrong, you can select the previous root from the grub menu and boot into it.

The main advantage of **ABRoot** is its transactional shell, which **makes the process more robust and safer** and allows the user to easily roll back the system if something goes wrong with the update. If a transaction fails, it gets discarded with nothing saved, keeping your root partitions secure. This means that any changes made during the transaction will not get applied to the system, and the system will remain in its previous state. It makes ABRoot a more robust and secure method for system updates when compared to Almost, which does not have this level of protection and can leave the system in an unstable state if something goes wrong during an update.

To rollback to the previous root state using ABRoot, execute the following command:-

```bash
sudo abroot rollback
```

**Note**:- Any changes made in the previous root state get dropped upon executing this command.

In conclusion, we've developed both Almost and ABRoot to achieve immutability in our systems. After evaluating both technologies, we've decided to switch from Almost to ABRoot because it provides better immutability and atomicity. We encourage others to consider using ABRoot, OSTree, or other similar solutions to achieve immutability in their systems.

## Useful links

- [ABRoot documentation](https://documentation.vanillaos.org/en/abroot)
- [ABRoot source code](https://github.com/Vanilla-OS/ABRoot/)
- [Almost documentation](https://documentation.vanillaos.org/en/almost)
- [Almost source code](https://github.com/Vanilla-OS/almost)
