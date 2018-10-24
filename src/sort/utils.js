/**
 *
 * @description util function for merge sort
 * @export
 * @param {!number[]} data The array which is partial sorted (lo to mid, mid+1 to hi)
 * @param {!number} lo The start of first sorted part of the data
 * @param {!number} mid the end of first sorted part of the data
 * @param {!number} hi The start of second sorted part of the array
 */
export function merge(data, lo, mid, hi) {
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
function less(a, b) {
  return a - b <= 0
}
export function exchange(data, i, j) {
  const temp = data[i]
  data[i] = data[j]
  data[j] = temp
}
