import { TweenMax, TimelineMax, Linear } from "gsap";
import scenes from "./Scenes.js";


export default {
  name: "Top",
  components: {},
  mounted() {
    // var tween = new TimelineMax()
    //   .add(
    //     TweenMax.to(".logo path", 0.9, {
    //       strokeDashoffset: 0,
    //       ease: Linear.easeNone
    //     })
    //   ) // draw word for 0.9
    //   .add(
    //     TweenMax.to(".logo path", 1, {
    //       stroke: "white",
    //       ease: Linear.easeNone
    //     }),
    //     0
    //   ); // change color during the whole thing
    // const scene0 = new this.$scrollmagic.scene({
    //   triggerElement: "#trigger0",
    //   duration: "100%",
    //   tweenChanges: true
    // })
    //   .setTween(tween)
    //   .addIndicators(); // add indicators (requires plugin)
    // this.$scrollmagic.addScene(scene0);
    const { Controller, Scene, Tween } = this.$scrollmagic;
    const controller = Controller;
    scenes.map((screne, i) => {
      const scene = new Scene(screne.scene)
        //.setPin(items[i], { pushFollowers: false })
        .setTween(screne.tweenElement, screne.tween)
        .addIndicators({ name: `Scene ${i}` })
        controller.addScene(scene);
    });
    const scene = new Scene({
      triggerElement: "#trigger5"
    })
      .setPin(".screen-four", { pushFollowers: false })
      // .setTween(".four", {
      //   css: {
      //     borderTop: "30px solid white",
      //     backgroundColor: "blue",
      //     scale: 0.7, // the tween durtion can be omitted and defaults to 1
      //   },
      // })
      .addIndicators({ name: "scene7" })
      .addTo(controller);
  }
};
