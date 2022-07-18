import Text from "./Animations/Text";
import { mapEach } from "./Utils/dom";

export default class Textify {
  constructor() {
    this.element = document.querySelectorAll("[data-textify]");
    console.log(this.element);
    this.createAnimation();
    this.events();
  }

  createAnimation() {
    this.animation = mapEach(this.element, (element) => {
      return new Text({ element });
    });
  }

  events() {
    window.addEventListener("resize", this.onResize.bind(this));
  }

  onResize() {
    this.animation.forEach((animation) => {
      animation.onResize();
    });
  }
}
