import { updateBar } from './updateBar'
import { bubbleSort } from '../sort'

export function bubbleVisual(svg, data) {
  const process = bubbleSort(data)
  const length = process.length
  let index = 0
  updateBar(svg, process[index])
  const timer = setInterval(() => {
    index += 1
    if (index === length - 1) clearInterval(timer)
    updateBar(svg, process[index])
  }, 2000)
}
