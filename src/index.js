import Text from "./Animations/Text";
import { mapEach } from "./Utils/dom";
import { each } from "lodash";
import { cssEasing } from "./Utils/easing";

export default class Textify {
  /**
   * @constructor
   * @param {object} options - Options of Textify.js
   */
  constructor(options = {}) {
    // animation's elements
    this.element = document.querySelectorAll(".textify");
    // defaults values of options for Textify.js
    const defaults = {
      duration: 1.45,
      delay: 0.1,
      fade: false,
      top: false,
      rotation: 0,
      fadeEaseing: cssEasing.default,
      easing: cssEasing.default
    };
    this.controller = Object.assign({}, defaults, options);

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
    each(this.animations, (animation) => {
      animation.onResize && animation.onResize();
    });
    console.log("animations resized");
  }
}
console.log(Textify);
// call Textify.js globaly
window.Textify = Textify;
