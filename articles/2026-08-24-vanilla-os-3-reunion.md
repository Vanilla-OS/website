---
title: "Vanilla OS 3 Reunion - Stable Release"
description: "Vanilla OS 3 Reunion is now available for download. Discover the latest features, important changes and under-the-hood improvements."
published: true
date: 2026-08-24
keywords:
  - Vanilla OS
  - Vanilla OS 3
  - Vanilla OS Reunion
  - ABRoot
  - Apx
  - VSO
  - Vib
  - SDK
  - Distrobox
  - ARM64
  - Reproducible Builds
  - GNOME 50
  - Ptyxis
  - Vanilla OS Flavors
layout: article
comments: true
---

Two years after the release of Vanilla OS 2 Orchid, Vanilla OS 3 Reunion is now available!

Our mission remains the same: to make Vanilla OS **simple**, **stable** and **secure**. With Reunion, we're bringing users together across architectures, and offering everyone an experience that works out of the box.

![Vanilla OS 3 Reunion](/uploads/reunion-intro.svg)

## TL;DR

- ARM64 support is finally here, with Linux 7.1.3, GNOME 50, a new Vanilla OS SDK and more.
- Seamless upgrades from the latest Vanilla OS 2 Orchid (v1.4.0).
- A few breaking changes have been introduced in subsystems and custom image builds.

## ARM64 Support

The long wait is over! Vanilla OS 3 now officially supports ARM64 devices with UEFI firmware, opening the door to a wide range of hardware, from single-board computers to ARM-based laptops and workstations.

To make this possible, all images are now multi-architecture, and every package includes ARM64 builds. The experience on ARM64 is identical to what you'd expect on AMD64, with no compromises in functionality.

## Secure with Reproducible Builds

Security and transparency remain at the core of Vanilla OS 3. Most images (except NVIDIA images due to kernel modules) are now fully reproducible, meaning the build process always produces bit-for-bit identical images from the same sources.

Reproducibility ensures that the trustworthiness of our images doesn't rely solely on GitHub Actions, but anyone can independently verify that an image hasn't been tampered with.

## A Fresh Desktop Experience

