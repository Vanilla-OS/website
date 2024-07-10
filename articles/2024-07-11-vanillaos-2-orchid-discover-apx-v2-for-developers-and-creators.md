---
title: "Discover APX v2: The New Essential Tool for Developers and Creators on Vanilla OS Orchid"
description: "Explore the new features of APX v2, the revolutionary tool for managing custom environments on Vanilla OS 2 Orchid."
published: true
date: 2024-07-11
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

APX v2 is finally here, designed to meet the needs of modern developers and creators. This update offers unprecedented flexibility in package management and the creation of isolated development environments, overcoming the limitations of the previous version. APX v2 is not just an improvement, but a real revolution in managing your development environments.

## What has changed?

Well, everything has changed. Before we were limited to using APX with predefined package managers and predefined subsystems, today everything is highly customizable and shareable. You can create your own environments integrated with the system, choose the Linux distribution you prefer, and use the package manager you want. You can decide based on the system and configure everything according to your needs.

Oh, and there's a GUI now! And it looks great! 😎

<div class="no-dark">
    <div class="flexGrid flexGrid--2">
        <img src="/uploads/apx-v2-subsystem.webp" alt="Image of APX GUI showcasing a subsystem view" class="img img--fluid">
        <img src="/uploads/apx-v2-subsystem-shell.webp" alt="Image of APX GUI showcasing a subsystem view with an open shell" class="img img--fluid">
    </div>
</div>

<div class="on-dark">
    <div class="flexGrid flexGrid--2">
        <img src="/uploads/apx-v2-subsystem-dark.webp" alt="Image of APX GUI showcasing a subsystem view in dark mode" class="img img--fluid">
        <img src="/uploads/apx-v2-subsystem-shell-dark.webp" alt="Image of APX GUI showcasing a subsystem view with an open shell in dark mode" class="img img--fluid">
    </div>
</div>

<div class="no-dark">
    <div class="flexGrid flexGrid--2">
        <img src="/uploads/apx-v2-stack.webp" alt="Image of APX GUI showcasing a stack view" class="img img--fluid">
        <img src="/uploads/apx-v2-pkgmanager.webp" alt="Image of APX GUI showcasing a package manager view" class="img img--fluid">
    </div>
</div>

<div class="on-dark">
    <div class="flexGrid flexGrid--2">
        <img src="/uploads/apx-v2-stack-dark.webp" alt="Image of APX GUI showcasing a stack view in dark mode" class="img img--fluid">
        <img src="/uploads/apx-v2-pkgmanager-dark.webp" alt="Image of APX GUI showcasing a package manager view in dark mode" class="img img--fluid">
    </div>
</div>

Now APX v2 includes three essential components, namely: package manager, stack and subsystem. Let's look at them in more detail.

### Package Manager

One of the most powerful aspects of APX v2 is its flexibility with package managers. If the package manager you wish to use is not already included in Vanilla OS, you can easily add it yourself. This allows you to use any custom package manager. Do you have an AUR helper of your choice? We've got you covered 😉!

### Stacks

Stacks are sets of instructions that define how a subsystem is created. You can specify the stack name, base distribution, package manager, and a list of packages to install so it's yours right out of the box.

### Subsystem

Subsystems are isolated environments created based on stacks. You can create multiple subsystems from the same stack and reinitialize them if necessary. Since subsystems have access to your user files (your home directory), any user-side configuration will be retained even after re-initialization. For example, if you installed Visual Studio Code and something goes wrong or you simply want to change the subsystem base from fedora or vanilla-dev, the software configurations will remain the same; you won't have to reconfigure anything.

## The Workflow of APX v2.

The workflow of APX v2 is designed to be simple and intuitive and can be summarized in four essential steps using the CLI or the brand-new GUI:

1. **Map your Package Manager**:

    If the package manager you wish to use is not already available, you can add it with the command:
    
    ```bash
    apx pkgmanagers new --name <my-pkgmanager> --install '<install_command>' --remove '<remove_command>' --update '<update_command>'...
    ```
    
    or simply `apx pkgmanagers new` and follow through with the interactive wizard.

