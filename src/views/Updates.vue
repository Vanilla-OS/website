<template>
    <div class="container">
        <div class="flexList">
            <div v-for="(dayData, index) in displayedDays" :key="index">
                <div class="text text--rich">
                    <h2>{{ dayData.bugs.length + dayData.enhancements.length }} updates on {{ formatDate(dayData.day) }}
                    </h2>
                    <p>Here are the updates for the date {{ formatDate(dayData.day) }}.</p>
                </div>
                <div class="flexGrid flexGrid--2">
                    <div class="flexGrid-item" v-if="dayData.bugs.length">
                        <h3>Bugs</h3>
                        <div class="flexList">
                            <div v-for="bug in dayData.bugs" :key="bug.title">
                                <div class="card">
                                    <div class="card-header">
                                        <h4>{{ bug.title }}</h4>
                                    </div>
                                    <div class="card-content text text--rich text--sm">
                                        <p v-if="bug.description">{{ bug.description }}</p>
                                        <div class="divider"></div>
                                        <p v-if="bug.affected"><b>Afflicts:</b> {{ bug.affected }}</p>
                                        <p v-if="bug.version"><b>Affected Version:</b> {{ bug.version }}</p>
                                        <p v-if="bug.fixed"><b>Fixed Version:</b> {{ bug.fixed }}</p>
                                    </div>
                                    <div class="card-footer">
                                        <a v-if="bug.link" :href="bug.link" target="_blank" class="btn">More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flexGrid-item" v-if="dayData.enhancements.length">
                        <h3>Enhancements</h3>
                        <div class="flexList">
                            <div v-for="enhancement in dayData.enhancements" :key="enhancement.title">
                                <div class="card">
                                    <div class="card-header">
                                        <h4>{{ enhancement.title }}</h4>
                                    </div>
                                    <div class="card-content text text--rich text--sm">
                                        <p v-if="enhancement.description">{{ enhancement.description }}</p>
                                        <div class="divider" v-if="enhancement.version"></div>
                                        <p v-if="enhancement.version"><b>New Version:</b> {{ enhancement.version }}</p>
                                    </div>
                                    <div class="card-footer" v-if="enhancement.link">
                                        <a :href="enhancement.link" target="_blank" class="btn">More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="spacer spacer--lg"></div>
            </div>
        </div>

        <div class="spacer spacer--lg"></div>
        <center>
            <button @click="handleLoadMoreDays" class="btn btn--primary">
                {{ buttonText }}
            </button>
        </center>
        <div class="spacer spacer--lg"></div>
        <div class="card card--hz card--type-adv card--type-adv--hz card--purple">
            <div class="card-header">
                <h4>Don't miss the latest updates!</h4>
                <h2>Subscribe to the Feed</h2>
                <a class="btn btn--primary" href="https://info.vanillaos.org/updates-feed.xml">
                    <span class="material-symbols-outlined">newspaper</span>
                    <span>Subscribe now</span>
                </a>
            </div>
            <div class="card-content">
                <div class="flexList">
                    <div class="card-image">
                        <img src="/assets/images/components/feed.svg" alt="Subscribe to the Newsletter" />
                    </div>
                </div>
            </div>
        </div>
        <div class="spacer"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Day {
    day: string;
    bugs: Item[];
    enhancements: Item[];
}

interface Item {
    title: string;
    description: string;
    affected: string;
    version: string;
    fixed: string;
    link: string;
}

export default defineComponent({
    name: 'updates',
    data() {
        return {
            days: [] as Day[],
            displayedDays: [] as Day[],
            loadIndex: 0,
            loadIncrement: 15,
            buttonText: 'Load More',
        };
    },
    methods: {
        loadMoreDays() {
            this.loadIndex += this.loadIncrement;
            this.displayedDays = this.days.slice(0, this.loadIndex);
        },
        handleLoadMoreDays() {
            const button = document.querySelector('.btn.btn--primary');
            if (this.loadIndex >= this.days.length) {
                this.buttonText = 'Nothing more found';
                if (button) button.setAttribute('disabled', 'true');
                setTimeout(() => {
                    this.buttonText = 'Load More';
                    if (button) button.removeAttribute('disabled');
                }, 1000);
            } else {
                this.loadMoreDays();
            }
        },
        formatDate(dateString: string): string {
            const [month, day, year] = dateString.split('-');
            const date = new Date(`${year}-${month}-${day}T00:00:00`);
            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        },
    },
    mounted() {
        fetch('https://raw.githubusercontent.com/Vanilla-OS/info/main/updates/_index.json')
            .then((response) => response.json())
            .then((data) => {
                this.days = Object.keys(data).map((date) => ({
                    day: date,
                    bugs: data[date].bugs,
                    enhancements: data[date].enhancements,
                }));
                this.loadIndex = this.loadIncrement;
                this.displayedDays = this.days.slice(0, this.loadIndex);
            });
    },
});
</script>
