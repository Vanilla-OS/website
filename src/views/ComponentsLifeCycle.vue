<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">
            <p>The purpose of this document is to define/explain how the lifecycle of Vanilla OS&#39; team (<em>GitHub
                    organization</em>) developments is handled.</p>
            <h3 id="preamble">Preamble</h3>
            <p>Versioning is based on <a href="https://semver.org/" taget="_blank">Semantic Versioning</a>, see <a
                    href="https://github.com/Vanilla-OS/.github/blob/main/CONTRIBUTING.md" target="_blank">
                    Contributing Guidelines</a>.
                The considered version is always the major if not specified otherwise.</p>
            <h3 id="definitions">Definitions</h3>
            <h4 id="active">Active</h4>
            <p>A component version that is currently maintained and updated.</p>
            <h4 id="maintenance">Maintenance</h4>
            <p>When a component version is declared in Maintenance state means that there is going to be maintenance for
                important bug fixing (afflicting the component usability) and security fixes. No other changes are allowed.
            </p>
            <h4 id="eol-end-of-life">EOL - End Of Life</h4>
            <p>When a component version is declared End Of Life means that there is going to be no maintenance nor security
                patching.</p>
            <h4 id="lts-vs-sts">LTS vs STS</h4>
            <p>We do not have a plan for Long-Term-Support and Short-Term-Support releases. All components follow the cycle
                defined below.</p>
            <h3 id="lifecycle">Lifecycle</h3>
            <p>There can be only one version in <em>Active</em> state and is always the latest stable major release.<br>
                When a major version is released, the previous major release enters the <em>Maintenance</em> state and keeps
                it for 6 months. After that period it enters the <em>EOL</em> state.</p>
            <h4 id="patches-quick-fixes">Patches / Quick Fixes</h4>
            <p>Quick fixes are always applied to the current minor version. A quick fix can be applied to previous releases
                if the problem is blocking or a security patch following the above Definitions.</p>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'components-lifecycle',
});
</script>