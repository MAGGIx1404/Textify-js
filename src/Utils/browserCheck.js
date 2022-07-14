/**
 * Determine if the browser supports it
 * @return {boolean}
 */

const browserCheck = () => {
  const promise = typeof Promise !== "undefined" && Promise.toString().indexOf("[native code]") !== -1;
  const closest = Element.prototype.closest;

  return promise && closest && "IntersectionObserver" in window;
};

export default browserCheck;
