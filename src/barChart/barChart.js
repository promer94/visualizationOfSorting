import { scaleLinear } from 'd3-scale'
import { transition } from 'd3-transition'
import { extent, max } from 'd3-array'

export function updateBars(svg, data) {
  const duration = transition().duration(2000)
  const height = max([...data, 30])
  const rectWidth = 20
  const margin = { top: 10, right: 10, bottom: 10, left: 10 }
  const width = rectWidth * max([5, data.length]) + margin.left + margin.right
  const [_, yMax] = extent(data) //eslint-disable-line

  svg.attr('width', width).attr('height', height)
  const yScale = scaleLinear()
    .domain([0, yMax])
    .range([height - margin.bottom, margin.top])
    .nice()

  const heightScale = scaleLinear()
    .domain(yScale.domain())
    .range([0, height - margin.top - margin.bottom])

  let bar = svg.selectAll('rect')

  bar
    .exit()
    .transition(duration)
    .attr('x', (d, i) => margin.left + i * rectWidth)
    .remove()
  const enter = bar
    .data(data)
    .enter()
    .append('rect')
    .attr('width', rectWidth)
    .attr('fill', 'blue')
    .attr('stroke', '#fff')

  bar = enter
    .merge(bar)
    .attr('y', d => yScale(d))
    .attr('height', d => heightScale(d))
    .transition(duration)
    .attr('x', (d, i) => margin.left + i * rectWidth)
    .transition(duration)
}
