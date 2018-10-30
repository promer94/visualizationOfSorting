import { select } from 'd3-selection'
import { InPlaceSortingVisual } from './visual'
import TypeWriter from './typeWriter'
import './css/style.scss'

document.addEventListener('DOMContentLoaded', function () {
  const writer = new TypeWriter()
  writer.init()
  const selectSort = select('#selection-sort')
  const bubbleSort = select('#bubble-sort')
  const insertionSort = select('#insertion-sort')
  const quickSort = select('#quick-sort')
  const selectionVisual = new InPlaceSortingVisual(selectSort)
  const bubbleVisual = new InPlaceSortingVisual(bubbleSort)
  const insertionVisual = new InPlaceSortingVisual(insertionSort)
  const quickVisual = new InPlaceSortingVisual(quickSort)
  window.selectionVisual = selectionVisual
  window.bubbleVisual = bubbleVisual
  window.insertionVisual = insertionVisual
  window.quickVisual = quickVisual
})
