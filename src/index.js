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
    if (!options.easing) {
      options.easing = getEasing("default");
    } else {
      try {
        options.easing = getEasing(options.easing);
      } catch (err) {
        throw new Error(err);
      }
    }
    if (!options.fadeEasing) {
      options.fadeEasing = getEasing("default");
    } else {
      try {
        options.fadeEasing = getEasing(options.fadeEasing);
      } catch (err) {
        throw new Error(err);
      }
    }

    const controller = Object.assign({}, DEFAULT, options);

    const DEFAULT_TARGET_ELEMENT_SELECTOR = options.selector ? options.selector : "[data-textify]";
    this.elements = document.querySelectorAll(DEFAULT_TARGET_ELEMENT_SELECTOR);

    this.animations = mapEach(this.elements, (element) => {
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

  //   animations
  show() {
    this.animations.forEach((animation) => {
      animation.animateIn();
    });
  }

  hide() {
    this.animations.forEach((animation) => {
      animation.animateOut();
    });
  }

  // --------
  onResize() {
    this.animations.forEach((animation) => {
      animation.onResize && animation.onResize();
    });
  }

  // --------
  onRefresh() {
    this.animations.forEach((animation) => {
      animation.onRefresh && animation.onRefresh();
    });
  }
}

window.Textify = Textify;
