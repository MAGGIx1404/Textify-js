import { Animation } from "../Components";

// -------------------------------------------------------------------------------
import { calculate, split, DEFAULT, isBrowser } from "../utils";

// -------------------------------------------------------------------------------
export default class Text extends Animation {
  /**
   * @constructor
   * @param {HTMLElement} element - Target element
   * @param {object} options - Configuration options of Textify.js
   */
  constructor({ element, options = {} }) {
    const lines = [];
    const paragraphs = isBrowser ? element.querySelectorAll("h1, h2, p") : [];

    if (paragraphs.length === 0) {
      split({ element });
      split({ element });
      const spans = isBrowser ? element.querySelectorAll("span span") : [];
      lines.push(...spans);
    }
    if (paragraphs.length !== 0) {
      paragraphs.forEach((element) => {
        split({ element });
        split({ element });
        const spans = isBrowser ? element.querySelectorAll("span span") : [];
        lines.push(...spans);
      });
    }

    super({
      element,
      elements: {
        lines
      }
    });

    this.options = Object.assign({}, DEFAULT, options);
    this.repeat = this.options.once;

    this.threshold = this.options.threshold;

    this.onResize();
    if (isBrowser && "IntersectionObserver" in window) this.animateOut();
  }

  addStyles(word, index) {
    word.style.transition = `transform ${this.options.duration}ms ${index * this.options.stagger}ms ${this.options.easing}, opacity ${
      this.options.fadeDuration
    }ms ${index * this.options.stagger}ms ${this.options.fadeEasing}`;
    word.style.transformOrigin = this.options.transformOrigin ? this.options.transformOrigin : "center center";
    word.style[this.transformPrefix] = "translateY(0) scale(1) rotate(0)";
    this.options.fade ? (word.style.opacity = "1") : null;
  }

  // --------
  animateIn() {
    super.animateIn();

    if (typeof this.lines === "undefined") return;

    if (typeof this.lines === "object") {
      Object.keys(this.lines).forEach((key, index) => {
        this.lines[key].forEach((word) => {
          this.addStyles(word, index);
        });
      });
    } else {
      this.lines.forEach((line, index) => {
        line.forEach((word) => {
          this.addStyles(word, index);
        });
      });
    }
  }

  // --------
  animateOut() {
    super.animateOut();
    if (typeof this.lines === "undefined") return;

    if (typeof this.lines === "object") {
      Object.keys(this.lines).forEach((key) => {
        this.lines[key].forEach((word) => {
          word.style[this.transformPrefix] = `translateY(${this.options.reveal ? `${this.options.top ? "-" : ""}150%` : "0%"})  scale(${
            this.options.scale
          }) rotate(${this.options.rotation}deg)`;
          this.options.fade ? (word.style.opacity = "0") : null;
        });
      });
    } else {
      this.lines.forEach((line) => {
        line.forEach((word) => {
          word.style[this.transformPrefix] = `translateY(${this.options.reveal ? `${this.options.top ? "-" : ""}150%` : "0%"})  scale(${
            this.options.scale
          }) rotate(${this.options.rotation}deg)`;
          this.options.fade ? (word.style.opacity = "0") : null;
        });
      });
    }
  }

  // --------
  onResize() {
    this.lines = calculate(this.elements.lines);
  }

  // --------
  onRefresh() {
    this.onResize();
  }
}
