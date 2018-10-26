import { exchange, less } from '../utils'

/**
 *
 * @description the implementation of bubble sort
 * @export
 * @param {!number[]} data
 * @returns
 */
export function bubbleSort (data) {
  const process = []
  for (let i = 0; i < data.length - 1; i++) {
    let count = 0
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (less(data[j + 1], data[j])) {
        exchange(data, j, j + 1)
        count++
      }
      process.push({ data: [...data], i: j, j: j + 1 })
    }
    if (count === 0) break
  }
  process.push({ data, i: -1, j: -1 })
  return process
}
