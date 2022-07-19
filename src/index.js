import Text from "./Animations/Text";
import { mapEach } from "./Utils/dom";
<<<<<<< HEAD
import { each } from "lodash";
import { cssEasing } from "./Utils/easing";

export default class Textify {
  /**
   * @constructor
   * @param {object} options - Options of ukiyo.js
   */
  constructor(options = {}) {
    // animation's elements
    this.element = document.querySelectorAll(".textify");
    // defaults values of options for Textify.js
    const defaults = {
      duration: 1.45,
      delay: 0.1,
      fade: false,
      fadeEaseing: cssEasing.default,
      top: false,
      rotation: 0,
      easing: cssEasing.default
    };
    this.controller = Object.assign({}, defaults, options);
=======

export default class Textify {
  constructor() {
    this.element = document.querySelectorAll("[data-textify]");
    console.log(this.element);
    this.createAnimation();
    this.events();
  }
>>>>>>> test

    /**
     * create main animation
     * */
    this.animation = mapEach(this.element, (element) => {
      return new Text({
        element,
        options: {
          duration: this.controller.duration,
          delay: this.controller.delay,
          fade: this.controller.fade,
          fadeEaseing: this.controller.fadeEaseing,
          top: this.controller.top,
          rotation: this.controller.rotation,
          easing: this.controller.easing
        }
      });
    });

    // add resize event
    this.events();
  }

  events() {
    window.addEventListener("resize", this.onResize.bind(this));
  }

  onResize() {
<<<<<<< HEAD
    each(this.animations, (animation) => {
      animation.onResize && animation.onResize();
    });
    console.log("animations resized");
=======
    this.animation.forEach((animation) => {
      animation.onResize();
    });
>>>>>>> test
  }
}
console.log(Textify);
// call Textify.js globaly
window.Textify = Textify;
