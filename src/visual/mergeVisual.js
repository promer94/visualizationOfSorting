import { visualize } from './visualize'
import { mergeSort } from '../sort'
import { flatArray } from '../utils'

export function mergeSortVisual (dataSvg, auxSvg, data, timeout = 200) {
  let { process, auxProcess } = mergeSort(data)
  process = flatArray(process)
  console.log(process)
  auxProcess = flatArray(auxProcess)
  visualize(dataSvg, process, timeout)
  visualize(auxSvg, auxProcess, timeout)
}
