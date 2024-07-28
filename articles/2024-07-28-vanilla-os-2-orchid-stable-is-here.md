---
title: "Vanilla OS 2 Orchid - Stable Release"
description: "Vanilla OS 2 Orchid is now available for download. Discover the next generation of Vanilla OS."
published: true
date: 2024-07-28
keywords:
 - Vanilla OS
 - Vanilla OS Orchid
 - Orchid
 - Download
 - Developer Preview
 - Beta
 - Apx
 - Development
 - Developing in Vanilla OS
 - Multiple Package Managers
 - Access any Package Manager
layout: article
comments: true
---

Introducing Vanilla OS 2 Orchid: Over a year of meticulous development has culminated in this complete rewrite of our operating system. Orchid redefines simplicity and performance, providing a seamless and intuitive experience for everyone regardless of whether you're a web surfer, gamer, developer, or designer. Enjoy an out-of-the-box experience that meets all your needs.

![Vanilla OS 2 Orchid](/uploads/vanilla-os-2-intro.svg)

Our goals remain the same, but they are now more ambitious: **simplicity**, **cleanliness**, **freedom**, and an **obstruction-free** experience.

To achieve these ambitious goals, we meticulously collected your feedback from the previous version and engaged in thorough discussions, fueled by countless cups of coffee, maybe a few too many ☕️.

## Built for Everyone

Vanilla OS 2 (Orchid) is not just your new Operating System, it’s much more. We designed it with three fundamental concepts in mind:

<dynamic-panel-orchid-release />

But especially, Vanilla OS 2 Orchid is built to be **your** reliable partner in every task.

## Always Updated but in Background

Orchid ensures your system is always up-to-date without interrupting your workflow. With smart updates that check only when your device is idle, you get the latest features and security enhancements seamlessly. Set the update frequency that works best for you, and let Vanilla OS handle the rest quietly in the background.

![System Updates Window](/uploads/orchid-system-updates.png)

Are you watching that movie you love so much? Engaged in a furious race on your favorite racing game? Or maybe you’re live-streaming? No problem, Orchid won’t push any updates and will let you use all the resources you need!  Enjoy a secure, efficient, and worry-free experience, knowing your system is always performing at its best!

![Update Extension](/uploads/orchid-update-extension.png)

## One or More Graphics Cards?

Orchid takes full advantage of your device, whether you have one or multiple graphic cards. With its PRIME Utility, you can seamlessly switch between integrated and discrete GPUs based on your needs, allowing you to optimize performance and power usage, and making it perfect for both casual users and those who require higher graphical performance for tasks like gaming or video editing.

![PRIME Utility](/uploads/orchid-prime-utility.png)

The on-demand feature is especially beneficial for laptops, where battery life can be significantly extended by combining the two graphics cards, using the integrated for less demanding tasks and the discrete for intensive applications.

## Compatible, with Everything

Orchid is designed to be compatible with virtually everything, ensuring you never feel left out. Whether you’re looking to run your favorite mobile apps, use familiar desktop applications, or explore a wide range of Linux distributions, we have you covered. Thanks to this versatility, you can seamlessly integrate your daily tech needs into one powerful operating system.

<bento-orchid-release />

Thanks to the vast and well-maintained catalogue from Flathub, you can easily find and install the apps you know and love directly from our store, whether you need productivity tools like WPS Office, multimedia applications like Spotify, or gaming platforms like Steam, the extensive Flathub collection got you covered.

## Secure, for Real

Orchid takes your data security seriously, this is why we suggest encrypting your personal data by default, ensuring it stays private and protected from unauthorized access.

We’ve also introduced PolKit policies, which provide more granular control over administrative privileges. This means that administrative operations are handled in a secure and user-friendly way, giving you the right level of access when you need it without compromising the overall security of the system. This way, no tool can execute arbitrary code without your consent, as all instructions are displayed on the screen and require your intervention.

![PolKit Policies](/uploads/orchid-polkit.svg)

Now each user operates in an isolated environment. In fact, when you open the terminal, you find yourself in a secure, customizable space that works similar to a traditional operating system. This setup allows you to install applications, personalize your settings, and make changes via the command line, all within a safe and contained environment. Something went wrong? Reset the console with `Alt + F2` and then `reset-vso` at any time without losing your personal data.

![Integity Check](/uploads/orchid-integrity-check.png)

The core system is verified for integrity at every boot, ensuring it has not been tampered with and preserving its functionality. If something goes wrong, Orchid will notify you of the issue, advising against proceeding with the device boot and inviting you to revert to the previous state.

## Sideload Apps With Ease

Sideloading apps has never been easier. This new feature allows you to install Debian (`.deb`) packages and Android apps (`.apk`) with just a double click. This simple process makes adding new software to your system quick and hassle-free, enhancing your overall experience.

