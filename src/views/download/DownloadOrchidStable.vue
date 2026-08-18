<template>
  <div class="hero hero--big hero--no-margin">
    <div class="hero-wrapper container">
      <img
        class="hero-image no-dark"
        src="/assets/images/backgrounds/vos-orchid-laptop-frame.svg"
        alt="Vanilla OS 2 Orchid"
      />
      <img
        class="hero-image on-dark"
        src="/assets/images/backgrounds/vos-orchid-laptop-frame-dark.svg"
        alt="Vanilla OS 2 Orchid"
      />
      <div class="hero-content">
        <div class="hero-imageText" v-if="hasDonated()">
          <img
            src="/assets/images/components/thankyou-headline.svg"
            alt="Vanilla OS 2 Orchid"
          />
        </div>
        <div class="hero-imageText" v-else>
          <img
            src="/assets/images/components/stable-headline.svg"
            alt="Vanilla OS 2 Orchid"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="container" v-if="hasDonated()">
    <div class="flexList flexList--center">
      <div class="spacer"></div>
      <div class="text text--rich text--center">
        <p>
          Thank you for supporting Vanilla OS! Your donation helps us to keep
          the project alive and improve it. We appreciate your contribution.
          <b>Pick the architecture of your device, then start the download.</b>
        </p>
      </div>
      <div class="dropdown-wrapper">
        <button
          class="btn btn--secondary"
          :aria-expanded="isArchitectureOpen"
          :disabled="!selectedBuild"
          @click.stop="isArchitectureOpen = !isArchitectureOpen"
        >
          <span class="material-symbols-outlined">memory</span>
          <span>{{ triggerLabel }}</span>
          <span class="material-symbols-outlined">expand_more</span>
        </button>
        <div
          class="dropdown dropdown--floating"
          v-if="isArchitectureOpen"
          @click.stop
        >
          <div
            class="dropdown-item"
            v-for="build in builds"
            :key="build.Arch"
            @click="selectBuild(build)"
          >
            {{ architectureLabel(build) }}
          </div>
        </div>
      </div>
      <template v-if="selectedBuild">
        <a :href="isoUrl" class="btn btn--primary btn--big">
          <span class="material-symbols-outlined">file_download</span>
          <span>Download Now</span>
        </a>
        <div class="text text--dimmed">
          <small>{{ isoName }}</small>
        </div>
        <a :href="checksumUrl" class="btn btn--link btn--link-2 btn--inline">
          <span class="material-symbols-outlined">verified_user</span>
          <span>Download the SHA256 checksum</span>
        </a>
      </template>
      <div class="text text--dimmed">
        <small
          >Vanilla OS works out of the box on a large set of devices,
          <a
            href="https://docs.vanillaos.org/handbook/en/installation"
            target="_blank"
          >
            learn how to install it.
          </a>
        </small>
      </div>
      <div class="text text--dimmed">
        <small
          >Download is not working? Try downloading from
          <a
            href="https://github.com/vanilla-os/live-iso/releases/latest"
            target="_blank"
          >
            GitHub.
          </a>
        </small>
      </div>
      <div class="spacer"></div>
    </div>
    <div class="flexList">
      <div class="spacer"></div>
      <div class="flexGrid flexGrid--3">
        <div
          class="flexGrid-item flexGrid-item--2 card card--hz card--type-adv card--type-adv--hz card--type-funnyletter"
        >
          <div class="card-header">
            <h4>Keep in Touch</h4>
            <h2>Subscribe to the Newsletter</h2>
            <div class="btn btn--primary" @click="isNotMailNotChimpOpen = true">
              <span class="material-symbols-outlined">email</span>
              <span>Subscribe via Email</span>
            </div>
            <a class="btn btn--primary" href="//vanillaos.org/feed.xml">
              <span class="material-symbols-outlined">newspaper</span>
              <span>Subscribe via the RSS Feed</span>
            </a>
          </div>
          <div class="card-content">
            <div class="flexList">
              <div class="card-image">
                <img
                  src="/assets/images/components/funnyletter.svg"
                  alt="Subscribe to the Newsletter"
                />
              </div>
            </div>
          </div>
        </div>
        <router-link
          class="flexGrid-item card card--clickable card--min flexGrid-item"
          to="/community"
        >
          <div class="card-header">
            <h3>
              <span class="material-symbols-outlined">record_voice_over</span>
              Discord Server
            </h3>
            <div>
              <div class="btn btn--link btn--inline btn--med">
                <span class="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          </div>
          <div class="card-content">
            <div class="flexList">
              <div class="text">
                <p>
                  Join our Discord server to chat with other users and
                  developers, participate to the events and get some spoilers.
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <div class="container" v-else>
    <div class="flexList flexList--center">
      <div class="spacer"></div>
      <div class="text text--rich">
        <p class="text--center">
          Vanilla OS 2 Orchid is the next generation of Vanilla OS. It is built
          on top of new technologies and features to provide you with the most
          secure, stable and stunning system experience.
        </p>
      </div>
      <div class="flexList flexList--center">
        <p>Choose the architecture of your device:</p>
        <div class="dropdown-wrapper">
          <button
            class="btn btn--secondary"
            :aria-expanded="isArchitectureOpen"
            :disabled="!selectedBuild"
            @click.stop="isArchitectureOpen = !isArchitectureOpen"
          >
            <span class="material-symbols-outlined">memory</span>
            <span>{{ triggerLabel }}</span>
            <span class="material-symbols-outlined">expand_more</span>
          </button>
          <div
            class="dropdown dropdown--floating"
            v-if="isArchitectureOpen"
            @click.stop
          >
            <div
              class="dropdown-item"
              v-for="build in builds"
              :key="build.Arch"
              @click="selectBuild(build)"
            >
              {{ architectureLabel(build) }}
            </div>
          </div>
        </div>
      </div>
      <div class="flexList flexList--center">
        <p for="donation-amount">Choose your donation amount:</p>
        <div class="flexGrid flexGrid--3">
          <button
            v-for="amount in [2, 5]"
            :key="amount"
            class="btn btn--secondary"
            @click="setAmount(amount)"
          >
            ${{ amount }}
          </button>
          <input
            type="number"
            class="btn card--input"
            id="donation-amount"
            placeholder="Custom amount (0+)"
            @input="checkDonation()"
            v-model="donationAmount"
          />
        </div>
      </div>
      <form @submit.prevent="handleDonation">
        <input type="hidden" name="business" value="billing@fabricators.ltd" />
        <input
          type="hidden"
          id="paypalAmount"
          name="amount"
          :value="paypalAmount"
        />
        <button
          type="submit"
          id="donateButton"
          class="btn btn--primary btn--big"
          :disabled="donateButtonDisabled"
        >
          <span class="material-symbols-outlined">file_download</span>
          <span id="donateText">{{ donateText }}</span>
        </button>
      </form>
      <template v-if="selectedBuild">
        <div class="text text--dimmed">
          <small>{{ isoName }}</small>
        </div>
        <a :href="checksumUrl" class="btn btn--link btn--link-2 btn--inline">
          <span class="material-symbols-outlined">verified_user</span>
          <span>Download the SHA256 checksum</span>
        </a>
      </template>
      <div class="text text--dimmed">
        <small
          >Vanilla OS works out of the box on a large set of devices,
          <a
            href="https://docs.vanillaos.org/handbook/en/installation"
            target="_blank"
          >
            learn how to install it.
          </a>
        </small>
      </div>
      <div class="text text--dimmed">
        <small
          >Download is not working? Try downloading from
          <a
            href="https://github.com/vanilla-os/live-iso/releases/latest"
            target="_blank"
          >
            GitHub.
          </a>
        </small>
      </div>
      <div class="text text--rich">
        <center>
          <p>
            Do you enjoy Vanilla OS? Consider
            <router-link to="/get-involved/funding">supporting</router-link> the
            project.
          </p>
        </center>
      </div>
      <div class="spacer"></div>
    </div>
    <div class="flexList">
      <div class="spacer"></div>
      <div class="flexGrid flexGrid--3">
        <div
          class="flexGrid-item flexGrid-item--2 card card--hz card--type-adv card--type-adv--hz card--type-funnyletter"
        >
          <div class="card-header">
            <h4>Keep in Touch</h4>
            <h2>Subscribe to the Newsletter</h2>
            <div class="btn btn--primary" @click="isNotMailNotChimpOpen = true">
              <span class="material-symbols-outlined">email</span>
              <span>Subscribe via Email</span>
            </div>
            <a class="btn btn--primary" href="//vanillaos.org/feed.xml">
              <span class="material-symbols-outlined">newspaper</span>
              <span>Subscribe via the RSS Feed</span>
            </a>
          </div>
          <div class="card-content">
            <div class="flexList">
              <div class="card-image">
                <img
                  src="/assets/images/components/funnyletter.svg"
                  alt="Subscribe to the Newsletter"
                />
              </div>
            </div>
          </div>
        </div>
        <router-link
          class="flexGrid-item card card--clickable card--min flexGrid-item"
          to="/community"
        >
          <div class="card-header">
            <h3>
              <span class="material-symbols-outlined">record_voice_over</span>
              Discord Server
            </h3>
            <div>
              <div class="btn btn--link btn--inline btn--med">
                <span class="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
          </div>
          <div class="card-content">
            <div class="flexList">
              <div class="text">
                <p>
                  Join our Discord server to chat with other users and
                  developers, participate to the events and get some spoilers.
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <notmail-not-chimp
        :is-open="isNotMailNotChimpOpen"
        @close="closeNotMailNotChimp"
        tagsId="12812945"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";

