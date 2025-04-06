<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">            
            <p>{{$t('components-lifecycle.purpose.message1')}} (<em>{{$t('components-lifecycle.purpose.message2')}}</em>) {{$t('components-lifecycle.purpose.message3')}}</p>
            <h3 id="preamble">{{$t('components-lifecycle.sections[0].title')}}</h3>
            <p>{{$t('components-lifecycle.sections[0].description1')}} <a href="https://semver.org/" target="_blank">{{$t('components-lifecycle.sections[0].description2')}}</a>, {{$t('components-lifecycle.sections[0].description3')}} <a
                    href="https://github.com/Vanilla-OS/.github/blob/main/CONTRIBUTING.md" target="_blank">
                    {{$t('components-lifecycle.sections[0].description4')}}</a>.
                    {{$t('components-lifecycle.sections[0].description5')}}</p>
            <h3 id="definitions">{{$t('components-lifecycle.sections[1].title')}}</h3>
            
            <h4 id="active">{{$t('components-lifecycle.sections[1].definitions[0].term')}}</h4>
            <p>{{$t('components-lifecycle.sections[1].definitions[0].definition')}}</p>
            
            <h4 id="maintenance">{{$t('components-lifecycle.sections[1].definitions[1].term')}}</h4>
            <p>{{$t('components-lifecycle.sections[1].definitions[1].definition')}}</p>
            
            <h4 id="eol-end-of-life">{{$t('components-lifecycle.sections[1].definitions[2].term')}}</h4>
            <p>{{$t('components-lifecycle.sections[1].definitions[2].definition')}}</p>
            
            <h4 id="lts-vs-sts">{{$t('components-lifecycle.sections[1].definitions[3].term')}}</h4>
            <p>{{$t('components-lifecycle.sections[1].definitions[3].definition')}}</p>
            
            <h3 id="lifecycle">{{$t('components-lifecycle.sections[2].title')}}</h3>
            <p>{{$t('components-lifecycle.sections[2].description')}}</p>
            
            <h4 id="patches-quick-fixes">{{$t('components-lifecycle.sections[3].title')}}</h4>
            <p>{{$t('components-lifecycle.sections[3].description')}}</p>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'components-lifecycle',
});
</script>