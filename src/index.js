/* import { selectAll, select } from 'd3-selection'
import * as visual from './visual'
import { generator } from './utils' */
import TypeWriter from './typeWriter'
import '../normalize.css'
import '../dank-mono.css'
import '../style.scss'
document.addEventListener('DOMContentLoaded', function () {
  const writer = new TypeWriter()
  writer.init()
  window.writer = writer
})
