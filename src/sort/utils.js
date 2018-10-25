/**
 *
 * @description util function for merge sort
 * @export
 * @param {!number[]} data The array which is partial sorted (lo to mid, mid+1 to hi)
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
/**
 *
 * @description produce a random array
 * @param {number} length
 * @returns
 */
export function generator (length) {
  const a = new Array(length)
  a.fill(0).forEach((v, i, item) => (item[i] = i))
  shuffle(a)
  return a
}
/**
 *
 *
 * @export
 * @param {number[]} a
 * @param {number} [lo=0]
 * @param {number} hi
 */
export function shuffle (a, lo = 0, hi) {
  hi = hi | (a.length - 1)
  a.forEach((v, i, item) => {
    if (i >= lo && i <= hi) {
      const randomIndex = Math.floor(Math.random() * (i + 1))
      const temp = item[randomIndex]
      item[randomIndex] = item[i]
      item[i] = temp
    }
  })
}
