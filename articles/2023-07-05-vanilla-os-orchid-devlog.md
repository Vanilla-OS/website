---
title: "Vanilla OS Orchid - Devlog 5 Jul"
description: "We are excited to announce that we have recently completed crucial development of Apx v2, which is now available for testing by everyone."
published: true
date: 2023-07-05
keywords:
  - Vanilla OS
  - Vanilla OS Orchid
  - Orchid
  - Apx
  - Apx v2
  - Apx GUI
layout: article
comments: true
---

A few weeks ago, we shared our progress in Orchid's development through our latest [Devlog](https://vanillaos.org/blog/article/2023-06-11/vanilla-os-orchid---devlog-11-jun). Among the many updates, we discussed [Apx v2](https://vanillaos.org/blog/article/2023-06-11/vanilla-os-orchid---devlog-11-jun#apx-v2-and-vso-v2) and how it was evolving to fit the developers needs better, while [VSO](https://vanillaos.org/blog/article/2023-06-11/vanilla-os-orchid---devlog-11-jun#vso-as-a-system-package-manager) would focus on meeting the needs of regular users. Crucial development of Apx v2 has finished and is available for testing now!

## Apx v2

As previously mentioned, Apx v2 sets itself apart from v1 with the  introduction of stacks. Stacks are sets of instructions that define how a subsystem gets created. While creating a stack, you can define the name, distribution, package manager, and list of packages to install during the subsystem's initialization phase.

### Installation

#### Method 1 (manual)

To try out Apx v2, follow these instructions for a user-side installation:

- Create a working directory (highly recommended to isolate Apx v2 from your system).

- Obtain the latest Distrobox release (version [1.5.0.2](https://github.com/89luca89/distrobox/archive/refs/tags/1.5.0.2.tar.gz) or higher) and unpack it into a "distrobox" folder within your newly created work directory.

- Download the latest Apx build from our [GitHub repository](https://github.com/Vanilla-OS/apx/releases/download/continuous/apx.tar.gz) and unpack the `apx` binary into `~/.local/bin`, renaming it to `apx2` to avoid collisions with previous versions.
- Make the binary executable using the command `chmod +x apx2` from the correct directory.

- Create the configuration file at `~/.config/apx/apx.json`:

```json
{
  "apxPath": "/home/YOUR_USERNAME/.local/share/apx/",
  "distroboxpath": "/home/YOUR_USERNAME/your/workdir/distrobox-folder/distrobox",
  "storageDriver": "btrfs"
}
```

After following these steps, you can start using Apx v2 by typing `apx2`.

> Please note this is alpha software, and there may be bugs. We kindly request you to report any issues to our [GitHub repository](https://github.com/Vanilla-OS/apx/issues).

Since this is a local installation of Apx, there won't be any initial contents. You can proceed manually by creating a package manager, a stack, and finally, a subsystem:

```shell
apx2 pkgmanagers new
apx2 stacks new
apx2 subsystems new
apx2 <SUBSYSTEM_NAME> --help
```

To simplify your initial experimentation with Apx v2, you can access some starter resources from our [vanilla-apx-configs repository](https://github.com/Vanilla-OS/vanilla-apx-configs/). Copy the contents into `~/.local/share/apx/` to populate Apx with initial resources like stacks and package managers. All major distributions are covered.

#### Method 2 (automated)

We have created a script that automates the above steps. Make sure you have `git` and `curl` installed.

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
  "distroboxpath": "'"$WORK_DIR/distrobox-1.5.0.2/distrobox"'",
  "storageDriver": "btrfs"
}' > "$HOME/.config/apx/apx.json"

git clone https://github.com/Vanilla-OS/vanilla-apx-configs.git "$WORK_DIR/vanilla-apx-configs"
mv "$WORK_DIR/vanilla-apx-configs/stacks" "$HOME/.local/share/apx/"
mv "$WORK_DIR/vanilla-apx-configs/package-managers" "$HOME/.local/share/apx/"

echo "Installation completed. You can now use Apx v2 by running 'apx2'."
apx2 --version
```

Now, you can create a subsystem using the `apx2 subsystems new` command. For more information on the subsystem commands, type `apx2 <SUBSYSTEM_NAME> --help`.

If you want to try out or test the various package manager and stack creation commands, refer to the above section.

## Apx GUI

But wait, there's more! Vanilla OS Orchid aims to be as user-friendly and general-purpose as possible, and most of our efforts has directed towards achieving that. That's why we have further simplified developers' lives by introducing Apx GUI — a tool that allows you to manage subsystems, stacks, and package managers through a streamlined and intuitive interface.

![Apx GUI](/uploads/apx-gui.webp)

Apx GUI is designed and created for developers who require working with multiple subsystems simultaneously without relying on the command line or remembering various flags it supports.

### Features

- **Effortless Subsystem Management**: Developers can easily create and manage subsystems. This feature simplifies the process of organizing and managing multiple containers.

- **Define and modify stacks easily**: Stacks are a collection of software components and dependencies. Apx GUI introduces a streamlined approach for defining and modifying stacks with ease.

- **Add package managers intuitively:** Adding and managing package managers with your preferred commands becomes intuitive with Apx GUI.

Apx GUI eliminates the complexities of command line interaction, making development with Apx on Vanilla OS Orchid more accessible and efficient.

## Deprecation of the Vanilla Control Center

In Vanilla OS 22.10, the graphical management of Apx subsystems was part of the [Vanilla Control Center](https://github.com/Vanilla-OS/vanilla-control-center), which also housed other features like updates.

In Vanilla OS Orchid, everything has moved to GNOME Settings, and since subsystem management has moved to Apx GUI, the Vanilla Control Center will be deprecated, meaning it will not be present in the next major release of Vanilla OS and onwards.

## Bugs and Feedback

If you encounter any bugs or have suggestions for further enhancements, please report them on the respective GitHub repositories:

- [Apx](https://github.com/Vanilla-OS/apx/)
- [Apx GUI](https://github.com/Vanilla-OS/apx-gui/)

Your contributions are invaluable in helping us refine the user experience and provide a seamless development environment.

_ The Vanilla OS Team
