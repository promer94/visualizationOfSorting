import { merge } from './utils'
/**
 * @description the top-down merge sort implementation
 * @param {!number[]} data The array needs to sort
 * @param {!number} lo The start index
 * @param {!number} hi The end index
 */
export function mergeSort(data, lo, hi) {
  if (hi <= lo) return
  const mid = Math.floor(lo + (hi - lo) / 2)
  mergeSort(data, lo, mid)
  mergeSort(data, mid + 1, hi)
  merge(data, lo, mid, hi)
}
