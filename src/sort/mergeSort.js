import { merge } from '../utils'
import { insertionSort } from './insertionSort'
/**
 * @description the top-down merge sort implementation
 * @param {!number[]} source The array needs to sort
 * @param {!number} lo The start index
 * @param {!number} hi The end index
 */
export function mergeSort (source, flag = false, lo = 0, hi) {
  hi = hi || source.length - 1
  sort(source, [], lo, hi, flag)
}
function sort (source, aux, lo, hi, flag) {
  if (hi <= lo + 4) {
    insertionSort(source, lo, hi, flag)
    return
  }
  const mid = Math.floor(lo + (hi - lo) / 2)
  sort(source, aux, lo, mid, flag)
  sort(source, aux, mid + 1, hi, flag)
  merge(source, aux, lo, mid, hi)
}
