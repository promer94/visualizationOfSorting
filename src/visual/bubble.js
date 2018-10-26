import { bubbleSort } from '../sort'
import { visualize } from './visualize'

/**
 * @description The visualization of bubble sort
 *
 * @export
 * @param {*} svg
 * @param {number[]} data
 * @param {timeout} timeout
 */
export function bubbleVisual (svg, data, timeout = 200) {
  const process = bubbleSort(data)
  visualize(svg, process, timeout)
}
