import AutoBind from "auto-bind";
import Prefix from "prefix";

export default class Animation {
  constructor({ element, elements }) {
    AutoBind(this);

    const { animationDelay, animationTarget } = element.dataset;

    this.delay = animationDelay;
    this.element = element;
    this.elements = elements;

    this.target = animationTarget ? element.closest(animationTarget) : element;
    this.transformPrefix = Prefix("transform");

    this.isVisible = false;

    if ("IntersectionObserver" in window) {
      this.createObserver();

      this.animateOut();
    } else {
      this.animateIn();
    }
  }

  createObserver() {
    this.observer = new window.IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!this.isVisible && entry.isIntersecting) {
          this.animateIn();
          observer.unobserve(entry.target);
        } else {
          this.animateOut();
        }
      });
    }).observe(this.target);
  }

  animateIn() {
    this.isVisible = true;
  }

  animateOut() {
    this.isVisible = false;
  }
}