interface Build {
  Arch: string;
  Date: string;
  Iso: string;
  Sha256: string;
}

const architectureLabels: Record<string, string> = {
  amd64: "Intel / AMD (amd64)",
  arm64: "ARM (arm64)",
};

const builds = ref<Build[]>([]);
const selectedBuild = ref<Build | null>(null);
const hasLoadError = ref(false);
const isArchitectureOpen = ref(false);
const donationAmount = ref<number | null>(null);
const donateText = ref("Please choose an option");
const donateButtonDisabled = ref(true);
const paypalAmount = ref("");

const isoUrl = computed(() => selectedBuild.value?.Iso ?? "");
const checksumUrl = computed(() => selectedBuild.value?.Sha256 ?? "");
const isoName = computed(() => isoUrl.value.split("/").pop() ?? "");

const architectureLabel = (build: Build) =>
  architectureLabels[build.Arch] ?? build.Arch;

const triggerLabel = computed(() => {
  if (selectedBuild.value) {
    return architectureLabel(selectedBuild.value);
  }
  return hasLoadError.value ? "Builds unavailable" : "Loading builds…";
});

const selectBuild = (build: Build) => {
  selectedBuild.value = build;
  isArchitectureOpen.value = false;
};

const loadBuilds = async () => {
  try {
    const response = await fetch("https://info.vanillaos.org/downloads.json");
    builds.value = await response.json();
    selectedBuild.value = builds.value[0] ?? null;
  } catch {
    hasLoadError.value = true;
  }
};

