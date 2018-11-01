/**
 * TODO: 2. merge sort visualization
 *
 */
import { updateBar } from './updateBar'
import { select } from 'd3-selection'
import Visual from './Visual'
import { arrayGenerator } from '../utils'
import * as sort from '../sort'
const sortTable = {
  bubble: sort.bubbleSortForVisual,
  selection: sort.selectSortForVisual,
  insertion: sort.insertionSortForVisual,
  quick: sort.quickSortForVisual,
  merge: sort.mergeSortForVisual
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
      if (this.indexOfProcess <= this.processLength - 1) {
        updateBar(
          this.svgElement,
          this.process[this.indexOfProcess],
          this.timeout
        )
      } else {
        this.controller.stepForward.setAttribute('disabled', true)
      }
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
          this.controller.stop.childNodes[0].className = `icon ion-md-repeat`
          this.controller.stop.childNodes[1].innerText = `New Array`
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
    this.controller.stop.childNodes[0].className = `icon ion-md-square`
    this.controller.stop.childNodes[1].innerText = `Stop`
    this.indexOfProcess = 0
    this.timer = null
    this.init()
  }
}

export class MergeSortingVisual extends Visual {
  constructor (id) {
    super(id)
    this.render()
    this.svgElement = {
      source: select(`#${this.id}-visual>svg:nth-child(1)`),
      aux: select(`#${this.id}-visual>svg:nth-child(2)`)
    }
    this.start = this.start.bind(this)
    this.stepForward = this.stepForward.bind(this)
    this.stepBack = this.stepBack.bind(this)
    this.stop = this.stop.bind(this)

    const { process, auxProcess } = sortTable[this.id]([...this.data])
    this.process = process
    this.auxProcess = auxProcess
    this.processLength = this.process.length
    updateBar(this.svgElement.source, { data: this.data }, this.timeout)
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
    const { process, auxProcess } = sortTable[this.id]([...this.data])
    this.process = process
    this.auxProcess = auxProcess
    this.processLength = this.process.length
    updateBar(this.svgElement.source, { data: this.data }, this.timeout)
    updateBar(
      this.svgElement.aux,
      this.auxProcess[this.indexOfProcess],
      this.timeout
    )
  }
  stepForward () {
    if (this.timer === null && this.indexOfProcess < this.processLength - 1) {
      this.indexOfProcess++
      if (this.indexOfProcess <= this.processLength - 1) {
        updateBar(
          this.svgElement.source,
          this.process[this.indexOfProcess],
          this.timeout
        )
        updateBar(
          this.svgElement.aux,
          this.auxProcess[this.indexOfProcess],
          this.timeout
        )
      } else {
        this.controller.stepForward.setAttribute('disabled', true)
      }
    }
  }
  stepBack () {
    if (this.timer === null && this.indexOfProcess > 0) {
      this.indexOfProcess--
      updateBar(
        this.svgElement.source,
        this.process[this.indexOfProcess],
        this.timeout
      )
      updateBar(
        this.svgElement.aux,
        this.auxProcess[this.indexOfProcess],
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
            this.svgElement.source,
            this.process[this.indexOfProcess],
            this.timeout
          )
          updateBar(
            this.svgElement.aux,
            this.auxProcess[this.indexOfProcess],
            this.timeout
          )
        } else {
          clearInterval(this.timer)
          this.controller.startAndPause.childNodes[0].className = `icon ion-md-play`
          this.controller.startAndPause.childNodes[1].innerText = `Start`
          this.controller.stop.childNodes[0].className = `icon ion-md-repeat`
          this.controller.stop.childNodes[1].innerText = `New Array`
          updateBar(this.svgElement.aux, [0, 0, 0], this.timeout)
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
    this.controller.stop.childNodes[0].className = `icon ion-md-square`
    this.controller.stop.childNodes[1].innerText = `Stop`
    this.indexOfProcess = 0
    this.timer = null
    this.init()
  }
  render () {
    document.getElementById(this.id).innerHTML = `
    <div class="columns is-multiline full-height">
      <div class="column is-12 one-height">
        <h1>${this.id} sort</h1>
      </div>
        <div id="${this.id}-visual" class="column is-12 nine-height">
          <svg>
          </svg>
          <svg></svg>
          <div class="one-height is-inline-flex controller">
            <button id="${
  this.id
}-start-pause" class="button is-primary"><i class="icon ion-md-play"></i><span>Start</span></button>
            <button id="${
  this.id
}-stop" class="button is-primary"><i class="icon ion-md-square"></i><span>Stop</span></button>
            <button id="${
  this.id
}-back" class="button is-primary"><i class="icon ion-md-rewind"></i><span>Back</span></button>
            <button id="${
  this.id
}-stepForward" class="button is-primary"><i class="icon ion-md-fastforward"></i><span>Forward</span></button>
          </div>
        </div>
    </div>
    `
  }
}
