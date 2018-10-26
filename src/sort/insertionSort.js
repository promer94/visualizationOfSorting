import { exchange, less } from '../utils'
export function insertionSort (data, lo = 0, hi, pure = false) {
  if (pure) {
    hi = hi || data.length - 1
    for (let i = lo; i <= hi; i++) {
      for (let j = i; j > lo; j--) {
        if (less(data[j], data[j - 1])) {
          exchange(data, j, j - 1)
        }
      }
    }
  } else {
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
}
