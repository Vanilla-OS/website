---
title: "Vanilla OS Orchid - Devlog 19 Nov"
description: "We are excited to announce that we have recently completed the Waydroid integration with F-Droid support in VSO."
published: true
date: 2023-11-19
keywords:
  - Vanilla OS
  - Vanilla OS Orchid
  - Orchid
  - Vanilla System Operator
  - VSO
layout: article
comments: true
---

A few months ago, we shared our progress in Orchid's development through our first [Devlog](https://vanillaos.org/blog/article/2023-06-11/vanilla-os-orchid---devlog-11-jun). Among the many updates, we discussed [VSO v2](https://vanillaos.org/blog/article/2023-06-11/vanilla-os-orchid---devlog-11-jun#vso-as-a-system-package-manager) and how it was evolving to fit the needs of regular users. The crucial development of VSO v2 is finished and available for testing now!

Vanilla System Operator (VSO v1) was previously a tool to perform management tasks in your system. In Orchid, the whole experience of VSO has been overhauled to make it an all in one package management tool for our regular users. Among other changes, VSO v2 adds support for sideloading Android applications using Waydroid, integrated with F-Droid.

## Waydroid

[Waydroid](https://waydro.id) is a popular open source project which allows users to run Android applications inside a container on Linux. It requires certain dependencies installed on the host system making it difficult to install on immutable operating systems until now.

In order to make the experience seamless, we have created a [custom image](https://github.com/Vanilla-OS/waydroid-image) based on the VSO image which includes Waydroid with all of its dependencies preinstalled. VSO pulls this image and creates a privileged [Distrobox](https://distrobox.it/) container, in which Waydroid runs. The `binder_linux` module for it is preinstalled on the host system.

![The Composition of the Waydroid Image](/uploads/waydroid-image-composition.png)

When a user wants to perform actions in the container such as opening the launcher or any app, installing a (local) Apk, or removing an app, Apx is used to get access to it. Apx starts the container if it isn't already running, which then executes the necessary commands inside the Waydroid container. The main executable used in the container is `ewaydroid`, which is a wrapper script that first checks if Waydroid is running, sets up the required environment variables, and then passes the arguments to the `waydroid` command.

A full list of supported subcommands can be found below:

```shell
use@vanillaos$ vso android
Manage the vso waydroid subsystem

Usage:
  vso android [command]

Available Commands:
  clean       Cleans the waydroid vso cache
  delete      Delete the waydroid subsystem
  info        Display information about an application
  init        Initialize the waydroid subsystem
  install     Install an application
  launch      Launch an installed application
  launcher    Show the waydroid launcher
  remove      Uninstall an application
  search      Search for an application
  sync        Sync the repositories
  update      Update installed applications

Flags:
  -h, --help   help for android

Use "vso android [command] --help" for more information about a command.
```

## F-Droid

[F-Droid](https://f-droid.org/) is a popular repository for installing Free and Open Source Android applications.

The Waydroid container is integrated with F-Droid to provide a seamless experience. The container first reads any listed repositories (by default we include F-Droid and [IzzyOnDroid](https://apt.izzysoft.de/fdroid/)) and syncs the index-v2 files if they are outdated or not already downloaded.

The index-v2 files are JSON files containing information about every single app available in the repository it was downloaded from, allowing VSO to search and display information about any app without having to frequently send requests to an API.

One main consideration with this approach is the size of the repository; the indexes can become quite large (F-Droid's index-v2 file is approximately 36MB for example), which is why VSO caches the entire index locally and automatically refreshes it once every week.

When a user searches or tries to install an app with these indexes saved, all VSO has to do is parse the index-v2 files and search them for the name of the application. The user can define both the reverse domain name notation (e.g. org.fdroid.fdroid) or the name displayed to the user (just "fdroid"), VSO will automatically match for both names regardless of which version has been passed by the user to provide the highest chance of finding an app.

If only one match is found, VSO does not prompt the user and proceeds with the found app. If multiple matches are found, VSO asks the user which app they want VSO to process with a multiple choice question. The question will show the normal name, the rdns name, the summary of the app, and in which repository it was found to make the apps more distinguishable for the user.

Once the user selects the app to process, depending on what operation the user executed different things are done:

- **remove** - the app gets deleted with the `ewaydroid app remove <app rdns>` command.

- **info** - the information of the app gets printed out

- **install** - VSO uses the rdns name to make an API call to `https://<repourl>/api/v1/packages/<rdns>`, this returns a JSON file containing some app information, one of those being the suggested version code. Based on that, VSO builds the URL to download the Apk and stores it in the cache. Once the Apk is downloaded, it is simply installed using `ewaydroid app install ~/.cache/vso/apks/<rdns>_<versioncode>.apk`. In addition to that, VSO also maintains a [bbolt](https://pkg.go.dev/go.etcd.io/bbolt) database which contains information about every app the user has currently installed. This allows for a quicker removal of apps, as VSO can just check the database for installed apps instead of having to use Waydroid to get the list of apps, convert it to a readable format, and filter out system apps.

**Note**: `vso android launch <app>` would only accept the rdns names of apps since the name -> rdns conversion would require more calls to the database, and it would possibly require users to pick an app to launch from the results. By only accepting rdns names, VSO can skip any name -> rdns conversion and database calls, and just launch `ewaydroid app intent <rdns>`.
