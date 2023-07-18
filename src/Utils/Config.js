const Config = {
  splitType: "lines words chars", // chars or words or lines
  tag: "div", // span or div
  charsClass: "char", // class name for chars
  wordsClass: "word", // class name for words
  linesClass: "line", // class name for lines
  position: "relative", // absolute or relative
  largeText: false, // true or false
  observer: {
    repeat: false, // true or false
    threshold: 0.5 // 0.0 ~ 1.0
  },
  animation: {
    by: "chars", // chars or words or lines
    duration: 0.5, // seconds
    stagger: 0.05, // seconds
    delay: 0.0, // seconds
    ease: "ease", // ease or linear or cubic-bezier
    customAnimation: false, // true or false
    transformOrigin: "center center", // center center or top left or top center or top right or center right or bottom right or bottom center or bottom left or center left
    animateProps: {
      opacity: 1, // 0 ~ 1
      y: "100%", // -100 ~ 100 (%)
      x: 0, // -100 ~ 100 (%)
      scale: 1, // 0 ~ 1
      rotate: 0, // -360 ~ 360
      skewX: 0, // -360 ~ 360
      skewY: 0 // -360 ~ 360
    }
  }
};

export { Config };
