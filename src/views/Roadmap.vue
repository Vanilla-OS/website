<template>
    <div class="notebook anim--fadeIn">
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
    </div>
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
                    name: 'GNOME 44',
                    status: 'Not started yet',
                    date: 'No date yet',
                    description: 'Vanilla OS 2.0 will feature GNOME 44 as the Desktop Environment (not guaranteed).',
                },
                {
                    name: 'Waydroid support in Apx',
                    status: 'Not started yet',
                    date: 'No date yet',
                    description: 'We are working on adding Android support to VSO through to a Waydroid implementation.',
                },
                {
                    name: 'desktop-image',
                    status: 'Ongoing',
                    date: 'No date yet',
                    description: 'We are working to the desktop image of Vanilla OS. This is the official image of Vanilla OS.',
                },
                {
                    name: 'core-image',
                    status: 'Ongoing',
                    date: 'No date yet',
                    description: 'We are working to the core image of Vanilla OS. This image will be used as a base for the desktop image and flavors.',
                },
                {
                    name: 'Vib',
                    status: 'Completed',
                    date: '30 April 2023',
                    description: 'We are working on a new convenient way to build OCI images using modules.',
                },
                {
                    name: 'pico-image',
                    status: 'Completed',
                    date: '27 May 2023',
                    description: 'We are working on a new convenient way to build OCI images using modules.',
                },
                {
                    name: 'Albius',
                    status: 'Completed',
                    date: '7 Jun 2023',
                    description: 'We are developing and switching to Albius, a new installer backend for Vanilla OS.',
                },
                {
                    name: 'Ikaros',
                    status: 'Ongoing',
                    date: 'No date yet',
                    description: 'We are working on a new drivers backend with automatic drivers discover for Vanilla OS.',
                },
                {
                    name: 'ABRoot v2',
                    status: 'Ongoing',
                    date: 'No date yet',
                    description: 'We are working on a new ABRoot version which use OCI images instead of the package manager.',
                },
                {
                    name: 'Prometheus',
                    status: 'Completed',
                    date: '19 May 2023',
                    description: 'We are developing a runtime for containers to be used in Vanilla OS projects.',
                },
                {
                    name: 'Atlas',
                    status: 'Completed',
                    date: '6 Jun 2023',
                    description: 'We are developing a web platform to browse the Vanilla OS Image Registry.',
                },
                {
                    name: 'Eratosthenes',
                    status: 'Completed',
                    date: '23 May 2023',
                    description: 'We are developing a web platform to index and search for packages in the Vanilla OS repositories.',
                },
                {
                    name: 'OEM Support',
                    status: 'Ongoing',
                    date: 'No date yet',
                    description: 'We are working on adding OEM support to Vanilla OS.',
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