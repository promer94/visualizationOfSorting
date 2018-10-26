import { selectAll, select } from 'd3-selection'
import * as visual from './visual'
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
  const array = generator(10).map(v => v * 10 + 10)
  visual.mergeSortVisual(dataSvg, auxSvg, array, 200)
})
