import { getEasing } from "./easing";

// -------------------------------------------------------------------------------
export const DEFAULT = {
  duration: 1450,
  delay: 100,
  fade: false,
  top: false,
  once: true,
  rotation: 0,
  scale: 1,
  easing: getEasing("default"),
  fadeEasing: getEasing("default"),
  threshold: 0.5
};

export const DEFAULT_TITLE = {
  duration: 1000,
  delay: 50,
  fade: false,
  top: false,
  reveal: true,
  once: true,
  rotation: 0,
  scale: 1,
  easing: getEasing("default"),
  fadeDuration: 1000,
  fadeEasing: getEasing("default"),
  threshold: 0.5,
  transformOrigin: "center center"
};
