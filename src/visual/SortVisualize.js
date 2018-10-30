/**
 * TODO: 1. bind method with button
 * TODO: 2. merge sort visualization
 *
 */
import { updateBar } from './updateBar'
import Visual from './Visual'
import { arrayGenerator } from '../utils'
import * as sort from '../sort'
const sortTable = {
  bubble: sort.bubbleSortForVisual,
  selection: sort.selectSortForVisual,
  insertion: sort.insertionSortForVisual,
  quick: sort.quickSortForVisual
}
export class InPlaceSortingVisual extends Visual {
  constructor (svg) {
    super(svg)
    this.method = this.id.split('-')[0]
    this.start = this.start.bind(this)
    this.stepForward = this.stepForward.bind(this)
    this.stepBack = this.stepBack.bind(this)
    this.process = sortTable[this.method]([...this.data])
    this.processLength = this.process.length
    updateBar(this.svgElement, { data: this.data }, this.timeout)
  }
  init (array = arrayGenerator(30, true)) {
    this.data = [...array]
    this.process = sortTable[this.method]([...this.data])
    this.processLength = this.process.length
    updateBar(this.svgElement, { data: this.data }, this.timeout)
  }
  stepForward () {
    if (this.timer === null) {
      this.indexOfProcess++
      const index = this.indexOfProcess % this.process.length
      updateBar(this.svgElement, this.process[index], this.timeout)
    }
  }
  stepBack () {
    if (this.timer === null && this.indexOfProcess > 0) {
      this.indexOfProcess--
      updateBar(
        this.svgElement,
        this.process[this.indexOfProcess],
        this.timeout
      )
    }
  }
  start () {
    if (this.timer === null) {
      this.timer = setInterval(() => {
        this.indexOfProcess++
        if (this.indexOfProcess <= this.processLength - 1) {
          updateBar(
            this.svgElement,
            this.process[this.indexOfProcess],
            this.timeout
          )
        } else {
          clearInterval(this.timer)
        }
      }, this.timeout)
    }
  }
  pause () {
    clearInterval(this.timer)
  }
  stop () {
    clearInterval(this.timer)
    this.indexOfProcess = 0
    this.timer = null
    this.init()
  }
}
