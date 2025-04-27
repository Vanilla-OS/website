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
            orchidSubtitle: this.$t('roadmap.versions.current'),
            orchidEvents: [
                {
                    name: this.$t('roadmap.versions.timeline.orchidEvents[38].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[38].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[38].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.orchidEvents[37].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[37].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[37].description'),
                },
                {
                    name: "GNOME 46",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[36].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[36].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.orchidEvents[35].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[35].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[35].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.orchidEvents[34].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[34].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[34].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.orchidEvents[33].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[33].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[33].description'),
                },
                {
                    name: "custom-image",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[32].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[32].description'),
                },
                {
                    name: "Vanilla OS 2 Beta",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[31].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[31].description'),
                },
                {
                    name: "Vanilla Tour",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[30].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[30].description'),
                },
                {
                    name: "Sideload Utility",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[29].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[29].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.orchidEvents[28].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[28].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[28].description'),
                },
                {
                    name: "FsWarn",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[27].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[27].description'),
                },
                {
                    name: "vm-image",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[26].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[26].description'),
                },
                {
                    name: "FsGuard",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[25].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[25].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.orchidEvents[24].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[24].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[24].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.orchidEvents[23].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[23].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[23].description'),
                },
                {
                    name: "PRIME Utility",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[22].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[22].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.orchidEvents[21].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[21].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[21].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.orchidEvents[20].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[20].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[20].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.orchidEvents[19].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[19].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[19].description'),
                },
                {
                    name: "Vanilla Tools",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[18].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[18].description'),
                },
                {
                    name: "GNOME 44",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[17].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[17].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.orchidEvents[16].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[16].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[16].description'),
                },
                {
                    name: "Apx GUI",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[15].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[15].description'),
                },
                {
                    name: "Albius",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[14].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[14].description'),
                },
                {
                    name: "Atlas",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[13].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[13].description'),
                },
                {
                    name: "nvidia-image",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[12].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[12].description'),
                },
                {
                    name: "desktop-image",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[11].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[11].description'),
                },
                {
                    name: "core-image",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[10].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[10].description'),
                },
                {
                    name: "Vib",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[9].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[9].description'),
                },
                {
                    name: "pico-image",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[8].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[8].description'),
                },
                {
                    name: "Eratosthenes",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[7].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[7].description'),
                },
                {
                    name: "Prometheus",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[6].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[6].description'),
                },
                {
                    name: "Apx v2",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[5].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[5].description'),
                },
                {
                    name: "VSO v2",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[4].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[4].description'),
                },
                {
                    name: "ABRoot v2",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[3].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[3].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.orchidEvents[2].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[2].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[2].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.orchidEvents[1].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[1].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[1].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.orchidEvents[0].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.orchidEvents[0].date'),
                    description: this.$t('roadmap.versions.timeline.orchidEvents[0].description'),
                },
            ],
            kineticTitle: 'Vanilla OS 22.10 Kinetic',
            kineticSubtitle: this.$t('roadmap.versions.previous'),
            kineticEvents: [
                {
                    name: this.$t('roadmap.versions.timeline.kineticEvents[13].name'),
                    status: 'Freeze',
                    date: this.$t('roadmap.versions.timeline.kineticEvents[13].date'),
                    description: this.$t('roadmap.versions.timeline.kineticEvents[13].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.kineticEvents[12].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.kineticEvents[12].date'),
                    description: this.$t('roadmap.versions.timeline.kineticEvents[12].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.kineticEvents[11].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.kineticEvents[11].date'),
                    description: this.$t('roadmap.versions.timeline.kineticEvents[11].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.kineticEvents[10].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.kineticEvents[10].date'),
                    description: this.$t('roadmap.versions.timeline.kineticEvents[10].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.kineticEvents[9].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.kineticEvents[9].date'),
                    description: this.$t('roadmap.versions.timeline.kineticEvents[9].description'),
                },
                {
                    name: "VRR Session",
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.kineticEvents[8].date'),
                    description: this.$t('roadmap.versions.timeline.kineticEvents[8].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.kineticEvents[7].name'),
                    status: 'Ongoing',
                    date: this.$t('roadmap.versions.timeline.kineticEvents[7].date'),
                    description: this.$t('roadmap.versions.timeline.kineticEvents[7].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.kineticEvents[6].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.kineticEvents[6].date'),
                    description: this.$t('roadmap.versions.timeline.kineticEvents[6].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.kineticEvents[5].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.kineticEvents[5].date'),
                    description: this.$t('roadmap.versions.timeline.kineticEvents[5].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.kineticEvents[4].name'),
                    status: 'Slowdown',
                    date: this.$t('roadmap.versions.timeline.kineticEvents[4].date'),
                    description: this.$t('roadmap.versions.timeline.kineticEvents[4].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.kineticEvents[3].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.kineticEvents[3].date'),
                    description: this.$t('roadmap.versions.timeline.kineticEvents[3].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.kineticEvents[2].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.kineticEvents[2].date'),
                    description: this.$t('roadmap.versions.timeline.kineticEvents[2].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.kineticEvents[1].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.kineticEvents[1].date'),
                    description: this.$t('roadmap.versions.timeline.kineticEvents[1].description'),
                },
                {
                    name: this.$t('roadmap.versions.timeline.kineticEvents[0].name'),
                    status: 'Completed',
                    date: this.$t('roadmap.versions.timeline.kineticEvents[0].date'),
                    description: this.$t('roadmap.versions.timeline.kineticEvents[0].description'),
                },
            ],
        };
    },
});
</script>
