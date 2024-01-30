import type { App } from "vue";

import Topbar from "./Topbar.vue";
import SiteFooter from "./Footer.vue";
import ShareModal from "./ShareModal.vue";
import ImageShowcase from "./ImageShowcase.vue";
import Card from "./Card.vue";
import NotMailNotChimp from "./NotMailNotChimp.vue";
import Timeline from "./Timeline.vue";
import FloatNotice from "./FloatNotice.vue";

export default {
  install(app: App) {
    // external components

    // app components
    app.component("topbar", Topbar);
    app.component("site-footer", SiteFooter);
    app.component("share-modal", ShareModal);
    app.component("image-showcase", ImageShowcase);
    app.component("card", Card);
    app.component("notmail-not-chimp", NotMailNotChimp);
    app.component("timeline", Timeline);
    app.component("float-notice", FloatNotice);

    console.debug("Components loaded");
  },
};