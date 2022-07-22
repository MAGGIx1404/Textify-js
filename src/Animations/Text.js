import Animation from "../Components/Animation";

// -------------------------------------------------------------------------------
import { calculate, split } from "../Utils/texts";
import { DEFAULT } from "../Utils/defaults";

// -------------------------------------------------------------------------------
export default class extends Animation {
  /**
   * @constructor
   * @param {HTMLElement} element - Target element
   * @param {object} options - Configuration options of Textify.js
   */
  constructor({ element, options = {} }) {
    const lines = [];
    const paragraphs = element.querySelectorAll("h1, h2, p");

    if (paragraphs.length === 0) {
      split({ element });
      split({ element });
      lines.push(...element.querySelectorAll("span span"));
    }

    if (paragraphs.length !== 0) {
      paragraphs.forEach((element) => {
        split({ element });
        split({ element });
        lines.push(...element.querySelectorAll("span span"));
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
    this.onResize();
    if ("IntersectionObserver" in window) this.animateOut();
  }

  addStyles(word, index) {
    word.style.transition = `transform ${this.options.duration}ms ${index * this.options.delay}ms ${this.options.easing}, opacity ${
      this.options.duration - 200
    }ms ${index * this.options.delay}ms ${this.options.fadeEasing}`;
    console.log(this.transformPrefix);
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
          word.style[this.transformPrefix] = `translateY(${this.options.top ? "-" : ""}150%)  scale(${this.options.scale}) rotate(${
            this.options.rotation
          }deg)`;
          this.options.fade ? (word.style.opacity = "0") : null;
        });
      });
    } else {
      this.lines.forEach((line) => {
        line.forEach((word) => {
          word.style[this.transformPrefix] = `translateY(${this.options.top ? "-" : ""}150%)  scale(${this.options.scale}) rotate(${
            this.options.rotation
          }deg)`;
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