const closeArchitectures = () => {
  isArchitectureOpen.value = false;
};

const startDownload = () => {
  if (!isoUrl.value) {
    return;
  }

  const downloadLink = document.createElement("a");
  downloadLink.href = isoUrl.value;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

const hasDonated = () => {
  return document.cookie
    .split("; ")
    .some((cookie) => cookie.startsWith("hasDonated="));
};

const setAmount = (amount: number) => {
  donationAmount.value = amount;
  paypalAmount.value = amount.toString();
  donateText.value = amount === 0 ? "Free Download" : "Donate and download";
  donateButtonDisabled.value = false;
};

const checkDonation = () => {
  if (donationAmount.value !== null && donationAmount.value < 0) {
    donationAmount.value = 0;
  }
  if (donationAmount.value === null) {
    donateText.value = "Please choose an option";
    donateButtonDisabled.value = true;
  } else {
    paypalAmount.value = donationAmount.value.toString();
    donateText.value =
      donationAmount.value === 0 ? "Free Download" : "Donate and download";
    donateButtonDisabled.value = false;
  }
};

const handleDonation = () => {
  if (donationAmount.value === 0) {
    startDownload();
  } else {
    const form = document.createElement("form");
    form.action = "https://www.paypal.com/donate";
    form.method = "post";
    form.target = "_blank";
    form.innerHTML = `
      <input type="hidden" name="business" value="billing@fabricators.ltd" />
      <input type="hidden" name="amount" value="${paypalAmount.value}" />
    `;
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    const date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
    document.cookie = `hasDonated=true; expires=${date.toUTCString()}; path=/`;
    window.location.reload();
  }
};

onMounted(() => {
  (window as any).setAmount = setAmount;
  (window as any).checkDonation = checkDonation;

  document.addEventListener("click", closeArchitectures);
  loadBuilds();
});

onUnmounted(() => {
  document.removeEventListener("click", closeArchitectures);
});
</script>
