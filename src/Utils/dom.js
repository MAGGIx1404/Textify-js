export function mapEach(element, callback) {
  if (element instanceof window.HTMLElement) return [callback(element)];
  if (typeof element === "object") {
    return Object.keys(element).map((key) => callback(element[key]));
  } else {
    return element.map(callback);
  }
}
