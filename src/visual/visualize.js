import { updateBar } from './updateBar'
/**
 *
 *
 * @export
 * @param {*} svg
 * @param {number} data
 * @param {number} timeout
 */
export function visualize (svg, data, timeout) {
  const length = data.length
  let index = 0
  updateBar(svg, data[index])
  const timer = setInterval(() => {
    index += 1
    if (index === length - 1) {
      clearInterval(timer)
    }
    updateBar(svg, data[index])
  }, timeout)
}
