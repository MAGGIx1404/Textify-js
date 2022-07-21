const cssEasing = {
  easeInOut: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
  easeOut: "cubic-bezier(0.23, 1, 0.32, 1)",
  easeIn: "cubic-bezier(0.42, 0, 1, 1)",
  ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  linear: "cubic-bezier(0, 0, 1, 1)",
  back: "cubic-bezier(.37,1.62,.75,.87)",
  backIn: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
  backOut: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  backInOut: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  elasticIn: "cubic-bezier(0.04, 0.01, 0.23, 1)",
  elasticOut: "cubic-bezier(0.04, 0.99, 0.32, 0.99)",
  elasticInOut: "cubic-bezier(0.07, 0.95, 0.07, 1.05)",
  bounceIn: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  bounceOut: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
  bounceInOut: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  circIn: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
  circOut: "cubic-bezier(0.075, 0.82, 0.165, 1)",
  circInOut: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
  default: "cubic-bezier(0.77, 0, 0.175, 1)"
};

export const getEasing = (easing) => {
  if (easing === "undefined") {
    return cssEasing.default;
  }

  if (easing && !cssEasing[easing]) {
    throw new Error(`Invalid Easing ${easing} option.`);
  }

  return cssEasing[easing];
};
