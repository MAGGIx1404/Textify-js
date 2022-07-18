import { map } from "lodash";

export function mapEach(element, callback) {
  if (element instanceof window.HTMLElement) {
    return [callback(element)];
  }

  return map(element, callback);
}
