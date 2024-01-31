<template>
    <div class="flexList anim--fadeIn">
        <div class="text text--rich">
            <p>Vanilla OS is not your regular Linux distribution, we define it as a Linux based operating system
                due to the new paradigms it introduces and the different standards it follows. This page explains
                what Vanilla OS is and how it is different from other Linux distributions.</p>
        </div>
        <card v-for="(item, index) in info" :key="index" :item="item" />
    </div>
    <div class="hero hero--vertical hero--allow-scroll">
        <div class="text text--rich">
            <h2>Still not enough?</h2>
            <p>Well, we have more to show you.</p>
        </div>
        <div class="flexGrid flexGrid--fluid flexGrid--2">
            <a href="https://docs.vanillaos.org/" class="btn btn--link btn--link-2 btn--inline">
                <span>Read the Docs</span>
                <span class=" mdi material-icons-outlined">open_in_new</span>
            </a>
            <router-link to="/community" class="btn btn--primary">
                <span>Reach our Community</span>
                <span class="mdi material-icons-outlined">record_voice_over</span>
            </router-link>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'technologies-and-credits',
    data() {
        return {
            info: [
                {
                    icon: 'extension',
                    title: 'Modules Oriented',
                    description: 'Vanilla OS is built on top of Debian, using a modules oriented approach to build the system.\
                    While a common Linux distribution is built using packages, Vanilla OS is built using modules, which are\
                    a set of different instructions such as a package, build script, or configuration file.\
                    This approach allows us to build a system that is more flexible and easier to maintain, while\
                    keeping it Debian compatible. In Vanilla OS we don\'t care about dependencies like other\
                    distributions do, since the system is immutable and updates are served as a complete image.',
                    to: 'https://images.vanillaos.org/#/',
                    extLink: true,
                    type: 'clickable',
                },
                {
                    icon: 'lock',
                    title: 'Immutable',
                    description: 'Vanilla OS is an immutable operating system, which means that the main system components are\
                    read-only and cannot be modified. This allows us to keep the system reliable and always in a\
                    working state.',
                    to: 'https://github.com/Vanilla-OS/ABRoot?tab=readme-ov-file',
                    extLink: true,
                    type: 'clickable',
                },
                {
                    icon: 'update',
                    title: 'PackageKit-Less',
                    description: 'Vanilla OS handles updates in a different way than other Linux distributions.\
                    While common distributions use a package manager to handle updates, Vanilla OS uses an\
                    OCI-image based approach, which means that the system is updated by downloading a new\
                    image, using deduplication, and then applying it to the system, ensuring the user\
                    always has the latest version of the system as a whole, and in the exact same state\
                    as we tested it.',
                },
                {
                    icon: 'lightbulb',
                    title: 'Smart Updates',
                    description: 'Vanilla OS performs smart background updates, which means that the system is updated\
                    only when it is not under heavy load. This allows us to keep the system up to date,\
                    without affecting the user experience. To achieve so, we check for multiple\
                    conditions, such as the system load, battery level, and network connection.',
                },
                {
                    icon: 'storage',
                    title: 'Different File System Hierarchy',
                    description: 'Vanilla OS features a particular File System Hierarchy, while remaining compatible with\
                    the FHS standard. The main difference is that Vanilla OS stores the system files in a different\
                    directory, which is /.system. This is due to how ABRoot, the technology we use to provide immutability\
                    and atomic updates, works.',
                },
                {
                    icon: 'layers',
                    title: 'Container-Based Architecture',
                    description: 'Containers play a big role in Vanilla OS. We developed many tools and technologies to\
                    make the system container-based, such as ABRoot, which uses OCI images to provide updates,\
                    VSO, which is the user container-based default shell, Apx, a power utility for developers\
                    to create system-integrated containers based on any Linux distribution, and more.\
                    We use containers to provide a more secure and reliable system, and to make the system more\
                    flexible and customizable for everyone.',
                },
                {
                    icon: 'memory',
                    title: 'LVN Thin Provisioning',
                    description: 'Vanilla OS uses a slightly different approach to manage the system storage, by leveraging\
                    LVM (Logical Volume Manager) thin provisioning. This technique allows for dynamic allocation of storage\
                    space, ensuring optimal resource utilization and flexibility in allocating disk space between the\
                    two root partitions, preserving essential disk space.',
                    to: { name: 'article', params: { date: '2023-11-22', slug: 'vanilla-os-orchid---devlog-22-nov' } },
                    type: 'clickable',
                },
                {
                    icon: 'android',
                    title: 'Android Compatibility',
                    description: 'Vanilla OS is compatible with Android applications thanks to VSO, Waydroid, and F-Droid.\
                    VSO is the Vanilla System Operator, the point of contact between the system and the user.\
                    It allows the user to manage the system in many ways, such as installing Android applications\
                    through our container-based Waydroid integration, and F-Droid, a free and open-source Android\
                    application store.',
                },
                {
                    icon: 'key',
                    title: 'Sudon\'t',
                    description: 'Vanilla OS diverges from the conventional use of sudo, it employs Polkit for\
                    enhanced security and flexibility in permission management instead. Polkit enables a more granular approach\
                    to permissions, ensuring a secure system environment. The decision to move away from sudo is rooted\
                    in preventing users from executing arbitrary commands as root, a practice that poses potential security\
                    risks. Although users retain some level of control through Polkit, the immutability of the system acts\
                    as a safeguard, limiting potential damage by preserving the integrity of core components.',
                },
                {
                    icon: 'verified',
                    title: 'Verified Startup',
                    description: 'Vanilla OS, together with the LIT (Linux Immutability Tools) project, has developed a tool\
                    called FsGuard, which verifies system integrity at boot, verifying that the hashes of crucial system files\
                    match the hashes provided with the update image. If one of these is missing, FsNotice will come into play, showing\
                    a warning on the screen advising against proceeding, inviting the user to select the previous state.',
                },
                {
                    icon: 'share',
                    title: 'Distro-Agnostic First',
                    description: 'Everything we do is distro-agnostic first, which means that we always try to make our\
                    technologies and tools compatible with any Linux distribution to bring our paradigms to everyone,\
                    they are not Vanilla OS exclusive.',
                }
            ],
        };
    },
});
</script>