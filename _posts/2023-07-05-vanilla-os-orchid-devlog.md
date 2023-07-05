---
title: "Vanilla OS Orchid - Devlog 5 Jul"
description: "We are excited to announce that we have recently completed crucial development of Apx v2, which is now available for testing by everyone."
published: true
date: 2023-07-05
layout: article
comments: true
---

A few weeks ago, we shared our progress in Orchid's development through our latest [Devlog](https://vanillaos.org/2023/06/11/vanilla-os-orchid-devlog.html). Among the many updates, we discussed [Apx v2](https://vanillaos.org/2023/06/11/vanilla-os-orchid-devlog.html#apx-v2-and-vso-v2) and how it was evolving to better fit the developers needs, while [VSO](https://vanillaos.org/2023/06/11/vanilla-os-orchid-devlog.html#vso-as-a-system-package-manager) would focus on meeting the needs of regular users. Crucial development of Apx v2 is now finished and available for testing!

## Apx v2
As previously mentioned, Apx v2 sets itself apart from v1 with the introduction of stacks. Stacks are sets of instructions that define how a subsystem is created. While creating a stack, you can define the name, distribution, package manager, and a list of packages to install during the subsystem's initialization phase.

### Installation
#### Method 1 (manual)
To try out Apx v2, simply follow these instructions for a user-side installation:

- Create a working directory (highly recommended to isolate Apx v2 from your system).

- Obtain the latest Distrobox release (version [1.5.0.2](https://github.com/89luca89/distrobox/archive/refs/tags/1.5.0.2.tar.gz) or higher) and unpack it into a "distrobox" folder within your newly created work directory.

- Download the latest Apx build from our [GitHub repository](https://github.com/Vanilla-OS/apx/releases/download/continuous/apx.tar.gz) and unpack the `apx` binary into `~/.local/bin`, renaming it to `apx2` to avoid collisions with previous versions.
- Make the binary executable.

- Create the configuration file at `~/.config/apx/apx.json`:

```json
{
  "apxPath": "/home/YOUR_USERNAME/.local/share/apx/",
  "distroboxpath": "/home/YOUR_USERNAME/your/workdir/distrobox-folder/distrobox",
  "storageDriver": "btrfs"
}
```

By following these steps, you can start using Apx v2 by simply typing `apx2`. 

> Please note that this is alpha software, and there may be bugs. We kindly request you to report any issues to our [GitHub repository](https://github.com/Vanilla-OS/apx/issues).

Since this is a local installation of Apx, there won't be any initial content. You can proceed manually by creating a package manager, a stack, and finally, a subsystem:

```shell
apx2 pkgmanagers new
apx2 stacks new
apx2 subsystems new
apx2 YOUR_NEW_SUBSYSTEM_NAME --help
```

To simplify your initial experimentation with Apx v2, you can access some starter resources from our [vanilla-apx-configs repository](https://github.com/Vanilla-OS/vanilla-apx-configs/). Simply copy the contents into `~/.local/share/apx/` to populate Apx with initial resources like stacks and package managers. All major distributions are covered.

#### Method 2 (automated)
We have created a script that automates the aforementioned steps. Make sure you have `git` and `curl` installed.

```bash
#!/bin/bash

WORK_DIR="YOUR_WORK_DIR"  # <- edit this path

mkdir -p "$WORK_DIR"
cd "$WORK_DIR"

curl -LO https://github.com/89luca89/distrobox/archive/refs/tags/1.5.0.2.tar.gz
tar -xzf 1.5.0.2.tar.gz

curl -LO https://github.com/Vanilla-OS/apx/releases/download/continuous/apx.tar.gz
tar -xzf apx.tar.gz
mv apx "$HOME/.local/bin/apx2"
chmod +x "$HOME/.local/bin/apx2"

mkdir -p "$HOME/.config/apx"
echo '{
  "apxPath": "'"$HOME/.local/share/apx/"'",
  "distroboxpath": "'"$HOME/$WORK_DIR/distrobox-folder/distrobox/"'",
  "storageDriver": "btrfs"
}' > "$HOME/.config/apx/apx.json"

git clone https://github.com/Vanilla-OS/vanilla-apx-configs.git "$WORK_DIR/vanilla-apx-configs"
mv "$WORK_DIR/vanilla-apx-configs/stacks" "$HOME/.local/share/apx/"
mv "$WORK_DIR/vanilla-apx-configs/package-managers" "$HOME/.local/share/apx/"

echo "Installation completed. You can now use Apx v2 by running 'apx2'."
apx2 --version
```

## Apx GUI
But wait, there's more! Vanilla OS Orchid aims to be as user-friendly and general-purpose as possible, and most of our efforts are directed towards achieving that. That's why we have further simplified the lives of developers by introducing Apx GUI — a tool that allows you to manage subsystems, stacks, and package managers through a streamlined and intuitive interface.

APX_GUI_PIC_GOES_HERE (have to edit this later!!!)

Apx GUI is designed for developers who need to work with multiple subsystems simultaneously, without having to rely on the command-line or remember various flags it supports.

With Apx GUI, you can:

- Create and manage subsystems effortlessly.

- Define and modify stacks easily.

- Add package managers intuitively.

Apx GUI eliminates the complexities of command-line interaction, making development with Apx on Vanilla OS Orchid more accessible and efficient.

## Deprecation of the Vanilla Control Center
In Vanilla OS 22.10, the graphical management of Apx subsystems was part of the [Vanilla Control Center](https://github.com/Vanilla-OS/vanilla-control-center), which also housed other features like updates.

In Vanilla OS Orchid, everything has been moved to GNOME Settings, and since subsystem management is now covered by Apx GUI, the Vanilla Control Center will be deprecated, meaning it will not be present in the next major release of Vanilla OS and onwards.

## Bugs and Feedback

If you encounter any bugs or have suggestions for further enhancements, please report them on the respective GitHub repositories: 

- [Apx](https://github.com/Vanilla-OS/apx/)
- [Apx GUI](https://github.com/Vanilla-OS/apx-gui/)

Your contributions are invaluable in helping us refine the user experience and provide a seamless development environment.

The Vanilla OS Team