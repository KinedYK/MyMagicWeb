const scenes = [
  {
    scene: {
      triggerElement: "#trigger1",
      triggerHook: 0,
      // offset: 50, // move trigger to center of element
      duration: "100%"
    },
    tweenElement: ".logo path",
    tween: {
      css: {
        "fill-opacity": 1
      }
    }
  },
  {
    scene: {
      triggerElement: "#trigger2",
      triggerHook: 0,
      duration: "200%"
    },
    tweenElement: ".chars-container",
    tween: {
      css: {
        transform: "translateX(-1920px)"
      }
    }
  },
  {
    scene: {
      triggerElement: "#trigger2",
      triggerHook: 0,
      duration: "200%"
    },
    tweenElement: "#char-b-left",
    tween: {
      css: {
        width: "-1920px"
      }
    }
  },
  {
    scene: {
      triggerElement: "#trigger2",
      triggerHook: 0,
      duration: "200%"
    },
    tweenElement: "#char-b-right",
    tween: {
      css: {
        width: "-1622px"
      }
    }
  },
  {
    scene: {
      triggerElement: "#trigger3",
      triggerHook: 0,
      duration: 300
    },
    tweenElement: ".screen-third",
    tween: {
      css: {
        left: "0"
      }
    }
  },
  {
    scene: {
      triggerElement: "#trigger4",
      triggerHook: 0,
      duration: "100%"
    },
    tweenElement: "#squart1",
    tween: {
      css: {
        top: "-50%",
        left: "-50%",
        transform: "scale(8)"
      }
    }
  },
  {
    scene: {
      triggerElement: "#trigger4",
      triggerHook: 0,
      duration: "100%"
    },
    tweenElement: "#squart2",
    tween: {
      css: {
        top: "150%",
        left: "150%",
        transform: "scale(8)"
      }
    }
  },
  {
    scene: {
      triggerElement: "#trigger4",
      triggerHook: 0,
      duration: "100%"
    },
    tweenElement: ".screen-third .text",
    tween: {
      css: {
        opacity: 1,
        transform: "translate(0,0) scale(1)"
      }
    }
  },
  {
    scene: {
      triggerElement: "#trigger6",
      triggerHook: 0,
      duration: "100%"
    },
    tweenElement: ".screen-third>div.viewport",
    tween: {
      css: {
        width: "0vw"
      }
    }
  },
  {
    scene: {
      triggerElement: "#trigger7",
      triggerHook: 0,
      duration: "300%"
    },
    tweenElement: ".third-box #text",
    tween: {
      css: {
        "font-size": "2000px"
      }
    }
  },
  {
    scene: {
      triggerElement: "#trigger7",
      triggerHook: 0,
      duration: "100%"
    },
    tweenElement: ".third-box>.viewport",
    tween: {
      css: {
        opacity: 1
      }
    }
  }
];
export default scenes;
