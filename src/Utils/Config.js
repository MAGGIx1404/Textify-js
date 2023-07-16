const Config = {
  splitType: "lines words chars", // chars or words or lines
  tag: "div", // span or div
  charsClass: "char", // class name for chars
  wordsClass: "word", // class name for words
  linesClass: "line", // class name for lines
  position: "relative", // absolute or relative
  observer: {
    repeat: false, // true or false
    threshold: 0.5 // 0.0 ~ 1.0
  },
  animation: {
    by: "chars", // chars or words or lines
    duration: 0.5, // seconds
    stagger: 0.1, // seconds
    delay: 0.0, // seconds
    ease: "ease", // ease or linear or cubic-bezier
    overflow: false, // true or false
    customAnimation: false, // true or false
    animateProps: {
      opacity: 0, // 0 ~ 1
      y: 100, // -100 ~ 100 (%)
      x: 0, // -100 ~ 100 (%)
      scale: 1, // 0 ~ 1
      rotate: 0, // -360 ~ 360
      skewX: 0, // -360 ~ 360
      skewY: 0, // -360 ~ 360
      ease: "ease" // ease or linear or cubic-bezier
    }
  }
};

export { Config };
