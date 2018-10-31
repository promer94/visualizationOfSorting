/* eslint-disable */
import { InPlaceSortingVisual } from './visual'
import TypeWriter from './typeWriter'
import './css/style.scss'

document.addEventListener('DOMContentLoaded', function() {
  const writer = new TypeWriter()
  writer.init()
  const selectionVisual = new InPlaceSortingVisual('selection')
  const bubbleVisual = new InPlaceSortingVisual('bubble')
  const insertionVisual = new InPlaceSortingVisual('insertion')
  const quickVisual = new InPlaceSortingVisual('quick')
})
