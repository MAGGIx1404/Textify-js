const isBrowser =
  typeof window !== "undefined" &&
  typeof document !== "undefined" &&
  typeof navigator !== "undefined" &&
  typeof requestAnimationFrame !== "undefined";

export { isBrowser };
