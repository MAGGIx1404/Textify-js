import { getEasing } from "./easing";

// -------------------------------------------------------------------------------
export const DEFAULT = {
  duration: 1.45,
  delay: 0.1,
  fade: false,
  top: false,
  once: true,
  rotation: 0,
  scale: 1,
  easing: getEasing("default"),
  fadeEasing: getEasing("default")
};
