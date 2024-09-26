<template>
    <div class="timeline">
        <div class="timeline-progressbar">
            <div class="timeline-progressbar-header">
                <h2 :id="slug">{{ title }} - {{ getOverallProgress }}% ({{ subtitle }})</h2>
                <div class="text">
                    <p>There are <b>{{ totalEvents }}</b> events in this release.</p>
                </div>
            </div>
            <div class="timeline-progressbar-content">
                <div class="timeline-progressbar-meter">
                    <div v-for="status in eventStatuses" :key="status.type" :class="getEventClass(status.type)"
                        :style="{ width: status.progress + '%' }">
                        <span v-if="status.icon" class="material-symbols-outlined">{{ status.icon }}</span>
                        <label>{{ status.type }}</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="timeline-events">
            <div class="timeline-events-header">
                <h3>Timeline</h3>
            </div>
            <div class="timeline-events-content">
                <div v-for="event in events" :key="event.name" class="timeline-events-item card"
                    :class="getEventCardClass(event.status)">
                    <div class="timeline-events-item-header card-header">
                        <h4>{{ event.name }}</h4>
                        <span class="text text--dimmed">{{ event.date }}</span>
                    </div>
                    <div class="timeline-events-item-content card-content">
                        <div class="text">
                            <p>{{ event.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface TimelineEvent {
    name: string;
    status: string;
    date: string;
    description: string;
}

interface EventStatus {
    type: string;
    progress: number;
    icon: string;
}

export default defineComponent({
    name: 'Timeline',
    props: {
        title: String,
        subtitle: String,
        events: Array as () => TimelineEvent[],
    },
    computed: {
        slug(): string {
            if (!this.title) {
                return 'vos';
            }
            return this.title.toLowerCase().replace(/ /g, '-');
        },
        totalEvents(): number {
            if (!this.events) {
                return 0;
            }
            return this.events.length;
        },
        eventStatuses(): EventStatus[] {
            if (!this.events || !this.totalEvents) {
                return [];
            }

            const statusCounts: Record<string, number> = {};
            for (const event of this.events) {
                if (statusCounts[event.status] === undefined) {
                    statusCounts[event.status] = 0;
                }
                statusCounts[event.status]++;
            }

            const statuses: EventStatus[] = [];
            const eventTypes = Object.keys(statusCounts);
            for (const type of eventTypes) {
                const progress = (statusCounts[type] / this.totalEvents) * 100;
                let icon = '';
                switch (type) {
                    case 'Completed':
                        icon = 'done';
                        break;
                    case 'Slowdown':
                        icon = 'report_problem';
                        break;
                    case 'Ongoing':
                        icon = 'timer';
                        break;
                    case 'Not started yet':
                        icon = 'schedule';
                        break;
                    case 'Freeze':
                        icon = 'flag';
                        break;
                    default:
                        break;
                }
                statuses.push({ type, progress, icon });
            }
            return statuses;
        },
        getOverallProgress(): number {
            const completedEvents = this.eventStatuses.filter(
                (status) => status.type != 'Ongoing'
            );
            let totalProgress = completedEvents.reduce((total, status) => total + status.progress, 0);
            totalProgress = Math.round(totalProgress * 100) / 100;
            return totalProgress;
        },
    },
    methods: {
        getEventClass(status: string): string {
            switch (status) {
                case 'Completed':
                    return 'timeline-progressbar-meter-item timeline-progressbar-meter-item--green';
                case 'Slowdown':
                    return 'timeline-progressbar-meter-item timeline-progressbar-meter-item--red';
                case 'Ongoing':
                    return 'timeline-progressbar-meter-item timeline-progressbar-meter-item--brown';
                case 'Freeze':
                    return 'timeline-progressbar-meter-item timeline-progressbar-meter-item--purple';
                default:
                    return 'timeline-progressbar-meter-item';
            }
        },
        getEventCardClass(status: string): string {
            switch (status) {
                case 'Completed':
                    return 'card--green';
                case 'Slowdown':
                    return 'card--red';
                case 'Ongoing':
                    return 'card--brown';
                case 'Freeze':
                    return 'card--purple';
                default:
                    return '';
            }
        },
    },
});
</script>
