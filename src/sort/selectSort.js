import { exchange, less } from './utils'

/**
 * @description the implementation of select sort
 *
 * @export
 * @param {!number[]} data
 * @returns
 */
export function selectSort (data) {
  const process = []
  for (let i = 0; i < data.length - 1; i += 1) {
    process.push({ data: [...data], i, j: i + 1 })
    for (let j = i + 1; j < data.length; j += 1) {
      if (less(data[j], data[i])) {
        exchange(data, i, j)
      }
      process.push({ data: [...data], i, j })
    }
  }
  return process
}
