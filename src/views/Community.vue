<template>
    <div class="flexList anim--fadeIn">
        <div class="flexGrid flexGrid--2">
            <div class="flexGrid-item card card--plain card--no-padding">
                <iframe src="https://discord.com/widget?id=1023243680829681704&theme=dark" style="width=100%" height="525"
                    allowtransparency="true" frameborder="0"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3>
                        <span class="fa fa-brands fa-discord"></span>
                        {{$t('community.discord.title')}}
                    </h3>
                </div>
                <div class="card-content">
                    <div class="text text--rich">
                        <p>{{$t('community.discord.description')}}</p>
                        <p>{{$t('community.discord.participation.message')}} 👀.</p>
                    </div>
                </div>
                <div class="card-footer">
                    <a class="btn btn--link btn--inline btn--med" href="https://discord.gg/vanilla-os-1023243680829681704"
                        target="_blank">
                        <span>{{$t('community.discord.button.text')}}</span>
                        <span class="material-symbols-outlined">arrow_forward</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'community',
});
</script>
