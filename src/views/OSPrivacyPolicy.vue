<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">            
            <p>{{$t('os-privacy-policy.information.description1')}} <router-link to="/privacy-policy">{{$t('os-privacy-policy.information.description2')}}</router-link> {{$t('os-privacy-policy.information.description3')}}</p>
            <p>{{$t('os-privacy-policy.information.description4')}}</p>
            <h2>{{$t('os-privacy-policy.whatInformationDoWeCollect')}}</h2>
            <p>{{$t('os-privacy-policy.informationCollected')}}</p>
            <h2>{{$t('os-privacy-policy.howDoWeUseInformation')}}</h2>
            <p>{{$t('os-privacy-policy.informationUsage')}}</p>
            <h2>{{$t('os-privacy-policy.howDoWeProtectInformation')}}</h2>
            <p>{{$t('os-privacy-policy.informationProtection')}}</p>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'os-privacy-policy',
});
</script>