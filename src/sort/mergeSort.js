import { merge } from './utils'
/**
 * @description the top-down merge sort implementation
 * @param {!number[]} source The array needs to sort
 * @param {!number} lo The start index
 * @param {!number} hi The end index
 */
export function mergeSort (source, lo = 0, hi) {
  hi = hi | (source.length - 1)
  sort(source, [], lo, hi)
}
function sort (source, aux, lo, hi) {
  if (hi <= lo) {
    return
  }
  const mid = Math.floor(lo + (hi - lo) / 2)
  sort(source, aux, lo, mid)
  sort(source, aux, mid + 1, hi)
  merge(source, aux, lo, mid, hi)
}
