// -------------------------------------------------------------------------------
import Animation from "../Components/Animation";

// -------------------------------------------------------------------------------
import { calculate, split } from "../Utils/texts";
import { DEFAULT_TITLE } from "../Utils/defaults";

// -------------------------------------------------------------------------------
export default class Title extends Animation {
  /**
   *  @constructor
   * @param {HTMLElement} element - Target element
   * @param {object} options - Configuration options of Textify.js
   */
  constructor({ element, options = {} }) {
    const words = [];
    const chars = [];
    const texts = element.querySelectorAll("h1, h2, p");

    if (
      element.tagName === "H1" ||
      element.tagName === "H2" ||
      element.tagName === "H3" ||
      element.tagName === "H4" ||
      element.tagName === "H5" ||
      element.tagName === "H6"
    ) {
      // -----------------------------------------------------------------------
      if (texts.length === 0) {
        split({ element });
        const newWords = element.querySelectorAll("span");
        newWords.forEach((word) => {
          word.classList.add("word");
          words.push(word);
        });
      }

      // -----------------------------------------------------------------------
      if (texts.length !== 0) {
        texts.forEach((element) => {
          split({ element });
          const newWords = element.querySelectorAll("span");
          newWords.forEach((word) => {
            word.classList.add("word");
            words.push(word);
          });
        });
      }

      // -----------------------------------------------------------------------
      words.forEach((word) => {
        let newString = "";
        let itemText = word.innerText.split("");
        itemText.map((letter) => (newString += letter == " " ? `<span class='gap'></span>` : `<span class='char'>${letter}</span>`));
        word.innerHTML = newString;
        const newChars = word.querySelectorAll("span");
        chars.push(...newChars);
      });

      // -----------------------------------------------------------------------
      chars.forEach((char, index) => {
        char.setAttribute("data-char-index", index + 1);
      });

      // -----------------------------------------------------------------------
      element.classList.add("textify-title");
    } else {
      console.error("Textify.js: The target element must be a heading tag.");
    }

    // -----------------------------------------------------------------------
    super({
      element,
      elements: {
        words,
        chars
      }
    });

    // -----------------------------------------------------------------------
    if (
      element.tagName === "H1" ||
      element.tagName === "H2" ||
      element.tagName === "H3" ||
      element.tagName === "H4" ||
      element.tagName === "H5" ||
      element.tagName === "H6"
    ) {
      null;
    } else {
      return;
    }

    this.options = Object.assign({}, DEFAULT_TITLE, options);

    // -----------------------------------------------------------------------

    this.repeat = this.options.once;
    this.threshold = this.options.threshold;

    this.onResize();
    if ("IntersectionObserver" in window) this.animateOut();
  }

  //  ---------------------------------------------------------------------------
  animateIn() {
    super.animateIn();
    if (typeof this.lines === "undefined") return;

    this.elements.chars.forEach((char, index) => {
      char.style.transition = `transform ${this.options.duration}ms ${index * this.options.delay}ms ${this.options.easing}, opacity ${
        this.options.fadeDuration
      }ms ${index * this.options.delay}ms ${this.options.fadeEasing}`;
      char.style.transformOrigin = this.options.transformOrigin ? this.options.transformOrigin : "center center";
      char.style[this.transformPrefix] = "translateY(0) rotate(0) scale(1)";
      this.options.fade ? (char.style.opacity = 1) : null;
    });
  }

  //   ---------------------------------------------------------------------------
  animateOut() {
    super.animateOut();
    if (typeof this.lines === "undefined") return;

    this.elements.chars.forEach((char) => {
      char.style[this.transformPrefix] = `translateY(${this.options.reveal ? `${this.options.top ? "-" : ""}150%` : "0%"}) rotate(${
        this.options.rotation
      }deg) scale(${this.options.scale})`;
      this.options.fade ? (char.style.opacity = 0) : null;
    });
  }

  // --------
  onResize() {
    this.lines = calculate(this.elements.words);
  }

  // --------
  onRefresh() {
    this.onResize();
  }
}
