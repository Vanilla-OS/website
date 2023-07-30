---
title: "Nix support in Apx has landed!"
description: "Explore Apx's new nix flag to install packages from nix repositories."
date: 2023-02-07
keywords:
    - Apx
    - Distrobox
    - Podman
    - Container
    - Package Manager
    - Vanilla OS
    - Nix
layout: article
published: true
comments: true
---

We're excited to announce that we have integrated support for the well-known Nix package manager into Apx, enabling users to install packages from Nix repositories.

## Introduction to Nix

The Nix package manager is a package management solution from the Nix OS project. It uses a functional approach to package management, treating packages and their dependencies as a single unit that can be easily installed and managed without interfering with other packages, resulting in a more predictable and consistent system.

Nix also supports rollbacks, allowing the user to revert to previous versions of a package if there are any issues with the current version. It enables multiple profiles, allowing multiple versions of packages to be installed simultaneously without affecting or causing conflicts with other packages. It is an ideal solution for development and testing environments where various versions of packages are required.

## Nix in Apx

Nix has now integrated with apx using a flag, which allows users to install software from Nix repositories. Unlike other supported distributions in Apx, Nix does not use containers and has it's own `--nix` flag similar to the usual apx flags.

Packages installed using the Nix flag in Apx are located in the home directory, keeping the root clean and free from changes. This implementation requires a dedicated implementation of package management methods incompatible with the existing framework.

## Usage

Before you can install packages, you need to initialize `nix` using the following command:-

```bash
apx init --nix
```

When the initialization gets completed, you can install any package from the Nix repositories using the following command:-

```bash
apx install --nix htop
```

Installed applications through `nix` are integrated automatically into the system.
