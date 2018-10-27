import { less } from './less'
/**
 *
 * @description stably merge source[lo .. mid] with source[mid+1 ..hi] using aux[lo .. hi]
 * @export
 * @param {!number[]} source The array which is partial sorted (lo to mid, mid+1 to hi)
 * @param {!number[]} au
 * @param {!number} lo The start of first sorted part of the data
 * @param {!number} mid the end of first sorted part of the data
 * @param {!number} hi The start of second sorted part of the array
 */
export function merge (source, aux, lo, mid, hi) {
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
/**
 * @description
 * stably merge source[lo .. mid] with source[mid+1 ..hi] using aux[lo .. hi]
 * And record the whole process of merging by process and auxProcess
 * @export
 * @param {number[]} source
 * @param {number[]} aux
 * @param {number} lo
 * @param {number} mid
 * @param {number} hi
 * @param {object[]} process
 * @param {object[]} auxProcess
 */
export function mergeForVisual (source, aux, lo, mid, hi, process, auxProcess) {
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
        auxProcess.push({
          data: source.map((v, index) => {
            if (index >= lo && index <= k) return v
            else return 0
          }),
          k
        })
        process.push({ data: [...aux], i, j, hi })
        j++
      } else if (j > hi) {
        source[k] = aux[i]
        auxProcess.push({
          data: source.map((v, index) => {
            if (index >= lo && index <= k) return v
            else return 0
          }),
          k
        })
        process.push({ data: [...aux], i, j, hi })
        i++
      } else if (less(aux[j], aux[i])) {
        source[k] = aux[j]
        auxProcess.push({
          data: source.map((v, index) => {
            if (index >= lo && index <= k) return v
            else return 0
          }),
          k
        })
        process.push({ data: [...aux], i, j, hi })
        j++
      } else {
        source[k] = aux[i]
        auxProcess.push({
          data: source.map((v, index) => {
            if (index >= lo && index <= k) return v
            else return 0
          }),
          k
        })
        process.push({ data: [...aux], i, j, hi })
        i++
      }
    }
    auxProcess.push({
      data: source.map((v, index) => {
        if (index >= lo && index <= hi) return v
        else return 0
      }),
      k: -1
    })
    process.push({ data: [...aux], i: -1, j: -1, hi: -1 })
  }
}
