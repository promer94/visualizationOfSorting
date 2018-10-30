import { arrayGenerator } from '../utils'
/**
 *
 *
 * @export
 * @class Visual
 */
export default class Visual {
  constructor (svg, data = arrayGenerator(15), timeout = 200) {
    this.svgElement = svg
    this.id = svg.attr('id')
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
}
