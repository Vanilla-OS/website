<template>
    <div v-if="isOpen" class="modal anim--fadeIn">
        <div class="overlay" @click="closeModal"></div>
        <div class="modal-wrapper card">
            <div class="card-header">
                <h3>Share</h3>
                <p>Choose below the platform on which to share the article.</p>
            </div>
            <div class="flexGrid">
                <a :href="mastodonLink" target="_blank" class="btn btn--secondary flexGrid-item">
                    <i class="fa-brands fa-mastodon"></i>
                </a>
                <a :href="twitterLink" target="_blank" class="btn btn--secondary flexGrid-item">
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a :href="telegramLink" target="_blank" class="btn btn--secondary flexGrid-item">
                    <i class="fa-brands fa-telegram"></i>
                </a>
                <a :href="facebookLink" target="_blank" class="btn btn--secondary flexGrid-item">
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a :href="whatsappLink" target="_blank" class="btn btn--secondary flexGrid-item">
                    <i class="fa-brands fa-whatsapp"></i>
                </a>
                <a :href="linkedinLink" target="_blank" class="btn btn--secondary flexGrid-item">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <div @click="sendEmail" class="btn btn--secondary flexGrid-item">
                    <i class="fa-regular fa-envelope"></i>
                </div>
                <div @click="copyLink" class="btn btn--secondary flexGrid-item flexGrid-item--3">
                    <i class="fa-regular fa-copy"></i>
                    <span v-if="!copied">Copy to Clipboard</span>
                    <span v-if="copied">Copied!</span>
                </div>
            </div>
        </div>
        <div class="btn btn--link btn--circle btn--close" @click="closeModal">
            <span class="mdi material-icons">close</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'ShareModal',
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            copied: false,
        };
    },
    computed: {
        articleLink() {
            const { fullPath } = useRoute();
            const domain = window.location.origin;
            return domain + fullPath;
        },
        mastodonLink() {
            return `https://shareopenly.org/share/?url=${encodeURIComponent(this.articleLink)}`;
        },
        twitterLink() {
            return `https://twitter.com/share?url=${encodeURIComponent(this.articleLink)}`;
        },
        telegramLink() {
            return `https://t.me/share/url?url=${encodeURIComponent(this.articleLink)}`;
        },
        facebookLink() {
            return `https://www.facebook.com/sharer.php?u=${encodeURIComponent(this.articleLink)}`;
        },
        whatsappLink() {
            return `whatsapp://send?text=${encodeURIComponent(this.articleLink)}`;
        },
        linkedinLink() {
            return `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(this.articleLink)}`;
        },
    },
    methods: {
        sendEmail() {
            const subject = "Check out this article!";
            const body = `I thought you might be interested in reading this article: ${this.articleLink}`;
            window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        },
        copyLink() {
            const el = document.createElement("textarea");
            el.value = this.articleLink;
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
            this.copied = true;
            setTimeout(() => {
                this.copied = false;
            }, 2000);
        },
        closeModal() {
            this.$emit('close');
        },
        handleKeyboardEvent(event: KeyboardEvent) {
            if (event.key === "Escape") {
                this.closeModal();
            }
        },
    },
    mounted() {
      window.addEventListener("keydown", this.handleKeyboardEvent);
    }
});
</script>
