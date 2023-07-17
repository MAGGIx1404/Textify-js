/* eslint-disable no-unused-vars */
// import gsap for animation
import GSAP from "gsap";
import Splitter from "../utils/Text";
import { isBrowser } from "../utils/isBrowser";

// Texts class
// this class is responsible for splitting the text and animating it
// it also creates an observer to animate the text when it is in the viewport
// if the browser does not support IntersectionObserver, the text will be animated immediately
// @param {element} element - the element to animate
// @param {controls} controls - the controls object
export default class Texts {
  /**
   * @constructor
   * @param {element} element - the element to animate
   * @param {controls} controls - the controls object
   * **/
  constructor({ element, controls }) {
    this.element = element;
    this.controls = controls;
    this.observer = null;
    this.text = null;
    this.textParts = {};
    this.animatedElements = [];

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
    // if largeText is true, split the text by lines and throw an error
    if (this.controls.largeText) {
      this.controls.splitType = "lines";
      if (this.controls.splitType !== "lines") {
        return new Error("Textify: Large text must be split by lines only. Please set splitType to 'lines'");
      }
    }

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
    if (this.animation.by === "chars" && this.textParts.chars.length > 0) {
      this.animatedElements = this.textParts.chars;
    }
    if (this.animation.by === "words" && this.textParts.words.length > 0) {
      this.animatedElements = this.textParts.words;
    }
    if (this.animation.by === "lines" && this.textParts.lines.length > 0) {
      this.animatedElements = this.textParts.lines;
    }

    if (this.controls.largeText) {
      if (this.textParts.lines.length === 0) {
        return new Error("Textify: Large text must have at least one line");
      }

      this.textParts.lines.forEach((line) => {
        const div = document.createElement("div");
        div.appendChild(line);
        this.element.appendChild(div);
        div.classList.add("line-box");
      });
    }

    this.element.classList.add("textify");
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
          this.repeat ? entry.target.classList.remove("is-animated") : null;
        }
      });
    });
    this.observer.observe(this.element);
  }

  animateIn() {
    if (this.animation.customAnimation) {
      return this.element.classList.add("textify-custom-animation");
    }

    GSAP.to(this.animatedElements, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      skewX: 0,
      skewY: 0,
      duration: this.animation.duration,
      stagger: this.animation.stagger,
      delay: this.animation.delay,
      ease: this.animation.ease
    });
  }

  animateOut() {
    if (this.animation.customAnimation) {
      return this.element.classList.remove("textify-custom-animation");
    }

    GSAP.set(this.animatedElements, {
      duration: 0.1, // for better performance and to avoid flickering
      stagger: 0, // for better performance and to avoid flickering
      opacity: this.animation.animateProps.opacity,
      y: this.animation.animateProps.y,
      x: this.animation.animateProps.x,
      scale: this.animation.animateProps.scale,
      rotate: this.animation.animateProps.rotate,
      skewX: this.animation.animateProps.skewX,
      skewY: this.animation.animateProps.skewY,
      ease: "none" // for better performance and to avoid flickering
    });
  }
}
