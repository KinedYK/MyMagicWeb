import ScrollMagic from "scrollmagic";
import { gsap, TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { ScrollMagicPluginIndicator} from "scrollmagic-plugins";
// import { TweenMax, TimelineMax, Linear } from "gsap";
// import scenes from "./Scenes.js";
 
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
ScrollMagicPluginIndicator(ScrollMagic);

const Vue3ScrollMagic = {
  install(app) {
    app.config.globalProperties.$scrollmagic = {
      ScrollMagic,
      Controller: new ScrollMagic.Controller({
        plugins: [ScrollMagicPluginGsap]
      }),
      Scene: ScrollMagic.Scene,
      Tween: gsap.Tween,
      Timeline: gsap.TimelineMax
    };
  }
};

export default Vue3ScrollMagic;
