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
        <span class="timeline-label">Late December 2022</span>
        <div class="timeline-item-content">
            <h4>Stable</h4>
            <p>The first stable release of Vanilla OS.</p>
        </div>
    </div>
    <div class="timeline-item timeline-green">
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
| [ABRoot](https://github.com/vanilla-os/ABRoot) | Final tests |
| A/B Compatibility Check | Done |
| A/B Root Manager | Done |
| OverlayFS support for transactions | Done |
| Transaction features | Done |
| Boot Updater | Done |
| Debug flag | Done |
| CLI | Done |

### VSO (Vanilla System Operator)

| Feature | Status |
| --- | --- | --- |
| [VSO](https://github.com/vanilla-os/vanilla-system-operator) | Final tests |
| Updates Scheduler | Done |
| Updates Manager | Done |
| Configuration Manager | Done |
| Automation Tasks Manager | Done |
| Developer Program | Planned for the future |
| CLI | Done |

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
| [Apx](https://github.com/vanilla-os/apx) | Final tests |
| ~~`--sys` flag~~ (replaced by `abroot exec` and `abroot shell`) | Done |
| `--aur` flag | Done |
| `--dnf` flag | Done |
| Core Container features | Done |

### First Setup

| Feature | Status |
| --- | --- | --- |
| [First Setup](https://github.com/vanilla-os/first-setup) | Final tests |
| Support for custom recipes | Done |
| Default templates | Done |
| Tour | Done |
| ABRoot support | Done |
| Vanilla OS Recipe | Done |

### Installer

| Feature | Status |
| --- | --- | --- |
| [Installer](https://github.com/vanilla-os/vanilla-installer) | Final tests |
| Automatic partitioning | Done |
| Manual partitioning | Planned for the future |
| Keyboard layout selection | Final tests |
| Timezone selection | Final tests |
| Language selection | Final tests |
| User creation | Done |
| Processor | WIP |
| `distinst` support | Done |
| Vanilla OS Recipe | Done |

### Control Center

| Feature | Status |
| --- | --- | --- |
| [Vanilla Control Center](https://github.com/vanilla-os/vanilla-control-center) | Final tests |
| Drivers management | Done |
| Updates management | Done |
| Sub System management | Done |
| ~~Overlays support~~ | Replaced by ABRoot |

### GNOME Packages Updates (43)

| Feature | Status |
| --- | --- | --- |
| [gnome-control-center](https://github.com/Vanilla-OS/gnome-control-center) | Final tests |
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
| [vanilla-systemd-units](https://github.com/Vanilla-OS/vanilla-systemd-units) | Final tests |
| [plymouth-theme-vanilla](https://github.com/Vanilla-OS/plymouth-theme-vanilla) | Done |
| [~~calamares-settings-vanilla~~](https://github.com/Vanilla-OS/calamares-settings-vanilla) | Replaced by Vanilla Intaller |
| [micro-distrobox](https://github.com/Vanilla-OS/micro-distrobox) | Done |
| [dev-help-tools](https://github.com/Vanilla-OS/dev-help-tools) | Done |
| [Upgrade Utility](https://github.com/Vanilla-OS/vanilla-updater) | WIP |
| [~~vanilla-os-build~~](https://github.com/Vanilla-OS/vanilla-os-build) | Replaced by ISO Builder |
| [ISO Builder](https://github.com/Vanilla-OS/os) | Final tests |
| [Branding](https://github.com/Vanilla-OS/assets) | Done |
| [Website](https://github.com/Vanilla-OS/website) | Done |
| [Documentation](https://github.com/Vanilla-OS/documentation) | WIP |
| [Handbook](https://github.com/Vanilla-OS/handbook) | WIP |
| [AdwDialog](https://github.com/Vanilla-OS/AdwDialog) | Done |
| [`distinst`](https://github.com/Vanilla-OS/distinst) minor changes | Done |


<script type="text/javascript" src="/assets/js/tableStatus.js"></script>
