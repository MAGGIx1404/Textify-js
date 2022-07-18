import each from "lodash/each";
import Animation from "../Components/Animation";
import { cssEasing } from "../Utils/easing";
import { calculate, split } from "../Utils/texts";

export default class extends Animation {
  constructor({ element }) {
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

    this.onResize();

    if ("IntersectionObserver" in window) {
      this.animateOut();
    }
  }

  animateIn() {
    super.animateIn();

    each(this.lines, (line, lineIndex) => {
      each(line, (word) => {
        word.style.transition = `transform 1.45s ${lineIndex * 0.1}s ${cssEasing.default}, opacity 1s ${lineIndex * 0.1}s ${cssEasing.default}`;
        word.style[this.transformPrefix] = "translateY(0) rotate(0)";
        word.style.opacity = "1";
      });
    });
  }

  animateOut() {
    super.animateOut();

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