Once an application is installed, it is made available right from the applications menu.

![Slideload Utility](/uploads/sideload-utility-install.webp)

Just keep in mind that installing unverified apps from third-party sources is highly discouraged and not supported by our team, as these apps may introduce security risks, we’ve ensured that the Linux (VSO) and Android environments are isolated, but it is worth noting that VSO's Waydroid subsystem can still access to the user data, so caution is advised.

## Rollback in Seconds

Did you encounter a system issue and need to revert to a previous stable state? With Orchid, this is quite simple, if something goes wrong, you can select the previous state during boot. After logging in, Orchid will prompt you to perform a rollback, once confirmed, this rollback becomes permanent until the next update.

When a new update happens, the problematic state will be replaced with the new version of the operating system.

![Rollback Utility](/uploads/orchid-rollback.png)

Why would you need to perform a rollback? Even though Orchid is designed to be stable and compatible, and its update system ensures the updates are only installed if they pass, and despite every update being meticulously tested by our developers, something can still go wrong. Having a recovery point is essential. For example, you might be using hardware that is not compatible with the update, which is a scenario we cannot fully cover (yet).

## Develop, Like Never Before

APX is one of the most iconic features of Vanilla OS, and in Orchid, it takes on an entirely new role, catering to the needs of developers and creators. With APX v2, you can create customized Linux environments that are seamlessly integrated with the system, Just choose your preferred Linux distribution and configure everything to meet your specific requirements.

![Apx v2 GUI](/uploads/apx-v2-gui.png)

