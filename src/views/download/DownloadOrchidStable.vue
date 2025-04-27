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
        <p>{{$t('download.stable.donate.description1')}}.
          <b>{{$t('download.stable.donate.description2')}}.</b>
        </p>
      </div>
      <a
        ref="downloadLink"
        href="https://download.vanillaos.org/latest.zip"
        class="btn btn--primary btn--big"
      >
        <span class="material-symbols-outlined">file_download</span>
        <span>{{$t('components.downloadButton')}}</span>
      </a>
      <div class="text text--dimmed">
        <small>{{$t('download.stable.installationInfo.description1')}}
          <a href="https://docs.vanillaos.org/handbook/en/installation" target="_blank">
            {{$t('download.stable.installationInfo.description2')}}
          </a>
        </small>
      </div>
      <div class="text text--dimmed">
        <small>{{$t('download.stable.installationInfo.description3')}}
          <a href="https://github.com/vanilla-os/live-iso/releases/latest" target="_blank">
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
          <h4>{{$t('components.newsletter.dont_miss')}}</h4>
          <h2>{{$t('components.newsletter.subscribe')}}</h2>
          <div class="btn btn--primary" @click="isNotMailNotChimpOpen = true">
            <span class="material-symbols-outlined">email</span>
            <span>{{$t('components.newsletter.subscribe_email')}}</span>
          </div>
          <a class="btn btn--primary" href="//vanillaos.org/feed.xml">
            <span class="material-symbols-outlined">newspaper</span>
            <span>{{$t('components.newsletter.subscribe_rss')}}</span>
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
              {{$t('components.community_chat.title')}}
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
                <p>{{$t('components.community_chat.description')}}</p>
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
          {{$t('download.changelog.description')}}
        </p>
      </div>
      <div class="flexList flexList--center">
        <p for="donation-amount">{{$t('download.stable.donate.amount')}}:</p>
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
      <div class="text text--dimmed">
        <small>{{$t('download.stable.installationInfo.description1')}}
          <a href="https://docs.vanillaos.org/handbook/en/installation" target="_blank">
            {{$t('download.stable.installationInfo.description2')}}
          </a>
        </small>
      </div>
      <div class="text text--dimmed">
        <small>{{$t('download.stable.installationInfo.description3')}}
          <a href="https://github.com/vanilla-os/live-iso/releases/latest" target="_blank">
            GitHub.
          </a>
        </small>
      </div>
      <div class="text text--rich">
        <center>
          <p>
            {{$t('download.stable.support_message.description1')}} <router-link to="/get-involved/funding">
            {{$t('download.stable.support_message.description2')}}</router-link>
            {{$t('download.stable.support_message.description3')}}
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
            <h4>{{$t('components.newsletter.keep_in_touch')}}</h4>
            <h2>{{$t('components.newsletter.subscribe')}}</h2>
            <div class="btn btn--primary" @click="isNotMailNotChimpOpen = true">
              <span class="material-symbols-outlined">email</span>
              <span>{{$t('components.newsletter.subscribe_email')}}</span>
            </div>
            <a class="btn btn--primary" href="//vanillaos.org/feed.xml">
              <span class="material-symbols-outlined">newspaper</span>
              <span>{{$t('components.newsletter.subscribe_rss')}}</span>
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
              {{$t('components.community_chat.title')}}
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
                <p>{{$t('components.community_chat.description')}}</p>
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
import { ref, onMounted } from "vue";
import { useI18n } from 'vue-i18n';  

const { t } = useI18n();  

const donationAmount = ref<number | null>(null);
const donateText = ref(t('download.stable.donate.button'));
const donateButtonDisabled = ref(true);
const paypalAmount = ref("");

const hasDonated = () => {
  return document.cookie
    .split("; ")
    .some((cookie) => cookie.startsWith("hasDonated="));
};

const setAmount = (amount: number) => {
  donationAmount.value = amount;
  paypalAmount.value = amount.toString();
  donateText.value = amount === 0 ? t('download.stable.donate.free') : t('download.stable.donate.download');
  donateButtonDisabled.value = false;
};

const checkDonation = () => {
  if (donationAmount.value !== null && donationAmount.value < 0) {
    donationAmount.value = 0;
  }
  if (donationAmount.value === null) {
    donateText.value = t('download.stable.donate.button');
    donateButtonDisabled.value = true;
  } else {
    paypalAmount.value = donationAmount.value.toString();
    donateText.value =
      donationAmount.value === 0 ? t('download.stable.donate.free') : t('download.stable.donate.download');
    donateButtonDisabled.value = false;
  }
};

const handleDonation = () => {
  if (donationAmount.value === 0) {
    const downloadLink = document.createElement("a");
    downloadLink.href = "https://download.vanillaos.org/latest.zip";
    downloadLink.download = "Vanilla OS 2 Orchid";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
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

  if (hasDonated()) {
    const downloadLink = document.createElement("a");
    downloadLink.href = "https://download.vanillaos.org/latest.zip";
    downloadLink.download = "Vanilla OS 2 Orchid";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
});
</script>
