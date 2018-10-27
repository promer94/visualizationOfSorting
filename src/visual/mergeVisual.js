import { visualize } from './visualize'
import { mergeSortForVisual } from '../sort'
import { flatArray } from '../utils'

export function mergeSortVisual (dataSvg, auxSvg, data, timeout = 200) {
  let { process, auxProcess } = mergeSortForVisual(data)
  process = flatArray(process)
  auxProcess = flatArray(auxProcess)
  visualize(dataSvg, process, timeout)
  visualize(auxSvg, auxProcess, timeout)
}
