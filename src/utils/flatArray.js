/**
 * @description Flattens array a single level deep
 *
 * @export
 * @param {Array} arr
 * @example
 * const a = [1,[2,3],4]
 * a = flatArray(a)
 * // a = [1,2,3,4]
 */
export function flatArray (arr) {
  return arr.reduce((a, c) => (Array.isArray(c) ? [...a, ...c] : [...a, c]), [])
}
