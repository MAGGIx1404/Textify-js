import each from "lodash/each";
import Animation from "../Components/Animation";
import { cssEasing } from "../Utils/easing";
import { calculate, split } from "../Utils/texts";

export default class extends Animation {
  /**
   * @constructor
   * @param {HTMLElement} element - Target element
   * @param {object} options - Options of Textify.js
   */
  constructor({ element, options = {} }) {
    const lines = [];
    const paragraphs = element.querySelectorAll("h1, h2, p");

    if (paragraphs.length !== 0) {
      each(paragraphs, (element) => {
        split({ element });
        split({ element });

        lines.push(...element.querySelectorAll("span span"));
      });
    } else {
      split({ element });
      split({ element });

      lines.push(...element.querySelectorAll("span span"));
    }

    super({
      element,
      elements: {
        lines
      }
    });

    /**
     * defaults values of options for Textify.js
     */
    const defaults = {
      duration: 1.45,
      delay: 0.1,
      fade: true,
      fadeEaseing: cssEasing.default,
      top: false,
      rotation: 0,
      easing: cssEasing.default
    };
    this.options = Object.assign({}, defaults, options);

    /**
     * on resize event
     * */
    this.onResize();

    if ("IntersectionObserver" in window) {
      this.animateOut();
    }
  }

  animateIn() {
    super.animateIn();

    each(this.lines, (line, lineIndex) => {
      each(line, (word) => {
        word.style.transition = `transform ${this.options.duration}s ${lineIndex * this.options.delay}s ${this.options.easing}, opacity ${
          this.options.duration - 0.1
        }s ${lineIndex * this.options.delay}s ${this.options.fadeEaseing}`;
        word.style[this.transformPrefix] = "translateY(0) rotate(0)";
        this.options.fade ? (word.style.opacity = "1") : null;
      });
    });
  }

  animateOut() {
    super.animateOut();

    each(this.lines, (line) => {
      each(line, (word) => {
        word.style[this.transformPrefix] = `translateY(${this.options.top ? "-" : ""}100%) rotate(${this.options.rotation}deg)`;
        this.options.fade ? (word.style.opacity = "0") : null;
      });
    });
  }

  onResize() {
    this.lines = calculate(this.elements.lines);
  }
}
