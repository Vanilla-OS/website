---
title: "Nix support in Apx is landed!"
description: "Explore Apx's new nix flag to install packages from nix repositories."
published: 2023-02-07
layout: article
published: true
comments: true
---

We're excited to announce that we have integrated support for the well-known Nix package manager into Apx, enabling users to install packages from Nix repositories.

## Introduction to Nix

The Nix package manager is a package management solution from the Nix OS project. It uses a functional approach to package management, treating packages and their dependencies as a single unit that can be easily installed and managed without interfering with other packages, resulting in a more predictable and consistent system.

Nix also supports rollbacks, allowing the user to revert to a previous version of a package if there are any issues with the current version. It enables multiple profiles, allowing multiple versions of a package to be installed simultaneously without affecting other packages. This makes Nix ideal for development and testing environments where multiple versions of a package may be required.

## Nix in Apx

Apx has now integrated Nix, allowing users to install software from Nix repositories. Unlike other supported distributions in Apx, Nix does not use containers and instead has its own nix command, instead of the usual `--dnf, --aur`, etc.

Packages installed using the nix flag in Apx are located in the home directory, keeping the root clean and free from changes. This implementation requires a dedicated implementation of package management methods, which is incompatible with the existing framework.

## Usage

Before you can install packages, you need to initialize Nix:

```bash
apx nix init
```

When the procedure is completed, you can install any package from the Nix repositories like this:

```bash
apx nix install htop
```

installed applications are automatically integrated into the system.
