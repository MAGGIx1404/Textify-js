import { each } from "lodash";
import { cssEasing } from "./Utils/easing";
// import { calculate, split } from "./Utils/texts";
// import browserCheck from "./Utils/browserCheck";
import Animation from "./Components/Animation";

export default class Textify extends Animation {
  constructor() {
    // if(!element || !browserCheck()) return;
    const lines = [];
    let element = document.querySelectorAll("[data-textify-animation]");
    // const paragraphs = element.querySelectorAll("h1, h2, p");

    element.forEach((el) => {
      this.split({ el });
      this.split({ el });
      lines.push(...element.querySelectorAll("span span"));
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
    this.lines = this.calculate(this.elements.lines);
  }

  split({ expression = " ", append = true }) {
    const element = [...document.querySelectorAll("[data-textify-animation]")];
    let words;
    for (let i = 0; i <= element.length; i++) {
      words = this.splitText(element[i].innerHTML, expression);
      element[i].innerHTML = "";
      words.forEach((word) => {
        element[i].innerHTML += this.parseLine(word);
      });
    }

    let innerHTML = "";

    each(words, (line) => {
      if (line.indexOf("<br>") > -1) {
        const lines = line.split("<br>");

        each(lines, (line, index) => {
          innerHTML += index > 0 ? "<br>" + this.parseLine(line) : this.parseLine(line);
        });
      } else {
        innerHTML += this.parseLine(line);
      }
    });

    element.innerHTML = innerHTML;

    const spans = element.querySelectorAll("span");

    if (append) {
      each(spans, (span) => {
        const isSingleLetter = span.textContent.length === 1;
        const isNotEmpty = span.innerHTML.trim() !== "";
        const isNotAndCharacter = span.textContent !== "&";
        const isNotDashCharacter = span.textContent !== "-";

        if (isSingleLetter && isNotEmpty && isNotAndCharacter && isNotDashCharacter) {
          span.innerHTML = `${span.textContent}&nbsp;`;
        }
      });
    }

    return spans;
  }

  calculate(spans) {
    const lines = [];
    let words = [];

    let position = spans[0].offsetTop;

    each(spans, (span, index) => {
      if (span.offsetTop === position) {
        words.push(span);
      }

      if (span.offsetTop !== position) {
        lines.push(words);

        words = [];
        words.push(span);

        position = span.offsetTop;
      }

      if (index + 1 === spans.length) {
        lines.push(words);
      }
    });

    return lines;
  }

  splitText(text, expression) {
    const splits = text.split("<br>");

    let words = [];

    each(splits, (item, index) => {
      if (index > 0) {
        words.push("<br>");
      }

      words = words.concat(item.split(expression));

      let isLink = false;
      let link = "";

      const innerHTML = [];

      each(words, (word) => {
        if (!isLink && (word.includes("<a") || word.includes("<strong"))) {
          link = "";

          isLink = true;
        }

        if (isLink) {
          link += ` ${word}`;
        }

        if (isLink && (word.includes("/a>") || word.includes("/strong>"))) {
          innerHTML.push(link);

          link = "";
        }

        if (!isLink && link === "") {
          innerHTML.push(word);
        }

        if (isLink && (word.includes("/a>") || word.includes("/strong>"))) {
          isLink = false;
        }
      });

      words = innerHTML;
    });

    return words;
  }

  parseLine(line) {
    if (line === "") {
      return line;
    } else if (line === " ") {
      return "&nbsp;";
    } else {
      line = line.trim();

      return line === "<br>" ? "<br>" : `<span>${line}</span>` + (line.length > 1 ? " " : "");
    }
  }
}

console.log(Textify);
