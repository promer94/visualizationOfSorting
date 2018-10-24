import { selectAll, select } from 'd3-selection'
import * as sort from './sort'
import { updateBars } from './barChart'
document.addEventListener('DOMContentLoaded', function() {
  const divElement = document.createElement('div')
  divElement.className = 'container'
  document.querySelector('body').appendChild(divElement)
  selectAll('svg')
    .exit()
    .remove()
  const svg = select('div').append('svg')
  const process = sort.bubbleSort([60, 10, 30, 20, 80, 40, 50, 70])
  console.log(process)
  const length = process.length
  let index = 0
  updateBars(svg, process[index])
  const timer = setInterval(() => {
    index += 1
    if (index === length - 1) clearInterval(timer)
    updateBars(svg, process[index])
  }, 3000)
})
