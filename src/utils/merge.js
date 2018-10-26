import { less } from './less'
/**
 *
 * @description util function for merge sort
 * @export
 * @param {!number[]} data The array which is partial sorted (lo to mid, mid+1 to hi)
 * @param {!number} lo The start of first sorted part of the data
 * @param {!number} mid the end of first sorted part of the data
 * @param {!number} hi The start of second sorted part of the array
 */
export function merge (source, aux, lo, mid, hi) {
  for (let k = lo; k <= hi; k++) {
    aux[k] = source[k]
  }
  let i = lo
  let j = mid + 1
  for (let k = lo; k <= hi; k++) {
    if (i > mid) {
      source[k] = aux[j++]
    } else if (j > hi) {
      source[k] = aux[i++]
    } else if (less(aux[j], aux[i])) {
      source[k] = aux[j++]
    } else {
      source[k] = aux[i++]
    }
  }
}
