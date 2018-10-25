import { exchange, less } from './utils'

export function insertionSort (data) {
  const process = []
  for (let i = 0; i < data.length; i++) {
    process.push({ data: [...data], i, j: i })
    for (let j = i; j > 0; j--) {
      if (less(data[j], data[j - 1])) {
        exchange(data, j, j - 1)
      }
      process.push({ data: [...data], i, j })
    }
  }
  return process
}
