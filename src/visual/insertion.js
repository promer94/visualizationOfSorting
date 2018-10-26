import { insertionSort } from '../sort'
import { visualize } from './visualize'

/**
 *
 * @description The visualization of select sort
 * @export
 * @param {svgElement} svg
 * @param {number[]} data
 */
export function insertionVisual (svg, data, timeout = 200) {
  const process = insertionSort(data)
  visualize(svg, process, timeout)
}
