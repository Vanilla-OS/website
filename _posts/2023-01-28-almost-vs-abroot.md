---
title: "Why we switched from Almost to ABRoot"
description: "Explore the advantages and disadvantages of using Almost and ABRoot technologies to achieve immutability."
published: 2023-01-28
layout: article
published: true
comments: true
---

If you've been following the Vanilla OS project from the start, you'll notice that our plans for immutability have changed. We've developed two technologies, [Almost](https://github.com/Vanilla-OS/almost) and [ABRoot](https://github.com/Vanilla-OS/ABRoot), that we've used to achieve immutability in our system. In this article, we want to go into detail about our choice to switch from Almost to ABRoot, explaining the advantages and disadvantages of each technology.

## Immutability and Atomicity
Immutability and atomicity are two important concepts in computer science, particularly in the field of operating systems. Immutability refers to the ability of a system to prevent accidental or unauthorized changes to its state. This can be achieved by making certain files or directories read-only, or by using other techniques such as copy-on-write or overlay filesystems.

Atomicity, on the other hand, refers to the ability of a system to ensure that a series of operations are executed as a single, indivisible unit. In other words, if any part of the operation fails, the entire operation is rolled back, leaving the system in its previous state. This is often achieved using transactional systems, which allow multiple operations to be grouped together and executed as a single transaction.

Both immutability and atomicity are important in ensuring the stability and security of an operating system. By preventing unauthorized changes and ensuring that updates are executed as a single, indivisible unit, a system can be made more robust and resistant to errors and failures.

## Almost and ABRoot
Almost was our first approach to achieving immutability. It was developed by our team to achieve immutability by toggling the "i" (immutability) attribute of files. While this made it possible to prevent accidental changes to the system, it wasn't truly immutable. To update the system, the immutability attribute would have to be turned off, allowing for changes to be made to the root. This meant that there was no validation or prior state to recover if something went wrong during the update.

ABRoot, on the other hand, is a full atomic transactional system that was also developed by our team. It performs transactions between two root partitions. This means that a new root is always generated, and there is always a restore point (the previous root) that can be used in case of a problem. Additionally, ABRoot provides full immutability and atomicity, ensuring that the system is always in a known, stable state.

Initially, we tried to use overlays to make Almost atomic, but we found that managing overlays in this way was a space-wasting solution. Deleting old states required a re-generation of the whole history, which was time-consuming and inefficient.

## Partial immutability vs full immutability and atomicity

As an example of the differences between Almost and ABRoot, let's say you want to install a new package on your Vanilla OS system.

With Almost, you would enter the command:

```bash
almost enter rw
```

to switch the system to read-write mode, allowing you to make changes. Then, you would use the command:

```bash
apt install thing
```

to install the new package. Once the installation is complete, you would enter:

```bash
almost enter ro
```

to switch the system back to read-only mode.

However, **this process comes with risks**. If something goes wrong during the installation, the system may not boot or the package may not work as expected. Additionally, if you accidentally delete or modify a critical file, there is no way to recover it since **Almost does not keep track of previous states**.

With ABRoot, the process is similar, you would use the command:

```bash
abroot exec apt install thing
```

to install the new package. This command will create an overlay on top of the current root, execute the command, and check that everything went smoothly. Once the process is complete, ABRoot will create a new root based on the current state of the files, and at the next boot, the system will be using that new root. In case something goes wrong, you can easily select the previous root from the grub menu and boot into it.

However, the main advantage of **ABRoot** is its transactional shell, which **makes the process more robust, safer** and allows the user to easily rollback the system if something went wrong with the update. If a transaction fails, it is discarded and nothing is saved, keeping your root partitions secure. This means that any changes made during the transaction are not applied to the system, and the system remains in its previous state. This makes ABRoot a more robust and secure method for system updates compared to Almost, which does not have this level of protection and can leave the system in an unstable state if something goes wrong during an update.

In conclusion, we've developed both Almost and ABRoot to achieve immutability in our system. After evaluating both technologies, we've decided to switch from Almost to ABRoot because it provides better immutability and atomicity. We encourage others to consider using ABRoot, OSTree, or other similar solutions when looking to achieve immutability in their systems.

## Useful links
- [ABRoot documentation](https://documentation.vanillaos.org/docs/ABRoot/)
- [ABRoot source code](https://github.com/Vanilla-OS/ABRoot/)
- [Almost documentation](https://documentation.vanillaos.org/docs/almost/)
- [Almost source code](https://github.com/Vanilla-OS/almost)

