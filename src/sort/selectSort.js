import { exchange } from './utils'
/**
 * @description the select sort implementation
 *
 * @export
 * @param {!number[]} data
 * @returns the process of sorting
 */
export function selectSort(data) {
  const process = []
  for (let i = 0; i < data.length - 1; i += 1) {
    process.push({ data: [...data], i, j: i + 1 })
    for (let j = i + 1; j < data.length; j += 1) {
      if (data[i] > data[j]) {
        exchange(data, i, j)
        process.push({ data: [...data], i, j })
      } else {
        process.push({ data: [...data], i, j })
      }
    }
  }
  return process
}
