// -------------------------------------------------------------------------------
import { Title } from "../Animations";

// -------------------------------------------------------------------------------
import { mapEach, DEFAULT_TITLE, getEasing } from "../Utils";

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

export default TextifyTitle;
