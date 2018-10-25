import { selectSort } from '../sort'
import { updateBar } from './updateBar'

/**
 *
 * @description The visualization of select sort
 * @export
 * @param {svgElement} svg
 * @param {number[]} data
 */
export function selectVisual (svg, data) {
  const process = selectSort(data)

  /* visualized the process of sorting */
  const length = process.length
  let index = 0
  updateBar(svg, process[index])
  const timer = setInterval(() => {
    index += 1
    if (index === length - 1) clearInterval(timer)
    updateBar(svg, process[index])
  }, 2000)
}
