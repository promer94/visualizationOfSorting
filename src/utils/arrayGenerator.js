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
