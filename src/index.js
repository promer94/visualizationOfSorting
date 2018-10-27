import { selectAll, select } from 'd3-selection'
import * as visual from './visual'
// import { mergeSort, oneLineQuickSort } from './sort'
import { generator } from './utils'
document.addEventListener('DOMContentLoaded', function () {
  /* Create container and svg element  */
  const divElement = document.createElement('div')
  divElement.className = 'container'
  document.querySelector('body').appendChild(divElement)
  selectAll('svg')
    .exit()
    .remove()
  const dataSvg = select('div')
    .append('svg')
    .attr('id', 'data')
  const auxSvg = select('div')
    .append('svg')
    .attr('id', 'aux')
  const array = generator(15).map(v => v * 10 + 5)
  visual.mergeSortVisual(dataSvg, auxSvg, array, 200)
  /* const a = generator(1500000)
  const b = [...a]
  let c = [...a]
  console.time('merge sort')
  mergeSort(b)
  console.timeEnd('merge sort')
  console.time('quick sort')
  c = oneLineQuickSort(c)
  console.timeEnd('quick sort')
  console.time('native sort')
  a.sort((i, j) => i - j)
  console.timeEnd('native sort')
  console.log(a)
  console.log(b)
  console.log(c) */
})
