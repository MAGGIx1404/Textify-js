// -------------------------------------------------------------------------------
import "../style/Textify.css";

// -------------------------------------------------------------------------------

import Text from "./Animations/Text";
import Title from "./Animations/Title";

// -------------------------------------------------------------------------------

import { mapEach } from "./Utils/dom";
import { DEFAULT, DEFAULT_TITLE } from "./Utils/defaults";
import { getEasing } from "./Utils/easing";

// -------------------------------------------------------------------------------
class Textify {
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

// -------------------------------------------------------------------------------

class TextifyTitle {
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

    const controller = Object.assign({}, DEFAULT_TITLE, options);

    const DEFAULT_TARGET_ELEMENT_SELECTOR = options.selector ? options.selector : "[data-textify-title]";
    this.elements = document.querySelectorAll(DEFAULT_TARGET_ELEMENT_SELECTOR);

    this.animations = mapEach(this.elements, (element) => {
      return new Title({
        element,
        options: controller
      });
    });
  }

  // --------
  events() {
    window.addEventListener("resize", this.onResize.bind(this));
  }

  //   animations
  //   --------
  show() {
    this.animations.forEach((animation) => {
      animation.animateIn();
    });
  }

  //   --------
  hide() {
    this.animations.forEach((animation) => {
      animation.animateOut();
    });
  }

  //   --------
  onResize() {
    this.animations.forEach((animation) => {
      animation.onResize && animation.onResize();
    });
  }

  //   --------
  onRefresh() {
    this.animations.forEach((animation) => {
      animation.onRefresh && animation.onRefresh();
    });
  }
}

export default { Textify, TextifyTitle };

window.Textify = Textify;
window.TextifyTitle = TextifyTitle;
