import { merge, mergeForVisual } from '../utils'
import { insertionSort, insertionSortForVisual } from './insertionSort'
/**
 * @description The top-down merge sort implementation
 * @param {!number[]} source The array needs to sort
 * @param {!number} lo The start index
 * @param {!number} hi The end index
 */
export function mergeSort (source, lo = 0, hi) {
  hi = hi || source.length - 1
  sort(source, [], lo, hi)
}
function sort (source, aux, lo, hi) {
  if (hi <= lo + 4) {
    insertionSort(source, lo, hi)
    return
  }
  const mid = Math.floor(lo + (hi - lo) / 2)
  sort(source, aux, lo, mid)
  sort(source, aux, mid + 1, hi)
  merge(source, aux, lo, mid, hi)
}
/**
 *
 * @description The top-down merge sort implementation
 * return the whole process
 * @export
 * @param {number []} source
 * @param {number} [lo=0]
 * @param {number} hi
 * @returns
 */
export function mergeSortForVisual (source, lo = 0, hi) {
  const process = []
  const auxProcess = []
  hi = hi || source.length - 1
  sortForVisual(source, [...source], lo, hi, process, auxProcess)
  return { process, auxProcess }
}
function sortForVisual (source, aux, lo, hi, process, auxProcess) {
  if (hi <= lo + 4) {
    const result = insertionSortForVisual(source, lo, hi)
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
  sortForVisual(source, aux, lo, mid, process, auxProcess)
  sortForVisual(source, aux, mid + 1, hi, process, auxProcess)
  mergeForVisual(source, aux, lo, mid, hi, process, auxProcess)
}
