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
