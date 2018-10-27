/**
 * @description Generate a random array with fixed length
 *
 * @export
 * @param {number} length
 * @returns
 */
export function generator (length) {
  const a = new Array(length)
  a.fill(0).forEach(
    (v, i, item) => (item[i] = Math.floor(Math.random() * length) + 1)
  )
  shuffle(a)
  return a
}
/**

 * @description Make array to be random
 * @export
 * @param {number[]} a
 * @param {number} [lo=0]
 * @param {number} hi
 */
export function shuffle (a, lo = 0, hi) {
  hi = hi || a.length - 1
  a.forEach((v, i, item) => {
    if (i >= lo && i <= hi) {
      const randomIndex = Math.floor(Math.random() * (i + 1))
      const temp = item[randomIndex]
      item[randomIndex] = item[i]
      item[i] = temp
    }
  })
}
