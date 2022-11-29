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
    <div class="timeline-item timeline-grayed">
        <div class="timeline-item-content"> 
            <p>Release Candidate releases will be available for testing.</p>
        </div>
    </div>
    <div class="timeline-item timeline-green">
        <span class="timeline-label">24 October 2022 (current)</span>
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
| [VSO](https://github.com/vanilla-os/vanilla-system-operator) | WIP |
| Updates Scheduler | Done |
| Updates Manager | Done |
| Configuration Manager | Done |
| Developer Program | WIP |
| CLI | Done |

### ~~Almost~~ (Replaced by ABRoot)

| Feature | Status |
| --- | --- | --- |
| [Almost](https://github.com/vanilla-os/Almost) | Done |
| Configurator | Done |
| Systemd Persistent Mode | Done |
| Offline Updates Support | Done |
| Persistent Overlays Support | Done |
| Atomic Updates Support | Done |

### Apx

| Feature | Status |
| --- | --- | --- |
| [Apx](https://github.com/vanilla-os/apx) | Final tests |
| ~~`--sys` flag~~ (replaced by `abroot exec` and `abroot shell`) | ~~Done~~ |
| `--aur` flag | Done |
| `--dnf` flag | Done |

### First Setup

| Feature | Status |
| --- | --- | --- |
| [First Setup](https://github.com/vanilla-os/vanilla-first-setup) | Final tests |
| Support for custom recipes | Done |
| Default templates | Done |
| Tour | Done |
| ABRoot support | Done |

### Control Center

| Feature | Status |
| --- | --- | --- |
| [Vanilla Control Center](https://github.com/vanilla-os/vanilla-control-center) | Final tests |
| Drivers management | Done |
| Updates management | Done |
| Sub System management | Done |
| ~~Overlays support~~ | ~~WIP~~ |

### Vanilla Extra Packages and Meta Packages

| Feature | Status |
| --- | --- | --- |
| base-files | Done |
| vanilla-base-meta | Done |
| vanilla-base-desktop | Done |
| vanilla-beta-notice | Done |
| vanilla-backgrounds | Done |
| vanilla-systemd-units | Final tests |
| plymouth-theme-vanilla | Final tests |
| Adwaita icons | Done |

### GNOME Packages Updates (43)

| Feature | Status |
| --- | --- | --- |
| Control Center | WIP |
| Software | Done |
| Adwaita icons | Done |

### Misc

| Feature | Status |
| --- | --- | --- |
| Upgrade Utility | WIP |
| ISO Builder | Final tests |
| Branding | Done |
| Website | Done |
| Official Wallpaper | Done |
| Documentation | WIP |
| Handbook | WIP |
