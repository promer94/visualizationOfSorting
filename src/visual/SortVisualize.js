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
  constructor (id) {
    super(id)
    this.start = this.start.bind(this)
    this.stepForward = this.stepForward.bind(this)
    this.stepBack = this.stepBack.bind(this)
    this.stop = this.stop.bind(this)

    this.process = sortTable[this.id]([...this.data])
    this.processLength = this.process.length
    updateBar(this.svgElement, { data: this.data }, this.timeout)
    this.controller = {
      startAndPause: document.getElementById(`${this.id}-start-pause`),
      stop: document.getElementById(`${this.id}-stop`),
      stepForward: document.getElementById(`${this.id}-stepForward`),
      back: document.getElementById(`${this.id}-back`)
    }
    this.controller.startAndPause.addEventListener('click', e => {
      if (this.timer === null) {
        this.start()
      } else {
        this.pause()
      }
    })
    this.controller.stop.addEventListener('click', () => {
      this.stop()
    })
    this.controller.stepForward.addEventListener('click', () => {
      this.stepForward()
    })
    this.controller.back.addEventListener('click', () => {
      this.stepBack()
    })
  }
  init (array = arrayGenerator(30, true)) {
    this.data = [...array]
    this.process = sortTable[this.id]([...this.data])
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
      this.controller.startAndPause.childNodes[0].className = `icon ion-md-pause`
      this.controller.startAndPause.childNodes[1].innerText = `Pause`
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
          this.controller.startAndPause.childNodes[0].className = `icon ion-md-play`
          this.controller.startAndPause.childNodes[1].innerText = `Start`
        }
      }, this.timeout)
    }
  }
  pause () {
    if (this.timer !== null) {
      this.controller.startAndPause.childNodes[0].className = `icon ion-md-play`
      this.controller.startAndPause.childNodes[1].innerText = `Start`
      clearInterval(this.timer)
      this.timer = null
    }
  }
  stop () {
    clearInterval(this.timer)
    this.controller.startAndPause.childNodes[0].className = `icon ion-md-play`
    this.controller.startAndPause.childNodes[1].innerText = `Start`
    this.indexOfProcess = 0
    this.timer = null
    this.init()
  }
}
