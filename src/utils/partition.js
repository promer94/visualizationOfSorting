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
  const pivot = data[lo]
  while (true) {
    while (less(data[++i], pivot)) {
      if (i === hi) break
    }
    while (less(pivot, data[--j])) {
      if (j === lo) break
    }
    if (i >= j) break
    exchange(data, i, j)
  }
  exchange(data, lo, j)
  return j
}
/**
 *
 * @description
 * partition the subarray data[lo..hi] so that data[lo..j-1] <= data[j] <= data[j+1..hi]
 * ,return the index j and record the whole process
 * @export
 * @param {!number[]} data
 * @param {!number} lo
 * @param {!number} hi
 * @param {object[]} process
 * @returns
 */
export function partitionForVisual (data, lo, hi, process) {
  let i = lo
  let j = hi + 1
  const pivot = data[lo]
  while (true) {
    while (less(data[++i], pivot)) {
      if (i === hi) break
      process.push({ data: [...data], i, j, k: lo })
    }
    while (less(pivot, data[--j])) {
      if (j === lo) break
      process.push({ data: [...data], i, j, k: lo })
    }
    if (i >= j) break
    exchange(data, i, j)
    process.push({ data: [...data], i, j, k: lo })
  }
  exchange(data, lo, j)
  process.push({ data: [...data], i, j: lo, k: j })
  return j
}
