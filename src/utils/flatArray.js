/**
 * @description Flattens array a single level deep
 *
 * @export
 * @param {Array} arr
 */
export function flatArray (arr) {
  return arr.reduce((a, c) => (Array.isArray(c) ? [...a, ...c] : [...a, c]), [])
}
