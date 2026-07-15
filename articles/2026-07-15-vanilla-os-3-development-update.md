---
title: "Vanilla OS 3 Reunion - Development Update and Some Clarifications"
description: "Vanilla OS is alive and well. Here is what we have been working on for Vanilla OS 3 Reunion, why stability always comes before new features, and how we communicate our progress."
published: true
date: 2026-07-15
keywords:
  - Vanilla OS
  - Vanilla OS 3
  - Vanilla OS Reunion
  - Vanilla OS Orchid
  - Development Update
  - ABRoot
  - Apx
  - VSO
  - Vib
  - SDK
  - News
layout: article
comments: true
---

Every now and then we come across comments claiming that Vanilla OS is dead or abandoned, and we understand where the feeling comes from: we haven't published many blog posts lately, and in a world where projects constantly announce something new just to stay visible, silence is easily mistaken for abandonment. So let's clear this up right away: **Vanilla OS is alive, actively maintained, and in the middle of one of its most important development cycles**.

## Stability is the Feature

Vanilla OS has never been a distribution that chases new features to look prettier than the others, that's not our goal and it never was. Our goal is much less glamorous and much more important: making sure your work is never interrupted. This is why most of our energy goes into strengthening the stack and the foundations of the system, even when it means rewriting them from scratch, work that is invisible by nature, it doesn't produce screenshots or flashy announcements, but it's exactly what allows you to turn on your computer every day and find a system that just works.

Want a concrete example? We retired Android app support because it did not meet our stability standards. Removing a feature is never a pleasant decision, but between keeping something unstable and protecting the reliability of your system, we will always choose the latter.

## Orchid Laid the Foundations

As we said in the [Orchid release announcement](https://vanillaos.org/blog/article/2024-07-28/vanilla-os-2-orchid---stable-release), Vanilla OS 2 was not just a new version but a complete rewrite that laid the foundations for the future of the project: a new family of operating systems built with [Vib](https://vib.vanillaos.org/) on top of a hybrid Debian base, standing on a complete and opinionated stack made of technologies we designed and built ourselves. [ABRoot](https://github.com/Vanilla-OS/ABRoot) for atomic transactions and rollbacks, [FsGuard](https://github.com/linux-immutability-tools/FsGuard) for integrity verification, [VSO](https://github.com/Vanilla-OS/vanilla-system-operator) as your personal environment and system operator, [Apx](https://github.com/Vanilla-OS/apx) for development environments, plus everything around them, from [Albius](https://github.com/Vanilla-OS/Albius) to [Eratosthenes](https://github.com/Vanilla-OS/Eratosthenes).

A stack like this is complex by definition: every component revisits aspects that other distributions take for granted, and each one has to work in concert with the others. Strengthening it comes before adding anything on top, because a new feature built on shaky foundations is a problem, not a gift.

## What is Happening with Vanilla OS 3 Reunion

Vanilla OS 3 is where this philosophy becomes tangible. A large part of the stack has been rewritten on top of the [Vanilla OS SDK](https://github.com/Vanilla-OS/sdk), a new project that is itself part of this release: a collection of libraries and tools that unifies how we develop the components of Vanilla OS, one consistent way to handle logging, permissions, configurations, and interactions with the system. Before the SDK every tool solved these problems in its own way, now they all share the same well-tested foundation, which means fewer bugs, faster development and, most importantly, more consistency and stability in the tools you use every day.

Apx, VSO, and Eratosthenes have already been rewritten on top of it, more components are following the same path, and alongside this work Vanilla OS 3 brings an updated desktop experience based on GNOME 49 (with Ptyxis as the new terminal and Papers as the new document viewer), reproducible image builds for greater transparency, improvements to Vib, a more flexible ABRoot with a user-writable `/usr/local`, and countless fixes across the entire stack. Apx GUI is now also [available on Flathub](https://flathub.org/apps/org.vanillaos.ApxGUI), so any Linux user can benefit from it. None of this makes headlines every week, but it's the kind of work that makes the next five years of Vanilla OS possible.

## A New Home for Our Packages

Part of the work you don't see happened in our infrastructure. We rebuilt our package repository from the ground up, and its management now relies on [aptutil](https://github.com/Vanilla-OS/aptutil), a set of Go utilities for Debian APT repositories that we maintain in our organization and deploy [with Vib itself](https://github.com/Vanilla-OS/aptutil-image). This gives us a faster and more reliable way to snapshot and serve Debian packages, and it is also what opens the door to serving packages for more than one architecture.

Why does that last part matter? Keep reading.

## Vanilla OS is Coming to ARM64

One of the biggest efforts of this cycle is bringing Vanilla OS to ARM64 devices, an answer to one of [the most requested features ever](https://github.com/Vanilla-OS/live-iso/issues/87). It's not a simple port: it meant rethinking how our images and ISOs are built, adding native ARM64 builds to our pipelines, adapting the installer, and, as mentioned above, rebuilding the package infrastructure to serve multiple architectures.

An early, experimental test build is already available, based on Debian Sid with a recent kernel, and it boots on a wide range of UEFI-capable ARM64 hardware: single board computers like the Raspberry Pi 4 and RK3588 boards, as well as virtual machines, including UTM on Apple Silicon Macs. If you own such a device and want to help, join the discussion [in the tracking issue](https://github.com/Vanilla-OS/live-iso/issues/87), testing on real hardware is exactly the kind of contribution we need right now. Just remember this is a test build, not ready for production use.

## About Our Communication

Here too, let's be honest: we could have written more blog posts, and we know it. Our team is small and made of volunteers, everyone's time currently goes into development, and since we don't have a dedicated editor, writing good articles takes time we prefer to invest in the system itself. We are actively looking for someone to take charge of the project's news, so if you love writing and want to help tell the story of Vanilla OS, [get involved](https://vanillaos.org/get-involved) and reach out on [our Discord server](https://vanillaos.org/community).

That said, the blog has never been our only channel: the [Updates page](https://vanillaos.org/updates) has always been kept up to date, and since the release of Orchid the system has received constant updates (bug fixes, alignments with Debian, component upgrades), exactly as promised in our [post-release plans](https://vanillaos.org/blog/article/2024-09-25/vanilla-os-2---future-plans-updates-and-next-release). If you ever wonder whether the project is moving, that page is the answer.

## In Short

Vanilla OS is not dead, it simply doesn't shout. We prefer spending our time making the system more solid rather than making noise, and Vanilla OS 3 Reunion is the proof: a stronger stack, unified on our SDK, built to ensure that your work is never interrupted.

Thank you for your patience and your trust. For questions, or to follow the development more closely, join [our Discord server](https://vanillaos.org/community) or [our Reddit community](https://www.reddit.com/r/vanillaos/).

- The Vanilla OS Team
