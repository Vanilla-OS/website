<template>
  <div class="flexList">
    <div class="flexGrid anim--fadeIn">
      <card
        v-for="(item, index) in getInvolvedItems"
        :key="index"
        :item="item"
        :class="item.extraClasses"
        @click="item.action ? item.action() : null"
      >
        <div v-if="item.bankTransferDetails" class="text text--rich">
          <pre><code>{{ item.bankTransferDetails.join('\n') }}</code></pre>
        </div>
        <badges :items="item.badges" />
      </card>
    </div>
    <div class="spacer"></div>
    <div class="text text--rich">
      <p>
        * This platform optionally allows you to make your donation anonymous.
        If you choose to do so, we will not receive your name or any other
        information about you.
      </p>
      <p>
        Once you have made a donation,
        <a href="https://fabricators.ltd/contacts?utm_source=vanilla-os&utm_medium=referral" target="_blank"
          >contact us</a
        >
        to give you the role of sponsor on our Discord server.
      </p>
    </div>
  </div>
  <crypto-modal :isOpen="cryptoModalOpen" @close="cryptoModalOpen = false" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "get-involved-funding",
  data() {
    return {
      cryptoModalOpen: false,
      getInvolvedItems: [
        {
          icon: "account_balance",
          iconPack: "mdi",
          title: "Bank Transfer",
          description:
            "Bank Transfer is the most direct and least taxed way to support Vanilla OS. You can make a one-time donation of any amount.",
          bankTransferDetails: [
            "Account Name: FABRICATORS S.R.L.",
            "IBAN: IT30S0326811200052945656640",
            "BIC/SWIFT: SELBIT2BXXX",
          ],
          extraClasses: ["flexGrid-item--2"],
          badges: [
            {
              text: "Recommended for European users",
              color: "green",
            },
          ],
        },
        {
          action: () => (this.cryptoModalOpen = true),
          extLink: false,
          type: "clickable",
          icon: "fa-solid fa-bitcoin-sign",
          iconPack: "fa",
          title: "Cryptocurrencies",
          description:
            "Cryptocurrencies allows for anonymous and less-taxed donations. You can make a one-time donation of any amount. The exchange rate is subject to change according to the market.",
          badges: [
            {
              text: "Anonymous",
            },
          ],
        },
        {
          to: "https://liberapay.com/fabricators",
          extLink: true,
          type: "clickable",
          icon: "fa-solid fa-coins",
          iconPack: "fa",
          title: "Liberapay",
          description:
            "Liberapay is a convenient way to make recurring donations.",
          badges: [
            {
              text: "Recommended for European users",
              color: "green",
            },
            {
              text: "Anonymous*",
            },
          ],
        },
        {
          to: "https://github.com/sponsors/Vanilla-OS",
          extLink: true,
          type: "clickable",
          icon: "fa-brands fa-github",
          iconPack: "fa",
          title: "GitHub Sponsors",
          description:
            "GitHub Sponsors is a convenient way to make one-time or recurring donations.",
          badges: [
            {
              text: "Anonymous*",
            },
          ],
        },
        {
          to: "https://fabricators.ltd/contacts",
          extLink: true,
          type: "clickable",
          icon: "handshake",
          iconPack: "mdi",
          title: "Custom",
          description:
            "Contact us to discuss a custom donation method or a different sponsorship arrangement.",
        },
      ],
    };
  },
});
</script>