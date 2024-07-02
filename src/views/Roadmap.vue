<template>
    <div class="flexList anim--fadeIn">
        <timeline :title="orchidTitle" :subtitle="orchidSubtitle" :events="orchidEvents" />
        <div class="spacer"></div>
        <timeline :title="kineticTitle" :subtitle="kineticSubtitle" :events="kineticEvents" />
    </div>
    <!-- <div class="notebook anim--fadeIn">
        <div class="notebook-wrapper">
            <div class="notebook-header">
                <div class="notebook-header-item active">
                    <span class="notebook-header-item-text">Roadmap</span>
                </div>
                <div class="notebook-header-item" disabled="true" title="Not published yet">
                    <span class="notebook-header-item-text">Release Lifecycle</span>
                </div>
            </div>
            <div class="notebook-frames">
                <div class="notebook-frames-item">
                    <div class="flexList">
                        <timeline :title="orchidTitle" :subtitle="orchidSubtitle" :events="orchidEvents" />
                        <div class="spacer"></div>
                        <timeline :title="kineticTitle" :subtitle="kineticSubtitle" :events="kineticEvents" />
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'roadmap',
    data() {
        return {
            orchidTitle: 'Vanilla OS Orchid',
            orchidSubtitle: 'Upcoming Version',
            orchidEvents: [
                {
                    name: 'Attestation of OCI Images',
                    status: 'Completed',
                    date: '2 July 2024',
                    description: 'We are attesting our OCI images using GitHub actions for build provenance.',
                },
                {
                    name: 'GNOME 46',
                    status: 'Completed',
                    date: '20 June 2024',
                    description: 'Vanilla OS 2.0 will feature GNOME 46 as the Desktop Environment.',
                },
                {
                    name: 'Revamped Apx GUI',
                    status: 'Completed',
                    date: '7 June 2024',
                    description: 'We have revamped the UI of Apx GUI with new buttons to start/stop, autoremove and clean subsystems and a subsystem status indicator in sidebar.',
                },
                {
                    name: 'Image caching support',
                    status: 'Completed',
                    date: '11 May 2024',
                    description: 'We have implemented image caching support to our Docker build workflows facilitating smaller system updates.',
                },
                {
                    name: 'New progressbar in ABRoot upgrades',
                    status: 'Completed',
                    date: '30 April 2024',
                    description: 'We have implemented a new subtle progressbar when pulling the OCI image during ABRoot upgrades.',
                },
                {
                    name: 'custom-image',
                    status: 'Completed',
                    date: '1 February 2024',
                    description: 'We are working on a template repository allowing users to create custom images of Vanilla OS.',
                },
                {
                    name: 'Vanilla OS 2 Beta',
                    status: 'Ongoing',
                    date: '30 January 2024',
                    description: 'We are proud to announce the release of Vanilla OS 2 Orchid Beta.',
                },
                {
                    name: 'Vanilla Tour',
                    status: 'Completed',
                    date: '23 January 2024',
                    description: 'Vanilla Tour will give new users an oversight about all the things in Vanilla OS.',
                },
                {
                    name: 'Sideload Utility',
                    status: 'Completed',
                    date: '15 January 2024',
                    description: 'We are working on a sideload utility for VSO to install DEBs and Android APKs (experimental) with ease.',
                },
                {
                    name: 'Vanilla Plymouth Theme',
                    status: 'Completed',
                    date: '15 January 2024',
                    description: 'We are working on a custom boot, restart, and power-off screen with our Plymouth theme.',
                },
                {
                    name: 'FsWarn',
                    status: 'Completed',
                    date: '12 January 2024',
                    description: 'We are working on a tool to warn the users at boot time if FsGuard failed the filesystem verification.',
                },
                {
                    name: 'vm-image',
                    status: 'Completed',
                    date: '10 January 2024',
                    description: 'We are working on the VM image of Vanilla OS with GNOME and VM tools pre-installed',
                },
                {
                    name: 'FsGuard',
                    status: 'Completed',
                    date: '7 January 2024',
                    description: 'We are working on integrating FsGuard a tool for verifying filesystem integrity at boot time, to ensure no discrepancies with the state provided by the system image.',
                },
                {
                    name: 'ABRoot Rollback Notifier',
                    status: 'Completed',
                    date: '6 January 2024',
                    description: 'We are working on a GUI utility that prompts for rollback to that state, when entering the previous root.',
                },
                {
                    name: 'OEM Support',
                    status: 'Completed',
                    date: '1 January 2024',
                    description: 'We are working on adding OEM support to Vanilla OS.',
                },
                {
                    name: 'PRIME Utility',
                    status: 'Completed',
                    date: '29 December 2023',
                    description: 'We are updating our PRIME utility to work with ABRoot.',
                },
                {
                    name: 'VSO shell as the default shell',
                    status: 'Completed',
                    date: '22 December 2023',
                    description: 'Vanilla OS 2.0 will feature VSO shell as the default shell on Blackbox terminal.',
                },
                {
                    name: 'LVM Thin Provisioning',
                    status: 'Completed',
                    date: '20 November 2023',
                    description: 'We are working on adding LVM Thin Provisioning support to Installer and Albius.',
                },
                {
                    name: 'Waydroid support in VSO',
                    status: 'Completed',
                    date: '19 November 2023',
                    description: 'We are working on adding experimental Android support to VSO through to a Waydroid implementation.',
                },
                {
                    name: 'Vanilla Tools',
                    status: 'Completed',
                    date: '27 August 2023',
                    description: 'We are working on a set of tools to simplify some tasks.',
                },
                {
                    name: 'GNOME 44',
                    status: 'Completed',
                    date: '15 August 2023',
                    description: 'Vanilla OS 2.0 Alpha builds feature GNOME 44 as the Desktop Environment and components are being transitioned to GNOME 45.',
                },
                {
                    name: 'Deprecation of Vanilla Control Center',
                    status: 'Completed',
                    date: '05 July 2023',
                    description: 'We have deprecated Vanilla Control Center in favor of Apx GUI and GNOME Settings.',
                },
                {
                    name: 'Apx GUI',
                    status: 'Completed',
                    date: '05 July 2023',
                    description: 'We are working on a new GUI for Apx.',
                },
                {
                    name: 'Albius',
                    status: 'Completed',
                    date: '7 Jun 2023',
                    description: 'We are developing and switching to Albius, a new installer backend for Vanilla OS.',
                },
                {
                    name: 'Atlas',
                    status: 'Completed',
                    date: '6 Jun 2023',
                    description: 'We are developing a web platform to browse the Vanilla OS Image Registry.',
                },
                {
                    name: 'nvidia-image',
                    status: 'Completed',
                    date: '27 May 2023',
                    description: 'We are working on the official Nvidia image of Vanilla OS with GNOME, proprietary NVIDIA® drivers pre-installed and pre-configured.',
                },
                {
                    name: 'desktop-image',
                    status: 'Completed',
                    date: '27 May 2023',
                    description: 'We are working on the official desktop image of Vanilla OS running GNOME.',
                },
                {
                    name: 'core-image',
                    status: 'Completed',
                    date: '27 May 2023',
                    description: 'We are working on the core image of Vanilla OS. This image will be used as a base for the desktop image and future flavors.',
                },
                {
                    name: 'Vib',
                    status: 'Completed',
                    date: '27 May 2023',
                    description: 'We are working on a new convenient way to build OCI images using modules.',
                },
                {
                    name: 'pico-image',
                    status: 'Completed',
                    date: '27 May 2023',
                    description: 'We are working on a official base image to be used with other images. It is a Debian rootfs built using the Vanilla OS repository during the debootstrap process.',
                },
                {
                    name: 'Eratosthenes',
                    status: 'Completed',
                    date: '23 May 2023',
                    description: 'We are developing a web platform to index and search for packages in the Vanilla OS repositories.',
                },
                {
                    name: 'Prometheus',
                    status: 'Completed',
                    date: '19 May 2023',
                    description: 'We are developing a runtime for containers to be used in Vanilla OS projects.',
                },
                {
                    name: 'Apx v2',
                    status: 'Completed',
                    date: '28 April 2023',
                    description: 'We are working on a new Apx version with support for stacks to better suit developers needs.',
                },
                {
                    name: 'VSO v2',
                    status: 'Completed',
                    date: '28 April 2023',
                    description: 'We are working on a new VSO to let the user install packages like any other Linux distribution but using a well-integrated subsystem.',
                },
                {
                    name: 'ABRoot v2',
                    status: 'Completed',
                    date: '28 April 2023',
                    description: 'We are working on a new ABRoot version which use OCI images instead of the package manager.',
                },
                {
                    name: 'Recovery mode in Installer',
                    status: 'Completed',
                    date: '30 March 2023',
                    description: 'We are working on a recovery mode for our Installer with easy access to all recovery tools.',
                },
                {
                    name: 'Setting up testing infrastructure',
                    status: 'Completed',
                    date: '26 Feb 2023',
                    description: 'We are setting up a testing infrastructure to test the new features and bug fixes. The base system is based on Debian sid.',
                },
                {
                    name: 'Initial work',
                    status: 'Completed',
                    date: '23 Feb 2023',
                    description: 'Initial works on the next major release of Vanilla OS.',
                },
            ],

            kineticTitle: 'Vanilla OS 22.10 Kinetic',
            kineticSubtitle: 'Current Version',
            kineticEvents: [
                {
                    name: 'Freeze',
                    status: 'Freeze',
                    date: '26 February 2023',
                    description: 'The development of Vanilla OS 22.10 will be frozen until the next release.',
                },
                {
                    name: 'Manual Partitioning Support',
                    status: 'Completed',
                    date: '26 February 2023',
                    description: 'Added Manual Partitioning Support to Installer.',
                },
                {
                    name: 'Panels removed in Vanilla Control Center',
                    status: 'Completed',
                    date: '26 February 2023',
                    description: 'Drivers and PRIME Profiles panels have been moved to Settings from Vanilla Control Center.',
                },
                {
                    name: 'Nix Support',
                    status: 'Completed',
                    date: 'February 2023',
                    description: 'Added support for Nix packages in Apx.',
                },
                {
                    name: 'Rollback Support',
                    status: 'Completed',
                    date: 'February 2023',
                    description: 'Added an option to rollback to the previous root partition in ABRoot.',
                },
                {
                    name: 'VRR Session',
                    status: 'Completed',
                    date: 'February 2023',
                    description: 'Experimental VRR package with GNOME Session has been added.',
                },
                {
                    name: 'Bug Fixes',
                    status: 'Ongoing',
                    date: 'January 2023',
                    description: 'Bugs reported by the community will be fixed.',
                },
                {
                    name: 'Stable Release',
                    status: 'Completed',
                    date: '29 December 2022',
                    description: 'The first stable release of Vanilla OS. Release Candidate builds are available for testing.',
                },
                {
                    name: 'ABRoot Ready',
                    status: 'Completed',
                    date: '28 November 2022',
                    description: 'ABRoot is ready to be included in the next release.',
                },
                {
                    name: 'Slowdown #1',
                    status: 'Slowdown',
                    date: '11 November 2022',
                    description: 'We have decided to deprecate Almost for ABRoot, a new utility designed to provide a more robust and full atomic immutability model, as a result, the next release will be delayed by a few weeks.',
                },
                {
                    name: 'Open Beta',
                    status: 'Completed',
                    date: '24 October 2022',
                    description: 'The first open beta of Vanilla OS.',
                },
                {
                    name: 'Closed Beta 2',
                    status: 'Completed',
                    date: '09 October 2022',
                    description: 'The second Closed Beta stage of Vanilla OS begins.',
                },
                {
                    name: 'Closed Beta 1',
                    status: 'Completed',
                    date: '01 October 2022',
                    description: 'The first Closed Beta stage of Vanilla OS begins.',
                },
                {
                    name: 'Alpha Release',
                    status: 'Completed',
                    date: '24 September 2022',
                    description: 'First Alpha release of Vanilla OS.',
                },
            ],

        };
    },
});
</script>
