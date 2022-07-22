import Prefix from "../vendors/prefix";

export default class Animation {
  constructor({ element, elements }) {
    const { animationDelay, animationTarget } = element.dataset;

    this.delay = animationDelay;
    this.element = element;
    this.elements = elements;
    this.repeat = false;

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
    this.observer = new window.IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!this.isVisible && entry.isIntersecting) {
            this.animateIn();
            this.repeat ? observer.unobserve(entry.target) : null;
          } else {
            this.animateOut();
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0
      }
    ).observe(this.target);
  }

  animateIn() {
    this.isVisible = true;
  }

  animateOut() {
    this.isVisible = false;
  }
}
