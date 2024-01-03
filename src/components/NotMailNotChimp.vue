<template>
    <div v-if="isOpen" class="modal anim--fadeIn">
        <div class="overlay" @click="closeModal"></div>
        <div class="modal-wrapper card">
            <div class="card-header">
                <h3>Subscribe to the Newsletter</h3>
                <p>Get the latest news and updates from Vanilla OS.</p>
            </div>
            <form
                action="https://vanillaos.us9.list-manage.com/subscribe/post?u=a988825202ae676e78fd240c5&amp;id=ef015d988e&amp;f_id=00c618e1f0"
                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_self" class="form">
                <div class="form-wrapper">
                    <div class="form-group">
                        <div class="form-group-item">
                            <div class="form-field">
                                <span class="form-field-icon">
                                    <span class="mdi material-icons">email</span>
                                </span>
                                <input type="email" name="EMAIL" class="form-field-input form-field-input--email"
                                    id="mce-EMAIL" value="" placeholder="Email address" required>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" style="display: none">
                        <input type="hidden" name="tags" :value="tagsId" v-if="tagsId" />
                        <input type="text" name="b_a988825202ae676e78fd240c5_ef015d988e" tabindex="-1" value="">
                    </div>
                    <div class="form-footer">
                        <div class="flexList">
                            <button type="submit" name="subscribe" class="btn btn--primary" value="Subscribe">
                                <span class="md material-icons">send</span>
                                <span>Subscribe</span>
                            </button>
                            <p class="brandingLogo" style="margin: 0px auto;">
                                <a href="http://eepurl.com/iwsHcE" title="Mailchimp - email marketing made easy and fun">
                                    <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
                                        alt="referral badge">
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="btn btn--link btn--circle btn--close" @click="closeModal">
            <span class="mdi material-icons">close</span>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'NotMailNotChimp',
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
        tagsId: {
            type: String,
            required: false,
        },
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
    },
});
</script>
