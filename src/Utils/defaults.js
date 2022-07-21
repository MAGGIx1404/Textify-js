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
  fadeEasing: getEasing("default")
};
