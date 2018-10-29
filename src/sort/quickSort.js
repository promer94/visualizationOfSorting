import { partition, shuffle, partitionForVisual } from '../utils'
/**
 *
 * @description simplified implementation of quick sort
 * @export
 * @param {number[]} data
 * @returns
 */
export function oneLineQuickSort (data) {
  return data.length <= 1
    ? data
    : [
      ...oneLineQuickSort(data.filter(x => x < data[0])),
      ...data.filter(x => x === data[0]),
      ...oneLineQuickSort(data.filter(x => x > data[0]))
    ]
}
/**
 *
 * @description
 * the implementation of two-way quick sort
 * @export
 * @param {number[]} data
 * @param {number} [lo=0]
 * @param {number} hi
 */
export function quickSort (data, lo = 0, hi) {
  hi = hi || data.length - 1
  shuffle(data)
  sort(data, lo, hi)
}

function sort (data, lo, hi) {
  if (hi <= lo) return
  const j = partition(data, lo, hi)
  sort(data, lo, j - 1)
  sort(data, j + 1, hi)
}
/**
 *
 * @description
 * the implementation of two-way quick sort
 * returns the whole process
 * @export
 * @param {number[]} data
 * @param {number} [lo=0]
 * @param {number} hi
 * @returns
 */
export function quickSortForVisual (data, lo = 0, hi) {
  hi = hi || data.length - 1
  const process = []
  sortForVisual(data, lo, hi, process)
  process.push({ data: [...data], i: -1, j: -1, k: -1 })
  return process
}

function sortForVisual (data, lo, hi, process) {
  if (hi <= lo) return
  const j = partitionForVisual(data, lo, hi, process)
  sortForVisual(data, lo, j - 1, process)
  sortForVisual(data, j + 1, hi, process)
}
