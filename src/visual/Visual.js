import { arrayGenerator } from '../utils'
import { select } from 'd3-selection'
/**
 *
 *
 * @export
 * @class
 * Creating the container for visualization
 */
export default class Visual {
  /**
   *Creates an instance of Visual.
   * @param {string} id the name of sort
   * @param {number[]} [data=arrayGenerator(30)]
   * @param {number} [timeout=200]
   * @memberof Visual
   */
  constructor (id, data = arrayGenerator(30), timeout = 200) {
    this.id = id
    this.render()
    this.svgElement = select(`#${this.id}-visual`).select('svg')
    this.data = data
    this.timeout = timeout
    this.indexOfProcess = 0
    this.timer = null
  }

  start () {}
  pause () {}
  stepForward () {}
  stepBack () {}
  stop () {}
  /**
   * @description render the container into html
   *
   * @memberof Visual
   */
  render () {
    document.getElementById(this.id).innerHTML = `
    <div class="columns is-multiline full-height">
      <div class="column is-12 one-height">
        <h1>${this.id} sort</h1>
      </div>
        <div id="${this.id}-visual" class="column is-12 nine-height">
          <svg>
          </svg>
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
