export default class Textify {
  constructor() {
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
  }
}
