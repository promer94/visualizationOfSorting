import { insertionSortForVisual } from '../sort'
import { visualize } from './visualize'

/**
 *
 * @description The visualization of select sort
 * @export
 * @param {HTMLElement} svg
 * @param {number[]} data
 */
export function insertionVisual (svg, data, timeout = 200) {
  const process = insertionSortForVisual(data)
  visualize(svg, process, timeout)
}
