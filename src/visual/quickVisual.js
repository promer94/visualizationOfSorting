import { visualize } from './visualize'
import { quickSortForVisual } from '../sort'
/**
 *
 * @description
 * visualization of quick sort
 * @export
 * @param {!HTMLElement} svg
 * @param {!number[]} data
 * @param {number} [timeout=200]
 */
export function quickSortVisual (svg, data, timeout = 200) {
  const process = quickSortForVisual(data)
  visualize(svg, process, timeout)
}
