
<template>
    <div class="flexList">
        <div class="text text--rich">
            <h3>{{$t('licenses.coreLicenses.title')}}</h3>
            <p>{{$t('licenses.coreLicenses.description')}}</p>
        </div>
        <div class="flexGrid flexGrid--2 anim--fadeIn">
            <card v-for="(item, index) in licenses" :key="index" :item="item" />
        </div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="text text--rich">
            <h3>{{$t('licenses.otherLicenses.title')}}</h3>
            <p>{{$t('licenses.otherLicenses.description')}}</p>
            <ul>
                <li>{{$t('licenses.otherLicenses.licensesList.0')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.1')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.2')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.3')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.4')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.5')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.6')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.7')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.8')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.9')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.10')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.11')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.12')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.13')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.14')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.15')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.16')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.17')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.18')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.19')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.20')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.21')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.22')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.23')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.24')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.25')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.26')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.27')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.28')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.29')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.30')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.31')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.32')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.33')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.34')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.35')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.36')}}</li>
                <li>{{$t('licenses.otherLicenses.licensesList.37')}}</li>
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
                            title: this.$t('licenses.browse'),
                            icon: 'book',
                            iconPack: 'mdi',
                            onClick: () => {
                                window.open('https://www.gnu.org/licenses/gpl-3.0.html', '_blank');
                            },
                        },
                        {
                            title: this.$t('licenses.usage'),
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
                            title: this.$t('licenses.browse'),
                            icon: 'book',
                            iconPack: 'mdi',
                            onClick: () => {
                                window.open('https://www.gnu.org/licenses/agpl-3.0.html', '_blank');
                            },
                        },
                        {
                            title: this.$t('licenses.usage'),
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
