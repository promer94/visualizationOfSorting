/**
 *
 * @description util function for merge sort
 * @export
 * @param {!number[]} data The array which is partial sorted (lo to mid, mid+1 to hi)
 * @param {!number} lo The start of first sorted part of the data
 * @param {!number} mid the end of first sorted part of the data
 * @param {!number} hi The start of second sorted part of the array
 */
export function merge (data, lo, mid, hi, process) {
  if (Array.isArray(process)) {
    const aux = [...data]
    let i = lo
    let j = mid + 1
    for (let k = lo; k <= hi; k++) {
      if (i > mid) {
        process.push({ i, j, k })
        data[k] = aux[j++]
      } else if (j > hi) {
        process.push({ i, j, k })
        data[k] = aux[i++]
      } else if (less(aux[j], aux[i])) {
        process.push({ i, j, k })
        data[k] = aux[j++]
      } else {
        process.push({ i, j, k })
        data[k] = aux[i++]
      }
    }
  } else {
    const aux = [...data]
    let i = lo
    let j = mid + 1
    for (let k = lo; k <= hi; k++) {
      if (i > mid) {
        data[k] = aux[j++]
      } else if (j > hi) {
        data[k] = aux[i++]
      } else if (less(aux[j], aux[i])) {
        data[k] = aux[j++]
      } else {
        data[k] = aux[i++]
      }
    }
  }
}

/**
 *
 *
 * @export
 * @param {!number} a
 * @param {!number} b
 * @returns
 */
export function less (a, b) {
  return a - b <= 0
}

/**
 *
 *
 * @export
 * @param {!number[]} data
 * @param {!number} i
 * @param {!number} j
 */
export function exchange (data, i, j) {
  const temp = data[i]
  data[i] = data[j]
  data[j] = temp
}