For example, developers can create an APX subsystem with their entire development stack, including languages and IDEs. This means you can have a dedicated environment for coding in Python, Go, Ruby, or any other language, all set up with the necessary tools and libraries. The IDE (for example, Microsoft Visual Studio Code), running in the same environment, will be able to see and use them without interfering with Vanilla OS. [Read more about APX v2](https://vanillaos.org/blog/article/2024-07-11/discover-apx-v2-the-new-essential-tool-for-developers-and-creators-on-vanilla-os-orchid).

## A new OS, a new Brand

The new logo is just like the new Vanilla OS. It resembles the previous design, embracing its principles, but has been completely rewritten from scratch to embody precision and elegance, representing its maturity. The transition from the old logo to the new one reflects the fundamental overhaul that Orchid has undergone.

![New Brand](/uploads/new-brand.svg)

This fresh design captures the spirit of innovation and reliability that define Orchid. It’s a visual representation of our commitment to providing an OS that is both familiar and fundamentally enhanced. The updated logo signifies our dedication to merging tradition with cutting-edge advancements, ensuring that Vanilla OS continues to offer a robust and refined user experience.

## And a New Wallpaper

What is a new release without an exciting new wallpaper? And ours is truly stunning. Designed by our community member [hrstwn](https://github.com/hrstwn), this vibrant and dynamic wallpaper captures the essence of Orchid.

<before-after-slider beforeImage="/uploads/petals_light.webp" afterImage="/uploads/petals_dark.webp" />

The new wallpaper is reminiscent of the previous version, but like our brand, it is no longer flat. It has its own dimension and depth. This reflects the evolution of the project itself, moving towards a more sophisticated and refined experience.

We are thrilled with the outcome and believe this wallpaper will greatly enhance the visual experience for all users.

## Make it Truly Yours

Orchid brings customization to the next level with its  Vanilla Image Builder (Vib). This tool allows advanced users to tailor their Vanilla OS experience precisely to their needs. With Vib you can craft a custom version of Vanilla OS by writing your own configuration and modifications, using a simple YAML configuration file, you have the power to define every aspect of your OS, from the ground up, making it as unique as you are.

![Vib Example](/uploads/vib-yml-example.svg)

Vib utilizes a modular system, providing unparalleled flexibility and ease of use, this system lets you add, remove or adjust specific components within your OS effortlessly. You can integrate additional drivers, codecs, and libraries, apply custom configurations, or set up specific startup routines.

Since Vib is a pre-compiler of Dockerfile(s), you can also use it in your development stack to create images for your Docker applications, for example. [Read more about Vib](https://vib.vanillaos.org/)

## Automate Everything

Orchid allows you to automate everything using the Vanilla System Operator (VSO).

You can create tasks within VSO, which execute instructions if certain conditions are met. These conditions can range from something simple like launching an application when connecting a certain device to notifying you when a game on Steam has finally become available.

Even more advanced users can use the `--on-condition-command` option, which allows you to use scripts and commands as conditions for executing tasks.

## Release Cycle

Orchid sources its snapshotted packages from the Debian Sid repository, ensuring that packages are always fresh and up-to-date. These packages are used to create an OCI image, which our team meticulously tests to ensure there are no issues. Once an image is approved, it is deployed to your desktop (which uses the stable tag). This process ensures you always receive the latest software while maintaining the stability and reliability of your system.

The Vanilla OS team has also established a project called 'Vision' for testing new and experimental features with both our team and the community. If a feature is deemed beneficial and functions as expected, it is then integrated into the Orchid development tag. After accumulating enough new features, we roll them out to our stable users by porting them from the development tag.

This approach gives Orchid a unique blend of both rolling and point releases, keeping your system consistently updated and fresh while providing designated points for major upgrades with exciting new features.

## Get Orchid

Orchid is available for download from our [website](https://vanillaos.org/download/orchid/stable). For more information on how to install Orchid, please refer to our [documentation](https://docs.vanillaos.org/)

## Full Changelog

- **ABRoot v2**: Complete rewrite using OCI images for reliable updates, improved support for atomic transactions, system state dumping, changing kernel flags, a built-in method to edit the configuration, ability to generate local images with extra packages (for drivers, codecs, and libraries), ability to rollback, and re-generate the initramfs.
- **Hybrid Debian Base**: Transition from Ubuntu to a hybrid base made of Debian packages and Vib modules for increased flexibility and control over updates and configuration.
- **LVM Thin Provisioning**: Efficient disk space usage with logical volumes, allowing virtual filesystems larger than the available physical storage and supporting the dynamic allocation of space as needed for the two roots.
- **PolKit Policies**: Replaces sudo for secure privileged operations.
- **VSO v2**: Acts as system shell, package manager, and supports Android apps via Waydroid integrated with F-Droid. Improved the tasks automation system to cover infinite scenarios.
- **DEB/APK Sideloading**: Install .deb and .apk packages with Sideload Utility.
- **Apx v2**: Custom environments, supports various package managers, and introduces stacks for replicating environment configurations. Includes package manager mapping, stack creation, and subsystem management. Distrobox updated to version 1.7.2.1.
- **Apx GUI**: Graphical interface for APX management with ease.
- **FsGuard and FsWarn**: Boot-time system integrity checks to ensure system security and reliability.
- **Vanilla Installer**: Uses a reduced GNOME session, a new Albius backend that replaces distinst, new configuration screens, OEM support, and support for encrypting the `/var` partition with LUKS2. Supports manual partitioning and network configuration during installation.
- **First Setup**: Uses a reduced GNOME session, added network configuration, user creation, hostname configuration, allows picking your browser of choice, and improved screens.
- **PRIME Profiles**: A new GUI for switching graphics cards, enhancing hardware compatibility.
- **Vanilla Tools**: Utilities for managing system features: `cur-gpu` to display the GPU in use, nrun to run a command using the NVIDIA GPU, prime-switch to switch PRIME Profiles.
- **Kernel 6.9.8**: Ensures compatibility with the latest devices and peripherals.
- **GNOME 46**: Updated GNOME to version 46, introducing the new pill icon to switch between workspaces plus all the UI and stability improvements.
- **Vib (Vanilla Image Builder)**: Our new OCI recipe system. Recommended method for creating custom and derivative OCI images of Vanilla OS, facilitating modular and scalable system builds. We have created a [template](https://github.com/Vanilla-OS/custom-image) for users to easily create custom images for Vanilla OS.
- **Recovery Mode**: Integrated in the installer with recovery tools like terminal, GParted, and documentation access for system restoration.
- **Prometheus**: Container library/engine for OCI image management, enhancing deployment processes in Albius and ABRoot.
- **Eratosthenes**: Platform for browsing package details from our Debian repositories, providing detailed package information.
- **Atlas**: Platform for browsing our OCI image details, aiding in system transparency.
- **Pico, Core, Desktop Images**: Structured for modularity and flexibility, forming the base of Vanilla OS.
- **VM and NVIDIA Images**: Proposed at installation time if the right hardware is identified.
- **Dev Image**: Can be used in APX, and provides a large set of development libraries/SDKs and tools.
- **Chronos**: Unified documentation server and frontend combining all guides and documentation for easier access and management.
- **Update Feedback and Control**: A new icon now appears on the top right of the screen when an update is being installed, click on it to stop the ongoing operation.
- **New Wallpaper**: Designed by community member hrstwn.
- **Build Provenance**: We are attesting our OCI images using GitHub Actions to ensure build provenance.
- **New Branding**: Introduced a new refreshed brand. Plymouth updated using our new brand.
- **Deprecation of Vanilla Control Center**: We have deprecated Vanilla Control Center and implemented all our settings in GNOME Settings.
- **Updated AdwDialog Utility**: With many UI and UX improvements.
- **New App Tour**: Introduced a new Tour app that shows after the first setup process.
- **New Differ Utility**: Used to extract info between OCI images.
