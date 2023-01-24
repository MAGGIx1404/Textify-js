import { getEasing } from "./easing";

// -------------------------------------------------------------------------------
export const DEFAULT = {
  duration: 1450,
  stagger: 100,
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

export const DEFAULT_TITLE = {
  duration: 1000,
  stagger: 50,
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
