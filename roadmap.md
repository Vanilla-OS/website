---
layout: page
title: Vanilla OS Roadmap
description: The roadmap for the stable release of Vanilla OS.
---
## Terms
* **Stable**: A release that is ready for production use.
* **Closed/Open Beta**: A release that is ready for testing and feedback.
* **Release Candidate**: A release that is proposed for the stable release.

All releases are always available for download on our GitHub page, the main
difference is the level of support and stability.

## Dates
The following dates are subject to change. Time is in `GMT+2`.

<div class="timeline">
    <div class="timeline-item timeline-grayed">
        <span class="timeline-label">January</span>
        <div class="timeline-item-content">
            <h4>Bug fixes</h4>
            <p>Bugs reported by the community will be fixed.</p>
        </div>
    </div>
    <div class="timeline-item timeline-green">
        <span class="timeline-label">29 December 2022</span>
        <div class="timeline-item-content">
            <h4>Stable</h4>
            <p>The first stable release of Vanilla OS.</p>
        </div>
    </div>
    <div class="timeline-item timeline-dimmed-green">
        <div class="timeline-item-content"> 
            <p>Release Candidate builds are <a href="/download">available for testing</a>.</p>
        </div>
    </div>
    <div class="timeline-item timeline-dimmed-green">
        <span class="timeline-label">28 November 2022</span>
        <div class="timeline-item-content"> 
            <h4>ABRoot Ready</h4>
            <p>ABRoot is ready to be included in the next release.</p>
        </div>
    </div>
    <div class="timeline-item timeline-red">
        <span class="timeline-label">11 November 2022</span>
        <div class="timeline-item-content"> 
            <h4>Slowdown #1</h4>
            <p>We have decided to deprecate Almost for ABRoot, a new utility designed to provide a more robust and full atomic immutability model, as a result the next release will be delayed by a few weeks.</p>
        </div>
    </div>
    <div class="timeline-item timeline-dimmed-green">
        <span class="timeline-label">24 October 2022</span>
        <div class="timeline-item-content"> 
            <h4>Open Beta</h4>
            <p>The first open beta of Vanilla OS.</p>
        </div>
    </div>
    <div class="timeline-item timeline-dimmed-green">
        <span class="timeline-label">09 October 2022</span>
        <div class="timeline-item-content">
            <h4>Closed Beta 2</h4>
            <p>The second Closed Beta stage of Vanilla OS begins.</p>
        </div>
    </div>
    <div class="timeline-item timeline-dimmed-green">
        <span class="timeline-label">01 October 2022</span>
        <div class="timeline-item-content">
            <h4>Closed Beta 1</h4>
            <p>The first Closed Beta stage of Vanilla OS begins.</p>
        </div>
    </div>
    <div class="timeline-item timeline-dimmed-green">
        <span class="timeline-label">24 September 2022</span>
        <div class="timeline-item-content">
            <h4>Alpha</h4>
            <p>First Alpha release of Vanilla OS.</p>
        </div>
    </div>
</div>

<br />

## Planning
The following planning is subject to change.

### ABRoot

