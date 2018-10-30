import { scaleLinear } from 'd3-scale'
import { transition } from 'd3-transition'
import { extent } from 'd3-array'

/**
 *
 * @description The visualization of in place sorting algorithm
 * @export
 * @param {HTMLElement} svg
 * @param {object[]} data
 * @param {number} timeout
 *
 */
export function updateBar (svg, data, timeout = 200) {
  const start = transition().duration(timeout)
  const { data: a, i: i = -1, j: j = -1, k: k = -2 } = data
  const height = parseFloat(svg.style('height'))
  const width = parseFloat(svg.style('width'))
  const margin = { top: 10, right: 10, bottom: 10, left: 10 }
  const rectWidth = (width - margin.left - margin.right) / a.length
  const [_, yMax] = extent(a) //eslint-disable-line
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
      (d, index) =>
        index === i
          ? 'red'
          : index === j
            ? 'red'
            : index === k
              ? 'black'
              : 'blue'
    )
    .attr(
      'opacity',
      (d, index) => (index === i ? 1 : index === j ? 1 : index === k ? 1 : 0.3)
    )
    .transition(start)
    .attr('x', (d, i) => margin.left + i * rectWidth)
}
