import { selectAll, select } from 'd3-selection'
import * as visual from './visual'

document.addEventListener('DOMContentLoaded', function () {
  /* Create container and svg element  */
  const divElement = document.createElement('div')
  divElement.className = 'container'
  document.querySelector('body').appendChild(divElement)
  selectAll('svg')
    .exit()
    .remove()
  const svg = select('div').append('svg')
  visual.selectVisual(svg, [60, 10, 30, 20, 80, 40, 50, 70])
})
