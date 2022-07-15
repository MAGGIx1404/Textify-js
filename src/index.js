import { each } from "lodash";
import { cssEasing } from "./Utils/easing";
import { calculate, split } from "./Utils/texts";
// import browserCheck from "./Utils/browserCheck";
import Animation from "./Components/Animation";

export default class Textify extends Animation {
  constructor() {
    // if(!element || !browserCheck()) return;
    const lines = [];
    const element = document.querySelectorAll("[data-textify-animation]");
    // const paragraphs = element.querySelectorAll("h1, h2, p");

    element.forEach((el) => {
      const paragraphs = el.querySelectorAll("h1, h2, p");
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
    });

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
        word.style.transition = `transform 1.45s ${lineIndex * 0.1}s ${cssEasing.default}, opacity 1s ${lineIndex * 0.1}s ${cssEasing}`;
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

console.log(Textify);
