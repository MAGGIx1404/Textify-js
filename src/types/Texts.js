/* eslint-disable no-unused-vars */
// import gsap for animation
import GSAP from "gsap";

import Splitter from "../utils/Text";
import { isBrowser } from "../utils/isBrowser";

export default class Texts {
  constructor({ element, controls }) {
    this.element = element;
    this.controls = controls;
    this.observer = null;
    this.text = null;
    this.textParts = {};

    this.threshold = this.controls.observer.threshold;
    this.repeat = this.controls.observer.repeat;
    this.animation = this.controls.animation;
    this.customAnimation = this.controls.animation.customAnimation;

    // _split
    this._split();

    // createObserver
    if (isBrowser && "IntersectionObserver" in window) {
      this.createObserver();
      this.customAnimation ? null : this.animateOut();
    } else {
      this.customAnimation ? null : this.animateIn();
    }
  }

  _split() {
    this.text = new Splitter(this.element, {
      type: this.controls.splitType,
      charsClass: this.controls.charsClass,
      wordsClass: this.controls.wordsClass,
      linesClass: this.controls.linesClass,
      position: this.controls.position,
      tag: this.controls.tag
    });

    this.textParts = {
      chars: this.text.chars,
      words: this.text.words,
      lines: this.text.lines
    };
  }

  createObserver() {
    this.observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-animated");
          this.customAnimation ? null : this.animateIn();
          this.repeat ? null : this.observer.unobserve(entry.target);
        } else {
          this.customAnimation ? null : this.animateOut();
          this.repeat ? entry.target.classList.add("is-animated") : null;
        }
      });
    });
    this.observer.observe(this.element);
  }

  animateIn() {
    console.log("animateIn");
  }

  animateOut() {
    console.log("animateOut");
    console.log(this.controls);
    if (this.animation.by === "chars" && this.textParts.chars.length > 0) {
      console.log("chars animation is possible");
    }

    if (this.animation.by === "words" && this.textParts.words.length > 0) {
      console.log("words animation is possible");
    }

    if (this.animation.by === "lines" && this.textParts.lines.length > 0) {
      console.log("lines animation is possible");
    }
  }
}
