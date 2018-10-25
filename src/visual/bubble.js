import { updateBar } from './updateBar'
import { bubbleSort } from '../sort'

/**
 * @description The visualization of bubble sort
 *
 * @export
 * @param {*} svg
 * @param {number[]} data
 */
export function bubbleVisual (svg, data) {
  const process = bubbleSort(data)
  const length = process.length
  let index = 0
  updateBar(svg, process[index])
  const timer = setInterval(() => {
    index += 1
    if (index === length - 1) clearInterval(timer)
    updateBar(svg, process[index])
  }, 2000)
}
