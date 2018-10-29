import { visualize } from './visualize'
import { mergeSortForVisual } from '../sort'
import { flatArray } from '../utils'
/**
 *
 * @description visualization of merge sort
 * @export
 * @param {!HTMLElement} dataSvg
 * @param {!number[]} auxSvg
 * @param {!number[]} data
 * @param {number} [timeout=200]
 */
export function mergeSortVisual (dataSvg, auxSvg, data, timeout = 200) {
  let { process, auxProcess } = mergeSortForVisual(data)
  process = flatArray(process)
  auxProcess = flatArray(auxProcess)
  visualize(dataSvg, process, timeout)
  visualize(auxSvg, auxProcess, timeout)
}
