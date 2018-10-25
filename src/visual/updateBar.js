import { scaleLinear } from 'd3-scale'
import { transition } from 'd3-transition'
import { extent, max } from 'd3-array'
/**
 *
 * @description visualization of in place sorting algorithm
 * @export
 * @param {svgElement} svg
 * @param {object[]} data
 *
 *
 */
export function updateBar(svg, data) {
  const duration = transition().duration(1000)
  const { data: a, i, j } = data
  const height = max([...a, 30])
  const rectWidth = 20
  const margin = { top: 10, right: 10, bottom: 10, left: 10 }
  const width = rectWidth * max([5, a.length]) + margin.left + margin.right
  const [_, yMax] = extent(a) //eslint-disable-line

  svg.attr('width', width).attr('height', height)
  const yScale = scaleLinear()
    .domain([0, yMax])
    .range([height - margin.bottom, margin.top])
    .nice()

  const heightScale = scaleLinear()
    .domain(yScale.domain())
    .range([0, height - margin.top - margin.bottom])

  let bar = svg.selectAll('rect')

  const enter = bar
    .data(a)
    .enter()
    .append('rect')
    .attr('width', rectWidth)
    .attr('stroke', '#fff')

  bar = enter
    .merge(bar)
    .attr('y', d => yScale(d))
    .attr('height', d => heightScale(d))
    .attr(
      'fill',
      (d, index) => (index === i ? 'red' : index === j ? 'red' : 'blue')
    )
    .transition(duration)
    .attr('x', (d, i) => margin.left + i * rectWidth)
}
