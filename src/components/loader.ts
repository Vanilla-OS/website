import type { App } from "vue";

import ConditionalLink from "./ConditionalLink.vue";
import Btn from "./Btn.vue";
import BtnAdv from "./BtnAdv.vue";
import AnIcon from "./AnIcon.vue";
import Badges from "./Badges.vue";
import Topbar from "./Topbar.vue";
import SiteFooter from "./Footer.vue";
import ShareModal from "./ShareModal.vue";
import ImageShowcase from "./ImageShowcase.vue";
import CardHeader from "./CardHeader.vue";
import CardFooter from "./CardFooter.vue"
import Card from "./Card.vue";
import ImageCard from "./ImageCard.vue";
import NotMailNotChimp from "./NotMailNotChimp.vue";
import Timeline from "./Timeline.vue";
import FloatNotice from "./FloatNotice.vue";
import DynamicPanel from "./DynamicPanel.vue";
import Bento from "./Bento.vue";
import BentoCard from "./BentoCard.vue";
import BentoCardCarousel from "./BentoCardCarousel.vue";
import BeforeAfterSlider from "./BeforeAfterSlider.vue";

import DynamicPanelOrchidRelease from "./DynamicPanelOrchidRelease.vue";
import BentoOrchidRelease from "./BentoOrchidRelease.vue";

export default {
  install(app: App) {
    // external components

    // app components
    app.component("conditional-link", ConditionalLink);
    app.component("btn", Btn);
    app.component("btn-adv", BtnAdv);
    app.component("an-icon", AnIcon);
    app.component("badges", Badges);
    app.component("topbar", Topbar);
    app.component("site-footer", SiteFooter);
    app.component("share-modal", ShareModal);
    app.component("image-showcase", ImageShowcase);
    app.component("card-header", CardHeader);
    app.component("card-footer", CardFooter);
    app.component("card", Card);
    app.component("image-card", ImageCard);
    app.component("notmail-not-chimp", NotMailNotChimp);
    app.component("timeline", Timeline);
    app.component("float-notice", FloatNotice);
    app.component("dynamic-panel", DynamicPanel);
    app.component("bento", Bento);
    app.component("bento-card", BentoCard);
    app.component("bento-card-carousel", BentoCardCarousel);
    app.component("before-after-slider", BeforeAfterSlider);

    app.component("dynamic-panel-orchid-release", DynamicPanelOrchidRelease);
    app.component("bento-orchid-release", BentoOrchidRelease);

    console.debug("Components loaded");
  },
};