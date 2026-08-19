<template>
  <div v-if="isOpen" class="modal anim--fadeIn modal--large-height">
    <div class="overlay" @click="closeModal"></div>
    <div class="modal-wrapper card">
      <div class="card-header">
        <h3>Crypto Addresses</h3>
        <p>Use any of the crypto addresses below for donating</p>
      </div>
      <div class="flexList flexList--center">
        <div
          v-for="crypto in cryptoAddresses"
          :key="crypto.symbol"
          class="card card--min flexGrid-item"
        >
          <div class="card-header">
            <h3>
              <span>
                {{ crypto.name }}
              </span>
              <small class="text--sm">
                (<code>{{ crypto.symbol }}</code
                >)
              </small>
            </h3>
          </div>
          <div class="card-content flexList">
            <div class="text text--rich">
              <pre><code>{{ crypto.address }}</code></pre>
            </div>
            <button
              class="btn btn--secondary btn--small"
              @click="copyAddress(crypto.address)"
            >
              <span class="material-symbols-outlined">content_copy</span>
              <span>{{
                copiedAddress === crypto.address ? "Copied!" : "Copy"
              }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="btn btn--link btn--circle btn--close" @click="closeModal">
      <span class="material-symbols-outlined">close</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CryptoModal",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      copiedAddress: null as string | null,
      cryptoAddresses: [
        {
          symbol: "ETH",
          name: "Ethereum",
          address: "0x34281Ba05705BC360138c4181D52C1dbcC82E828",
        },
        {
          symbol: "POL",
          name: "Polygon",
          address: "0x34281Ba05705BC360138c4181D52C1dbcC82E828",
        },
        {
          symbol: "SOL",
          name: "Solana",
          address: "Hznx7nZKJcj5Uqt2czHMFwb4EMKnkw4yYPs25E7JtLTp",
        },
      ],
    };
  },
  methods: {
    async copyAddress(address: string) {
      try {
        await navigator.clipboard.writeText(address);
        this.copiedAddress = address;
        setTimeout(() => {
          this.copiedAddress = null;
        }, 2000);
      } catch (err) {
        console.error("Failed to copy address: ", err);
        const el = document.createElement("textarea");
        el.value = address;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        this.copiedAddress = address;
        setTimeout(() => {
          this.copiedAddress = null;
        }, 2000);
      }
    },
    closeModal() {
      this.$emit("close");
    },
    handleKeyboardEvent(event: KeyboardEvent) {
      if (event.key === "Escape") {
        this.closeModal();
      }
    },
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeyboardEvent);
  },
  unmounted() {
    window.removeEventListener("keydown", this.handleKeyboardEvent);
  },
});
</script>
