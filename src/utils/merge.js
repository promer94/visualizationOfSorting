import { less } from './less'
/**
 *
 * @description util function for merge sort
 * @export
 * @param {!number[]} data The array which is partial sorted (lo to mid, mid+1 to hi)
 * @param {!number} lo The start of first sorted part of the data
 * @param {!number} mid the end of first sorted part of the data
 * @param {!number} hi The start of second sorted part of the array
 */
export function merge (source, aux, lo, mid, hi, process, auxProcess) {
  if (Array.isArray(process)) {
    for (let k = lo; k <= hi; k++) {
      aux[k] = source[k]
    }
    let i = lo
    let j = mid + 1
    process.push({ data: [...aux], i, j, hi })
    auxProcess.push({ data: [0], k: lo })
    for (let k = lo; k <= hi; k++) {
      if (i > mid) {
        source[k] = aux[j]
        auxProcess.push({ data: source.slice(lo, k), k })
        process.push({ data: [...aux], i, j, hi })
        j++
      } else if (j > hi) {
        source[k] = aux[i]
        auxProcess.push({ data: source.slice(lo, k), k })
        process.push({ data: [...aux], i, j, hi })
        i++
      } else if (less(aux[j], aux[i])) {
        source[k] = aux[j]
        auxProcess.push({ data: source.slice(lo, k), k })
        process.push({ data: [...aux], i, j, hi })
        j++
      } else {
        source[k] = aux[i]
        auxProcess.push({ data: source.slice(lo, k), k })
        process.push({ data: [...aux], i, j, hi })
        i++
      }
    }
    auxProcess.push({ data: [...source.slice(lo, hi + 1)], k: -1 })
    process.push({ data: [...aux], i: -1, j: -1, hi: -1 })
  } else {
    for (let k = lo; k <= hi; k++) {
      aux[k] = source[k]
    }
    let i = lo
    let j = mid + 1
    for (let k = lo; k <= hi; k++) {
      if (i > mid) {
        source[k] = aux[j++]
      } else if (j > hi) {
        source[k] = aux[i++]
      } else if (less(aux[j], aux[i])) {
        source[k] = aux[j++]
      } else {
        source[k] = aux[i++]
      }
    }
  }
}
