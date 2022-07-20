import Text from "./Animations/Text";
import { mapEach } from "./Utils/dom";
import { DEFAULT } from "./Utils/defaults";
import { getEasing } from "./Utils/easing";

// -------------------------------------------------------------------------------
export default class Textify {
  /**
   * @constructor
   * @param {object} options - Configuration object
   */
  constructor(options = {}) {
    try {
      options.easing = getEasing(options.easing);
    } catch (err) {
      throw new Error(err);
    }

    const controller = Object.assign({}, DEFAULT, options);

    const DEFAULT_TARGET_ELEMENT_SELECTOR = options.selector ? options.selector : "[data-textify]";
    this.elements = document.querySelectorAll(DEFAULT_TARGET_ELEMENT_SELECTOR);

    this.animation = mapEach(this.elements, (element) => {
      return new Text({
        element,
        options: controller
      });
    });

    this.elements.forEach((element) => {
      const spans = element.querySelectorAll("span");
      spans.forEach((span) => {
        span.style.display = "inline-block";
        span.style.overflow = "hidden";
        span.style.verticalAlign = "top";
        span.style.transformOrigin = "center";
      });
    });

    this.events();
  }

  // --------
  events() {
    window.addEventListener("resize", this.onResize.bind(this));
  }

  // --------
  onResize() {
    this.animations.forEach((animation) => {
      animation.onResize && animation.onResize();
    });
  }
}

window.Textify = Textify;
