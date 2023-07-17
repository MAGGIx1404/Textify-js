import Texts from "./types/Texts";
import { Config } from "./utils/Config";
import { isBrowser } from "./utils/isBrowser";
import { mapEach } from "./utils/Dom";

export default class Textify {
  constructor(options) {
    this.DEFAULT_ELEMENT = options.el || "[data-textify]";
    this.options = options;
    this.config = Config;

    this.controls = Object.assign({}, this.config, this.options);
    console.log(this.controls);

    if (isBrowser) {
      if (!document.querySelector(this.DEFAULT_ELEMENT)) {
        throw new Error(`Textify: Element "${this.DEFAULT_ELEMENT}" is not found.`);
      }

      this.TARGETS = [...document.querySelectorAll(this.DEFAULT_ELEMENT)];

      this.ANIMATIONS = mapEach(this.TARGETS, (element) => {
        return new Texts({
          element: element,
          controls: this.controls
        });
      });

      console.log(this.ANIMATIONS);
    }
  }
}

new Textify({
  el: ".title",
  observer: {
    repeat: true,
    threshold: 0.25
  },
  animation: {
    overflow: true
  }
});
