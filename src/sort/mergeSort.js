import { merge } from '../utils'
import { insertionSort } from './insertionSort'
/**
 * @description the top-down merge sort implementation
 * @param {!number[]} source The array needs to sort
 * @param {!number} lo The start index
 * @param {!number} hi The end index
 */
export function mergeSort (source, flag = false, lo = 0, hi) {
  const process = []
  const auxProcess = []
  hi = hi || source.length - 1
  sort(source, [...source], lo, hi, flag, process, auxProcess)
  return { process, auxProcess }
}
function sort (source, aux, lo, hi, flag, process, auxProcess) {
  if (flag) {
    if (hi <= lo + 4) {
      insertionSort(source, lo, hi, flag)
      return
    }
    const mid = Math.floor(lo + (hi - lo) / 2)
    sort(source, aux, lo, mid, flag)
    sort(source, aux, mid + 1, hi, flag)
    merge(source, aux, lo, mid, hi)
  } else {
    if (hi <= lo + 4) {
      const result = insertionSort(source, lo, hi, flag)
      process.push(result)
      auxProcess.push(
        result.map(v => {
          const data = new Array(v.data.length)
          data.fill(0)
          return { ...v, data }
        })
      )
      return
    }
    const mid = Math.floor(lo + (hi - lo) / 2)
    sort(source, aux, lo, mid, flag, process, auxProcess)
    sort(source, aux, mid + 1, hi, flag, process, auxProcess)
    merge(source, aux, lo, mid, hi, process, auxProcess)
  }
}
