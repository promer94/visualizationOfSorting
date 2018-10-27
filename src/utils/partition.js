import { less } from './less'
import { exchange } from './exchange'
/**
 *
 * @description
 * partition the subarray data[lo..hi] so that data[lo..j-1] <= data[j] <= data[j+1..hi]
 * and return the index j
 * @export
 * @param {!number[]} data
 * @param {!number} lo
 * @param {!number} hi
 * @returns
 */
export function partition (data, lo, hi) {
  let i = lo
  let j = hi + 1
  while (true) {
    while (less(data[++i], data[lo])) {
      if (i === hi) break
    }
    while (less(data[lo], data[--j])) {
      if (j === lo) break
    }
    if (i >= j) break
    exchange(data, i, j)
  }
  exchange(data, lo, j)
  return j
}
