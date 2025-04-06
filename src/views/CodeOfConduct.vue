<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">
            <p>{{$t('code-of-conduct.intro.title')}}</p>

            <blockquote>
                <p>{{$t('code-of-conduct.intro.description')}}</p>
            </blockquote>

            <h1 id="gnome-code-of-conduct">{{$t('code-of-conduct.gnome_code_of_conduct.title')}}</h1>

            <p>{{$t('code-of-conduct.gnome_code_of_conduct.description')}}</p>

            <h2 id="scope">{{$t('code-of-conduct.scope.title')}}</h2>

            <p>{{$t('code-of-conduct.scope.applies_to')}}</p>

            <ul>
                <li>{{$t('code-of-conduct.scope.spaces[0]')}}</li>
                <li>{{$t('code-of-conduct.scope.spaces[1]')}}</li>
                <li>{{$t('code-of-conduct.scope.spaces[2]')}}</li>
                <li>{{$t('code-of-conduct.scope.spaces[3]')}}</li>
                <li>{{$t('code-of-conduct.scope.spaces[4]')}}</li>
                <li>{{$t('code-of-conduct.scope.spaces[5]')}}</li>
                <li>{{$t('code-of-conduct.scope.spaces[6]')}}</li>
                <li>{{$t('code-of-conduct.scope.spaces[7]')}}</li>
            </ul>

            <p>{{$t('code-of-conduct.scope.description1')}}</p>

            <p>{{$t('code-of-conduct.scope.description2')}}</p>

            <h2 id="reporting-an-incident">{{$t('code-of-conduct.reporting_incident.title')}}</h2>

            <p>{{$t('code-of-conduct.reporting_incident.message1')}}<a href="https://wiki.gnome.org/Foundation/CodeOfConduct/ReporterGuide">{{$t('code-of-conduct.reporting_incident.message2')}}</a></p>

            <h2 id="our-standards">{{$t('code-of-conduct.our_standards.title')}}</h2>

            <p>{{$t('code-of-conduct.our_standards.dedication')}}</p>

            <ul>
                <li>{{$t('code-of-conduct.our_standards.standards[0]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[1]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[2]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[3]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[4]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[5]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[6]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[7]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[8]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[9]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[10]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[11]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[12]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[13]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[14]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[15]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[16]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[17]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[18]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[19]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[20]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[21]')}}</li>
                <li>{{$t('code-of-conduct.our_standards.standards[22]')}}</li>
            </ul>

            <h3 id="community-guidelines">{{$t('code-of-conduct.community_guidelines.title')}}</h3>

            <p>{{$t('code-of-conduct.community_guidelines.message')}}</p>

            <ul>
                <li><strong>{{$t('code-of-conduct.community_guidelines.examples[0].part1')}}</strong> {{$t('code-of-conduct.community_guidelines.examples[0].part2')}}</li>
                <li><strong>{{$t('code-of-conduct.community_guidelines.examples[1].part1')}}</strong> {{$t('code-of-conduct.community_guidelines.examples[1].part2')}}</li>
                <li><strong>{{$t('code-of-conduct.community_guidelines.examples[2].part1')}}</strong> {{$t('code-of-conduct.community_guidelines.examples[2].part2')}}</li>
                <li><strong>{{$t('code-of-conduct.community_guidelines.examples[3].part1')}}</strong> {{$t('code-of-conduct.community_guidelines.examples[3].part2')}}</li>
                <li><strong>{{$t('code-of-conduct.community_guidelines.examples[4].part1')}}</strong> {{$t('code-of-conduct.community_guidelines.examples[4].part2')}}</li>
                <li><strong>{{$t('code-of-conduct.community_guidelines.examples[5].part1')}}</strong> {{$t('code-of-conduct.community_guidelines.examples[5].part2')}}</li>
            </ul>

            <h3 id="inappropriate-behavior">{{$t('code-of-conduct.inappropriate_behavior.title')}}</h3>

            <p>{{$t('code-of-conduct.inappropriate_behavior.description1')}}</p>

            <p>{{$t('code-of-conduct.inappropriate_behavior.description2')}}</p>

            <ul>                
                <li><strong>{{$t('code-of-conduct.inappropriate_behavior.examples[0].part1')}}</strong> {{$t('code-of-conduct.inappropriate_behavior.examples[0].part2')}}</li>
                <li><strong>{{$t('code-of-conduct.inappropriate_behavior.examples[1].part1')}}</strong> {{$t('code-of-conduct.inappropriate_behavior.examples[1].part2')}}</li>
                <li><strong>{{$t('code-of-conduct.inappropriate_behavior.examples[2].part1')}}</strong> {{$t('code-of-conduct.inappropriate_behavior.examples[2].part2')}}</li>
                <li><strong>{{$t('code-of-conduct.inappropriate_behavior.examples[3].part1')}}</strong> {{$t('code-of-conduct.inappropriate_behavior.examples[3].part2')}}</li>
                <li><strong>{{$t('code-of-conduct.inappropriate_behavior.examples[4].part1')}}</strong> {{$t('code-of-conduct.inappropriate_behavior.examples[4].part2')}}</li>
                <li><strong>{{$t('code-of-conduct.inappropriate_behavior.examples[5].part1')}}</strong> {{$t('code-of-conduct.inappropriate_behavior.examples[5].part2')}}</li>
                <li><strong>{{$t('code-of-conduct.inappropriate_behavior.examples[6].part1')}}</strong> {{$t('code-of-conduct.inappropriate_behavior.examples[6].part2')}}</li>
                <li><strong>{{$t('code-of-conduct.inappropriate_behavior.examples[7].part1')}}</strong> {{$t('code-of-conduct.inappropriate_behavior.examples[7].part2')}}</li>
                <li><strong>{{$t('code-of-conduct.inappropriate_behavior.examples[8].part1')}}</strong> {{$t('code-of-conduct.inappropriate_behavior.examples[8].part2')}}</li>
            </ul>

            <p>{{$t('code-of-conduct.prioritization.message')}}</p>

            <ul>
                <li>{{$t('code-of-conduct.prioritization.examples[0]')}}</li>
                <li>{{$t('code-of-conduct.prioritization.examples[1]')}}</li>
                <li>{{$t('code-of-conduct.prioritization.examples[2]')}}</li>
                <li>{{$t('code-of-conduct.prioritization.examples[3]')}}</li>
            </ul>

            <p>{{$t('code-of-conduct.prioritization.additional_information.part1')}} <a
                    href="https://github.com/sagesharp/code-of-conduct-template/blob/master/code-of-conduct/example-reversisms.md#supporting-diversity">{{$t('code-of-conduct.prioritization.additional_information.part2')}}</a>.</p>

            <p>{{$t('code-of-conduct.prioritization.additional_information.part3')}} <a
                    href="https://wiki.gnome.org/Foundation/CodeOfConduct/CommitteeProcedures">{{$t('code-of-conduct.prioritization.additional_information.part4')}}</a>.</p>

            <h2 id="procedure-for-handling-incidents">{{$t('code-of-conduct.procedure_handling_incidents.title')}}</h2>

            <ul>
                <li>
                    <p><a href="https://wiki.gnome.org/Foundation/CodeOfConduct/ReporterGuide">{{$t('code-of-conduct.procedure_handling_incidents.links[0]')}}</a></p>
                </li>
                <li>
                    <p><a href="https://wiki.gnome.org/Foundation/CodeOfConduct/ModeratorProcedures">{{$t('code-of-conduct.procedure_handling_incidents.links[1]')}}</a></p>
                </li>
                <li>
                    <p><a href="https://wiki.gnome.org/Foundation/CodeOfConduct/CommitteeProcedures">{{$t('code-of-conduct.procedure_handling_incidents.links[2]')}}</a></p>
                </li>
            </ul>

            <h2 id="license">{{$t('code-of-conduct.license.title')}}</h2>

            <p>{{$t('code-of-conduct.license.message1')}} <a
                    href="http://creativecommons.org/licenses/by-sa/3.0/">{{$t('code-of-conduct.license.message2')}}</a></p>

            <p><img src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png" alt="Creative Commons License"></p>

            <h2 id="attribution">{{$t('code-of-conduct.attribution.title')}}</h2>

            <p>{{$t('code-of-conduct.attribution.message1')}} <a href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy">{{$t('code-of-conduct.attribution.message2')}}</a></p>

            <p>{{$t('code-of-conduct.attribution.additional_language')}}</p>

            <ul>
                <li><a href="http://citizencodeofconduct.org/">{{ $t('code-of-conduct.attribution.codes_of_conduct[0].name') }}</a> {{ $t('code-of-conduct.attribution.codes_of_conduct[0].license_part1') }} <a href="http://creativecommons.org/licenses/by-sa/3.0/">{{ $t('code-of-conduct.attribution.codes_of_conduct[0].license_part2') }}</a>.</li>
                <li><a href="https://github.com/sagesharp/code-of-conduct-template/">{{ $t('code-of-conduct.attribution.codes_of_conduct[1].name') }}</a> {{ $t('code-of-conduct.attribution.codes_of_conduct[1].license_part1') }} <a href="http://creativecommons.org/licenses/by-sa/3.0/">{{ $t('code-of-conduct.attribution.codes_of_conduct[1].license_part2') }}</a> {{ $t('code-of-conduct.attribution.codes_of_conduct[1].author') }}</li>
                <li><a href="https://www.contributor-covenant.org/version/1/4/code-of-conduct">{{ $t('code-of-conduct.attribution.codes_of_conduct[2].name') }}</a> ({{ $t('code-of-conduct.attribution.codes_of_conduct[2].license_part1') }} <a href="https://github.com/EthicalSource/contributor_covenant/blob/release/LICENSE.md">{{ $t('code-of-conduct.attribution.codes_of_conduct[2].license_part2') }}</a>)</li>
                <li><a href="https://docs.carpentries.org/topic_folders/policies/index_coc.html">{{ $t('code-of-conduct.attribution.codes_of_conduct[3].name') }}</a> {{ $t('code-of-conduct.attribution.codes_of_conduct[3].license_part1') }} <a href="https://creativecommons.org/licenses/by/4.0/">{{ $t('code-of-conduct.attribution.codes_of_conduct[3].license_part2') }}</a></li>
                <li><a href="https://www.djangoproject.com/conduct/">{{ $t('code-of-conduct.attribution.codes_of_conduct[4].name') }}</a> {{ $t('code-of-conduct.attribution.codes_of_conduct[4].license_part1') }} <a href="http://creativecommons.org/licenses/by/3.0/">{{ $t('code-of-conduct.attribution.codes_of_conduct[4].license_part2') }}</a></li>
                <li><a href="https://fedoraproject.org/code-of-conduct">{{ $t('code-of-conduct.attribution.codes_of_conduct[5].name') }}</a></li>
                <li><a href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy">{{ $t('code-of-conduct.attribution.codes_of_conduct[6].name') }}</a> {{ $t('code-of-conduct.attribution.codes_of_conduct[6].license_part1') }} <a href="https://creativecommons.org/publicdomain/zero/1.0/">{{ $t('code-of-conduct.attribution.codes_of_conduct[6].license_part2') }}</a></li>
                <li><a href="https://wiki.gnome.org/action/recall/Foundation/CodeOfConduct/Old">{{ $t('code-of-conduct.attribution.codes_of_conduct[7].name') }}</a></li>
                <li><a href="https://lgbtq.technology/coc.html">{{ $t('code-of-conduct.attribution.codes_of_conduct[8].name') }}</a> {{ $t('code-of-conduct.attribution.codes_of_conduct[8].license_part1') }} <a href="https://creativecommons.org/publicdomain/zero/1.0/">{{ $t('code-of-conduct.attribution.codes_of_conduct[8].license_part2') }}</a></li>
                <li><a href="https://www.mozilla.org/en-US/about/governance/policies/participation/">{{ $t('code-of-conduct.attribution.codes_of_conduct[9].name') }}</a> {{ $t('code-of-conduct.attribution.codes_of_conduct[9].license_part1') }} <a href="https://creativecommons.org/licenses/by-sa/3.0/">{{ $t('code-of-conduct.attribution.codes_of_conduct[9].license_part2') }}</a>.</li>
                <li><a href="http://pythonmentors.com/">{{ $t('code-of-conduct.attribution.codes_of_conduct[10].name') }}</a></li>
                <li><a href="http://web.archive.org/web/20141109123859/http://speakup.io/coc.html">{{ $t('code-of-conduct.attribution.codes_of_conduct[11].name') }}</a>, {{ $t('code-of-conduct.attribution.codes_of_conduct[11].license_part1') }} <a href="http://creativecommons.org/licenses/by/3.0/">{{ $t('code-of-conduct.attribution.codes_of_conduct[11].license_part2') }}</a></li>
            </ul>


        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'code-of-conduct',
});
</script>