2. **Create your Stack**:

    Define the stack name, base distribution, package manager, and list of packages to install. You can create it with the command:
    
    ```bash
    apx stacks new --name <mystack> --base "<ghcr.io/vanilla-os/dev:main>" --packages "<git, build-essential, python3, ruby, golang>" --pkg-manager <my-pkgmanager>
    ```
    
    or use `apx stacks new` for the interactive wizard.
    
    Once created, your stack will be saved as a YAML file, with formatting like this:
    
    ```yaml
    name: vanilla-dev
    base: ghcr.io/vanilla-os/dev:main
    packages: [git, build-essential, python3, ruby, golang]
    pkgmanager: apt
    builtin: true
    ```
    
    you will be able to export it, import it, and share it with anyone at any time.

3. **Create the Subsystem**:

    Once you have created the stack, you can create the subsystem based on it.
    
    ```bash
    apx subsystems new --name <my-subsystem> --stack <my-stack>
    ```

4. **Access Your Subsystem**:

    APX v2 maps package manager commands to a unified syntax, making it easier to use subsystems without having to learn new specific commands.
    
    ```bash
    apx <my-subsystem> install <package> # To install packages inside the container
    apx <my-subsystem> update		 # To update the packages inside the container
    apx <my-subsystem> upgrade		 # To upgrade the packages inside the container
    apx <my-subsystem> list		 # To list the packages inside the container
    apx <my-subsystem> remove <package>	 # To remove packages inside the container
    # ...
    ```
    
    you can also pass commands to run in the subsystem:
    
    ```bash
    apx <my-subsystem> run -- cat /etc/os-release
    ```
    
    or enter it's shell to execute commands manually:
    
    ```bash
    apx <my-subsystem> enter
    ```
    
    and enjoy!

This workflow greatly simplifies the management of development environments, providing an integrated and user-friendly experience.

## Explore the Possibilities: Programming and Creativity.

Are you developing that super special and revolutionary application that requires equally special dependencies and development tools? With APX v2, you can create a stack that includes everything you need, based on a distribution such as Fedora, Ubuntu, our Vanilla Dev image or ... well any container image out there. If something goes wrong, you can easily reinitialize the stack without worrying about the contents being deleted. Also, by sharing the stack with your team, you ensure that everyone is working in the same environment, reducing compatibility issues.

Want to experiment with new technologies or configurations without risking compromising your core development environment? With APX v2, you can create a subsystem where you install and configure everything you need, you can compile that very interesting software without worrying about anything. Did the software turn out to be less interesting than expected or did the test fail? You can just destroy and recreate the subsystem without any impact on the rest of the system.

Do you need a very specific environment that is not available as a default image? You can create and use custom images as the base for your stacks, giving you total control over the initial configuration.

Do you often work with various package managers and need a quick way to manage them without having to remember specific commands for each? APX maps package manager commands into a unified syntax, making package management simple and consistent. You no longer have to remember a thousand different syntaxes, just one.

Whether you are an Arch, Fedora, Debian or other distribution user, APX v2 allows you to create subsystems specific to your preferred distribution. You can replicate exactly the configurations, packages, and tools you used before, ensuring a familiar environment optimized for your needs.

## Why Use APX Instead of Dev Container or Other Solutions?

APX v2 offers an integrated, user-friendly workflow that is not just about the GUI, but a unified system that simplifies interaction with subsystems. Thanks to Distrobox, a project of Luca di Maio, one of the founders of Vanilla OS, APX subsystems are tightly integrated with the host, allowing you to run graphical applications, access Systemd (or whatever init system you prefer), and work as if you were on your main operating system. This offers the best of both worlds: container flexibility and native integration with the host.

The shared home directory between the host and subsystems allows easy access to your files, but you can also define a different home to isolate your personal files completely. This provides flexibility and control over data isolation. If you are a creator working on music or graphics projects, APX v2 allows you to have a dedicated environment, isolated from your main development environment but still integrated with your system.

If you've come to this article and read this far, you'll have realized by now the potential of APX and how endless the things you can do with it can be, so we'll let you go ahead and give it a try. Let us know on Discord what you have created with APX!