Vanilla OS 3 Reunion ships with [GNOME 50 "Tokyo"](https://release.gnome.org/50/), featuring a Wayland-only session, improved fractional scaling and more.

We've also refreshed the default applications, drawing from [GNOME Core Apps](https://apps.gnome.org/#core) and [GNOME Circle Apps](https://apps.gnome.org/#circle):

- **Ptyxis** replaces Black Box as the default terminal, offering quick access to the host shell ("My Computer"), the VSO shell (`apx-vso-native`) or any Apx subsystem you created
- **Papers** replaces Evince as the document viewer
- **Resources** replaces GNOME System Monitor
- File Roller and Photos are deprecated and no longer installed by default

![Ptyxis](/uploads/reunion-ptyxis.png)

With so many changes to default apps since Vanilla OS 2 Orchid, we've introduced a new update mode in First Setup. It runs automatically after an upgrade, allowing you to install new apps and uninstall old ones. Just a few clicks to confirm the changes, and you're ready to enjoy the latest Vanilla OS experience.

## A New Wallpaper

A fresh desktop experience deserves a fresh wallpaper. Created by our talented community member [Enner Kou](https://github.com/enner21), *Fairy Tale* brings a dreamlike touch to your desktop, with delicate golden blossoms dancing in a gentle breeze. As with all of our backgrounds, it's available in both light and dark variants, so it blends beautifully with whichever theme you prefer.

<before-after-slider beforeImage="/uploads/fairy-tale-light.webp" afterImage="/uploads/fairy-tale-dark.webp" />

Much like a breeze carrying petals across the sky, Vanilla OS 3 does it work gracefully, bringing calm and serenity to your everyday digital world.

## Apx and VSO v3

Both Apx and VSO (Vanilla System Operator) have been rewritten on top of the new [Vanilla OS SDK](https://github.com/Vanilla-OS/sdk), a unified collection of libraries and tools for logging, permissions, configuration and system interaction.

This delivers a more consistent experience across different tools. Key changes include:

- Better localization using PO translation files
- Apx configuration moved from `apx.json` to `config.json`
- Updated command structures:
  - `--app-name` flag has changed to `--app` in the Apx export and unexport commands
  - `vso config set -k <key> -v <value>` is now `vso config set <key> <value>`
  - `vso sys-upgrade upgrade` is now `vso upgrade`
  - `vso sys-upgrade check` is now `vso upgrade check`
  - `vso pico-init` is now `vso native init`
  - `vso export/install/...` is now `vso native export/install/...`

Debian and openSUSE Leap are now included as default stacks in Apx. The base image of the `vanilla-dev` stack has been switched from `dev-image` to `pico-image` to ensure newer packages become available more quickly. Various fixes, including support for Ubuntu 26.04 subsystems, have also been included.

We're also glad to fulfill a long-time feature request: The Apx GUI is now [available on Flathub](https://flathub.org/apps/org.vanillaos.ApxGUI), so any Linux user can benefit from it. In Vanilla OS 3, we ship it as a Flatpak, which also means faster updates and fixes.

The VSO image is now based on Debian testing, giving you a more reliable experience than Debian sid while still providing up-to-date packages. VSO v3 also introduces init hooks, allowing future updates or custom images to run given scripts automatically when the VSO subsystem starts.

## Distrobox v2

Thanks to the incredible work of the Distrobox team, Distrobox has been [rewritten in Go](https://distrobox.it/posts/announcing_distrobox_next/). Vanilla OS 3 ships with Distrobox v2.0.0-rc.4, which has been validated for compatibility with Apx v3.

To smooth the transition, the new VSO subsystem is now created as `apx-vso-native`, reflecting that it's no longer based on `pico-image`.

If you still rely on the legacy `apx-vso-pico` subsystem, we recommend upgrading your packages before upgrading your host system to avoid compatibility issues. A workaround is required inside the VSO container for systemd v261 prior to the package upgrade:

```bash
for tmpfiles_conf in tmp.conf x11.conf systemd-tmp.conf openssh-client.conf tpm-udev.conf tpm2-tss-fapi.conf; do
  sudo ln -sf /dev/null "/etc/tmpfiles.d/${tmpfiles_conf}"
done

sudo apt update
sudo apt upgrade
```

If you no longer need the legacy subsystem, you can remove it manually with:

```bash
host-shell podman rm -f apx-vso-pico
```

## For Custom Image Developers

We have released Vib (Vanilla Image Builder) 1.1.0 with important improvements. A new `cleanup` property is available in the recipe to remove unnecessary directories, and `sources` are now mounted into the container during image builds instead of being copied, resulting in significantly smaller images. There is also a new `-o` option to specify the output Containerfile.

If you build custom Vanilla OS images, these breaking changes may affect you:

- Images are now multi-architecture, and most packages have been renamed to include architecture suffixes.
- Image names and tags have changed:
  - `ghcr.io/vanilla-os/desktop:main` is now `ghcr.io/vanilla-os/gnome:latest`
  - `ghcr.io/vanilla-os/nvidia:main` is now `ghcr.io/vanilla-os/gnome-nvidia:latest`
  - `ghcr.io/vanilla-os/nvidia-exp:main` is now `ghcr.io/vanilla-os/gnome-nvidia-modern:latest`
  - `ghcr.io/vanilla-os/vm:main` is now `ghcr.io/vanilla-os/gnome-vm:latest`
- ABRoot now symlinks `/opt` and `/usr/local` into `/var` to make them writable for users, so these paths should no longer be used in custom images.
- FsGuard has been removed to simplify the boot process.

## More Flavors

As the Vanilla OS ecosystem grows, why not add more flavors? We're improving support for community-maintained images through the new [Vanilla-Flavors](https://github.com/Vanilla-Flavors) organization on GitHub.

The first flavor image, [`china-image`](https://github.com/Vanilla-Flavors/china-image), is now available. Maintained by our Chinese community, it comes preconfigured with localized settings and mirror sources for a smoother experience in Chinese mainland.

If you'd like to maintain a community image, such as one with a different desktop environment, don't hesitate to contact us.

## Get Reunion

Vanilla OS 3 Reunion is available for download from our [website](https://vanillaos.org/download/reunion/stable). To help you get started, we've also refreshed our [installation documentation](https://docs.vanillaos.org/handbook/en/installation) with updated steps and clearer instructions.

For existing Vanilla OS 2 Orchid (v1.4.0) users, Reunion will arrive as a normal system upgrade. You can also trigger it manually with `abroot upgrade`. Note that you cannot upgrade to Vanilla OS 3 directly using ABRoot versions earlier than 2.4.0, as they do not support multi-architecture images. Please ensure you're on the latest version before upgrading.

## Contribute to Reunion

You can make a difference too, whether through software engineering, user experience design, documentation or translation. We are always open to new ideas, and contributions are warmly welcomed. Join [our community](https://discord.gg/vanilla-os-1023243680829681704) and help shape the future of Vanilla OS!
