import { each } from "lodash";
import { cssEasing } from "./Utils/easing";
import { calculate, split } from "./Utils/texts";
import Prefix from "prefix";
import browserCheck from "./Utils/browserCheck";

class Textify {
  static get id() {
    return "Textify";
  }
  constructor(element, options = {}) {
    if (!element || !browserCheck()) return;
    const controls = {
      delay: 1,
      speed: 1
    };

    this.options = { controls, options };
    console.log(this.options);

    const lines = [];
    const paragraphs = element.querySelectorAll("h1, h2, h3, h4, h5, h6, p");

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

    const { animationDelay, animationTarget } = element.dataset;
    this.element = element;
    this.delay = animationDelay;

    this.target = animationTarget ? element.closest(animationTarget) : element;
    this.transformPrefix = Prefix("transform");
    this.isVisible = false;

    this.onResize();

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

    each(this.lines, (line, lineIndex) => {
      each(line, (word) => {
        word.style.transition = `transform 1.45s ${lineIndex * 0.1}s ${cssEasing.default}, opacity 1s ${lineIndex * 0.1}s ${CSS}`;
        word.style[this.transformPrefix] = "translateY(0) rotate(0)";
        word.style.opacity = "1";
      });
    });
  }

  animateOut() {
    this.isVisible = false;

    each(this.lines, (line) => {
      each(line, (word) => {
        word.style[this.transformPrefix] = "translateY(-200%) rotate(-20deg)";
        word.style.opacity = "0";
      });
    });
  }

  onResize() {
    this.lines = calculate(this.elements.lines);
  }
}

console.log(Textify);

export default Textify;
