import { selectAll, select } from 'd3-selection'
import * as visual from './visual'
import { generator } from './utils'
import { mergeSort } from './sort'
document.addEventListener('DOMContentLoaded', function () {
  /* Create container and svg element  */
  const divElement = document.createElement('div')
  divElement.className = 'container'
  document.querySelector('body').appendChild(divElement)
  selectAll('svg')
    .exit()
    .remove()
  const svg = select('div').append('svg')
  visual.bubbleVisual(svg, generator(20).map(v => v * 10 + 10))
  console.time('sort')
  mergeSort(generator(10000), true)
  console.timeEnd('sort')
  console.time('native sort')
  generator(10000).sort((a, b) => a - b)
  console.timeEnd('native sort')
})
