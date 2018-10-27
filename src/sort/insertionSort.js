import { exchange, less } from '../utils'
/**
 * @description
 * The implementation of Insertion sort
 * @export
 * @param {number[]} data
 * @param {number} [lo=0]
 * @param {number} hi
 */
export function insertionSort (data, lo = 0, hi) {
  hi = hi || data.length - 1
  for (let i = lo; i <= hi; i++) {
    for (let j = i; j > lo; j--) {
      if (less(data[j], data[j - 1])) {
        exchange(data, j, j - 1)
      }
    }
  }
}
/**
 *
 * @description
 * The implementation of Insertion sort
 * return the whole process
 * @export
 * @param {number[]} data
 * @param {number} [lo=0]
 * @param {number} hi
 * @returns
 */
export function insertionSortForVisual (data, lo = 0, hi) {
  hi = hi || data.length - 1
  const process = []
  for (let i = lo; i <= hi; i++) {
    for (let j = i; j > lo; j--) {
      if (less(data[j], data[j - 1])) {
        exchange(data, j, j - 1)
        process.push({ data: [...data], i, j })
      }
    }
  }
  process.push({ data: [...data], i: -1, j: -1 })
  return process
}