| Feature | Status |
| --- | --- | --- |
| [ABRoot](https://github.com/vanilla-os/ABRoot) | Done |
| A/B Compatibility Check | Done |
| A/B Root Manager | Done |
| OverlayFS support for transactions | Done |
| Transaction features | Done |
| Boot Updater | Done |
| Debug flag | Done |
| CLI | Done |
| Man pages (`man abroot`) | Done |

### VSO (Vanilla System Operator)

| Feature | Status |
| --- | --- | --- |
| [VSO](https://github.com/vanilla-os/vanilla-system-operator) | Done |
| Updates Scheduler | Done |
| Updates Manager | Done |
| Configuration Manager | Done |
| Automation Tasks Manager | Done |
| Developer Program | Planned for the future |
| CLI | Done |
| Man pages (`man vso`) | Done |

### ~~Almost~~ (Replaced by ABRoot)

| Feature | Status |
| --- | --- | --- |
| [Almost](https://github.com/vanilla-os/Almost) | Discontinued |
| Configurator | Done |
| Systemd Persistent Mode | Done |
| Offline Updates Support | Done |
| Persistent Overlays Support | Done |
| Atomic Updates Support | Done |

### Apx

| Feature | Status |
| --- | --- | --- |
| [Apx](https://github.com/vanilla-os/apx) | Done |
| ~~`--sys` flag~~ (replaced by `abroot exec` and `abroot shell`) | Done |
| Core Container features | Done |
| `--aur` flag | Done |
| `--dnf` flag | Done |
| `--apk` flag | Done |
| `--name` flag for Custom containers| Done |
| Man pages (`man apx`) | Done |

### First Setup

| Feature | Status |
| --- | --- | --- |
| [First Setup](https://github.com/vanilla-os/first-setup) | Done |
| Support for custom recipes | Done |
| Default templates | Done |
| Tour | Done |
| ABRoot Support | Done |
| Vanilla OS Recipe | Done |
| OpenVM Support | Done |
| Ubuntu Restricted Extras Support | Done |
| Nvidia Drivers Support | Done |

### Installer

| Feature | Status |
| --- | --- | --- |
| [Installer](https://github.com/vanilla-os/vanilla-installer) | Done |
| Automatic partitioning | Done |
| Manual partitioning | Planned for the future |
| Keyboard layout Selection | Done |
| Timezone Selection | Done |
| Language Selection | Done |
| User creation | Done |
| Processor | Done |
| `distinst` Support | Done |
| Vanilla OS Recipe | Done |

### Control Center

| Feature | Status |
| --- | --- | --- |
| [Vanilla Control Center](https://github.com/vanilla-os/vanilla-control-center) | Done |
| Drivers management | Done |
| Updates management | Done |
| Sub System management | Done |
| ~~Overlays support~~ | Replaced by ABRoot |

### GNOME Packages Updates (43)

| Feature | Status |
| --- | --- | --- |
| [gnome-control-center](https://github.com/Vanilla-OS/gnome-control-center) | Done |
| [gnome-software](https://github.com/Vanilla-OS/gnome-software) | Done |
| [adwaita-icon-theme](https://github.com/Vanilla-OS/adwaita-icon-theme) | Done |

### Misc and other packages

| Feature | Status |
| --- | --- | --- |
| [~~almost-extras~~](https://github.com/Vanilla-OS/almost-extras) | Replaced by ABRoot |
| [base-files](https://github.com/Vanilla-OS/base-files) | Done |
| [vanilla-base-meta](https://github.com/Vanilla-OS/vanilla-base-meta) | Done |
| [vanilla-base-desktop](https://github.com/Vanilla-OS/vanilla-base-desktop) | Done |
| [~~vanilla-beta-notice~~](https://github.com/Vanilla-OS/vanilla-beta-notice) | Replaced by vanilla-dev-notice |
| [vanilla-dev-notice](https://github.com/Vanilla-OS/vanilla-dev-notice) | Done |
| [vanilla-backgrounds](https://github.com/Vanilla-OS/vanilla-backgrounds) | Done |
| [vanilla-systemd-units](https://github.com/Vanilla-OS/vanilla-systemd-units) | Done |
| [plymouth-theme-vanilla](https://github.com/Vanilla-OS/plymouth-theme-vanilla) | Done |
| [~~calamares-settings-vanilla~~](https://github.com/Vanilla-OS/calamares-settings-vanilla) | Replaced by Vanilla Installer |
| [micro-distrobox](https://github.com/Vanilla-OS/micro-distrobox) | Done |
| [dev-help-tools](https://github.com/Vanilla-OS/dev-help-tools) | Done |
| [Upgrade Utility](https://github.com/Vanilla-OS/vanilla-updater) | Done |
| [~~vanilla-os-build~~](https://github.com/Vanilla-OS/vanilla-os-build) | Replaced by ISO Builder |
| [ISO Builder](https://github.com/Vanilla-OS/os) | Done |
| [Branding](https://github.com/Vanilla-OS/assets) | Done |
| [Website](https://github.com/Vanilla-OS/website) | Done |
| [Documentation](https://github.com/Vanilla-OS/documentation) | Done |
| [Handbook](https://github.com/Vanilla-OS/handbook) | Done |
| [AdwDialog](https://github.com/Vanilla-OS/AdwDialog) | Done |
| [`distinst`](https://github.com/Vanilla-OS/distinst) minor changes | Done |


<script type="text/javascript" src="/assets/js/tableStatus.js"></script>
