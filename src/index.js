/* eslint-disable no-prototype-builtins */
import Texts from "./types/Texts";
import { Config } from "./utils/Config";
import { isBrowser } from "./utils/isBrowser";
import { mapEach } from "./utils/Dom";

// Deep merge two objects.
// @param target Object - The target object.
// @param source Object - The source object.
// @returns Object - The merged object.
function deepMerge(target, source) {
  if (typeof target !== "object" || typeof source !== "object") {
    return source;
  }
  const merged = { ...target };
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (merged.hasOwnProperty(key)) {
        merged[key] = deepMerge(merged[key], source[key]);
      } else {
        merged[key] = source[key];
      }
    }
  }
  return merged;
}

// Textify
// @param options Object - The options object.
// @returns Object - The Textify instance.
export default class Textify {
  /**
   * @constructor
   * @param {Object} options
   * **/
  constructor(options) {
    this.DEFAULT_ELEMENT = options.el || "[data-textify]";
    this.options = options;
    this.config = Config;
    this.controls = deepMerge(this.config, this.options);

    console.log(this.controls, "this.controls");

    // Check if the browser is supported.
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
    }
  }
}

new Textify({
  el: ".paragraph",
  largeText: true,
  animation: {
    by: "lines",
    stagger: 0.2
  }
});
