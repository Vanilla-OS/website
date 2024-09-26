
<template>
    <div class="flexList">
        <div class="text text--rich">
            <h3>Core Licenses</h3>
            <p>The following licenses apply to Vanilla OS projects.</p>
        </div>
        <div class="flexGrid flexGrid--2 anim--fadeIn">
            <card v-for="(item, index) in licenses" :key="index" :item="item" />
        </div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="text text--rich">
            <h3>Other Licenses</h3>
            <p>The following licenses might apply to the software included in Vanilla OS and not to Vanilla OS itself.</p>
            <ul>
                <li>GNU General Public License (common)</li>
                <li>GNU Lesser General Public License (common)</li>
                <li>GNU Library General Public License (common)</li>
                <li>Modified BSD License (common)</li>
                <li>Perl Artistic license (common)</li>
                <li>Apache License</li>
                <li>Expat/MIT-style licenses</li>
                <li>zlib-style licenses</li>
                <li>LaTeX Project Public License</li>
                <li>Python Software Foundation License</li>
                <li>Ruby's License</li>
                <li>PHP License</li>
                <li>W3C Software Notice and License</li>
                <li>OpenSSL License</li>
                <li>Sleepycat License</li>
                <li>Common UNIX Printing System License Agreement</li>
                <li>vhf Public License</li>
                <li>"No problem Bugroff" license</li>
                <li>Unmodified BSD License (also known as the original or 4-clause BSD license. It included an advertising
                    requirement and is now deprecated even by the BSD project.)</li>
                <li>public domain (not a license, strictly speaking)</li>
                <li>IBM Public License Version 1.0</li>
                <li>NVIDIA Software License</li>
                <li>SCILAB License</li>
                <li>Limited Use Software License Agreement</li>
                <li>Non-Commercial License</li>
                <li>FastCGI / Open Market License</li>
                <li>LaTeX2HTML License</li>
                <li>Open Publication License</li>
                <li>Free Document Dissemination License</li>
                <li>AT&T Open Source License</li>
                <li>Apple Public Source License</li>
                <li>Aladdin Free Public License</li>
                <li>Generic amiwm License (an XV-style license)</li>
                <li>Digital License Agreement</li>
                <li>Moria/Angband license</li>
                <li>Unarj License</li>
                <li>id Software License</li>
                <li>qmail terms</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'licenses',
    data() {
        return {
            licenses: [
                {
                    title: 'GNU General Public License 3',
                    footerActions: [
                        {
                            title: 'Browse',
                            icon: 'book',
                            iconPack: 'mdi',
                            onClick: () => {
                                window.open('https://www.gnu.org/licenses/gpl-3.0.html', '_blank');
                            },
                        },
                        {
                            title: 'Usage',
                            icon: 'code',
                            iconPack: 'mdi',
                            onClick: () => {
                                window.open('https://github.com/search?q=org%3AVanilla-OS%20license%3Agpl-3.0&type=repositories', '_blank');
                            },
                        },
                    ],
                },
                {
                    title: 'GNU Affero General Public License',
                    footerActions: [
                        {
                            title: 'Browse',
                            icon: 'book',
                            iconPack: 'mdi',
                            onClick: () => {
                                window.open('https://www.gnu.org/licenses/agpl-3.0.html', '_blank');
                            },
                        },
                        {
                            title: 'Usage',
                            icon: 'code',
                            iconPack: 'mdi',
                            onClick: () => {
                                window.open('https://github.com/search?q=org%3AVanilla-OS%20license%3Aagpl-3.0&type=repositories', '_blank');
                            },
                        },
                    ],
                },
            ]
        };
    },
});
</script>
